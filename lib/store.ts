"use client"

import { createClient } from "@/lib/supabase/client"
import { Order, FilterType, PaymentStatus, DeliveryType, AssignedPerson } from "./types"

// Database row type matching actual Supabase columns
interface OrderRow {
  id: string
  nombre: string
  pedido: string
  total: number
  pagado: boolean
  entregado: boolean
  tipo: DeliveryType
  direccion: string
  maps_url: string
  horario: string
  asignado: AssignedPerson
  notas: string
  created_at: string
}

// Transform database row to Order type
function rowToOrder(row: OrderRow): Order {
  return {
    id: row.id,
    customerName: row.nombre,
    orderDetails: row.pedido,
    totalPrice: row.total,
    paymentStatus: row.pagado ? "cash" : "not_paid", // Convert boolean to PaymentStatus
    deliveryStatus: row.entregado ? "delivered" : "not_delivered",
    assignedPerson: row.asignado,
    deliveryType: row.tipo,
    address: row.direccion || "",
    mapsLink: row.maps_url || "",
    schedule: row.horario || "",
    notes: row.notas || "",
    createdAt: new Date(row.created_at),
  }
}

export async function fetchOrders(): Promise<Order[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching orders:", error)
    return []
  }

  return (data as OrderRow[]).map(rowToOrder)
}

export async function addOrder(order: Omit<Order, "id" | "createdAt">): Promise<{ order: Order | null; error: string | null }> {
  const supabase = createClient()
  
  // Build row data with exact Spanish column names
  const rowData = {
    nombre: order.customerName || "",
    pedido: order.orderDetails || "",
    total: typeof order.totalPrice === "number" ? order.totalPrice : 0,
    pagado: order.paymentStatus !== "not_paid", // boolean
    entregado: order.deliveryStatus === "delivered", // boolean
    tipo: order.deliveryType || "pickup_aguero",
    direccion: order.address || "",
    maps_url: order.mapsLink || "",
    horario: order.schedule || "",
    asignado: order.assignedPerson || "Martin",
    notas: order.notes || "",
  }

  console.log("[v0] Inserting order with data:", JSON.stringify(rowData, null, 2))

  const { data, error } = await supabase
    .from("orders")
    .insert(rowData)
    .select()
    .single()

  if (error) {
    console.error("[v0] Supabase insert error:", error.message, error.details, error.hint)
    return { 
      order: null, 
      error: `Error al crear pedido: ${error.message}${error.details ? ` - ${error.details}` : ""}${error.hint ? ` (${error.hint})` : ""}` 
    }
  }

  console.log("[v0] Order created successfully:", data)
  return { order: rowToOrder(data as OrderRow), error: null }
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | null> {
  const supabase = createClient()
  
  // Transform partial Order to partial row format with Spanish column names
  const rowUpdates: Record<string, unknown> = {}
  if (updates.customerName !== undefined) rowUpdates.nombre = updates.customerName
  if (updates.orderDetails !== undefined) rowUpdates.pedido = updates.orderDetails
  if (updates.totalPrice !== undefined) rowUpdates.total = updates.totalPrice
  if (updates.paymentStatus !== undefined) rowUpdates.pagado = updates.paymentStatus !== "not_paid"
  if (updates.deliveryStatus !== undefined) rowUpdates.entregado = updates.deliveryStatus === "delivered"
  if (updates.assignedPerson !== undefined) rowUpdates.asignado = updates.assignedPerson
  if (updates.deliveryType !== undefined) rowUpdates.tipo = updates.deliveryType
  if (updates.address !== undefined) rowUpdates.direccion = updates.address
  if (updates.mapsLink !== undefined) rowUpdates.maps_url = updates.mapsLink
  if (updates.schedule !== undefined) rowUpdates.horario = updates.schedule
  if (updates.notes !== undefined) rowUpdates.notas = updates.notes

  const { data, error } = await supabase
    .from("orders")
    .update(rowUpdates)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating order:", error)
    return null
  }

  return rowToOrder(data as OrderRow)
}

export async function deleteOrder(id: string): Promise<boolean> {
  const supabase = createClient()
  const { error } = await supabase.from("orders").delete().eq("id", id)

  if (error) {
    console.error("Error deleting order:", error)
    return false
  }

  return true
}

export function getOrderStatus(order: Order): "new" | "delivered_not_paid" | "paid_not_delivered" | "completed" {
  const isPaid = order.paymentStatus !== "not_paid"
  const isDelivered = order.deliveryStatus === "delivered"

  if (isPaid && isDelivered) return "completed"
  if (isDelivered && !isPaid) return "delivered_not_paid"
  if (isPaid && !isDelivered) return "paid_not_delivered"
  return "new"
}

export function filterOrders(orders: Order[], filter: FilterType): Order[] {
  return orders.filter((order) => {
    const isPaid = order.paymentStatus !== "not_paid"
    const isDelivered = order.deliveryStatus === "delivered"
    const isCompleted = isPaid && isDelivered

    switch (filter) {
      case "active":
        return !isCompleted
      case "not_paid":
        return !isPaid
      case "not_delivered":
        return !isDelivered
      case "delivered_not_paid":
        return isDelivered && !isPaid
      case "paid_not_delivered":
        return isPaid && !isDelivered
      case "completed":
        return isCompleted
      default:
        return true
    }
  })
}

export function searchOrders(orders: Order[], query: string): Order[] {
  if (!query.trim()) return orders
  const lowerQuery = query.toLowerCase()
  return orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(lowerQuery) ||
      order.orderDetails.toLowerCase().includes(lowerQuery)
  )
}

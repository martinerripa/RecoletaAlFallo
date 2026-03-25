"use client"

import { createClient } from "@/lib/supabase/client"
import { Order, FilterType, PaymentStatus, DeliveryType, AssignedPerson } from "./types"

// Database row type
interface OrderRow {
  id: string
  customer_name: string
  order_details: string
  total_price: number
  payment_status: PaymentStatus
  delivery_status: "delivered" | "not_delivered"
  assigned_person: AssignedPerson
  delivery_type: DeliveryType
  address: string
  maps_link: string
  schedule: string
  notes: string
  created_at: string
}

// Transform database row to Order type
function rowToOrder(row: OrderRow): Order {
  return {
    id: row.id,
    customerName: row.customer_name,
    orderDetails: row.order_details,
    totalPrice: row.total_price,
    paymentStatus: row.payment_status,
    deliveryStatus: row.delivery_status,
    assignedPerson: row.assigned_person,
    deliveryType: row.delivery_type,
    address: row.address || "",
    mapsLink: row.maps_link || "",
    schedule: row.schedule || "",
    notes: row.notes || "",
    createdAt: new Date(row.created_at),
  }
}

// Transform Order to database row format (for insert/update)
function orderToRow(order: Omit<Order, "id" | "createdAt">): Omit<OrderRow, "id" | "created_at"> {
  return {
    customer_name: order.customerName,
    order_details: order.orderDetails,
    total_price: order.totalPrice,
    payment_status: order.paymentStatus,
    delivery_status: order.deliveryStatus,
    assigned_person: order.assignedPerson,
    delivery_type: order.deliveryType,
    address: order.address,
    maps_link: order.mapsLink,
    schedule: order.schedule,
    notes: order.notes,
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

export async function addOrder(order: Omit<Order, "id" | "createdAt">): Promise<Order | null> {
  const supabase = createClient()
  const rowData = orderToRow(order)

  const { data, error } = await supabase
    .from("orders")
    .insert(rowData)
    .select()
    .single()

  if (error) {
    console.error("Error adding order:", error)
    return null
  }

  return rowToOrder(data as OrderRow)
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | null> {
  const supabase = createClient()
  
  // Transform partial Order to partial row format
  const rowUpdates: Partial<OrderRow> = {}
  if (updates.customerName !== undefined) rowUpdates.customer_name = updates.customerName
  if (updates.orderDetails !== undefined) rowUpdates.order_details = updates.orderDetails
  if (updates.totalPrice !== undefined) rowUpdates.total_price = updates.totalPrice
  if (updates.paymentStatus !== undefined) rowUpdates.payment_status = updates.paymentStatus
  if (updates.deliveryStatus !== undefined) rowUpdates.delivery_status = updates.deliveryStatus
  if (updates.assignedPerson !== undefined) rowUpdates.assigned_person = updates.assignedPerson
  if (updates.deliveryType !== undefined) rowUpdates.delivery_type = updates.deliveryType
  if (updates.address !== undefined) rowUpdates.address = updates.address
  if (updates.mapsLink !== undefined) rowUpdates.maps_link = updates.mapsLink
  if (updates.schedule !== undefined) rowUpdates.schedule = updates.schedule
  if (updates.notes !== undefined) rowUpdates.notes = updates.notes

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

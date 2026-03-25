"use client"

import { Order, FilterType } from "./types"

// Sample data for testing
const sampleOrders: Order[] = [
  {
    id: "1",
    customerName: "Juan Pérez",
    orderDetails: "2x Proteína Whey 1kg, 1x Creatina 300g",
    totalPrice: 45000,
    paymentStatus: "not_paid",
    deliveryStatus: "not_delivered",
    assignedPerson: "Martin",
    deliveryType: "pickup_aguero",
    address: "Agüero 1821",
    mapsLink: "https://maps.google.com/?q=Aguero+1821+Buenos+Aires",
    schedule: "Lunes 10-12hs",
    notes: "Llamar antes de ir",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    customerName: "María García",
    orderDetails: "1x BCAA 270g, 1x Pre-workout",
    totalPrice: 28000,
    paymentStatus: "transfer",
    deliveryStatus: "not_delivered",
    assignedPerson: "Bauti",
    deliveryType: "home_delivery",
    address: "Av. Santa Fe 2100, CABA",
    mapsLink: "https://maps.google.com/?q=Av+Santa+Fe+2100+Buenos+Aires",
    schedule: "Martes 15-18hs",
    notes: "",
    createdAt: new Date("2024-01-16"),
  },
  {
    id: "3",
    customerName: "Carlos López",
    orderDetails: "3x Protein Bar Pack",
    totalPrice: 15000,
    paymentStatus: "cash",
    deliveryStatus: "delivered",
    assignedPerson: "Martin",
    deliveryType: "pickup_french",
    address: "French 3050",
    mapsLink: "https://maps.google.com/?q=French+3050+Buenos+Aires",
    schedule: "Miércoles 9-11hs",
    notes: "Cliente frecuente",
    createdAt: new Date("2024-01-17"),
  },
  {
    id: "4",
    customerName: "Ana Rodríguez",
    orderDetails: "1x Proteína 3kg Vainilla",
    totalPrice: 52000,
    paymentStatus: "not_paid",
    deliveryStatus: "delivered",
    assignedPerson: "Bauti",
    deliveryType: "home_delivery",
    address: "Palermo, CABA",
    mapsLink: "https://maps.google.com/?q=Palermo+Buenos+Aires",
    schedule: "Jueves 14-16hs",
    notes: "Urgente cobrar",
    createdAt: new Date("2024-01-18"),
  },
]

let orders: Order[] = [...sampleOrders]
let listeners: Set<() => void> = new Set()

export function getOrders(): Order[] {
  return orders
}

export function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function notifyListeners() {
  listeners.forEach((listener) => listener())
}

export function addOrder(order: Omit<Order, "id" | "createdAt">): Order {
  const newOrder: Order = {
    ...order,
    id: Date.now().toString(),
    createdAt: new Date(),
  }
  orders = [newOrder, ...orders]
  notifyListeners()
  return newOrder
}

export function updateOrder(id: string, updates: Partial<Order>): Order | null {
  const index = orders.findIndex((o) => o.id === id)
  if (index === -1) return null

  orders = orders.map((o) => (o.id === id ? { ...o, ...updates } : o))
  notifyListeners()
  return orders.find((o) => o.id === id) || null
}

export function deleteOrder(id: string): boolean {
  const initialLength = orders.length
  orders = orders.filter((o) => o.id !== id)
  if (orders.length !== initialLength) {
    notifyListeners()
    return true
  }
  return false
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

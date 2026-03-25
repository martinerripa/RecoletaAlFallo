export type PaymentStatus = "not_paid" | "cash" | "transfer" | "unknown"
export type DeliveryStatus = "delivered" | "not_delivered"
export type AssignedPerson = "Martin" | "Bauti"
export type DeliveryType = "pickup_aguero" | "pickup_french" | "home_delivery"

export interface Order {
  id: string
  customerName: string
  orderDetails: string
  totalPrice: number
  paymentStatus: PaymentStatus
  deliveryStatus: DeliveryStatus
  assignedPerson: AssignedPerson
  deliveryType: DeliveryType
  address: string
  mapsLink: string
  schedule: string
  notes: string
  createdAt: Date
}

export type FilterType =
  | "active"
  | "not_paid"
  | "not_delivered"
  | "delivered_not_paid"
  | "paid_not_delivered"
  | "completed"

export const DELIVERY_TYPE_LABELS: Record<DeliveryType, string> = {
  pickup_aguero: "Retiro Agüero 1821",
  pickup_french: "Retiro French 3050",
  home_delivery: "Envío a domicilio",
}

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  not_paid: "No pagado",
  cash: "Efectivo",
  transfer: "Transferencia",
  unknown: "Desconocido",
}

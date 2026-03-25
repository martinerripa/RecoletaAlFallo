"use client"

import { Order, DELIVERY_TYPE_LABELS, PAYMENT_STATUS_LABELS } from "@/lib/types"
import { getOrderStatus } from "@/lib/store"
import { cn } from "@/lib/utils"
import {
  User,
  Package,
  DollarSign,
  Truck,
  MapPin,
  Clock,
  FileText,
  CheckCircle2,
  XCircle,
  Edit2,
  ExternalLink,
} from "lucide-react"

interface OrderCardProps {
  order: Order
  onMarkPaid: (id: string) => void
  onMarkDelivered: (id: string) => void
  onEdit: (order: Order) => void
}

export function OrderCard({ order, onMarkPaid, onMarkDelivered, onEdit }: OrderCardProps) {
  const status = getOrderStatus(order)
  const isPaid = order.paymentStatus !== "not_paid"
  const isDelivered = order.deliveryStatus === "delivered"

  const cardColors = {
    new: "border-l-gray-400 bg-gray-50",
    delivered_not_paid: "border-l-red-500 bg-red-50",
    paid_not_delivered: "border-l-yellow-500 bg-yellow-50",
    completed: "border-l-green-500 bg-green-50",
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-l-4 p-4 shadow-sm transition-all",
        cardColors[status]
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">{order.customerName}</h3>
        </div>
        <button
          onClick={() => onEdit(order)}
          className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
          aria-label="Editar pedido"
        >
          <Edit2 className="h-4 w-4" />
        </button>
      </div>

      {/* Order Details */}
      <div className="mb-3 flex items-start gap-2">
        <Package className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
        <p className="text-sm text-foreground">{order.orderDetails}</p>
      </div>

      {/* Price */}
      <div className="mb-3 flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-muted-foreground" />
        <span className="font-bold text-foreground">
          ${order.totalPrice.toLocaleString("es-AR")}
        </span>
      </div>

      {/* Status badges */}
      <div className="mb-3 flex flex-wrap gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            isPaid
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {PAYMENT_STATUS_LABELS[order.paymentStatus]}
        </span>
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            isDelivered
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          )}
        >
          {isDelivered ? "Entregado" : "No entregado"}
        </span>
        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          {order.assignedPerson}
        </span>
      </div>

      {/* Delivery info */}
      <div className="mb-3 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">{DELIVERY_TYPE_LABELS[order.deliveryType]}</span>
        </div>

        {order.address && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            {order.mapsLink ? (
              <a
                href={order.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                {order.address}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-foreground">{order.address}</span>
            )}
          </div>
        )}

        {order.schedule && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{order.schedule}</span>
          </div>
        )}

        {order.notes && (
          <div className="flex items-start gap-2">
            <FileText className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{order.notes}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {!isPaid && (
          <button
            onClick={() => onMarkPaid(order.id)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            <CheckCircle2 className="h-4 w-4" />
            Marcar pagado
          </button>
        )}
        {!isDelivered && (
          <button
            onClick={() => onMarkDelivered(order.id)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Truck className="h-4 w-4" />
            Marcar entregado
          </button>
        )}
        {isPaid && isDelivered && (
          <div className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-100 px-3 py-2 text-sm font-medium text-green-800">
            <CheckCircle2 className="h-4 w-4" />
            Completado
          </div>
        )}
      </div>
    </div>
  )
}

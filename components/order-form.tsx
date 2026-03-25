"use client"

import { useState, useEffect } from "react"
import {
  Order,
  PaymentStatus,
  DeliveryType,
  AssignedPerson,
  DELIVERY_TYPE_LABELS,
  PAYMENT_STATUS_LABELS,
} from "@/lib/types"
import { X } from "lucide-react"

interface OrderFormProps {
  order?: Order | null
  onSubmit: (order: Omit<Order, "id" | "createdAt">) => void
  onClose: () => void
}

export function OrderForm({ order, onSubmit, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    orderDetails: "",
    totalPrice: 0,
    paymentStatus: "not_paid" as PaymentStatus,
    deliveryStatus: "not_delivered" as "delivered" | "not_delivered",
    assignedPerson: "Martin" as AssignedPerson,
    deliveryType: "pickup_aguero" as DeliveryType,
    address: "",
    mapsLink: "",
    schedule: "",
    notes: "",
  })

  useEffect(() => {
    if (order) {
      setFormData({
        customerName: order.customerName,
        orderDetails: order.orderDetails,
        totalPrice: order.totalPrice,
        paymentStatus: order.paymentStatus,
        deliveryStatus: order.deliveryStatus,
        assignedPerson: order.assignedPerson,
        deliveryType: order.deliveryType,
        address: order.address,
        mapsLink: order.mapsLink,
        schedule: order.schedule,
        notes: order.notes,
      })
    }
  }, [order])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleDeliveryTypeChange = (type: DeliveryType) => {
    let address = formData.address
    let mapsLink = formData.mapsLink

    if (type === "pickup_aguero") {
      address = "Agüero 1821"
      mapsLink = "https://maps.google.com/?q=Aguero+1821+Buenos+Aires"
    } else if (type === "pickup_french") {
      address = "French 3050"
      mapsLink = "https://maps.google.com/?q=French+3050+Buenos+Aires"
    } else {
      address = ""
      mapsLink = ""
    }

    setFormData({ ...formData, deliveryType: type, address, mapsLink })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      <div className="max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-card p-6 sm:max-w-lg sm:rounded-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">
            {order ? "Editar Pedido" : "Nuevo Pedido"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Nombre del cliente *
            </label>
            <input
              type="text"
              required
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Nombre completo"
            />
          </div>

          {/* Order Details */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Detalle del pedido *
            </label>
            <textarea
              required
              value={formData.orderDetails}
              onChange={(e) => setFormData({ ...formData, orderDetails: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Productos del pedido"
              rows={3}
            />
          </div>

          {/* Total Price */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Total *
            </label>
            <input
              type="number"
              required
              min={0}
              value={formData.totalPrice || ""}
              onChange={(e) =>
                setFormData({ ...formData, totalPrice: Number(e.target.value) })
              }
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="0"
            />
          </div>

          {/* Payment Status */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Estado de pago
            </label>
            <select
              value={formData.paymentStatus}
              onChange={(e) =>
                setFormData({ ...formData, paymentStatus: e.target.value as PaymentStatus })
              }
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {Object.entries(PAYMENT_STATUS_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Delivery Type */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Tipo de entrega
            </label>
            <select
              value={formData.deliveryType}
              onChange={(e) => handleDeliveryTypeChange(e.target.value as DeliveryType)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {Object.entries(DELIVERY_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Address - only show for home delivery */}
          {formData.deliveryType === "home_delivery" && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Dirección
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Dirección de entrega"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Link de Google Maps
                </label>
                <input
                  type="url"
                  value={formData.mapsLink}
                  onChange={(e) => setFormData({ ...formData, mapsLink: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="https://maps.google.com/..."
                />
              </div>
            </>
          )}

          {/* Schedule */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Horario
            </label>
            <input
              type="text"
              value={formData.schedule}
              onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Ej: Lunes 10-12hs"
            />
          </div>

          {/* Assigned Person */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Asignado a
            </label>
            <div className="flex gap-2">
              {(["Martin", "Bauti"] as AssignedPerson[]).map((person) => (
                <button
                  key={person}
                  type="button"
                  onClick={() => setFormData({ ...formData, assignedPerson: person })}
                  className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    formData.assignedPerson === person
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  {person}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Notas
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Notas adicionales"
              rows={2}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {order ? "Guardar cambios" : "Crear pedido"}
          </button>
        </form>
      </div>
    </div>
  )
}

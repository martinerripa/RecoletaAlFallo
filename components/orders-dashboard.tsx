"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import { toast } from "sonner"
import { Plus, Package } from "lucide-react"
import { Order, FilterType } from "@/lib/types"
import {
  getOrders,
  subscribe,
  addOrder,
  updateOrder,
  filterOrders,
  searchOrders,
} from "@/lib/store"
import { OrderCard } from "./order-card"
import { OrderForm } from "./order-form"
import { FilterTabs } from "./filter-tabs"
import { SearchBar } from "./search-bar"

export function OrdersDashboard() {
  const orders = useSyncExternalStore(subscribe, getOrders, getOrders)
  const [activeFilter, setActiveFilter] = useState<FilterType>("active")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingOrder, setEditingOrder] = useState<Order | null>(null)

  // Calculate counts for each filter
  const counts: Record<FilterType, number> = {
    active: filterOrders(orders, "active").length,
    not_paid: filterOrders(orders, "not_paid").length,
    not_delivered: filterOrders(orders, "not_delivered").length,
    delivered_not_paid: filterOrders(orders, "delivered_not_paid").length,
    paid_not_delivered: filterOrders(orders, "paid_not_delivered").length,
    completed: filterOrders(orders, "completed").length,
  }

  // Filter and search orders
  const filteredOrders = searchOrders(filterOrders(orders, activeFilter), searchQuery)

  const handleCreateOrder = (orderData: Omit<Order, "id" | "createdAt">) => {
    addOrder(orderData)
    setIsFormOpen(false)
    toast.success("Pedido creado exitosamente")
  }

  const handleUpdateOrder = (orderData: Omit<Order, "id" | "createdAt">) => {
    if (editingOrder) {
      updateOrder(editingOrder.id, orderData)
      setEditingOrder(null)
      toast.success("Pedido actualizado exitosamente")
    }
  }

  const handleMarkPaid = (id: string) => {
    updateOrder(id, { paymentStatus: "cash" })
    toast.success("Pedido marcado como pagado")
  }

  const handleMarkDelivered = (id: string) => {
    updateOrder(id, { deliveryStatus: "delivered" })
    toast.success("Pedido marcado como entregado")
  }

  const handleEdit = (order: Order) => {
    setEditingOrder(order)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Pedidos</h1>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              Nuevo
            </button>
          </div>

          {/* Search */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {/* Filters */}
          <div className="mt-4">
            <FilterTabs
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              counts={counts}
            />
          </div>
        </div>
      </header>

      {/* Orders List */}
      <main className="mx-auto max-w-2xl px-4 py-4">
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Package className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="text-lg font-medium text-foreground">No hay pedidos</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {searchQuery
                ? "No se encontraron pedidos con esa búsqueda"
                : "Crea tu primer pedido para comenzar"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onMarkPaid={handleMarkPaid}
                onMarkDelivered={handleMarkDelivered}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </main>

      {/* Order Form Modal */}
      {(isFormOpen || editingOrder) && (
        <OrderForm
          order={editingOrder}
          onSubmit={editingOrder ? handleUpdateOrder : handleCreateOrder}
          onClose={() => {
            setIsFormOpen(false)
            setEditingOrder(null)
          }}
        />
      )}
    </div>
  )
}

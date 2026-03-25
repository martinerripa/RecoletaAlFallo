"use client"

import { FilterType } from "@/lib/types"
import { cn } from "@/lib/utils"

interface FilterTabsProps {
  activeFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  counts: Record<FilterType, number>
}

const FILTER_LABELS: Record<FilterType, string> = {
  active: "Activos",
  not_paid: "No pagados",
  not_delivered: "No entregados",
  delivered_not_paid: "Entregado sin pagar",
  paid_not_delivered: "Pagado sin entregar",
  completed: "Completados",
}

export function FilterTabs({ activeFilter, onFilterChange, counts }: FilterTabsProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
      {(Object.keys(FILTER_LABELS) as FilterType[]).map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
            activeFilter === filter
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {FILTER_LABELS[filter]}
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-xs",
              activeFilter === filter
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {counts[filter]}
          </span>
        </button>
      ))}
    </div>
  )
}

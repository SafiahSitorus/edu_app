import * as React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn("rounded-xl border bg-white p-4 shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  )
}

"use client"

import * as React from "react"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <TooltipProvider>{children}</TooltipProvider>
    </ConvexProvider>
  )
}

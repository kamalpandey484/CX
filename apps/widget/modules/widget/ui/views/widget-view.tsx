"use client"

import { WidgetAuthScreen } from "../screens/widget-auth-screen"

// import { WidgetFooter } from "../components/widget-footer"

interface Props {
  organizationId: string
}

export const WidgetView = ({ organizationId }: Props) => {
  return (
    <main className="flex h-full min-h-screen w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />
      {/* <WidgetFooter /> */}
    </main>
  )
}

import { cn } from "@workspace/ui/lib/utils"

export const WidgetHeader = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-primary to-[#21CA90] p-4 text-white",
        className
      )}
    >
      {children}
    </header>
  )
}

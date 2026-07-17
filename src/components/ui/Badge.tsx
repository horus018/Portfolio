import * as React from "react"
import { cn } from "@/lib/utils"
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}
function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border-subtle bg-surface/50 px-3 py-1.5 text-sm font-mono font-medium text-status-green backdrop-blur-sm transition-colors",
        className
      )}
      {...props}
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-status-green animate-pulse-dot animate-neon-flicker" />
      {children}
    </div>
  )
}
export { Badge }

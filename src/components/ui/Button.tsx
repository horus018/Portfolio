import * as React from "react"
import { cn } from "@/lib/utils"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variant === "primary" &&
            "bg-accent-red text-white hover:bg-accent-red-hover hover:shadow-[0_0_15px_var(--neon-glow-red)]",
          variant === "secondary" &&
            "border border-accent-cyan bg-transparent text-accent-cyan hover:bg-accent-cyan/10 hover:shadow-[0_0_15px_var(--neon-glow-cyan)]",
          variant === "tertiary" &&
            "border border-white/25 dark:border-white/25 border-black/20 text-text-secondary hover:bg-surface",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }

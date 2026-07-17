import * as React from "react"
import { cn } from "@/lib/utils"
interface SocialIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
}
export function SocialIcon({ className, icon, ...props }: SocialIconProps) {
  return (
    <a
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-secondary transition-all hover:bg-surface-hover hover:text-text-primary",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
    </a>
  )
}

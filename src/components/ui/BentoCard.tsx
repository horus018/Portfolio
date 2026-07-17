"use client"
import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export function BentoCard({ children, className = "", noPadding = false, ...props }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`relative overflow-hidden rounded-3xl border border-border-subtle bg-surface/60 backdrop-blur-xl shadow-xl flex flex-col ${noPadding ? "" : "p-6 md:p-8"} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

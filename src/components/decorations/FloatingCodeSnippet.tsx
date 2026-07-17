"use client"
import * as React from "react"
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCodeSnippetProps extends HTMLMotionProps<"div"> {
  code: React.ReactNode;
  delay?: number;
}

export function FloatingCodeSnippet({ className, code, delay = 0, ...props }: FloatingCodeSnippetProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={!prefersReducedMotion ? { y: [-10, 0, -10] } : {}}
      transition={!prefersReducedMotion ? {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay: delay
      } : {}}
      style={{ width: '100%', minWidth: '100%' }}
      className={cn(
        "rounded-xl border border-border-subtle bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-2 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="p-4 pt-0 font-mono text-sm leading-relaxed whitespace-pre-wrap lg:whitespace-pre">
        {code}
      </div>
    </motion.div>
  )
}

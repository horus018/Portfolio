"use client"
import * as React from "react"
import { motion, HTMLMotionProps, useReducedMotion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
interface FloatingCodeSnippetProps extends HTMLMotionProps<"div"> {
  code: React.ReactNode;
  delay?: number;
}
export function FloatingCodeSnippet({ className, code, delay = 0, ...props }: FloatingCodeSnippetProps) {
  const prefersReducedMotion = useReducedMotion();
  const [keyframes, setKeyframes] = React.useState<number[]>([0, -10, 5, -5, 0]);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    
    // Generate some random floating points once on mount to avoid hydration mismatch
    const kf = [
      0,
      Math.random() * -10 - 5,
      Math.random() * 5 + 2,
      Math.random() * -8 - 2,
      0
    ];
    setKeyframes(kf);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={!prefersReducedMotion ? { y: keyframes } : { y: 0 }}
      transition={!prefersReducedMotion ? {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
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

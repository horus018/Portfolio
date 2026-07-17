"use client";
import { useReducedMotion } from "framer-motion";
export function Scanlines() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
      }}
    />
  );
}

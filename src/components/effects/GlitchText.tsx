"use client";
import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}
export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const showGlitch = isMounted && !prefersReducedMotion;
  return (
    <span className={`${showGlitch ? "glitch-hover inline-block" : ""} ${className}`}>
      {children}
    </span>
  );
}

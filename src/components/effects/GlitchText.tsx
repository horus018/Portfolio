"use client";
import React, { useState, useEffect } from "react";
interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}
export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const showGlitch = isMounted;
  return (
    <span className={`${showGlitch ? "glitch-hover inline-block" : ""} ${className}`}>
      {children}
    </span>
  );
}

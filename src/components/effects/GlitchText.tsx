"use client";
import React, { useState, useEffect } from "react";
interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  randomGlitch?: boolean;
}
export function GlitchText({ children, className = "", randomGlitch = false }: GlitchTextProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!randomGlitch) return;

    let timeout: NodeJS.Timeout;

    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 250);
      
      const nextGlitchIn = Math.floor(Math.random() * 2000) + 1000;
      timeout = setTimeout(triggerGlitch, nextGlitchIn);
    };

    const initialDelay = Math.floor(Math.random() * 3000);
    timeout = setTimeout(triggerGlitch, initialDelay);

    return () => clearTimeout(timeout);
  }, [randomGlitch]);

  const showGlitch = isMounted;
  return (
    <span className={`${showGlitch ? "glitch-hover inline-block" : ""} ${isGlitching ? "glitch-active" : ""} ${className}`}>
      {children}
    </span>
  );
}

"use client";

import { PixelFire } from "./PixelFire";

interface FireEffectProps {
  isActive: boolean;
  className?: string;
}

export function FireEffect({ isActive, className = "" }: FireEffectProps) {
  if (!isActive) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none z-50 mix-blend-screen rounded-3xl ${className}`}>
      {/* Bottom flames */}
      <PixelFire className="absolute -bottom-8 -left-4 w-40 h-40 opacity-90 scale-x-[-1]" />
      <PixelFire className="absolute -bottom-10 left-1/4 w-48 h-48 opacity-100" />
      <PixelFire className="absolute -bottom-6 right-1/4 w-40 h-40 opacity-80" />
      <PixelFire className="absolute -bottom-12 -right-4 w-56 h-56 opacity-90 scale-x-[-1]" />
      
      {/* Side flames */}
      <PixelFire className="absolute top-1/4 -left-16 w-40 h-40 opacity-80 -rotate-90" />
      <PixelFire className="absolute top-1/2 -right-16 w-40 h-40 opacity-90 rotate-90" />
      <PixelFire className="absolute -top-10 left-1/3 w-32 h-32 opacity-70 rotate-180" />

      {/* Internal ambient glow */}
      <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay animate-pulse rounded-3xl" />
    </div>
  );
}

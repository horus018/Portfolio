"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
export function ThemeTransitionDragon() {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const isSwitchingToLight = theme === "light";
  const durationMs = isSwitchingToLight ? 4500 : 3000;
  useEffect(() => {
    if (theme && currentTheme !== theme) {
      setCurrentTheme(theme);
      setIsPlaying(true);
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, durationMs);
      return () => clearTimeout(timer);
    }
  }, [theme, currentTheme, durationMs]);
  if (!isPlaying) return null;
  const gifSrc = isSwitchingToLight ? "/dragon_flying.gif" : "/haunter.gif";
  const blendMode = isSwitchingToLight ? "mix-blend-multiply" : "mix-blend-screen";
  const animationName = isSwitchingToLight ? "flyAcross" : "flyAcrossReverse";
  const durationSec = isSwitchingToLight ? "4.5s" : "3s";
  return (
    <div key={theme} className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          animation: `${animationName} ${durationSec} ease-in-out forwards`,
          height: "400px",
          width: "400px"
        }}
      >
        <Image
          src={gifSrc}
          alt="Dragon transition"
          fill
          unoptimized
          className={`object-contain opacity-90 ${blendMode} ${isSwitchingToLight ? "scale-x-[-1]" : ""}`}
        />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

export function CoCIntroAnimation() {
  const [show, setShow] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const hasSeen = sessionStorage.getItem("coc_intro_seen");
    if (!hasSeen) {
      sessionStorage.setItem("coc_intro_seen", "1");
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion]);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[120px] z-50 pointer-events-none overflow-hidden transition-opacity duration-1000 ease-out flex justify-center items-end">
      {/* using Clash Of Clans Pixel GIF by Clash.gif */}
      <Image
        src="/Clash Of Clans Pixel GIF by Clash.gif"
        alt="Clash of Clans Intro"
        width={200}
        height={120}
        unoptimized
        className="object-contain"
      />
    </div>
  );
}

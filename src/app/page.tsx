"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Footer } from "@/components/sections/Footer";
import { CoCIntroAnimation } from "@/components/decorations/CoCIntroAnimation";
import { ThemeTransitionDragon } from "@/components/effects/ThemeTransitionDragon";
import { CircuitBackground } from "@/components/effects/CircuitBackground";
export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <CircuitBackground />
      <ThemeTransitionDragon />
      <CoCIntroAnimation />
      <Nav />
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}

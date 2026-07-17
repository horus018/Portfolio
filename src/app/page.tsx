"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { TrainingGrid } from "@/components/sections/TrainingGrid";
import { Footer } from "@/components/sections/Footer";
import { ThemeTransitionDragon } from "@/components/effects/ThemeTransitionDragon";
import { CircuitBackground } from "@/components/effects/CircuitBackground";
import { ExperienceGrid } from "@/components/sections/ExperienceGrid";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export default function Page() {
  const { t } = useLanguage();

  return (
    <>
      <CircuitBackground />
      <ThemeTransitionDragon />
      <Nav />
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal delay={0.2} className="w-full">
          <Hero />
        </ScrollReveal>
        <ExperienceGrid />
        <ScrollReveal delay={0.1} className="w-full">
          <ProjectGrid />
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="w-full">
          <TrainingGrid />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

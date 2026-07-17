"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { experiences } from "@/data/experiences"
import { ExperienceCard } from "../ExperienceCard"
import { ScrollReveal } from "../effects/ScrollReveal"

export function ExperienceGrid() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
      <ScrollReveal delay={0.1}>
        <div className="mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary text-center">
            {t("Experience.title") || "Experiência"}
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-0">
        {experiences.map((experience, idx) => (
          <ScrollReveal key={experience.id} delay={0.2 + idx * 0.1}>
            <ExperienceCard 
              experience={experience} 
              isLast={idx === experiences.length - 1} 
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

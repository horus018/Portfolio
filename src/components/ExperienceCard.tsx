"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import type { Experience } from "@/data/experiences"
import Image from "next/image"
import { MapPin, Calendar, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlitchText } from "./effects/GlitchText"

interface ExperienceCardProps {
  experience: Experience
  isLast?: boolean
}

export function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  const { language } = useLanguage()
  const title = experience.title[language]
  const type = experience.type[language]
  const date = experience.date[language]
  const achievements = experience.achievements[language]

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile timeline line */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border-subtle" />
      {!isLast && (
        <div className="md:hidden absolute left-0 top-14 bottom-[-2rem] w-px bg-border-subtle" />
      )}
      
      {/* Mobile timeline dot */}
      <div className="md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-accent-cyan" />

      <div className="md:grid md:grid-cols-12 md:gap-8">
        {/* Desktop left side (Company, Date, Icon) */}
        <div className="hidden md:flex flex-col items-end col-span-3 text-right pt-4 relative pr-10">
          <h4 className="text-xl font-bold text-text-primary">{experience.company}</h4>
          <div className="flex items-center gap-1.5 text-text-secondary mt-2 text-sm">
            <span>{date}</span>
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary mt-1 text-sm">
            <span>{experience.location}</span>
            <MapPin className="w-3.5 h-3.5" />
          </div>

          {/* Desktop timeline line and dot */}
          <div className="absolute right-0 top-0 bottom-[-3rem] w-px bg-border-subtle" />
          <div className="absolute right-[-4px] top-6 w-2 h-2 rounded-full bg-accent-cyan" />
          
          {/* Company Icon Desktop */}
          {experience.iconUrl && (
            <div className="absolute right-[-24px] top-[14px] w-12 h-12 bg-surface border border-border-subtle rounded-full p-1 z-10 hidden lg:block">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src={experience.iconUrl} alt={experience.company} fill className="object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Right side (Role, Details) */}
        <div className={cn("md:col-span-9 pt-4", isLast ? "pb-4" : "pb-12")}>
          {/* Mobile Company Icon */}
          {experience.iconUrl && (
            <div className="w-12 h-12 bg-surface border border-border-subtle rounded-full p-1 mb-4 lg:hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src={experience.iconUrl} alt={experience.company} fill className="object-cover" />
              </div>
            </div>
          )}

          <GlitchText randomGlitch>
            <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
          </GlitchText>
          
          {/* Mobile Company, Date, Location */}
          <div className="md:hidden flex flex-col gap-2 mb-4">
            <h4 className="text-lg font-semibold text-text-secondary">{experience.company}</h4>
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {date}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {experience.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded bg-blue-500/10 text-blue-500">
              <Briefcase className="w-3.5 h-3.5" />
              {type}
            </span>
          </div>

          <ul className="space-y-3">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-3 text-text-secondary leading-relaxed">
                <span className="text-accent-cyan mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {experience.skills && experience.skills[language] && experience.skills[language].length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {experience.skills[language].map((skill, idx) => (
                <span 
                  key={idx} 
                  className="rounded px-2.5 py-1 text-xs font-medium bg-surface-hover text-text-secondary border border-border-subtle"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

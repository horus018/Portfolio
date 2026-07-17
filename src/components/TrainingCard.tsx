"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import type { Training } from "@/data/trainings"
import Image from "next/image"
import { Presentation } from "lucide-react"
import { GlitchText } from "./effects/GlitchText"
import { getBadgeColor, cn } from "@/lib/utils"

interface TrainingCardProps {
  training: Training
  isList?: boolean
}

export function TrainingCard({ training, isList = false }: TrainingCardProps) {
  const { t, language } = useLanguage()
  const description = training.description[language]
  const title = typeof training.title === 'string' ? training.title : training.title[language]
  const tags = Array.isArray(training.tags) ? training.tags : training.tags[language]

  return (
    <a
      href={training.canvaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
      "group relative z-10 flex overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all hover:-translate-y-1 hover:shadow-2xl h-full cursor-pointer",
      isList ? "flex-col md:flex-row" : "flex-col"
    )}>
      <div className={cn(
        "relative overflow-hidden bg-black/50 shrink-0",
        isList ? "aspect-video md:aspect-[4/3] w-full md:w-72 lg:w-96" : "aspect-video w-full"
      )}>
        <Image
          src={training.imagePath}
          alt={typeof training.title === 'string' ? training.title : training.title.en}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-col items-start gap-3">
          <GlitchText randomGlitch>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">{title}</h3>
          </GlitchText>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className={cn("rounded px-2 py-0.5 text-xs font-medium", getBadgeColor(tag))}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="flex-1 text-sm text-text-secondary line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  )
}

"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import type { Project } from "@/data/projects"
import Image from "next/image"
import { Code2 } from "lucide-react"
import { GlitchText } from "./effects/GlitchText"
import { getBadgeColor, cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  isList?: boolean
}

export function ProjectCard({ project, isList = false }: ProjectCardProps) {
  const { t, language } = useLanguage()
  const description = project.description[language]
  const title = typeof project.title === 'string' ? project.title : project.title[language]

  return (
    <div className={cn(
      "group flex overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all hover:-translate-y-1 hover:shadow-2xl h-full",
      isList ? "flex-col md:flex-row" : "flex-col"
    )}>
      <div className={cn(
        "relative overflow-hidden bg-black/50 shrink-0",
        isList ? "aspect-video md:aspect-[4/3] w-full md:w-72 lg:w-96" : "aspect-video w-full"
      )}>
        <Image
          src={project.imagePath}
          alt={typeof project.title === 'string' ? project.title : project.title.en}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-col items-start gap-3">
          <GlitchText randomGlitch>
            <h3 className="text-xl font-bold text-text-primary">{title}</h3>
          </GlitchText>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className={cn("rounded px-2 py-0.5 text-xs font-medium", getBadgeColor(tag))}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="mb-6 flex-1 text-sm text-text-secondary line-clamp-3">
          {description}
        </p>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm font-medium text-text-secondary transition-colors hover:text-accent-cyan leading-none"
        >
          <Code2 className="h-4 w-4 shrink-0 mb-[1px]" />
          <span className="mt-[1px]">{t("Projects.github").replace("<> ", "")}</span> 
        </a>
      </div>
    </div>
  )
}

"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import type { Project } from "@/data/projects"
import Image from "next/image"
import { Code2 } from "lucide-react"
import { GlitchText } from "./effects/GlitchText"
interface ProjectCardProps {
  project: Project
}
export function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage()
  const description = project.description[language]
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-video w-full overflow-hidden bg-black/50">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <GlitchText>
            <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
          </GlitchText>
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className={`rounded px-2 py-0.5 text-xs font-medium ${
                  tag === 'Ruby' || tag === 'Rails' ? 'bg-accent-red/10 text-accent-red' :
                  tag === 'React' || tag === 'React Native' ? 'bg-accent-cyan/10 text-accent-cyan' :
                  tag === 'Fullstack' ? 'bg-white/10 text-text-secondary' :
                  'bg-white/10 text-text-secondary'
                }`}
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
          className="inline-flex items-center gap-2 font-mono text-sm font-medium text-text-secondary transition-colors hover:text-accent-cyan"
        >
          <Code2 className="h-4 w-4" />
          {t("Projects.github").replace("<> ", "")} 
          {}
        </a>
      </div>
    </div>
  )
}

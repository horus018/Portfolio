"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { projects } from "@/data/projects"
import { ProjectCard } from "../ProjectCard"
export function ProjectGrid() {
  const { t } = useLanguage()
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          {t("Projects.title")}
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

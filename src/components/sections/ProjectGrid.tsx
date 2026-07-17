"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { projects } from "@/data/projects"
import { ProjectCard } from "../ProjectCard"
import { LayoutGrid, List as ListIcon, GalleryHorizontal, Layers } from "lucide-react"
import { FaGithub as Github } from "react-icons/fa"
import { cn } from "@/lib/utils"

type ViewMode = "grid" | "list" | "carousel" | "stack"

export function ProjectGrid() {
  const { t } = useLanguage()
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid")

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary text-center md:text-left">
          {t("Projects.title")}
        </h2>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={cn("p-2 rounded-md transition-colors cursor-pointer", viewMode === "grid" ? "bg-surface-hover text-accent-cyan" : "text-text-secondary hover:text-text-primary")}
            aria-label="Grid View"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={cn("p-2 rounded-md transition-colors cursor-pointer", viewMode === "list" ? "bg-surface-hover text-accent-cyan" : "text-text-secondary hover:text-text-primary")}
            aria-label="List View"
          >
            <ListIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("carousel")}
            className={cn("p-2 rounded-md transition-colors cursor-pointer", viewMode === "carousel" ? "bg-surface-hover text-accent-cyan" : "text-text-secondary hover:text-text-primary")}
            aria-label="Carousel View"
          >
            <GalleryHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className={cn(
        "gap-8 w-full",
        viewMode === "grid" && "grid sm:grid-cols-2 lg:grid-cols-3",
        viewMode === "list" && "flex flex-col",
        viewMode === "carousel" && "flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent-cyan scrollbar-track-transparent items-stretch after:content-[''] after:shrink-0 after:w-px"
      )}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={cn(
              "flex",
              viewMode === "carousel" && "shrink-0 w-80 md:w-[400px] snap-center h-auto"
            )}
          >
            <div className="w-full h-full">
              <ProjectCard project={project} isList={viewMode === "list"} />
            </div>
          </div>
        ))}
        
        {/* View All Projects Card */}
        <div
          className={cn(
            "group relative z-10 flex flex-col overflow-hidden rounded-xl border border-dashed border-border-subtle bg-transparent transition-all hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(129,243,229,0.1)]",
            viewMode === "carousel" && "shrink-0 w-80 md:w-[400px] snap-center h-auto",
            viewMode === "grid" && "min-h-[300px]",
            viewMode === "list" && "py-12"
          )}
        >
          <a
            href="https://github.com/horus018"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center justify-center p-8 text-center text-text-secondary hover:text-text-primary transition-colors h-full"
          >
            <div className="rounded-full bg-surface p-4 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-accent-cyan">
              <Github className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("Projects.viewAll") || "Ver todos os projetos"}</h3>
            <p className="text-sm opacity-80">{t("Projects.exploreMore") || "Explore mais repositórios no meu GitHub."}</p>
          </a>
        </div>
      </div>
    </section>
  )
}

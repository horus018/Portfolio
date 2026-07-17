"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { trainings } from "@/data/trainings"
import { TrainingCard } from "../TrainingCard"
import { LayoutGrid, List as ListIcon, GalleryHorizontal, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

type ViewMode = "grid" | "list" | "carousel" | "stack"

export function TrainingGrid() {
  const { t } = useLanguage()
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid")

  return (
    <section id="trainings" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary text-center md:text-left">
          {t("Trainings.title") || "Treinamentos & Apresentações"}
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
        {trainings.map((training) => (
          <div 
            key={training.id} 
            className={cn(
              "flex",
              viewMode === "carousel" && "shrink-0 w-80 md:w-[400px] snap-center h-auto"
            )}
          >
            <div className="w-full h-full">
              <TrainingCard training={training} isList={viewMode === "list"} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

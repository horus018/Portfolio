"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { ThemeToggle } from "../ui/ThemeToggle"
import { LanguageToggle } from "../ui/LanguageToggle"
import { Diamond } from "lucide-react"
import { GlitchText } from "../effects/GlitchText"
export function Nav() {
  const { t } = useLanguage()
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border-subtle bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <GlitchText>
          <span className="flex items-center space-x-1 font-bold text-xl tracking-tight">
            <span className="text-text-primary">Lucas</span>
            <span className="text-accent-red">Rubira</span>
            <Diamond className="h-4 w-4 ml-0.5 text-accent-red fill-accent-red" />
          </span>
        </GlitchText>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <GlitchText>
            <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
              {t("Nav.about")}
            </a>
          </GlitchText>
          <GlitchText>
            <a href="#experience" className="text-text-secondary hover:text-accent-red transition-colors">
              {t("Experience.title") || "Experiência"}
            </a>
          </GlitchText>
          <GlitchText>
            <a href="#projects" className="text-text-secondary hover:text-accent-red transition-colors">
              {t("Nav.projects")}
            </a>
          </GlitchText>
          <GlitchText>
            <a href="#trainings" className="text-text-secondary hover:text-accent-cyan transition-colors">
              {t("Nav.trainings")}
            </a>
          </GlitchText>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}

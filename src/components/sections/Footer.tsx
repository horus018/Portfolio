"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Heart } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear().toString()
  return (
    <footer className="w-full border-t border-border-subtle bg-surface/30 py-6 text-center mt-12 transition-colors">
      <p className="font-mono text-sm text-text-secondary flex items-center justify-center gap-1.5 flex-wrap">
        <span>© {year}</span>
        <span className="text-text-primary font-bold">Lucas Rubira</span>
        <span className="text-accent-cyan mx-1">•</span>
        <span>{t("Footer.builtWith") || "Built with"}</span>
        <Heart className="mb-1 w-4 h-4 text-accent-red fill-accent-red animate-pulse-dot" />
      </p>
    </footer>
  )
}

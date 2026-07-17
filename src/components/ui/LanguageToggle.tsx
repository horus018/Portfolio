"use client"
import * as React from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const toggleLocale = () => {
    const nextLocale = language === "en" ? "pt" : "en"
    setLanguage(nextLocale)
  }
  return (
    <button
      onClick={toggleLocale}
      className="cursor-pointer inline-flex h-9 items-center justify-center space-x-2 rounded-md border border-border-subtle bg-transparent px-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-hover font-mono"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="mt-1">{language.toUpperCase()}</span>
    </button>
  )
}

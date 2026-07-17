"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear().toString()
  return (
    <footer className="w-full border-t border-border-subtle bg-surface/30 py-8 text-center mt-32 transition-colors">
      <p className="font-mono text-sm text-text-secondary">
        {t("Footer.copyright", { year })}
      </p>
    </footer>
  )
}

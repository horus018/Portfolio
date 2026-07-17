"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { createPortal } from "react-dom"
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [showMage, setShowMage] = React.useState(false)
  const [showCaraxes, setShowCaraxes] = React.useState(false)
  const [showFireGradient, setShowFireGradient] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <div className="w-9 h-9" />
  }
  const handleToggle = () => {
    if (isTransitioning) return
    if (theme === "light") {
      setIsTransitioning(true)
      setShowMage(true)
      setTimeout(() => {
        setTheme("dark")
        setTimeout(() => {
          setShowMage(false)
          setIsTransitioning(false)
        }, 700)
      }, 1500)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
      setIsTransitioning(true)
      setShowCaraxes(true)
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('caraxes-transition', { detail: { state: 'burning' } }))
        setShowFireGradient(true)
        setTimeout(() => {
          setShowCaraxes(false)
          setShowFireGradient(false)
          setTheme("light")
          window.dispatchEvent(new CustomEvent('caraxes-transition', { detail: { state: 'restore' } }))
          setIsTransitioning(false)
          setTimeout(() => {
            document.body.style.overflow = ''
          }, 2000)
        }, 3500)
      }, 800)
    }
  }
  return (
    <>
      <button
        onClick={handleToggle}
        disabled={isTransitioning}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-subtle bg-transparent text-text-primary transition-colors cursor-pointer hover:bg-surface-hover ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>
      {showMage && mounted && createPortal(
        <div className="fixed -bottom-15 sm:-bottom-15 right-0 z-[10000] pointer-events-none transition-opacity duration-800">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <Image
              src="/mage.gif"
              alt="Mage Transition"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>,
        document.body
      )}
      {showCaraxes && mounted && createPortal(
        <div className="fixed inset-0 z-[15] pointer-events-none transition-opacity duration-800">
          <Image
            src="/caraxes.gif"
            alt="Caraxes Transition"
            fill
            unoptimized
            className="object-cover mix-blend-multiply"
          />
        </div>,
        document.body
      )}
      {showFireGradient && mounted && createPortal(
        <div className="fixed inset-0 z-[16] pointer-events-none mix-blend-screen opacity-60 animate-fire-gradient" />,
        document.body
      )}
    </>
  )
}

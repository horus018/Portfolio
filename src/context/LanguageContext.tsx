"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import enMessages from "../messages/en.json";
import ptMessages from "../messages/pt.json";
type Language = "en" | "pt";
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const messages: Record<Language, any> = {
  en: enMessages,
  pt: ptMessages,
};
function getNestedValue(obj: any, path: string): string {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current[key] === undefined) {
      return path; 
    }
    current = current[key];
  }
  return typeof current === "string" ? current : path;
}
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("language") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "pt")) {
      setLanguageState(storedLang);
    } else if (navigator.language.startsWith("pt")) {
      setLanguageState("pt");
    }
  }, []);
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };
  const t = (key: string, replacements?: Record<string, string>) => {
    const activeLanguage = mounted ? language : "en";
    let text = getNestedValue(messages[activeLanguage], key);
    if (replacements) {
      Object.keys(replacements).forEach((replKey) => {
        text = text.replace(new RegExp(`{${replKey}}`, "g"), replacements[replKey]);
      });
    }
    return text;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

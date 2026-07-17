"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const NOTES = ["♪", "♫", "♩", "♬", "♭", "♮", "♯"];
const COLORS = [
  "#FF5733", "#33FF57", "#3357FF", "#F333FF", 
  "#FF33A8", "#33FFF5", "#F5FF33", "#FF8C33", 
  "#8C33FF", "#00E5FF", "#FF007F"
];

interface NoteData {
  id: number;
  char: string;
  left?: string;
  right?: string;
  animationDelay: string;
  animationDuration: string;
  color: string;
  fontSize: number;
}

const generateNotes = (useNegativeDelay: boolean, count: number) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random(),
    char: NOTES[Math.floor(Math.random() * NOTES.length)],
    left: `${Math.random() * 100}%`,
    animationDelay: useNegativeDelay ? `-${Math.random() * 30}s` : `${Math.random() * 3}s`,
    animationDuration: `${Math.random() * 15 + 15}s`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    fontSize: Math.random() * 16 + 20,
  })) as NoteData[];
};

export function MusicalNotesBackground() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [isLitUp, setIsLitUp] = useState(false);
  const { theme } = useTheme();
  const prevTheme = useRef<string | undefined>(undefined);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setNotes(generateNotes(true, 40));
  }, []);

  useEffect(() => {
    if (!theme) return;
    if (!prevTheme.current) {
      prevTheme.current = theme;
      return;
    }
    if (theme !== prevTheme.current) {
      setIsHidden(true);
      prevTheme.current = theme;
      
      const duration = theme === "light" ? 4500 : 3000;
      const timer = setTimeout(() => {
        setNotes(generateNotes(false, 40));
        setIsHidden(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [theme]);

  if (notes.length === 0 || isHidden) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
        {notes.map((note) => (
          <div
            key={note.id}
            className="absolute top-[-10%] pointer-events-auto cursor-pointer pause-on-hover select-none"
            style={{
              left: note.left,
              animation: `fallNote ${note.animationDuration} linear infinite`,
              animationDelay: note.animationDelay,
            }}
          >
            <div
              className={cn(
                "transition-all duration-300 hover:scale-150",
                isLitUp ? "opacity-90" : "opacity-20 hover:opacity-80"
              )}
              style={{
                fontSize: note.fontSize,
                color: isLitUp ? note.color : "inherit",
                textShadow: isLitUp ? `0 0 15px ${note.color}` : "none",
              }}
              onClick={() => setIsLitUp(prev => !prev)}
            >
              {note.char}
            </div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fallNote {
            0% { transform: translateY(-20vh) rotate(0deg); }
            100% { transform: translateY(120vh) rotate(360deg); }
          }
          .pause-on-hover:hover {
            animation-play-state: paused !important;
          }
        `
      }} />
    </>
  );
}

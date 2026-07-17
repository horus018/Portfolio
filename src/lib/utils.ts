import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBadgeColor(tag: string): string {
  const t = tag.toLowerCase()
  if (t.includes('ruby') || t.includes('rails') || t === 'angular' || t.includes('segurança') || t.includes('security')) return 'bg-red-500/10 text-red-500'
  if (t.includes('react') || t === 'tailwind' || t === 'tailwind css' || t.includes('mobile')) return 'bg-cyan-500/10 text-cyan-500'
  if (t.includes('typescript') || t.includes('docker') || t.includes('python') || t === 'c++' || t.includes('educação') || t.includes('education')) return 'bg-blue-500/10 text-blue-500'
  if (t.includes('node') || t === 'spring boot' || t === 'thymeleaf' || t === 'kivy' || t === 'sfml') return 'bg-green-500/10 text-green-500'
  if (t.includes('postgres') || t.includes('sql') || t.includes('banco') || t.includes('database')) return 'bg-indigo-500/10 text-indigo-500'
  if (t === 'firebase' || t === 'html' || t === 'cache' || t === 'qa' || t.includes('testing')) return 'bg-orange-500/10 text-orange-500'
  if (t === 'stripe' || t.includes('programação') || t.includes('programming')) return 'bg-purple-500/10 text-purple-500'
  if (t.includes('mongo') || t.includes('nosql')) return 'bg-emerald-500/10 text-emerald-500'
  if (t === 'js' || t === 'jquery' || t === 'java' || t.includes('web')) return 'bg-yellow-500/10 text-yellow-500'
  if (t === 'css') return 'bg-blue-600/10 text-blue-500'
  if (t.includes('design') || t.includes('ui/ux') || t.includes('responsiv')) return 'bg-pink-500/10 text-pink-500'
  if (t === 'expo' || t.includes('indústria') || t.includes('industry') || t.includes('software')) return 'bg-slate-700/10 text-slate-700'
  return 'bg-white/10 text-text-secondary'
}

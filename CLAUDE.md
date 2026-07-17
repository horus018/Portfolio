# CLAUDE.md — Lucas Rubira Portfolio

Guidance for Claude Code (or any AI assistant) working in this repository.
**Always read `DESIGN_SYSTEM.md` before touching any UI component.**

---

## 1. Project Overview

Personal single-page portfolio for **Lucas Rubira**, a Software Developer focused on **Ruby on Rails and React**.

Goals:
- Present who he is, his stack, and a personality layer (Clash of Clans, Minecraft, Project Zomboid, dragons) shown via decorative code snippets and Easter egg animations — not through cluttered UI.
- List real personal projects as cards linking to GitHub.
- Responsive (mobile → desktop), dark-mode-first with a polished light-mode toggle, EN/PT-BR language toggle with **no route changes** (same URL, client-state only).
- Deployed on **Vercel** via GitHub auto-deploy.
- Cyberpunk/high-tech ambient effects layered on top of the clean dark aesthetic.

---

## 2. Tech Stack

- **Framework:** Next.js 14+ (App Router) + React
- **Styling:** Tailwind CSS — tokens from `DESIGN_SYSTEM.md §2` mapped in `tailwind.config.ts`
- **Icons:** `lucide-react` for UI chrome (sun, moon, globe, code, etc.); brand icons (WhatsApp, LinkedIn, Gmail) via `react-icons/si` or `simple-icons`
- **i18n:** **No `next-intl` routing, no locale segments in the URL (`/en`, `/pt` do not exist).** Language is pure React context — a `LanguageProvider` wrapping the app, `useLanguage()` hook returning `'en' | 'pt'`, persisted to `localStorage`. Message look-up via plain JSON dictionaries in `/messages/`. See §6.4.
- **Animation:** Framer Motion — floating code cards, dragon overlay, glitch effects
- **Deployment:** Vercel, zero-config Next.js preset, auto-deploy on push to `main`

---

## 3. Directory Structure

```
/src
  /app
    layout.tsx          # <html> with ThemeProvider + LanguageProvider wrapping children
    page.tsx            # Single route — renders all sections in order
  /components
    /ui
      Button.tsx
      Badge.tsx         # Status badge
      SocialIcon.tsx
      ThemeToggle.tsx
      LanguageToggle.tsx
    /sections
      Nav.tsx
      Hero.tsx
      ProjectGrid.tsx
      About.tsx         # (optional, add later)
      Skills.tsx        # (optional)
      Experience.tsx    # (optional)
      Certificates.tsx  # (optional — needed for the CTA button to scroll to something)
      Contact.tsx       # (optional)
      Footer.tsx
    /decorations
      FloatingCodeSnippet.tsx   # macOS-style code card, NO fixed width, NO scrollbar
      CoCIntroAnimation.tsx     # Barbarian GIF, bottom strip, session-gated
    /effects
      ThemeTransitionDragon.tsx # Dragon GIF overlay on theme toggle
      GlitchText.tsx            # Hover glitch wrapper
      Scanlines.tsx             # CRT scanline overlay, pointer-events: none
      CircuitBackground.tsx     # Faint grid/circuit SVG pattern
  /context
    ThemeContext.tsx    # 'dark' | 'light', localStorage + prefers-color-scheme fallback, default: 'dark'
    LanguageContext.tsx # 'en' | 'pt', localStorage + navigator.language fallback
  /data
    projects.ts
    socials.ts
    certificates.ts
  /messages
    en.json
    pt.json
  /assets
    /images             # profile photo (photo.jpg), project screenshots
    /gifs               # dragon.gif (single asset, filter to invert), coc-barbarian.gif
      # GIF sources:
      # Barbarian: https://media3.giphy.com/media/wDFfHkaDummYvJBdZT/giphy.gif
      # Dragon: https://media4.giphy.com/media/sWUhsr69ACcC2c0EYk/giphy.gif
```

---

## 4. Coding Conventions

- **Components:** Functional components + React Hooks only. No class components.
- **Styling:** Tailwind utility classes. Only use `@apply` in `globals.css` for truly repeated patterns (e.g. `.code-card-glass`). Don't over-abstract.
- **Theming:** `darkMode: 'class'` in Tailwind config. The `<html>` element gets `class="dark"` by default. ThemeContext toggles it. **Every** color token needs both a `dark:` mapping and a default (light) mapping — no raw hex inline in JSX.
- **i18n:** No route changes on language switch. Context update only. URL stays on `/` in both languages.
- **Code card sizing:** `width: fit-content`, `min-width: fit-content` on the card container. No `overflow-x`. No `max-width` that would truncate code. See DESIGN_SYSTEM.md §5.4.
- **Face protection:** Code cards positioned absolute on desktop must never overlap the face area of the profile photo. See DESIGN_SYSTEM.md §5.4.
- **Motion guard:** Wrap ALL decorative animations with a `useReducedMotion()` hook check. When `true`: skip float animation, skip dragon overlay, skip CoC GIF, skip glitch, skip scanline flicker.
- **No hardcoded copy:** All user-facing strings go through `useLanguage()` → messages JSON. Keys: `nav.*`, `hero.*`, `projects.*`, `certificates.*`, etc.
- **GIF loading:** Lazy-load the CoC Barbarian GIF (only load when `sessionStorage` flag is absent). Don't block the initial render.

---

## 5. Data Model

### 5.1 Projects (`src/data/projects.ts`)

```ts
export type Project = {
  id: string;
  title: string;
  description: { en: string; pt: string };
  imagePath: string;           // relative to /public
  tags: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 'zatrion',
    title: 'Zatrion',
    description: {
      en: 'A dynamic platform combining Ruby, React, and LLMs to guide tabletop RPG campaigns.',
      pt: 'Plataforma dinâmica que combina Ruby, React e LLMs para guiar campanhas de RPG de mesa.',
    },
    imagePath: '/images/zatrion.png',
    tags: ['Ruby', 'React'],
    githubUrl: 'TODO_LINK',
  },
  {
    id: 'cargestor',
    title: 'CarGestor',
    description: {
      en: 'A robust freelance vehicle and inventory management application designed for car dealerships.',
      pt: 'Aplicação robusta de gestão de veículos e inventário para concessionárias.',
    },
    imagePath: '/images/cargestor.png',
    tags: ['Rails'],
    githubUrl: 'TODO_LINK',
  },
  {
    id: 'ipb-connect',
    title: 'IPB-Connect',
    description: {
      en: 'An e-commerce marketplace platform built for international students to trade products securely.',
      pt: 'Marketplace para estudantes internacionais comprar e vender produtos com segurança.',
    },
    imagePath: '/images/ipb-connect.png',
    tags: ['Fullstack'],
    githubUrl: 'TODO_LINK',
  },
  {
    id: 'workinstructions',
    title: 'WorkInstructions',
    description: {
      en: 'A comprehensive software system designed to manage and display digital work instructions on factory floors.',
      pt: 'Sistema para gerenciar e exibir instruções de trabalho digitais no chão de fábrica.',
    },
    imagePath: '/images/workinstructions.png',
    tags: [],
    githubUrl: 'TODO_LINK',
  },
  {
    id: 'smartorder',
    title: 'SmartOrder',
    description: {
      en: 'A mobile restaurant application built with React Native and Firebase.',
      pt: 'Aplicativo mobile para restaurantes construído com React Native e Firebase.',
    },
    imagePath: '/images/smartorder.png',
    tags: ['React Native'],
    githubUrl: 'TODO_LINK',
  },
];
```

Replace all `TODO_LINK` values with real GitHub URLs before launch.

### 5.2 Socials (`src/data/socials.ts`)

```ts
export type SocialLink = {
  id: 'whatsapp' | 'linkedin' | 'gmail' | 'resume' | 'discord' | 'spotify';
  url: string;
  label: string;
  icon: string;    // icon name for react-icons/si or lucide
};

// Currently rendered in the UI: whatsapp, linkedin, gmail, resume
// discord and spotify: add to the array when URLs are ready — layout adapts automatically
export const socials: SocialLink[] = [
  { id: 'whatsapp',  url: 'TODO_LINK', label: 'WhatsApp', icon: 'SiWhatsapp' },
  { id: 'linkedin',  url: 'TODO_LINK', label: 'LinkedIn',  icon: 'SiLinkedin' },
  { id: 'gmail',     url: 'mailto:TODO@gmail.com', label: 'Gmail', icon: 'SiGmail' },
  { id: 'resume',    url: 'TODO_LINK', label: 'Resume',   icon: 'FileText' },
];
```

### 5.3 Certificates (`src/data/certificates.ts`)

```ts
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;        // 'YYYY-MM'
  url?: string;        // public credential URL
  imagePath?: string;  // badge image
};

// Populate with real data — do not invent certificates
export const certificates: Certificate[] = [];
```

---

## 6. Feature Implementation Details

### 6.1 Hero Section

Layout (desktop): two-column grid, ~55% / 45% split.
- Left column: status badge → name → subtitle → body text → social icons → 3 CTA buttons (View Projects | Contact Me | Certificates).
- Right column: `position: relative` container. Profile photo in center. JS/React code card positioned above-right. Ruby code card positioned below-left. Cards must not cover the face — see DESIGN_SYSTEM.md §5.4.

Layout (mobile `< lg`): single column. Order: status badge, name, subtitle, body, socials, CTAs, JS code card, photo, Ruby code card.

### 6.2 FloatingCodeSnippet Component

Critical props and rules:
```tsx
// NO maxWidth prop. NO overflow-x. Width comes from content.
<div
  style={{ width: 'fit-content', minWidth: 'fit-content' }}
  className="rounded-xl border border-white/8 bg-white/4 backdrop-blur-md shadow-xl"
>
  {/* macOS dots */}
  {/* code lines — pre/code block, no wrapping, no scrollbar */}
</div>
```
The `<pre>` or `<code>` block inside must NOT have `overflow-x: auto`. Lines expand the card, not create a scrollbar.

### 6.3 ThemeContext

```tsx
// Default: 'dark'. On mount, read localStorage → then prefers-color-scheme → else 'dark'.
// On toggle: update state, write localStorage, toggle 'dark' class on <html>,
//            then fire ThemeTransitionDragon.
```

### 6.4 LanguageContext

```tsx
// Default: check localStorage → then navigator.language.startsWith('pt') → else 'en'.
// On toggle: update state, write localStorage, re-render — NO navigation, NO URL change.
// Messages loaded from /messages/en.json and /messages/pt.json.
```

```tsx
// Usage in components:
const { t } = useLanguage();
// t('hero.title') → "Software Developer focused on Ruby on Rails and React"
```

### 6.5 ThemeTransitionDragon

```tsx
// Mounts when ThemeContext.toggle() is called.
// Renders dragon GIF as: position fixed, top-0 left-0, w-full h-full (or just wide), z-[9999],
//   pointer-events-none, object-fit: contain, centered.
// Apply CSS filter to the single GIF to create light/dark variants:
//   - Switching to dark mode (dragon should be light): no filter, or brightness(1.5)
//   - Switching to light mode (dragon should be dark): filter: invert(1) or brightness(0.2)
// Unmounts after GIF duration (~2–3s) via setTimeout or onAnimationEnd.
// GIF: /assets/gifs/dragon.gif (downloaded from the Giphy URL in §3 directory structure)
// Skip entirely if useReducedMotion() === true.
```

### 6.6 CoCIntroAnimation

```tsx
// Mount condition: !sessionStorage.getItem('coc_intro_seen')
// On mount: set sessionStorage.getItem('coc_intro_seen') = '1' immediately.
// Renders: position fixed, bottom-0, left-0, right-0, h-[120px], z-50,
//   pointer-events-none. Overflow hidden.
// Content: the Barbarian GIF centered or animated sliding left-to-right with CSS.
// GIF: /assets/gifs/coc-barbarian.gif
// Fades out after 5s via opacity transition, then unmounts.
// Skip entirely if useReducedMotion() === true.
```

### 6.7 Cyberpunk Effects

```tsx
// Scanlines.tsx — render in layout.tsx above all content:
// <div className="pointer-events-none fixed inset-0 z-10"
//   style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)' }}
// />

// GlitchText.tsx — wrap any text node:
// On hover: apply @keyframes glitch — offsetting two pseudo-elements in red + cyan.
// Duration: 200ms. Not looping.

// CircuitBackground.tsx — SVG or CSS background pattern on bg-base layer.
// Opacity: 0.04 dark mode, 0.06 light mode.
// Options: CSS background-image with an SVG data URI of a grid/dot pattern.
```

---

## 7. Deployment (Vercel)

- Push to GitHub, import in Vercel → select Next.js preset → deploy.
- No custom build commands needed.
- `next/image`: if project screenshots are in `/public/images`, no remote pattern config needed.
- No env vars for MVP. Add `.env.example` only when a contact form or analytics (Plausible/Vercel Analytics) is added.
- Recommended: enable Vercel Analytics (free, privacy-friendly) — just add `<Analytics />` to `layout.tsx`.

---

## 8. Suggested Additional Sections

Implement after MVP launch. Each is self-contained, add to `page.tsx` in order:

| # | Section | Component | Data source | Priority |
|---|---|---|---|---|
| 1 | About / Bio | `About.tsx` | Hardcoded or messages JSON | High |
| 2 | Skills & Stack | `Skills.tsx` | `skills.ts` array of `{ name, icon, category }` | High |
| 3 | Experience | `Experience.tsx` | `experience.ts` array of roles | Medium |
| 4 | Certificates | `Certificates.tsx` | `certificates.ts` | Medium |
| 5 | Contact | `Contact.tsx` | `socials.ts` reused | Low |

Nav links to add when sections exist: "About", "Skills", "Experience", "Contact" (in addition to current "About" / "Projects").

---

## 9. Non-Goals for v1

- No CMS — all data is static TypeScript/JSON.
- No contact form with server-side handling — CTAs use `mailto:`, `wa.me`, external links.
- No blog.
- No `/en` or `/pt` routes — ever. Language is always client-side state.

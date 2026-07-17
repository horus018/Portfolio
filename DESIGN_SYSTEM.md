# Design System — Lucas Rubira Portfolio

Reference implementation: dark, developer-tool aesthetic (Stitch demo screenshot + current build screenshot), single-page portfolio.
**This document is the source of truth for visual decisions. When in doubt, follow this doc over any previous version.**

---

## 1. Core Principles

- **Theme:** Dark mode is the default. Light mode must be fully polished — not an afterthought.
- **Aesthetic:** Deep black background, glassmorphic floating panels, monospace code accents, cyberpunk neon touches, high-contrast type.
- **Vibe:** Serious senior dev (Ruby on Rails / React) with personality Easter eggs (Clash of Clans, Minecraft, Project Zomboid, dragons) that show up only in decorative code snippets and animation triggers — never cartoonish or cluttered UI.
- **Density:** Generous whitespace. The hero section is roughly 70% empty space anchored by two elements: text block left, layered photo + code cards right.

---

## 2. Color Palette

### Dark Mode (default)

| Token | Hex | Usage |
|---|---|---|
| `bg-base` | `#0A0A0A` | Page background |
| `surface` | `#141414`–`#1A1A1A` | Cards, nav, code windows |
| `border-subtle` | `rgba(255,255,255,0.08)` | Card/panel borders |
| `accent-red` | `#E0304A` / `#FF3B4E` | "Rubira", primary button, Ruby tag, active nav link |
| `accent-cyan` | `#3FD0FF` | React tag, secondary button, code punctuation |
| `status-green` | `#2ECC71` | Status badge dot + label |
| `text-primary` | `#F5F5F5` | Headings, names |
| `text-secondary` | `#A3A3A3` | Body, descriptions |
| `code-purple` | `#C792EA` | `const`, `def`, keywords in snippets |
| `code-green` | `#4EC9B0` | Strings/values in snippets |
| `neon-glow-red` | `rgba(224,48,74,0.35)` | Box-shadow glow on primary button hover |
| `neon-glow-cyan` | `rgba(63,208,255,0.25)` | Box-shadow glow on secondary elements |

### Light Mode — full parity required

**Every element visible in dark mode must also be fully visible in light mode. No exceptions.**

| Dark token | Light equivalent | Notes |
|---|---|---|
| `bg-base #0A0A0A` | `#F0F0F0` | Near-white, not pure white |
| `surface #141414` | `#FFFFFF` | Cards become white |
| `border-subtle rgba(255,255,255,0.08)` | `rgba(0,0,0,0.10)` | Dark border on light bg |
| `text-primary #F5F5F5` | `#111111` | Near-black, high contrast |
| `text-secondary #A3A3A3` | `#555555` | Dark grey, still AA |
| `accent-red` | `#C0192D` | Darker red for white bg contrast |
| `accent-cyan` | `#007FA8` | Darker cyan for white bg contrast |
| `code-purple #C792EA` | `#7B2FBE` | Darker purple |
| `code-green #4EC9B0` | `#1A6B5A` | Darker teal |

Map every token to both values in `tailwind.config.ts`. **Never use raw hex inline in components.**

---

## 3. Typography

- **Headings:** Inter or system-ui, bold, tight letter-spacing. `h1` (name) ~56–64px desktop / ~36px mobile. Section titles ~40px desktop / ~28px mobile.
- **Body:** Inter, regular, 16–18px, `line-height: 1.65`.
- **Monospace (code + footer):** Fira Code or JetBrains Mono.
- **Logo lockup:** `Lucas` in `text-primary`, `Rubira` in `accent-red`, then immediately the small Ruby gem/diamond icon (♦) — all in one horizontal line. **This lockup lives ONLY in the nav bar.** The Ruby icon must NOT appear anywhere else in the layout (not hero background, not floating). The current build correctly places it in the nav — preserve that.

---

## 4. Layout & Navigation

- **Nav bar:** Fixed/sticky, `surface` background with backdrop blur on scroll (transparent at top). Left: logo lockup (name + gem). Center: "About" / "Projects" nav links, active state = `accent-red`. Right: theme toggle (sun/moon icon) + language toggle (globe icon + "EN"/"PT" text label).
- **Hero grid:** Two columns desktop — text block left (~55%), photo + code card cluster right (~45%). Single column stacked on `< lg (1024px)`: text, then photo, then code cards.
- **Section spacing:** 120–160px vertical gap between Hero and next section on desktop; ~64–80px on mobile.

---

## 5. Components

### 5.1 Status Badge
- Pill shape, translucent dark background, thin border.
- Content: pulsing green dot + monospace text `● Status: Coding / Gaming`.
- The dot pulses with a CSS `@keyframes` animation at ~2s intervals.

### 5.2 Buttons

Three CTAs in the hero, left-to-right:

- **Primary — "View Projects":** Solid `accent-red` fill, white text, 4–6px radius, `10px 24px` padding. Hover: brighten fill + `neon-glow-red` box-shadow.
- **Secondary — "Contact Me":** Transparent fill, 1px `accent-cyan` border, `accent-cyan` text. Hover: `rgba(63,208,255,0.08)` fill + `neon-glow-cyan` box-shadow.
- **Tertiary — "Certificates":** Transparent fill, 1px neutral-grey border (`rgba(255,255,255,0.25)` dark / `rgba(0,0,0,0.20)` light), `text-secondary` text. Hover: subtle surface fill. Scrolls to Certificates section.

All three buttons sit in one horizontal row on desktop, stack vertically on mobile.

### 5.3 Social Icon Row
- 4 icons confirmed in current build: **WhatsApp, LinkedIn, Gmail, Resume/CV**.
- Style: square, ~40px, ~8px border-radius, `surface` background, `border-subtle` border, icon centered.
- Hover: icon transitions to its brand color, background lightens slightly.
- Keep data-driven (see CLAUDE.md §5.2) — Discord and Spotify can be added as a one-line config change later.

### 5.4 Floating Code Snippet Cards

**These are the most commonly broken component — read carefully.**

#### Sizing & Overflow — CRITICAL
- **No fixed narrow width. No `overflow-x: auto`. No horizontal scrollbar. Ever.**
- Width must fit the content: use `width: fit-content` or `min-width: fit-content`. Lines must not be clipped (`'Clash of C…'` in the current build is a bug — fix it). Wrap lines softly only if truly necessary, not by default.
- If a line is long, the card grows to contain it. The card never truncates code with a scrollbar.

#### Visual Style
- macOS window chrome: 3 dots (red #FF5F57, yellow #FEBC2E, green #28C840) top-left. No title bar text.
- Background: glassmorphism — `rgba(255,255,255,0.04)` fill + `backdrop-filter: blur(12px)`, `border-subtle` border, soft `box-shadow`.
- Syntax: One Dark / Dracula palette — `code-purple` for keywords (`const`, `def`, `while`), `accent-cyan` for identifiers/function names, `code-green` for string values, `text-secondary` for punctuation.

#### Desktop Positioning — FACE PROTECTION RULE
- Two cards anchor the hero right column: JS/React card upper-right, Ruby card lower.
- They may overlap the photo's edges, hair, shoulders, or background area.
- **They must NEVER cover the face (eyes, nose, mouth).** Position them to the sides or toward the bottom/top edges of the photo, not centred over it. Maintain a clear margin around the face at every desktop breakpoint.
- Use absolute positioning within a `relative` container. The photo sits in the middle layer, cards are `z-index` above it.

#### Mobile/Tablet (`< lg`, 1024px)
- **Stop all absolute positioning.** Cards return to normal document flow.
- Order: JS/React card → photo → Ruby card, each full-width of the column, no overlap.
- No horizontal scroll on either card at any mobile viewport width.

#### Animation (optional polish)
- Framer Motion: slow float `y: [0, -10, 0]`, `duration: 4s`, `repeat: Infinity`, `ease: 'easeInOut'`.
- Must be disabled when `prefers-reduced-motion: reduce` is set.

#### Content
- **JS/React snippet:**
```js
const status = useGameState({
  playing: ['Minecraft', 'Clash of Clans', 'Project Zomboid'],
  townHallLevel: '16',
  dragonsDefeated: 42,
});
```
- **Ruby snippet:**
```ruby
def morning_routine
  while coffee_cup.empty?
    refill_coffee
  end
  start_coding(framework: 'Ruby on Rails')
end
```

### 5.5 Profile Photo
- Portrait crop, 12–16px border-radius, subtle dark border frame.
- Sits between the two code cards in the stacked layer effect — slight rotation (`rotate-1` or `rotate-2`) gives depth.
- Photo layer is `z-index` between background and the code cards.

### 5.6 Project Cards (Grid)
- Layout: 3 cols desktop, 2 cols tablet, 1 col mobile. ~24px gap.
- Card: `surface` bg, 8–12px radius, `border-subtle` border. Hover: `translateY(-4px)` lift + stronger shadow + subtle image `scale(1.03)`.
- **Image area:** 16:9, rounded top corners, `object-fit: cover`. Dark placeholder if image not yet provided.
- **Header row:** Title bold `text-primary` + tech tag pills right-aligned (Ruby = red-tinted, React = cyan-tinted, Fullstack = neutral grey, React Native = purple-tinted).
- **Description:** 2–3 lines `text-secondary`.
- **Footer row:** `<> GitHub` — code icon + text, `text-secondary`, hover shifts to `accent-cyan`.

### 5.7 Footer
- Centered, monospace, `text-secondary`: `© {year} Lucas Rubira • Built with love`

---

## 6. Light Theme — Full Parity Audit Checklist

Before shipping, verify every item in both themes:

- [ ] Nav bar: logo text readable, links readable, toggles readable
- [ ] Status badge: dot visible, text readable
- [ ] Hero heading + subtitle + body text: readable on light `bg-base`
- [ ] All 3 CTA buttons: text and borders visible
- [ ] Social icons: icons and backgrounds visible
- [ ] Both code snippet cards: syntax colors readable on light glass surface
- [ ] Project cards: titles, descriptions, tags, GitHub link all readable
- [ ] Tech tag pills: text and background both visible
- [ ] Footer: text readable

If anything in light mode is invisible or low-contrast, it is a bug — fix the Tailwind `dark:`/default mapping, don't add inline overrides.

---

## 7. Theme Toggle — Dragon Transition Animation

When the user clicks the theme toggle:

1. The theme class swaps immediately (don't delay the actual UI update).
2. A dragon GIF with a transparent background mounts as a `position: fixed` overlay, `z-index: 9999`, `pointer-events: none`.
3. It plays once across the screen and then the component unmounts.
4. Duration: the GIF itself determines timing — keep it under ~3s total.

**Asset selection (by DESTINATION theme):**
- Switching **to Light mode** → show the **dark dragon** GIF (dark-coloured dragon visible against a newly bright page).
- Switching **to Dark mode** → show the **light/bright dragon** GIF (light-coloured dragon visible against a newly dark page).

**Reference GIF (dragon):**
`https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExemFuaXowMDE4eGM5eWdodGhndDU5czdmZmdsODc0dHIwMGJtYWNzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sWUhsr69ACcC2c0EYk/giphy.gif`
Use this GIF (or equivalent transparent-bg sprite). You may apply a CSS `filter` (e.g. `invert(1)` or `hue-rotate`) to derive the light/dark variant from the same asset if a second asset isn't available — just make sure the contrast is right against each background.

**`prefers-reduced-motion`:** Skip the overlay entirely; theme still swaps.

---

## 8. First-Load Intro Animation — Clash of Clans

On the **very first visit** (gated by a `sessionStorage` flag `coc_intro_seen`):

- A small animation strip renders in the bottom of the viewport — a Barbarian sleeping / characters running across.
- Bounded area: fixed strip ~100–120px tall at the bottom of the screen, full viewport width. NOT full-screen.
- Plays for ~4–6 seconds, then fades out and unmounts.
- Does not block any content — it's below the page content visually.

**Reference GIF (Barbarian sleeping):**
`https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN25qYzZvM3cyaHYxNnd5M2Q4NXZzbng5Y2RzM3ZoeDgzMHd3dW8yOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wDFfHkaDummYvJBdZT/giphy.gif`

Implementation note: load the GIF lazily (only import/fetch when `coc_intro_seen` is NOT set), so it doesn't hit network for returning users.

**`prefers-reduced-motion`:** Skip entirely.

---

## 9. Cyberpunk / High-Tech Ambient Effects

All effects are decorative overlays with `pointer-events: none`. None may reduce any text below WCAG AA contrast. All respect `prefers-reduced-motion`.

### 9.1 Scanlines / CRT Overlay
- A `::before` or `<div>` overlay on the hero (or full page) with repeating horizontal lines using a CSS `repeating-linear-gradient`.
- Opacity: **2–4%** maximum — barely perceptible, adds texture without distraction.
- Applied to `bg-base` layer only, not on top of cards.

### 9.2 Glitch Text Effect
- Triggered on `hover` of: the name "Lucas Rubira", nav links, and project card titles.
- Effect: brief RGB channel split (offset `text-shadow` in red and cyan), optional slight `skewX` jitter.
- Duration: 150–250ms total, then returns to normal. Not a continuous loop.
- Implemented as a `GlitchText` wrapper component using CSS animation or Framer Motion.

### 9.3 Neon Status Flicker
- The status badge dot (green) occasionally flickers like a neon sign: a subtle irregular brightness/opacity animation.
- Infrequent — fires every ~8–15s with a randomised delay. Not a steady blink.

### 9.4 Circuit / Grid Background
- A very faint static or slowly animated grid/circuit-board SVG pattern in the page background.
- Low opacity (3–6%), behind all content. Gives the page depth and a "terminal" feel.
- Can be a CSS `background-image` SVG pattern or a `<canvas>` animation.

---

## 10. Suggested Additional Sections

Beyond Hero + Featured Projects, these sections are recommended for a complete portfolio. Add incrementally — don't block launch on all of them:

| Section | Priority | Notes |
|---|---|---|
| **About / Bio** | High | Short story — background, education, what drives you. 2–3 paragraphs. |
| **Skills & Tech Stack** | High | Logo grid: Ruby, Rails, React, Node.js, PostgreSQL, Docker, etc. Group by backend / frontend / tools. |
| **Experience Timeline** | Medium | Roles in order, one-line summary each. |
| **Certificates** | Medium | Grid/list from `certificates.ts`. Pairs with the "Certificates" CTA button. |
| **Contact** | Low | Dedicated scroll target for "Contact Me". Restate social icons + short invitation line. |

---

## 11. Accessibility & Responsiveness

- WCAG AA minimum for all text/bg pairs in both themes (verified by audit checklist §6).
- Mobile-first: base (mobile), `md` 768px (tablet), `lg` 1024px (desktop).
- All interactive elements: visible `:focus-visible` ring (not just hover).
- `prefers-reduced-motion: reduce` disables: floating snippet animation, dragon overlay, CoC intro animation, glitch effects, scanline flicker, neon flicker. Theme still swaps; badge still shows without animation.

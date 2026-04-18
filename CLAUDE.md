# Md. Azad Portfolio — Claude Code Rules

## Project Overview

This is a professional portfolio website for Md. Azad, Assistant Manager
at ACI Motors Limited, an EEE engineer specializing in solar energy systems,
inverter/UPS, electrical panels, energy auditing, and project management.
Built with Next.js 16, Shadcn UI v4.3.0, Tailwind CSS, Framer Motion.

---

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Shadcn UI v4.3.0
- Framer Motion (all animations)
- React Three Fiber + Drei (3D elements)
- Spline (hero 3D scene)
- Lenis (smooth scrolling)
- Lucide React (icons)

---

## Design System

### Colors (always use CSS variables, never hardcode)

--bg: #0b0f14 → main background
--surface: #131820 → card backgrounds
--surface2: #1a2232 → elevated surfaces
--accent: #f5a623 → amber, primary CTA, highlights
--accent2: #00c9a7 → teal, secondary highlights
--text: #e8edf5 → primary text
--muted: #7a8a9e → secondary/muted text
--border: rgba(255,255,255,0.07)

### Typography

- Headings: Syne, weight 800, letter-spacing -2px
- Subheadings: Syne, weight 700
- Body: DM Sans, weight 300-500
- Labels/Tags: DM Sans, weight 600, uppercase, letter-spacing 0.1em
- NEVER use Inter, Roboto, Arial or system fonts

### Spacing

- Section vertical padding: minimum 120px (py-28 to py-36)
- Card padding: 1.8rem to 2.5rem
- Grid gaps: 1.5rem minimum

---

## Component Rules (follow for EVERY component)

1. **Dark theme only** — no white or light backgrounds anywhere
2. **Glassmorphism cards** — bg semi-transparent, backdrop-blur-md,
   border border-white/7, rounded-2xl
3. **Every hover state** — no element is static, all interactive
   elements must have hover transitions (0.2s to 0.3s ease)
4. **Framer Motion on everything** — every section uses scroll-triggered
   animations using the variants from /lib/animations.ts
5. **Gradient accents** — use amber-to-teal gradients on borders,
   top highlights, and decorative elements
6. **No plain backgrounds** — sections alternate between --bg and
   --surface, with subtle radial gradients or grid patterns
7. **Mobile first** — every component must be responsive,
   test at 375px, 768px, 1280px

---

## Animation Rules

Use /lib/animations.ts variants always. Rules:

- Spring physics: stiffness 100, damping 15
- Stagger children: 0.08s to 0.1s delay
- Scroll trigger: use whileInView, viewport once:true, margin "-100px"
- Page load: use AnimatePresence for route transitions
- Hover: scale(1.02) to scale(1.05), never more
- Never use linear easing — always spring or ease

---

## File Structure Rules

- All portfolio content → /data/portfolio.ts (single source of truth)
- Reusable animations → /lib/animations.ts
- UI primitives → /components/ui/
- Page sections → /components/sections/
- 3D components → /components/3d/
- Layout (nav, footer) → /components/layout/

---

## SEO Rules

- Every page uses generateMetadata()
- All headings follow H1 → H2 → H3 hierarchy strictly
- H1 only once per page
- Images use next/image with alt text always
- Target keywords: "electrical engineer Bangladesh",
  "solar energy engineer Dhaka", "EEE engineer portfolio"

---

## Code Quality Rules

- TypeScript strict mode — no `any` types
- All components are named exports
- Props always have defined interfaces
- No inline styles — use Tailwind classes or CSS variables
- cn() helper from /lib/utils.ts for conditional classes

---

## What NOT to Do

- Never use default Next.js or Shadcn styling without customization
- Never use purple gradients or generic AI-looking designs
- Never create a component without a hover state
- Never hardcode colors — always use CSS variables
- Never skip mobile responsiveness
- Never build a section without Framer Motion animations
- Never use placeholder Lorem Ipsum — use real content from /data/portfolio.ts

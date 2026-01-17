# CLAUDE.md

## Project

Polyplot landing page for Polymarket Builder Program application.
Domain: polyplot.xyz

## Commands

```bash
npm run dev       # Dev server at localhost:5173
npm run build     # Build to /dist
npm run preview   # Preview build
```

## Tech Stack

React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Framer Motion, Supabase

## Colors

```
Primary: #8B5CF6 (purple) → #06B6D4 (cyan)
Background: #0B0B12 (base), #12121A (card)
Long: #22C55E, Short: #EF4444
Text: #FFFFFF (primary), #A1A1AA (secondary), #71717A (muted)
```

## Code Style

- Functional components with hooks, no class components
- Tailwind utilities, no inline styles
- PascalCase for components: `HeroSection.tsx`
- Section padding: `py-20 px-4`, max width: `max-w-6xl mx-auto`

## Key Patterns

```tsx
// Gradient text
<span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">

// Gradient button
<button className="bg-gradient-to-r from-primary-purple to-primary-cyan text-white rounded-lg">

// Gradient border
<div className="p-[1px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg">
  <div className="bg-bg-card rounded-lg">
```

## Structure

```
src/components/   # HeroSection, SolutionSection, HowItWorksSection, CTASection, Footer
src/assets/       # polyplot-logo.jpg
src/lib/          # supabase.ts
api/              # waitlist.ts (Vercel serverless)
```

## Notes

- Logo is JPEG: `/src/assets/polyplot-logo.jpg`
- Waitlist form POSTs to `/api/waitlist`
- Env vars need `VITE_` prefix for client access
- X link: https://x.com/0xPolyplot

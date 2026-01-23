# CLAUDE.md

## Project

Polyplot landing page. Domain: polyplot.xyz

## Commands

```bash
npm run dev       # localhost:5173
npm run build     # Build to /dist
```

## Tech Stack

React, TypeScript, Vite, Tailwind CSS, Lucide React, Framer Motion

## Colors

```
Brand gradient: #8B5CF6 (purple) → #06B6D4 (cyan)
Background: #0B0B12 (base), #12121A (card)
Long: #FE9508 (amber)
Short: #8B5CF6 (purple)
Text: #FFFFFF, #A1A1AA, #71717A
```

## Code Style

- Functional components, Tailwind utilities
- PascalCase components: `HeroSection.tsx`
- Section padding: `py-20 px-4`, max: `max-w-6xl mx-auto`

## Patterns

```tsx
// Gradient text
<span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">

// Long button (amber)
<button className="bg-long text-white">Buy Long 👍</button>

// Short button (purple)  
<button className="bg-short text-white">Buy Short 👎</button>
```

## Structure

```
src/components/   # HeroSection, SolutionSection, HowItWorksSection, CTASection, Footer
src/assets/       # polyplot-logo.jpg
```

## Links

- X: https://x.com/0xPolyplot

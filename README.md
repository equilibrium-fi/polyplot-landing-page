# Polyplot Landing Page

Advanced Market Analytics for Polymarket - Landing page for the Polymarket Builder Program application.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then fill in your Supabase credentials in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
polyplot-landing-page/
├── src/
│   ├── components/       # React components (HeroSection, SolutionSection, etc.)
│   ├── assets/          # Static assets (images, logos)
│   ├── lib/             # Utility libraries (Supabase client)
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── api/                 # Vercel serverless functions
│   └── waitlist.ts      # Waitlist API endpoint
├── public/              # Public static files
└── index.html           # HTML template
```

## Color Palette

- **Primary Purple**: #8B5CF6
- **Primary Cyan**: #06B6D4
- **Background Base**: #0B0B12
- **Background Card**: #12121A
- **Background Elevated**: #1A1A24
- **Long (Green)**: #22C55E
- **Short (Red)**: #EF4444

## Links

- **Website**: polyplot.xyz
- **Twitter**: [@0xPolyplot](https://x.com/0xPolyplot)

## License

All rights reserved.

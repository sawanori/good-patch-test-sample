# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (flat config with next/core-web-vitals + typescript)
```

## Architecture

This is a Next.js 16 project using the App Router with React 19 and Tailwind CSS v4.

**Key files:**
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Home page
- `app/globals.css` - Global styles using Tailwind v4 `@import "tailwindcss"` syntax with CSS custom properties for theming

**Path alias:** `@/*` maps to the project root (configured in tsconfig.json)

**Styling:** Tailwind CSS v4 with PostCSS. Theme variables defined in `globals.css` using `@theme inline` directive.

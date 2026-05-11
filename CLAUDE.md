@AGENTS.md

# BangunTech — Company Profile Website

Landing page company untuk **BangunTech**, divisi teknologi dari The Pitch Creative Media. Menyediakan jasa solusi teknologi untuk bisnis Indonesia: Smart Security, SEO, CCTV AI, AutoPost AI, Software Development, dan Consulting.

## Tech Stack

- **Framework:** Next.js 16.2.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Font:** Inter (via next/font)

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout (navbar + footer + WA)
│   ├── globals.css       # Base styles, Tailwind, animations
│   ├── icon.svg          # Custom favicon
│   ├── layanan/          # Services listing + [slug]/ detail
│   ├── harga/            # Pricing + FAQ
│   ├── tentang/          # About + team
│   ├── studi-kasus/      # Case studies with filter
│   ├── blog/             # Blog list
│   └── kontak/           # Contact form
├── components/       # Shared components
│   ├── Navbar.tsx    # Fixed top nav with dropdown
│   ├── Footer.tsx    # Dark footer with columns
│   ├── Card.tsx      # Reusable card wrapper
│   ├── Btn.tsx       # Primary/secondary/outline buttons
│   ├── Badge.tsx     # Pill badge
│   ├── SectionHead.tsx  # Section title + subtitle
│   └── Divider.tsx   # Gradient divider
├── data.ts          # All content (services, cases, blog, team, logo)
└── public/
    └── logo.svg     # Brand logo SVG
```

## Design Tokens

Defined in `src/data.ts` as `C` object:

| Token | Value | Usage |
|-------|-------|-------|
| `blue` | `#1A6FFF` | Primary brand |
| `cyan` | `#00B4FF` | Secondary brand |
| `dark` | `#0A1628` | Dark bg (footer) |
| `text` | `#1A2B42` | Body text |
| `textSub` | `#4A6080` | Secondary text |
| `textMut` | `#8BA0BA` | Muted text |
| `border` | `#DDE6F5` | Borders |

Each service has its own accent color: blue, green, purple, amber, pink, blue.

## Spacing Convention (applied 2026-05-11)

Responsive mobile-first approach:

- **Card padding:** `p-7` desktop, `p-6` mobile (`max-md:`)
- **Grid gaps:** `24px` (`gap-6`) across all grids
- **Section padding:** `py-24` desktop, `py-16` mobile
- **Body text:** minimum `14px`, `line-height: 1.7`
- **Section header → content:** `60px` desktop, `40px` mobile
- All pages use `max-w-[1200px] mx-auto` container

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero with CTA, services grid, process steps, case studies, stats |
| `/layanan` | 6 service listings with prices |
| `/layanan/[slug]` | Per-service detail with features & pricing |
| `/harga` | 3 pricing tiers + FAQ accordion |
| `/tentang` | Company story, vision/mission, team, TPC Media |
| `/studi-kasus` | Filterable case studies grid |
| `/blog` | Featured article + blog grid + subscribe |
| `/kontak` | Contact info + inquiry form |

## Key Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
```

# Spacing & Responsive Design — BangunTech

## Overview

Improve visual spacing and implement mobile-first responsive design across all BangunTech pages. Address user feedback that elements are too tightly packed and readability suffers, especially on mobile.

## Pages Affected

- Home (`/`): Hero, Services grid, Process cards, Case studies, CTA
- Services (`/layanan`): Service list
- Services detail (`/layanan/[slug]`)
- Pricing (`/harga`): Pricing tiers, FAQ
- About (`/tentang`): Story, Team, CTA
- Case Studies (`/studi-kasus`): Filter, cards, CTA
- Blog (`/blog`): Featured, grid, subscribe
- Contact (`/kontak`): Contact info, form
- Shared: Navbar, Footer

## Changes

### Card & Grid Spacing

| Element | Before | After |
|---------|--------|-------|
| Service grid gap | 18px | 24px |
| Card internal padding | p-7 (28px) | p-8 (32px) desktop, p-6 (24px) mobile |
| Icon → title gap | 14px | 20px |
| Title → desc gap | 8px (mb-2) | 12px (mb-3) |
| Process cards gap | 18px | 24px |
| Case study grid gap | 18px | 24px |
| Pricing grid gap | 20px | 24px |
| Blog card gap | 20px | 24px |
| Footer col gap | 48px | 48px desktop, 32px mobile |

### Section Vertical Spacing

| Element | Before | After |
|---------|--------|-------|
| Section padding Y | py-24 (96px) | py-24 desktop, py-16 (64px) mobile |
| SectionHead → konten gap | 60px | 60px desktop, 40px mobile |
| Hero padding top | pt-[110px] | pt-[120px] |
| Hero stats bar | py-7 (28px) | py-8 (32px) |
| CTA padding | px-12 | px-6 mobile, px-12 desktop |
| Footer padding top | 72px | 72px desktop, 48px mobile |

### Typography Readability

| Element | Before | After |
|---------|--------|-------|
| Body text minimum | 13.5px | 14px |
| Body line-height | 1.65 | 1.7–1.8 |
| Card title size | 18px | 19px |
| Stat label size | 12px, mt-[6px] | 13px, mt-[8px] |
| Stat label font-weight | semibold (600) | bold (700) |

### Mobile-First Responsive

- All grids use mobile-first `grid-cols-1` with responsive breakpoints
- Stats grid: `grid-cols-2` on mobile (from `grid-cols-4`), `grid-cols-4` on `lg`
- Service list: `max-md:grid-cols-1` for stacked layout
- Featured blog: `max-md:grid-cols-1` for stacked layout
- Contact page: `max-md:grid-cols-1` for stacked layout
- All section paddings use responsive overrides
- Card min-width adjusted from 340px/380px to 300px for smaller screens

### Service Detail Page

- Increase feature list gap from 10px to 14px
- Increase CTA button padding
- Add more breathing room between sections

### Navbar

- Increase mobile menu item padding from py-[14px] to py-4
- Add more gap between nav items in desktop

### Footer

- Footer grid: `max-lg:grid-cols-2` → add `max-sm:grid-cols-1` breakpoint
- Increase link gap from mb-[11px] to mb-3
- Social icons: increase from 34px to 36px

## Implementation Notes

- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) consistently
- All changes are CSS/spacing only — no structural DOM changes
- No new components needed
- Approximate total: ~80-100 line edits across all files

## Verification

- Open each page in browser at 375px, 768px, 1024px, 1440px
- Verify no horizontal scroll on mobile
- Verify all interactive elements still work
- Verify text contrast is sufficient

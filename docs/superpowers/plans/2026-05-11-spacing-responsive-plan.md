# Spacing & Responsive Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix tight spacing across all BangunTech pages and make every page responsive mobile-first.

**Architecture:** Pure CSS/spacing changes — no DOM restructure, no new components. Edit each page file at the Tailwind class level and update globals.css for base typography.

**Tech Stack:** Next.js 16, Tailwind CSS v4, TypeScript

**Key files to modify:**
- `src/app/globals.css` — base body text size, line-height
- `src/app/page.tsx` — home page
- `src/app/layanan/page.tsx` — services listing
- `src/app/layanan/[slug]/page.tsx` — service detail
- `src/app/harga/page.tsx` — pricing
- `src/app/tentang/page.tsx` — about
- `src/app/studi-kasus/page.tsx` — case studies
- `src/app/blog/page.tsx` — blog
- `src/app/kontak/page.tsx` — contact
- `src/components/Card.tsx` — card component
- `src/components/SectionHead.tsx` — section header
- `src/components/Footer.tsx` — footer
- `src/components/Navbar.tsx` — navbar

---

### Task 1: Base Typography & SectionHead

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/SectionHead.tsx`

- [ ] **Step 1: Update globals.css — increase body line-height**

Edit `src/app/globals.css`:
```
Old: color: #1A2B42;
      font-family: "Inter", -apple-system, sans-serif;
New: color: #1A2B42;
      font-family: "Inter", -apple-system, sans-serif;
      line-height: 1.7;
```

- [ ] **Step 2: Update SectionHead — increase bottom margin on mobile**

Edit `src/components/SectionHead.tsx`. Find: `mb-[60px]`. Change to: `mb-[60px] max-md:mb-10`.

Edit the subtitle `<p>`: change `leading-[1.7]` to `leading-[1.75]`.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css src/components/SectionHead.tsx
git commit -m "fix: increase base line-height and section spacing"
```

---

### Task 2: Card Component — More Internal Padding

**File:**
- Modify: `src/components/Card.tsx`

- [ ] **Step 1: Increase card padding**

Edit `src/components/Card.tsx`. Find `className="bg-white rounded-[16px] p-7 transition-all duration-[0.25s]"`. Change `p-7` to `p-7 max-md:p-6`.

- [ ] **Step 2: Commit**

```bash
git add src/components/Card.tsx
git commit -m "fix: increase card internal padding"
```

---

### Task 3: Home Page — Hero, Stats, Service Tags

**File:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Hero — increase top padding and spacing**

Find `pt-[110px]`. Change to `pt-[120px]`.

Find `gap-[72px]`. Change to `gap-[72px] max-lg:gap-10`.

Find `mb-5` (under the hero left column, status bar). Change to `mb-6`.

Find `gap-3 flex-wrap mb-[44px]` (CTA buttons). Change `mb-[44px]` to `mb-12`.

- [ ] **Step 2: Service tags — more spacing between pills**

Find `gap-2 flex-wrap` (service tags row). Change to `gap-3 flex-wrap`.

- [ ] **Step 3: Stats bar — more vertical padding**

Find `py-7 text-center`. Change to `py-8 text-center`.

Find `mt-[6px]` inside the stats items. Change to `mt-[8px]`.
Find `text-[12px]` and make it `text-[13px] max-sm:text-[12px]` (stat label).

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: improve home page hero and stats spacing"
```

---

### Task 4: Home Page — Services & Process Sections

**File:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Services grid — increase gap**

Find `gap-[18px]` in the services grid (line ~285). Change to `gap-6`.

- [ ] **Step 2: Service card internal gaps**

Find `mb-[14px]` (between icon+badge row and content). Change to `mb-5`.
Find `mb-2` (between h3 and p). Change to `mb-3`.
Find `mb-4` (between p and bottom bar). Change to `mb-5`.
Find `pt-4` (divider top padding). Change to `pt-5`.

- [ ] **Step 3: Process section — increase grid gap**

Find `gap-[18px]` in process section (line ~360). Change to `gap-6`.

- [ ] **Step 4: Process icon spacing**

Find `mb-[18px]` (between circle number and icon). Change to `mb-5`.
Find `mb-3` (icon to h3). Change to `mb-4`.
Find `mb-2` (h3 to p). Change to `mb-3`.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: improve services and process section spacing"
```

---

### Task 5: Home Page — Case Studies & CTA

**File:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Case study grid — increase gap**

Find `gap-[18px] mb-9` in case studies section. Change to `gap-6 mb-10`.

- [ ] **Step 2: Case study internal spacing**

Find `mb-[10px]` (tag line). Change to `mb-3`.
Find `mb-3` (tag to h3). Change to `mb-4`.
Find `mb-6` (excerpt to stats). Change to `mb-7`.

- [ ] **Step 3: CTA section — responsive padding**

Find `px-12` in CTA section wrapper. Change to `px-6 max-md:px-6 md:px-12`.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: improve case study and CTA spacing"
```

---

### Task 6: Services Listing Page

**File:**
- Modify: `src/app/layanan/page.tsx`

- [ ] **Step 1: Grid gap — more breathing room**

Find `gap-7` in the services listing grid (line ~38). Change to `gap-8`.

- [ ] **Step 2: Card internal spacing — service list items**

Find `p-9` in the card style. Change to `p-10 max-md:p-7`.

Find `gap-7` on the card grid. Change to `gap-8 max-md:gap-5`.

Find `mb-2` (subtitle row to h2 gap). Change to `mb-3`.
Find `mb-2` (h2 to desc gap). Change to `mb-3`.

Find `mt-[14px]` (target label). Change to `mt-5`.

Find `mb-[14px]` (price btn gap). Change to `mb-5`.

- [ ] **Step 3: Commit**

```bash
git add src/app/layanan/page.tsx
git commit -m "fix: improve services listing page spacing"
```

---

### Task 7: Service Detail Page

**File:**
- Modify: `src/app/layanan/[slug]/page.tsx`

- [ ] **Step 1: Read and analyze current spacing**

Read `src/app/layanan/[slug]/page.tsx` to understand current structure.

- [ ] **Step 2: Increase feature list gap**

Find `gap-[10px]` or similar in feature lists. Change to `gap-4` (or `gap-3` if `gap-4` is too much in context).

- [ ] **Step 3: Increase section-to-section gap**

Look for `mb-[72px]` or section separators. Increase by ~25%.

- [ ] **Step 4: Commit**

```bash
git add src/app/layanan/\[slug\]/page.tsx
git commit -m "fix: improve service detail page spacing"
```

---

### Task 8: Pricing Page

**File:**
- Modify: `src/app/harga/page.tsx`

- [ ] **Step 1: Pricing grid gap**

Find `gap-5` in pricing tier grid. Change to `gap-6`.

- [ ] **Step 2: Pricing card internal spacing**

Find `p-8`. Change to `p-8 max-md:p-6`.

Find `mb-6` (top section). Change to `mb-8`.
Find `pb-6 mb-6` (price section). Change to `pb-8 mb-8`.
Find `mb-7` (features list). Change to `mb-8`.

Find `py-[9px]` in feature items. Change to `py-3`.

- [ ] **Step 3: FAQ spacing**

Find `p-5 px-6` in FAQ items. Change to `p-6`.

Find `mb-2` (question to answer gap). Change to `mb-3`.

- [ ] **Step 4: Commit**

```bash
git add src/app/harga/page.tsx
git commit -m "fix: improve pricing page spacing"
```

---

### Task 9: About Page

**File:**
- Modify: `src/app/tentang/page.tsx`

- [ ] **Step 1: Story section — more spacing**

Find `gap-14 mb-20`. Change to `gap-16 mb-24 max-md:mb-16 max-md:gap-10`.

Find `mt-[14px] mb-4` (story h2). Change to `mt-4 mb-5`.

Find `mb-4` then `mb-6` (paragraphs). Change to `mb-5` then `mb-8`.

Find `gap-8` (stats row). Change to `gap-10`.

- [ ] **Step 2: Team grid — card spacing**

Find `gap-[18px]`. Change to `gap-6`.

Find `py-4` (vision items). Change to `py-5`.
Find `gap-[14px]`. Change to `gap-5`.

Find `mb-4` (avatar to name). Change to `mb-5`.
Find `mb-1` (name to role). Change to `mb-2`.
Find `mb-[10px]` (role to bio). Change to `mb-4`.

- [ ] **Step 3: TPC CTA section**

Find `p-[44px_40px]`. Change to `p-10 max-md:p-7`.
Find `gap-6`. Change to `gap-8`.

- [ ] **Step 4: Commit**

```bash
git add src/app/tentang/page.tsx
git commit -m "fix: improve about page spacing"
```

---

### Task 10: Case Studies Page

**File:**
- Modify: `src/app/studi-kasus/page.tsx`

- [ ] **Step 1: Grid gap**

Find `gap-5` in case study grid. Change to `gap-6`.

- [ ] **Step 2: Card internal spacing**

Find `mb-[14px]`. Change to `mb-5`.

Find `mb-[6px]` (tag to title). Change to `mb-[8px]`.

Find `mb-4` (excerpt). Change to `mb-5`.
Find `mb-5` (detail box). Change to `mb-6`.

Find `p-[14px_16px]` (detail box). Change to `p-5`.

Find `mb-4` (stats). Change to `mb-5`.
Find `pt-[14px]` (bottom bar). Change to `pt-5`.

- [ ] **Step 3: CTA bottom section**

Find `p-[44px_40px]`. Change to `p-10 max-md:p-7`.

- [ ] **Step 4: Commit**

```bash
git add src/app/studi-kasus/page.tsx
git commit -m "fix: improve case studies page spacing"
```

---

### Task 11: Blog Page

**File:**
- Modify: `src/app/blog/page.tsx`

- [ ] **Step 1: Featured article spacing**

Find `p-10 mb-12`. Change to `p-10 max-md:p-7 mb-12 max-md:mb-8`.
Find `gap-8`. Change to `gap-10 max-md:gap-6`.

Find `mb-[14px]`. Change to `mb-5`.
Find `mb-6` (excerpt). Change to `mb-7`.

- [ ] **Step 2: Blog grid cards**

Find `gap-5` in blog grid. Change to `gap-6`.

Find `mb-3` (badge date). Change to `mb-4`.
Find `mb-[10px]` (title to excerpt). Change to `mb-4`.
Find `mb-4` (excerpt). Change to `mb-5`.
Find `pt-[14px]` (bottom bar). Change to `pt-5`.

- [ ] **Step 3: Subscribe section**

Find `gap-[10px]`. Change to `gap-3`.

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "fix: improve blog page spacing"
```

---

### Task 12: Contact Page

**File:**
- Modify: `src/app/kontak/page.tsx`

- [ ] **Step 1: Layout gap**

Find `gap-14`. Change to `gap-16 max-md:gap-10`.

Find `mb-8` (description). Change to `mb-10`.
Find `gap-4` (contact items). Change to `gap-5`.

- [ ] **Step 2: Form card spacing**

Find `p-[40px_36px]`. Change to `p-10 max-md:p-7`.

Find `mb-6` (form title). Change to `mb-8`.

Find `gap-3 mb-3` (input rows). Change to `gap-4 mb-4`.

Find `mb-5` (textarea). Change to `mb-6`.

Find `mb-[6px]` (labels). Change to `mb-2`.

- [ ] **Step 3: Commit**

```bash
git add src/app/kontak/page.tsx
git commit -m "fix: improve contact page spacing"
```

---

### Task 13: Navbar — More Spacious Mobile Menu

**File:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Mobile menu item padding**

Find `py-[14px]` in mobile nav links. Change to `py-4`.

- [ ] **Step 2: Service item gap in mobile menu**

Find `gap-2` in mobile service items. Change to `gap-3`.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "fix: improve navbar mobile menu spacing"
```

---

### Task 14: Footer — More Space

**File:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Footer top padding and grid gap**

Find `pt-[72px]`. Change to `pt-[72px] max-md:pt-12`.

Find `gap-12 mb-14`. Change to `gap-12 max-md:gap-8 mb-14 max-md:mb-10`.

- [ ] **Step 2: Link spacing**

Find `mb-[11px]`. Change to `mb-3`.

- [ ] **Step 3: Social icon size**

Find `w-[34px] h-[34px]`. Change to `w-9 h-9`.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "fix: improve footer spacing"
```

---

### Task 15: Build Verification

- [ ] **Step 1: Run build to verify no errors**

```bash
npm run build
```
Expected: Successful build, no TypeScript or lint errors.

- [ ] **Step 2: Final commit if needed**

```bash
git add -A
git commit -m "chore: final spacing and responsive adjustments"
```

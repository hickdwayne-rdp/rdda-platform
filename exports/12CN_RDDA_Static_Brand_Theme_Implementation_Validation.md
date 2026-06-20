# 12CN — RDDA Static Brand Theme Implementation + Validation

## Status

Implementation checkpoint created.

This checkpoint begins the visual identity phase after the static MVP launch sequence and after the RDDA brand assets were added to the repository.

## Source inputs used

- Uploaded RDDA brand board PDF.
- Uploaded brand images now committed under `repo/public/brand/`.
- Prior 12CM brand-board translation plan.
- Existing static site architecture:
  - no CMS
  - no database
  - no auth
  - no forms
  - no API routes
  - no client state or dynamic behavior
  - no `use client`

## Brand assets now available

Repository path:

```text
repo/public/brand/
```

Files:

```text
rdda-main-logo.jpg
rdda-alt-logo-social.png
rdda-brand-board.png
rdda-victoriana-brand-board.jpg
README.md
```

Implementation used:

```text
/brand/rdda-main-logo.jpg
/brand/rdda-alt-logo-social.png
```

The brand-board reference images remain available for visual reference but are not used as page content.

## Files changed

```text
repo/src/app/globals.css
repo/src/components/layout/SiteHeader.tsx
repo/src/components/layout/SiteFooter.tsx
repo/src/components/sections/HomeHeroSection.tsx
```

## Visual implementation summary

### Global theme

The previous warm placeholder palette was replaced with RDDA-aligned colour variables:

```text
--background: #f4f2ef
--foreground: #53565b
--primary: #3f5c58
--primary-soft: #819795
--secondary: #ae7c58
--border: #bbc7c4
--card-muted: #d9d8d6
```

The body background was updated from a flat scaffold background to a soft RDDA-branded gradient using the pale sage/grey palette.

### Header

The shared static header now includes the RDDA alternate logo mark from:

```text
/brand/rdda-alt-logo-social.png
```

The navigation remains static, accessible, and route-based.

### Footer

The shared static footer now uses the RDDA deep green/teal as the footer field and includes the RDDA alternate logo mark.

The informational boundary statement remains intact.

### Homepage hero

The homepage hero now includes the main RDDA logo from:

```text
/brand/rdda-main-logo.jpg
```

The hero now uses RDDA green/teal as the primary heading colour and the warm brown/copper as the accent colour.

## Static-safety validation

No implementation in this checkpoint adds:

- CMS
- database
- auth
- forms
- API routes
- dynamic fetching
- client state
- effects
- `use client`
- route-specific server behavior

All changes are static frontend presentation changes only.

## Required local validation

Run from the app directory:

```powershell
cd C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
npm run lint
npm run build
```

Then return to the repo root:

```powershell
cd ..
git status --short
git log --oneline -5
```

## Browser QA focus

After validation, inspect:

```text
http://localhost:3000/
http://localhost:3000/services
http://localhost:3000/contact
```

Confirm:

- header logo displays correctly
- homepage hero logo displays correctly
- footer logo displays correctly
- contrast is readable
- navigation remains usable on desktop and mobile widths
- all routes continue to load as static pages

## Next recommended checkpoint

After local lint/build and browser review:

```text
12CO — RDDA Static Brand Theme Source Alignment Review + Next Visual Refinement Decision
```

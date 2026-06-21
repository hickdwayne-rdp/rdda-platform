# 12DK — RDDA Full-Site Visual QA Planning

## Status

Planning checkpoint created.

This checkpoint defines the full-site visual QA pass that should happen before the next production deployment decision.

## Current confirmed baseline

Latest validated build state before this planning checkpoint:

- `npm run lint` passed after the postpartum apostrophe escaping fix.
- `npm run build` passed.
- All 19 app routes remained statically prerendered.
- No CMS, database, auth, API routes, forms, booking logic, search/filter behavior, or client-side state was introduced.
- The lifecycle support page polish was implemented and validated.

Latest relevant commits before this checkpoint:

- `f7157a1 Fix postpartum page apostrophe escaping`
- `c89574c Add RDDA lifecycle support page visual polish validation`
- `146c8f8 Add RDDA lifecycle page polish source alignment review`

## Purpose of the full-site visual QA pass

The purpose of the next QA pass is not to add new features.

The purpose is to review the entire static site after the following visual changes:

1. RDDA brand theme application.
2. Homepage visual polish.
3. Global navigation exposure.
4. Footer exposure.
5. Primary interior page polish.
6. Secondary interior page polish.
7. Lifecycle support page polish.
8. CSS-only background and card texture treatment.
9. Doula photo gallery implementation.

This pass should confirm that the site feels consistent, readable, accessible, and production-ready before deployment.

## Pages in scope

### Core public routes

- `/`
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/resources`
- `/faq`
- `/contact`

### Supporting routes

- `/training`
- `/partners`

### Lifecycle/support-area routes

- `/birth`
- `/postpartum`
- `/fertility`
- `/loss`
- `/family-transitions`
- `/end-of-life-grief`

### System route

- `/_not-found`

The Next.js build output also includes `/_not-found`, so the visual QA pass should include a quick check that the site still presents a reasonable not-found page state.

## Visual QA checklist

### 1. Brand consistency

Check that every page uses the RDDA brand system consistently:

- Muted teal/sage backgrounds and accents are consistent.
- Warm copper accents are present but not overused.
- Charcoal text remains readable.
- The visual style feels connected across all pages.
- No page feels like it belongs to a different website.

### 2. Header and navigation

Check:

- Header logo renders correctly.
- Header links remain readable.
- Header links route to the expected pages.
- Navigation spacing is acceptable on desktop and narrower screens.
- No hidden route is accidentally promoted beyond the agreed navigation structure.

### 3. Footer

Check:

- Footer logo/brand treatment still aligns with the rest of the site.
- Footer link groups remain readable.
- Footer links route correctly.
- Footer does not feel too visually heavy after the page texture changes.

### 4. Homepage

Check:

- Hero section remains readable.
- CTA contrast remains fixed and readable.
- Service-area cards still display all six numbered markers.
- Service-area cards link correctly.
- Homepage sections feel balanced after the global texture pass.

### 5. Primary interior pages

Check:

- `/about`, `/services`, `/families`, and `/doulas` feel visually aligned with the homepage.
- Hero/preamble panels do not overpower the content.
- Card spacing is comfortable.
- Text hierarchy is clear.
- The `/doulas` photo gallery renders all portraits.
- Doula names and image paths are correct.
- Cropping is acceptable.
- The doula gallery does not imply booking, matching, profile verification, or directory functionality.

### 6. Secondary interior pages

Check:

- `/resources`, `/faq`, `/contact`, `/training`, and `/partners` feel complete.
- The pages do not feel under-designed compared to primary pages.
- No page suggests forms, registration, booking, applications, or submission workflows that do not exist.
- Contact remains informational only.
- Training remains informational only.
- Partners remains informational only.

### 7. Lifecycle/support-area pages

Check:

- `/birth`, `/postpartum`, `/fertility`, `/loss`, `/family-transitions`, and `/end-of-life-grief` share a consistent visual language.
- The tone is gentle and appropriate.
- Sensitive pages do not feel visually loud or promotional.
- Loss and end-of-life/grief pages remain careful and non-clinical.
- The pages do not imply therapy, counselling, medical, hospice, legal, child-protection, mediation, crisis, or emergency services.
- Boundary language remains visible where appropriate.

### 8. Texture/background readability

Check:

- Background texture remains subtle.
- SectionCard texture remains subtle.
- Text contrast is not reduced by texture.
- No page feels visually noisy.
- The texture does not compete with portraits on `/doulas`.

### 9. Mobile/narrow viewport checks

At minimum, check a narrower browser width for:

- Homepage
- `/doulas`
- `/services`
- `/faq`
- `/loss`
- `/contact`

Confirm:

- Cards stack cleanly.
- Portraits do not distort.
- Text does not overflow.
- Header/footer remain usable.
- Large panels do not create excessive vertical clutter.

### 10. Static safety

Confirm no new implementation introduced:

- CMS
- Payload
- Supabase
- database
- auth
- API routes
- forms
- booking widgets
- dynamic search/filtering
- client state/effects
- `use client`

## Recommended local validation commands

Run from the project root:

```powershell
git status --short
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

## Recommended visual QA method

Open the local site and move through pages in this order:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/birth`
7. `/postpartum`
8. `/fertility`
9. `/loss`
10. `/family-transitions`
11. `/end-of-life-grief`
12. `/resources`
13. `/faq`
14. `/training`
15. `/partners`
16. `/contact`
17. a non-existent path such as `/missing-page-test`

## Expected outcome

If the visual QA pass is clean, the next checkpoint should be:

**12DL — RDDA Full-Site Visual QA Results + Deployment Readiness Decision**

If the visual QA pass finds issues, the next checkpoint should be a targeted fix checkpoint instead of deployment planning.

Potential targeted fix checkpoint examples:

- **12DL-A — RDDA Doula Photo Crop/Spacing Fix**
- **12DL-B — RDDA Texture Contrast Fix**
- **12DL-C — RDDA Lifecycle Page Tone/Spacing Fix**
- **12DL-D — RDDA Navigation/Footer Visual Fix**

## Current decision

Proceed to full-site visual QA before deploying the latest visual updates.

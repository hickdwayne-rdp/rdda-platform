# 12CG — RDDA Final Local Browser QA Planning + Manual Validation Checklist

**Project:** RDDA production implementation project  
**Checkpoint:** 12CG  
**Checkpoint type:** Final local browser QA planning and manual validation checklist  
**Created:** 2026-06-15  
**Commit message:** `Add RDDA final local browser QA checklist`

---

## 1. 12CG Purpose

12CG converts the completed static MVP production-readiness checklist into a practical local browser QA plan.

This checkpoint is review/planning only.

12CG does not modify:

```text
repo/src/app/**/page.tsx
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/SiteHeader.tsx
repo/src/components/layout/SiteFooter.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/components/ui/SectionCard.tsx
```

Checklist confidence: 0.97

---

## 2. Inputs Reviewed

12CG uses the completed production-readiness checkpoint and representative shared layout files:

```text
12CF — RDDA Static MVP Production Readiness Checklist
repo/src/components/layout/SiteHeader.tsx
repo/src/components/layout/SiteFooter.tsx
latest synced production-readiness commit:
  8f3de68 Add RDDA static MVP production readiness checklist
```

12CF confirmed:

```text
static route inventory complete
public route exposure complete
header and footer reviewed
homepage lifecycle links reviewed
/services lifecycle route hub reviewed
lint passed
build passed
19/19 pages generated static
static architecture preserved
content-boundary review passed
accessibility source review passed
```

Source confidence: 0.98

---

## 3. Routes for Manual Browser QA

The local browser QA pass should cover the public route set below.

```text
/
/about
/birth
/contact
/doulas
/end-of-life-grief
/families
/family-transitions
/faq
/fertility
/loss
/partners
/postpartum
/resources
/services
/training
```

The `/_not-found` route is part of the static build output but is not a normal public navigation target.

Route checklist decision: all 16 user-facing public routes should be manually spot-checked before deployment planning is considered closed.

Route confidence: 0.99

---

## 4. Recommended Local QA Setup

Use the development server from the Next.js app directory:

```powershell
cd .\repo
npm run dev
```

Then open the localhost URL displayed by Next.js in a browser.

The QA pass should be done at two viewport widths:

```text
desktop width: normal laptop/monitor width
narrow width: phone-like or narrow browser window width
```

QA setup decision: local browser QA is manual and visual; no source implementation is required unless a blocker is found.

Setup confidence: 0.97

---

## 5. Global Header QA

The shared header should be checked on representative pages and, ideally, on every route.

Header source includes:

```text
Home
About
Services
Families
Doulas
Resources
FAQ
Contact
```

Manual checks:

```text
[ ] header appears once per page
[ ] site name links to /
[ ] header links wrap acceptably on narrow width
[ ] header links remain readable on desktop width
[ ] no horizontal scrolling caused by header
[ ] hover styles are visible enough for mouse users
[ ] keyboard Tab reaches header links in logical order
[ ] focus ring is visible on each header link
[ ] each header link opens the expected route
```

Header QA decision: header is ready for manual browser validation.

Header confidence: 0.98

---

## 6. Global Footer QA

The shared footer should be checked on representative pages and, ideally, on every route.

Footer source includes:

```text
Core links:
  Home
  About
  Services
  Families
  Doulas
  Resources
  FAQ
  Contact

Supporting links:
  Training
  Partners
```

Manual checks:

```text
[ ] footer appears once per page
[ ] footer does not crowd page content
[ ] footer link groups remain readable on desktop width
[ ] footer link groups stack or wrap acceptably on narrow width
[ ] no horizontal scrolling caused by footer
[ ] footer boundary note is visible and readable
[ ] keyboard Tab reaches footer links in logical order
[ ] focus ring is visible on each footer link
[ ] each footer link opens the expected route
```

Footer QA decision: footer is ready for manual browser validation.

Footer confidence: 0.98

---

## 7. Homepage Lifecycle Link QA

The homepage service-area cards should expose the six lifecycle routes.

Manual checks:

```text
[ ] Birth support opens /birth
[ ] Postpartum support opens /postpartum
[ ] Fertility and preconception support opens /fertility
[ ] Pregnancy and infant loss support opens /loss
[ ] Family transitions opens /family-transitions
[ ] End-of-life and grief support opens /end-of-life-grief
[ ] cards are readable on desktop width
[ ] cards stack or wrap acceptably on narrow width
[ ] no card causes horizontal scrolling
[ ] keyboard Tab reaches each card/link in logical order
[ ] focus ring is visible on each card/link
```

Homepage lifecycle QA decision: ready for local browser validation.

Homepage confidence: 0.98

---

## 8. /services Route-Hub QA

The `/services` route hub should expose the same six lifecycle routes as the homepage service-area cards.

Manual checks:

```text
[ ] Birth support opens /birth
[ ] Postpartum support opens /postpartum
[ ] Fertility and preconception support opens /fertility
[ ] Pregnancy and infant loss support opens /loss
[ ] Family transitions opens /family-transitions
[ ] End-of-life and grief support opens /end-of-life-grief
[ ] route-hub section is easy to find on /services
[ ] route-hub cards are readable on desktop width
[ ] route-hub cards stack or wrap acceptably on narrow width
[ ] no card causes horizontal scrolling
[ ] keyboard Tab reaches each route-hub card/link in logical order
[ ] focus ring is visible on each route-hub card/link
```

Services route-hub QA decision: ready for local browser validation.

Services confidence: 0.98

---

## 9. Content Boundary Spot Checks

12CE and 12CF found no blocking source-level boundary issue. Manual QA should still spot-check sensitive pages in browser to confirm that boundary language is visible and the page does not appear to offer unsupported individualized services.

Sensitive route spot checks:

```text
[ ] /birth does not imply clinical, emergency, referral, or booking services
[ ] /postpartum does not imply clinical, mental-health, crisis, referral, or booking services
[ ] /fertility does not imply clinical fertility treatment, counselling, referral, or booking services
[ ] /loss does not imply counselling, crisis, emergency, referral, or individualized care services
[ ] /family-transitions does not imply legal, mediation, custody, counselling, referral, or individualized service pathways
[ ] /end-of-life-grief does not imply hospice, palliative, funeral, estate, counselling, crisis, referral, or individualized service pathways
[ ] footer global informational-only boundary note is visible
```

Boundary QA decision: browser spot checks are required before deployment planning is closed, but no source blocker is identified.

Boundary confidence: 0.97

---

## 10. Accessibility Spot Checks

12CE and 12CF found no blocking source-level accessibility issue. Manual QA should verify basic browser behavior.

Manual checks:

```text
[ ] use Tab from top of homepage through header links
[ ] use Tab through homepage lifecycle cards
[ ] use Tab through /services route-hub cards
[ ] use Tab through footer links
[ ] visible focus indication appears on links/cards
[ ] page can be navigated without mouse for representative routes
[ ] headings appear in a logical visual order
[ ] link text is descriptive enough to understand destination
[ ] no hidden dropdown/menu behavior is present
[ ] no modal, form, or keyboard trap is present
```

Accessibility QA decision: local keyboard/focus validation should be completed before deployment planning is closed.

Accessibility confidence: 0.97

---

## 11. Desktop Visual QA Checklist

For each public route:

```text
[ ] page loads without visible error
[ ] header appears once
[ ] footer appears once
[ ] main content is readable
[ ] spacing looks intentional
[ ] cards/panels align acceptably
[ ] text does not overlap
[ ] no unexpected horizontal scroll
[ ] page feels consistent with RDDA visual system
```

Desktop QA decision: required before deployment planning is closed.

Desktop confidence: 0.96

---

## 12. Narrow/Mobile Visual QA Checklist

For each public route:

```text
[ ] page loads without visible error
[ ] header links wrap acceptably
[ ] page content remains readable
[ ] cards/panels stack acceptably
[ ] footer link groups remain readable
[ ] text does not overlap
[ ] no unexpected horizontal scroll
[ ] tap targets look reasonably usable
```

Narrow-width QA decision: required before deployment planning is closed.

Narrow confidence: 0.96

---

## 13. Defect Classification During Browser QA

Use this classification if issues are found:

```text
blocker:
  broken route
  build/runtime error
  missing page content
  severe layout break
  inaccessible navigation
  unsupported service claim or unsafe boundary issue

minor polish:
  spacing awkward but usable
  wrapping slightly uneven but readable
  copy could be clearer without changing meaning
  non-blocking visual inconsistency

defer:
  CMS content management
  forms
  booking
  referral workflows
  auth
  Supabase/database integration
  advanced animations/interactions
```

Defect decision rule: only blocker-class issues should interrupt deployment planning.

Defect confidence: 0.96

---

## 14. 12CG Decision

12CG confirms:

```text
local browser QA is the correct next operational step
no code implementation is required by this checkpoint
static MVP remains ready for final local browser validation
if manual QA passes, the next step should be Vercel deployment planning
```

12CG decision: ready for user-run local browser QA.

---

## 15. Next Production Decision

The next checkpoint should be:

```text
12CH — RDDA Static MVP Vercel Deployment Planning + Environment Readiness
```

However, if local browser QA reveals a blocker, the next checkpoint should instead be a targeted fix checkpoint for that specific blocker.

Next-step confidence: 0.96

---

## 16. 12CG Final Decision

12CG is complete.

The RDDA static MVP is ready for final local browser QA. If the browser QA checklist passes without blockers, proceed to Vercel deployment planning.
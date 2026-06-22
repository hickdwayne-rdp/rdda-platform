# 12DQ — RDDA Find a Doula Directory Implementation + Validation

## Status

Implemented for local validation.

## Purpose

This checkpoint converts the `/doulas` route from a visual roster/photo-gallery style page into a more useful **Find a Doula** directory using the doula profile information supplied for the RDDA project.

This work is not a public launch handoff. It is a directory feature implementation checkpoint that still requires local lint/build validation and visual review.

## Source inputs

- Existing `/doulas` page and current approved image files in `repo/public/images/doulas/`.
- Uploaded doula profile information containing names, doula-since years, services offered, profile descriptions, business/website names, and associate member listings.
- User instruction: keep current images and add profile information based on matching names.

## Implementation summary

### Files changed

- `repo/src/app/doulas/page.tsx`
- `repo/src/app/doulas/DoulaDirectory.tsx`
- `exports/12DQ_RDDA_Find_A_Doula_Directory_Implementation_Validation.md`

### Public route changed

- `/doulas`

### What changed

- Kept the existing approved image file paths.
- Added static doula profile data directly into the `/doulas` route.
- Matched profile information to image cards by doula name.
- Added a dedicated client component for search and filtering:
  - `repo/src/app/doulas/DoulaDirectory.tsx`
- Added search across:
  - name
  - service text
  - business / website name
  - profile biography text
  - category labels
- Added filter buttons for:
  - All
  - Birth
  - Postpartum
  - Prenatal education
  - Bereavement
  - End-of-life
  - Photography
  - Sibling support
  - Associate
- Preserved the broader site as static and only introduced client-side behavior for the search/filter UI on the directory component.

## Profile matching notes

The following profiles were matched to existing image filenames by name:

- Alysa Allan
- Amber Cavers
- Amber Thibault
- Andria Sahli
- Ashlee Godzic
- Callista Bierkos
- Christa Duquette
- Janelle Allison
- Jessie Alfano
- Kaitlyn Boese
- Kathleen Howard Bjornson
- Laura Gauthier
- Lizzie Cooper
- Mindy Pottruff
- Miranda Allarie
- Stephanie Griffith

The following existing image cards remain as associate or pending-detail entries:

- Alicia England — existing photo retained; uploaded associate listing was for Alicia Beauchamp, so the profile was not merged into Alicia England without confirmation.
- Chelsea Clark — listed as an associate member with provided contact text.
- Shelby Story — listed as an associate member / photography listing.

## Static and feature-boundary notes

This implementation does not add:

- doula login
- profile edit accounts
- admin dashboard
- event request forms
- online training modules
- booking
- payments
- direct messaging
- matching workflow
- profile detail pages
- database dependency
- CMS dependency for this directory phase

The search/filter interaction is intentionally isolated to the directory component.

## Validation required by user

Run from the repository root:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Expected validation result:

- `npm run lint` passes.
- `npm run build` passes.
- All app routes remain buildable.
- `/doulas` appears in the route list.
- Working tree remains clean after pull and validation.

## Visual QA required

After validation, review `/doulas` locally or on the deployment preview/production URL and confirm:

- Existing images display correctly.
- Profile text is matched to the correct names.
- Associate members are acceptable as listed.
- Search works by name, service, business name, and profile terms.
- Filters return expected profiles.
- Long profile cards remain readable on desktop and mobile.
- No private or unapproved information appears.

## Recommended next checkpoint

If lint/build pass:

**12DR — RDDA Find a Doula Directory Source Alignment Review + Portal Scope Decision**

That review should decide whether to proceed to:

- profile data corrections,
- additional contact/website link handling,
- public launch deferral language,
- or a future authenticated doula portal architecture.

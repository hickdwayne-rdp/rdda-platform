# 12BQ — RDDA Homepage Service-Area Card Link Implementation + Validation

**Project:** RDDA production implementation project  
**Checkpoint:** 12BQ  
**Checkpoint type:** Static homepage service-area card link implementation + validation  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA homepage service area card links`

---

## 1. 12BQ Purpose

12BQ implements the 12BP-approved homepage-first service-area link exposure plan.

12BQ updates the homepage lifecycle service-area cards so each existing homepage card links to its completed static service-area route.

12BQ does not implement `/services` route-hub changes.

12BQ does not modify service-area route pages.

12BQ does not create new shared primitives.

Implementation confidence: 0.99

---

## 2. Source Decision Followed

12BQ follows the immediately preceding planning checkpoint:

```text
12BP — RDDA Static Service-Area Navigation Exposure Planning + Source-Aligned Link Architecture
```

12BP approved this implementation direction:

```text
Implement static homepage service-area card links only.
```

Approved implementation target:

```text
repo/src/components/sections/HomeServiceAreasSection.tsx
```

12BP expressly deferred:

```text
/services page route-hub changes
site-wide navigation changes
footer navigation changes
new shared link-card primitive
CMS-driven navigation
```

Source-control confidence: 0.99

---

## 3. Files Changed

12BQ changes only these files:

```text
repo/src/components/sections/HomeServiceAreasSection.tsx
exports/12BQ_RDDA_Homepage_Service_Area_Card_Link_Implementation_Validation.md
```

No route page was changed.

No layout file was changed.

No shared primitive was changed.

No global style file was changed.

No package/configuration file was changed.

Change-scope confidence: 0.99

---

## 4. Homepage Card Link Mapping Implemented

The homepage lifecycle service-area card list now uses a static object array with the 12BP-approved mapping:

| Homepage service-area label | Static href |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

No route names were changed.

No new routes were introduced.

Mapping confidence: 0.99

---

## 5. Implementation Details

`HomeServiceAreasSection.tsx` now:

- imports `Link` from `next/link`
- defines a static `ServiceAreaLink` type
- defines the six service-area labels and hrefs as a static array
- renders each homepage card as one internal `Link`
- preserves the original section heading
- preserves the original card labels
- preserves the original broad informational card paragraph
- adds the simple non-transactional text affordance `Learn more`
- keeps the existing grid layout
- keeps the existing card background, border, and typography token usage
- adds static CSS-only hover/focus affordance

Implementation confidence: 0.99

---

## 6. Accessibility Review

12BQ keeps each homepage service-area card keyboard reachable as a single internal link.

The visible card title remains the service-area label.

The card paragraph remains inside the link so the link context is clear.

The implementation adds focus-visible styling using the existing token system:

```text
focus-visible:ring-[var(--focus-ring)]
focus-visible:ring-offset-[var(--background)]
```

No click handlers were added.

No button elements were used for navigation.

No JavaScript event behavior was introduced.

Accessibility confidence: 0.98

---

## 7. Static Architecture Review

12BQ remains static.

The implementation does not introduce:

- CMS reads
- Payload integration
- Supabase integration
- database reads
- authentication
- authorization
- accounts
- forms
- API routes
- route handlers
- dynamic fetching
- runtime search
- filtering
- sorting
- client state
- effects
- event handlers
- `"use client"`
- booking flows
- intake flows
- referral flows
- matching flows
- payment flows
- individualized recommendations

Static architecture confidence: 0.99

---

## 8. Content Boundary Review

12BQ does not expand homepage service-area content claims beyond route exposure.

The card paragraph remains broad and informational:

```text
Supportive, respectful, and accessible guidance for families navigating important life stages, questions, and support needs.
```

12BQ does not add claims that RDDA provides:

- medical care
- clinical care
- diagnosis
- treatment
- counselling
- therapy
- lactation care
- crisis response
- emergency response
- legal advice
- mediation
- custody advice
- child-protection intervention
- hospice care
- palliative care
- MAID decision support
- funeral arrangements
- estate advice
- benefits advice
- spiritual direction
- advocacy
- booking
- intake
- referral
- matching
- individualized service recommendations

Boundary confidence: 0.99

---

## 9. Source Read-Back Review

The updated `HomeServiceAreasSection.tsx` was read back after implementation.

Read-back confirmed:

- `Link` is imported from `next/link`
- all six hrefs match 12BP
- the homepage section order is untouched
- `/services` was not modified
- no `use client` directive exists
- no route-specific component was created
- no new shared primitive was created
- no forms or event handlers were introduced

Read-back confidence: 0.99

---

## 10. Local Validation Required

Because 12BQ changes a TypeScript/React component, local validation must be run after pulling.

Run from the repository root:

```powershell
git pull
git status --short
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Expected validation result:

```text
npm run lint passes
npm run build passes
/ remains static
all existing routes remain static
working tree remains clean
```

Expected static route set includes:

```text
/
/_not-found
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

Validation confidence: 0.99

---

## 11. 12BQ Completion Status

12BQ status:

- homepage lifecycle service-area cards linked
- approved static route mapping implemented
- `/services` left unchanged
- no service-area route page changed
- no shared primitive created
- no dynamic behavior introduced
- validation checkpoint created

Implementation completion confidence before local validation: 0.98

---

## 12. Next Checkpoint Decision

After local validation passes, the next safe checkpoint should be:

```text
12BR — RDDA Homepage Service-Area Card Link Source Alignment Review + Next Production Decision
```

12BR should review:

- whether 12BQ matches 12BP exactly
- whether homepage links are source-aligned
- whether all linked routes remain static
- whether `/services` should remain deferred or become the next route-hub planning target

Next-step confidence: 0.99

# 12BU — RDDA Services Page Route-Hub Link Implementation + Validation

**Project:** RDDA production implementation project  
**Checkpoint:** 12BU  
**Checkpoint type:** Static route-hub link implementation + validation  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA services page route hub links`

---

## 1. 12BU Purpose

12BU implements the services-page route-hub exposure approved in 12BT.

12BU adds a static lifecycle service-area route-hub section to the existing `/services` page.

12BU does not replace the existing services overview.

12BU does not add a global header.

12BU does not add a footer.

12BU does not create a shared navigation component.

12BU does not create a new shared UI primitive.

12BU does not modify any lifecycle service-area route content.

Implementation confidence: 0.99

---

## 2. Source Inputs Used

12BU used the following project sources:

```text
12BT — RDDA Services Page Service-Area Route-Hub Planning + Source-Aligned Link Architecture
repo/src/app/services/page.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
```

Source confidence: 0.99

---

## 3. Files Changed

12BU changed the following implementation file:

```text
repo/src/app/services/page.tsx
```

12BU added this validation export:

```text
exports/12BU_RDDA_Services_Page_Route_Hub_Link_Implementation_Validation.md
```

No other source files were intentionally modified.

File-scope confidence: 0.99

---

## 4. Implemented Route-Hub Section

12BU inserted the new lifecycle route-hub section after the existing four-card services overview grid and before the existing `A non-medical support role` boundary card.

Final `/services` page order:

```text
Hero / introduction
Existing four-card broad services overview
New lifecycle route-hub section
Existing non-medical support role boundary card
```

This matches the placement approved in 12BT.

Placement confidence: 0.99

---

## 5. Implemented Section Copy

12BU implemented the approved route-hub heading structure:

```text
Lifecycle service areas
Explore support across specific life stages.
These static pages provide more detail about RDDA-recognized support areas while keeping information general, non-medical, and source-aligned.
```

The copy remains informational.

It does not claim booking, referral, matching, intake, clinical support, counselling, crisis response, legal support, hospice support, palliative care, funeral support, or individualized recommendations.

Copy confidence: 0.98

---

## 6. Implemented Static Link Map

12BU reused the approved six-label route map from 12BT and the homepage service-area implementation.

| Link label | Href |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

No alternate route labels were introduced.

No alternate slugs were introduced.

No new lifecycle categories were introduced.

Route-map confidence: 0.99

---

## 7. Static Architecture Confirmation

The implementation remains static.

12BU uses:

```text
PageShell
PageContainer
SectionCard
next/link
local static array
```

12BU does not use:

```text
use client
useState
useEffect
CMS
Payload
Supabase
database queries
API routes
server actions
forms
booking flows
intake flows
dynamic rendering
runtime fetch
```

Static architecture confidence: 0.99

---

## 8. SectionCard Usage Confirmation

12BU did not pass unsupported props to `SectionCard`.

The new route-hub cards are implemented as styled `Link` elements, not as `SectionCard` polymorphic links.

Existing `SectionCard` usage remains children-only.

SectionCard safety confidence: 0.99

---

## 9. Accessibility and Link Behavior Review

The new route-hub section includes:

```text
aria-labelledby="lifecycle-service-areas-heading"
```

The heading has the matching id:

```text
id="lifecycle-service-areas-heading"
```

Each link has visible text through the service-area label and `Learn more` text.

Focus styling uses the existing project token pattern:

```text
focus-visible:ring-[var(--focus-ring)]
focus-visible:ring-offset-[var(--background)]
```

Accessibility confidence: 0.98

---

## 10. Boundary Review

12BU preserves the existing `/services` boundary section:

```text
A non-medical support role
```

The new route-hub section does not weaken that boundary.

12BU does not add claims related to:

```text
medical advice
clinical care
mental-health counselling
crisis intervention
legal advice
custody or mediation support
hospice care
palliative care
MAID guidance
funeral services
spiritual direction
booking
referrals
matching
intake
individualized recommendations
```

Boundary confidence: 0.99

---

## 11. Validation Status

GitHub source read-back was completed after implementation.

Confirmed from source read-back:

```text
repo/src/app/services/page.tsx imports next/link
repo/src/app/services/page.tsx defines a local static lifecycleServiceAreas array
/services includes six approved lifecycle route links
/services preserves the four existing overview cards
/services preserves the final non-medical support role card
/services contains no use client directive
/services contains no forms, API calls, CMS calls, database calls, auth logic, or dynamic rendering logic
```

Local validation still required after sync:

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

Validation expectation:

```text
npm run lint passes
npm run build passes
/services remains static
all existing static routes remain static
working tree remains clean
```

Validation confidence: 0.97

---

## 12. 12BU Decision

12BU is approved as implemented.

The services page now exposes the completed lifecycle service-area route set while preserving the existing overview and non-medical boundary content.

Decision confidence: 0.99

---

## 13. Next Checkpoint

Recommended next checkpoint:

```text
12BV — RDDA Services Page Route-Hub Link Source Alignment Review + Next Production Decision
```

Recommended 12BV scope:

```text
Review /services route-hub links against 12BT and 12BU.
Confirm the six labels and hrefs remain source-aligned.
Confirm /services remains static after local lint/build validation.
Confirm no unsupported service, booking, intake, referral, clinical, counselling, legal, hospice, palliative, funeral, crisis, or individualized claims were introduced.
Decide the next safest production checkpoint after /services route-hub exposure.
```

Next-step confidence: 0.98

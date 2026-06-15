# 12BV — RDDA Services Page Route-Hub Link Source Alignment Review + Next Production Decision

**Project:** RDDA production implementation project  
**Checkpoint:** 12BV  
**Checkpoint type:** Source alignment review + next production decision  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA services page route hub source alignment review`

---

## 1. 12BV Purpose

12BV reviews the `/services` route-hub link implementation completed in 12BU against the approved 12BT planning checkpoint and the static architecture rules used throughout the RDDA production implementation sequence.

12BV is review-only.

12BV does not modify `/services`.

12BV does not modify the homepage.

12BV does not modify any lifecycle service-area route.

12BV does not add global navigation.

12BV does not add a footer.

12BV does not create shared navigation components.

Review confidence: 0.99

---

## 2. Sources Reviewed

12BV reviewed the following project sources:

```text
12BT — RDDA Services Page Service-Area Route-Hub Planning + Source-Aligned Link Architecture
12BU — RDDA Services Page Route-Hub Link Implementation + Validation
repo/src/app/services/page.tsx
User validation output for 12BU lint/build/static route generation
```

Source review confidence: 0.99

---

## 3. 12BT Planning Decision Recap

12BT approved this implementation direction:

```text
Add a separate static lifecycle route-hub section to /services.
Preserve the current four broad overview cards.
Preserve the existing non-medical boundary card.
Reuse the six homepage service-area labels and hrefs.
Do not add global navigation or footer exposure yet.
```

12BV confirms that 12BU followed this decision.

Planning alignment confidence: 0.99

---

## 4. `/services` Source Review

The current `/services` page now imports `next/link` and defines this local static lifecycle route map:

| Link label | Href |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

This exactly matches the approved 12BT link map.

No alternate labels were introduced.

No alternate slugs were introduced.

No additional lifecycle categories were introduced.

Route-map alignment confidence: 0.99

---

## 5. Page Structure Review

12BV confirms the current `/services` page order is:

```text
Hero / introduction
Existing four-card broad services overview
New lifecycle route-hub section
Existing non-medical support role boundary card
```

This matches the placement approved in 12BT and recorded in 12BU.

The existing four-card overview remains present.

The existing `A non-medical support role` boundary card remains present.

No service overview content was replaced by the route-hub implementation.

Structure alignment confidence: 0.99

---

## 6. Static Architecture Review

12BV confirms the 12BU implementation remains static.

The `/services` page uses:

```text
PageShell
PageContainer
SectionCard
next/link
local static array
```

The `/services` page does not use:

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

## 7. SectionCard Safety Review

12BV confirms existing `SectionCard` usage on `/services` remains children-only.

The route-hub cards are implemented as styled `Link` elements, not as unsupported polymorphic `SectionCard` usage.

No unsupported props were passed to `SectionCard`.

SectionCard safety confidence: 0.99

---

## 8. Accessibility and Link Review

12BV confirms the route-hub section includes:

```text
aria-labelledby="lifecycle-service-areas-heading"
```

The section heading includes the matching id:

```text
id="lifecycle-service-areas-heading"
```

Each link includes visible service-area text and a visible `Learn more` affordance.

Focus styling uses the established static token pattern:

```text
focus-visible:ring-[var(--focus-ring)]
focus-visible:ring-offset-[var(--background)]
```

Accessibility confidence: 0.98

---

## 9. Scope and Boundary Review

12BV confirms the new route-hub section does not introduce unsupported service claims.

The route-hub section does not claim:

```text
booking
referral
matching
intake
clinical care
medical advice
mental-health counselling
crisis intervention
legal advice
hospice care
palliative care
funeral support
individualized recommendations
```

The existing non-medical boundary section remains in place and continues to clarify that doula support does not replace medical care.

Boundary confidence: 0.99

---

## 10. User Validation Incorporated

After syncing 12BU, the user ran:

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

Validation result:

```text
npm run lint passed.
npm run build passed.
/services remained static.
All 19 routes were prerendered as static content.
Working tree was clean.
HEAD was acd999e Add RDDA services page route hub links.
```

Validation confidence: 0.99

---

## 11. 12BV Decision

12BV accepts the 12BU implementation as source-aligned and production-sequence complete.

The `/services` page now functions as:

```text
A static services overview page.
A static lifecycle route hub for the six completed service-area pages.
A non-medical scope boundary page.
```

No correction is required before moving to the next checkpoint.

Decision confidence: 0.99

---

## 12. Next Production Decision

With homepage route exposure and `/services` route-hub exposure complete, the next safest production step is to review broader public-route discoverability and decide whether the project should introduce a minimal static global navigation pattern.

Recommended next checkpoint:

```text
12BW — RDDA Minimal Static Global Navigation Planning + Source-Aligned Link Architecture
```

The next checkpoint should be planning-only.

It should review whether a small static header/navigation layer is now appropriate across the public site.

It should not immediately implement a header.

It should not add dynamic menus.

It should not add mobile state, dropdown state, JavaScript-controlled navigation, auth-aware navigation, CMS-driven navigation, or route generation.

It should preserve the static-first architecture.

Next-step confidence: 0.95

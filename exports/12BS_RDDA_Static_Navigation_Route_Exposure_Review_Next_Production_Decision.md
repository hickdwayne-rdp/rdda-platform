# 12BS — RDDA Static Navigation and Route Exposure Review + Next Production Decision

**Project:** RDDA production implementation project  
**Checkpoint:** 12BS  
**Checkpoint type:** Static navigation and route exposure review + next production decision  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA static navigation route exposure review`

---

## 1. 12BS Purpose

12BS reviews the current public static route exposure state after the homepage service-area card link implementation completed in 12BQ and passed source alignment review in 12BR.

12BS is review-only.

12BS does not change homepage code.

12BS does not change `/services`.

12BS does not add a global header.

12BS does not add a footer.

12BS does not change any route page.

12BS does not introduce new shared UI primitives.

Review confidence: 0.99

---

## 2. Source Inputs Reviewed

12BS reviewed the following project sources:

```text
12BO — RDDA Static Service-Area Route Set Completion Review + Next Production Decision
12BP — RDDA Static Service-Area Navigation Exposure Planning + Source-Aligned Link Architecture
12BQ — RDDA Homepage Service-Area Card Link Implementation + Validation
12BR — RDDA Homepage Service-Area Card Link Source Alignment Review + Next Production Decision
repo/src/app/layout.tsx
repo/src/app/page.tsx
repo/src/app/services/page.tsx
repo/src/components/layout/PageShell.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
```

Source confidence: 0.99

---

## 3. Completed Public Static Route Inventory

The currently completed public static route set is:

```text
/
/about
/services
/families
/doulas
/training
/resources
/contact
/partners
/faq
/birth
/postpartum
/fertility
/loss
/family-transitions
/end-of-life-grief
```

The build output after 12BQ confirmed:

```text
Generating static pages using 15 workers (19/19)
```

The route output also confirmed all visible application routes remained static.

Static inventory confidence: 0.99

---

## 4. Current Global Navigation State

The current app does not yet have a global header or global navigation component.

`repo/src/app/layout.tsx` only renders:

```tsx
<body>{children}</body>
```

`repo/src/components/layout/PageShell.tsx` only renders:

```tsx
<div className="min-h-screen">{children}</div>
```

No shared header, nav, menu, footer, or site-wide route list is currently present.

This means global route exposure is intentionally minimal at this phase.

Global navigation review result:

```text
No global navigation currently exists.
```

Review confidence: 0.99

---

## 5. Homepage Route Exposure State

The homepage is currently the primary route exposure surface.

The homepage renders:

```text
HomeHeroSection
HomeServiceAreasSection
HomeWhoRddaSupportsSection
HomeApproachSection
```

The 12BQ implementation updated `HomeServiceAreasSection` so that each lifecycle service-area card links to a completed static route.

Confirmed homepage service-area link map:

| Homepage service-area label | Static href | Exposure status |
| --- | --- | --- |
| Pregnancy & birth support | `/birth` | Exposed from homepage |
| Postpartum support | `/postpartum` | Exposed from homepage |
| Fertility & preconception support | `/fertility` | Exposed from homepage |
| Pregnancy and infant loss support | `/loss` | Exposed from homepage |
| Family transitions | `/family-transitions` | Exposed from homepage |
| End-of-life and grief support | `/end-of-life-grief` | Exposed from homepage |

Homepage service-area route exposure is complete.

Homepage exposure confidence: 0.99

---

## 6. `/services` Route Exposure State

The `/services` page currently exists and is static.

It currently contains four broad informational cards:

```text
Pregnancy and birth support
Postpartum and family support
Fertility, loss, and lifecycle care
Doula and community connection
```

These cards are informational only.

They do not yet link to the completed service-area routes.

The current `/services` page remains useful as a broad services overview, but it is not yet a route hub.

Current `/services` exposure result:

```text
/services exists as a static informational overview.
/services does not yet expose the six completed lifecycle service-area routes.
```

Review confidence: 0.98

---

## 7. Footer Exposure State

No global footer component currently exists.

No footer route exposure is currently present.

Footer review result:

```text
No footer route exposure exists yet.
```

Review confidence: 0.99

---

## 8. Page-Level Exposure State

The lifecycle service-area pages exist as direct static routes.

They are now discoverable from the homepage service-area cards.

The lifecycle route pages are not yet cross-linked from `/services`.

No page-level related-link module, route directory, or internal route hub has been introduced.

This is acceptable for the current static phase because 12BP intentionally approved homepage-first route exposure before broader route-hub work.

Page-level exposure confidence: 0.98

---

## 9. Static Architecture Review

The current navigation exposure state remains static.

No source reviewed in 12BS introduces:

- `"use client"`
- client state
- effects
- event handlers
- forms
- API routes
- route handlers
- CMS reads
- Payload integration
- Supabase integration
- database reads
- authentication
- authorization
- dynamic fetching
- runtime search
- runtime filtering
- runtime sorting
- booking flows
- intake flows
- referral flows
- matching flows
- payments
- accounts

Static architecture result:

```text
Pass
```

Architecture confidence: 0.99

---

## 10. Content and Claim Boundary Review

The current navigation exposure work does not expand RDDA service claims.

Homepage card links use existing lifecycle labels and a static `Learn more` affordance.

No navigation surface reviewed in 12BS claims that RDDA provides:

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

Boundary result:

```text
Pass
```

Boundary confidence: 0.99

---

## 11. Route Exposure Gap Assessment

The current exposure state has one clear remaining gap:

```text
The completed lifecycle route set is exposed from the homepage, but not yet from /services.
```

This is not a defect.

It is the expected result of the staged 12BP homepage-first approach.

A global navigation or footer build would be broader than needed at this moment.

The safer next production step is to plan `/services` as an optional route hub before implementing any changes.

Gap assessment confidence: 0.97

---

## 12. `/services` Route Hub Consideration

The `/services` page is the most natural next place to expose the six completed lifecycle service-area routes because:

- `/services` already exists.
- `/services` is already a services overview.
- `/services` can remain static.
- `/services` can reuse existing route labels and hrefs from 12BP/12BQ.
- `/services` work can be scoped to one route page.
- `/services` route-hub exposure avoids introducing a global header/footer too early.

However, `/services` should not be modified without a planning checkpoint because the current page uses four broad service themes rather than the six homepage lifecycle labels.

A planning step should decide whether to:

- keep the four current overview cards and add a separate lifecycle link section, or
- replace the current four-card structure with the six lifecycle service-area links, or
- preserve the current overview and defer `/services` hub work.

Planning confidence: 0.97

---

## 13. Global Navigation Decision

12BS does not recommend adding a global header/navigation component yet.

Reason:

```text
The project has not yet planned global information architecture, responsive navigation behavior, header/footer structure, or full top-level route prioritization.
```

Adding a global navigation component now would risk expanding the project surface beyond the completed static route exposure phase.

Global navigation should remain minimal until a later dedicated planning checkpoint.

Decision confidence: 0.98

---

## 14. Footer Decision

12BS does not recommend adding a global footer yet.

Reason:

```text
No footer architecture has been planned, and footer route exposure would require broader site-wide layout decisions.
```

Footer work should remain deferred until a later global layout/navigation phase.

Footer decision confidence: 0.98

---

## 15. Source Alignment Result

12BS confirms:

```text
The completed service-area routes are now discoverable from the homepage.
The app has no global header, global navigation, or footer yet.
/services remains a static informational overview, not a route hub.
No dynamic architecture has been introduced.
No regulated-service or individualized-service claims have been introduced.
```

Source alignment result:

```text
Pass
```

Review confidence: 0.99

---

## 16. Next Production Decision

The next production step should be planning-only.

Recommended next checkpoint:

```text
12BT — RDDA Services Page Service-Area Route Hub Planning + Source-Aligned Link Architecture
```

12BT should:

- review the current `/services` page structure
- decide whether `/services` should expose the six lifecycle service-area routes
- decide whether to preserve the current four broad service cards
- decide whether a new static lifecycle link section should be added
- reuse the 12BP/12BQ route labels and hrefs if links are approved
- avoid global header/footer work
- avoid implementation changes
- avoid CMS/API/database/auth/forms/dynamic behavior
- preserve all service and regulated-scope boundaries

Next-step confidence: 0.97

---

## 17. 12BS Final Determination

12BS is complete.

Final determination:

```text
Homepage route exposure phase is complete.
Current global navigation remains intentionally minimal.
/services is the next safest review target for route-hub planning.
Proceed to 12BT.
```

Final confidence: 0.99

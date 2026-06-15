# 12BT — RDDA Services Page Service-Area Route Hub Planning + Source-Aligned Link Architecture

**Project:** RDDA production implementation project  
**Checkpoint:** 12BT  
**Checkpoint type:** Planning only — services page route-hub link architecture  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA services page route hub planning`

---

## 1. 12BT Purpose

12BT plans how the existing static `/services` page should expose the completed lifecycle service-area route set.

12BT is planning-only.

12BT does not modify `/services`.

12BT does not modify the homepage.

12BT does not add a global header.

12BT does not add a footer.

12BT does not add a shared navigation component.

12BT does not implement route links.

12BT does not create new shared UI primitives.

Planning confidence: 0.99

---

## 2. Source Inputs Reviewed

12BT reviewed the following project sources:

```text
12BS — RDDA Static Navigation and Route Exposure Review + Next Production Decision
repo/src/app/services/page.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
```

Source confidence: 0.99

---

## 3. Source-of-Truth from 12BS

12BS determined that:

```text
Homepage route exposure phase is complete.
Current global navigation remains intentionally minimal.
/services is the next safest review target for route-hub planning.
Proceed to 12BT.
```

12BS also identified the remaining route exposure gap:

```text
The completed lifecycle route set is exposed from the homepage, but not yet from /services.
```

12BT accepts that finding as the source-of-truth for this checkpoint.

Source alignment confidence: 0.99

---

## 4. Current `/services` Page Structure

The current `/services` page is static and uses:

```text
PageShell
PageContainer
SectionCard
```

The page currently has:

1. A hero/introduction section.
2. A two-column grid of four broad service overview cards.
3. A final boundary card titled `A non-medical support role`.

The four current overview cards are:

```text
Pregnancy and birth support
Postpartum and family support
Fertility, loss, and lifecycle care
Doula and community connection
```

These four cards are broad service summaries, not route-hub cards.

Current `/services` result:

```text
/services is useful as a static services overview, but it does not yet expose the six completed lifecycle route pages.
```

Review confidence: 0.98

---

## 5. Current Homepage Service-Area Link Map

The homepage service-area section now exposes the completed lifecycle route set using this exact static map:

| Service-area label | Href |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

12BT should reuse this route map.

The `/services` page should not invent alternate route names, alternate destinations, or new lifecycle categories.

Link-map confidence: 0.99

---

## 6. Route-Hub Architecture Options Considered

12BT considered three architecture options.

### Option A — Replace the four existing service overview cards

This would replace the current four-card overview with the six lifecycle route cards.

Result:

```text
Rejected for now.
```

Reason:

The current four-card overview still provides useful broad context. Removing it could narrow the `/services` page too quickly and lose the distinction between broad service education and route-specific lifecycle pages.

### Option B — Keep the four overview cards and add a separate lifecycle route-hub section

This would preserve the current `/services` overview while adding a new static section that links to the six completed lifecycle pages.

Result:

```text
Approved.
```

Reason:

This approach keeps the existing source-aligned overview intact, adds route exposure in a clearly labeled section, and limits implementation scope to one page.

### Option C — Defer `/services` link exposure

This would keep `/services` unchanged.

Result:

```text
Rejected for next step.
```

Reason:

The homepage route exposure phase is complete. `/services` is the safest next route exposure surface because it already exists and already functions as a services overview.

Decision confidence: 0.98

---

## 7. Approved 12BT Planning Decision

12BT approves the following future implementation direction:

```text
Add a separate static lifecycle route-hub section to /services.
Preserve the current four broad overview cards.
Preserve the existing non-medical boundary card.
Reuse the six homepage service-area labels and hrefs.
Do not add global navigation or footer exposure yet.
```

This keeps the implementation small, reviewable, and source-aligned.

Planning decision confidence: 0.99

---

## 8. Approved Future `/services` Section Placement

The future route-hub section should be inserted after the current four-card services overview grid and before the final `A non-medical support role` boundary card.

Approved future page order:

```text
Hero / introduction
Existing four-card broad services overview
New lifecycle route-hub section
Existing non-medical support role boundary card
```

Reason:

This places the lifecycle links after users understand the broad services context, but before the final scope boundary.

Placement confidence: 0.98

---

## 9. Approved Future Section Heading

Approved future section label:

```text
Lifecycle service areas
```

Approved future section heading:

```text
Explore support across specific life stages.
```

Approved future section intro copy:

```text
These static pages provide more detail about RDDA-recognized support areas while keeping information general, non-medical, and source-aligned.
```

This copy is intentionally informational.

It does not claim booking, referral, matching, intake, clinical support, counselling, crisis response, legal support, hospice support, palliative care, funeral support, or individualized recommendations.

Copy confidence: 0.97

---

## 10. Approved Future Link Card Map

The future `/services` route-hub section should use the same six labels and hrefs as the homepage.

| Future `/services` card label | Href |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

No new route labels are approved in 12BT.

No alternate slugs are approved in 12BT.

Route map confidence: 0.99

---

## 11. Approved Future Implementation Pattern

The future 12BU implementation should remain static and may use:

```tsx
import Link from "next/link";
```

The future implementation may define a local static array inside `repo/src/app/services/page.tsx`, such as:

```tsx
const lifecycleServiceAreas = [
  { label: "Pregnancy & birth support", href: "/birth" },
  { label: "Postpartum support", href: "/postpartum" },
  { label: "Fertility & preconception support", href: "/fertility" },
  { label: "Pregnancy and infant loss support", href: "/loss" },
  { label: "Family transitions", href: "/family-transitions" },
  { label: "End-of-life and grief support", href: "/end-of-life-grief" },
];
```

The future implementation should avoid creating a new shared component.

The future implementation should avoid moving this route map into global configuration until global navigation architecture is planned.

Implementation-pattern confidence: 0.98

---

## 12. Approved Future Visual Structure

The future `/services` lifecycle route-hub section should use a simple static grid.

Approved visual pattern:

```text
section
  label / heading / intro text
  grid of six static Link cards
```

The future cards may follow the homepage card pattern or may use `SectionCard` inside `Link` only if valid and accessible.

Because `SectionCard` currently has no polymorphic `as` prop, the safer implementation pattern is one of:

```text
1. Link styled directly as a card, matching the homepage pattern.
2. Link wrapping content with equivalent static card styles.
```

The future implementation should not pass unsupported props into `SectionCard`.

Visual-structure confidence: 0.97

---

## 13. Accessibility Requirements for Future Implementation

The future 12BU implementation should preserve static accessibility basics:

- real anchor navigation through `next/link`
- visible link text
- keyboard focus style
- no click handlers
- no client-side state
- no hover-only meaning
- no nested interactive elements
- no empty links
- no ambiguous `Learn more` link without nearby descriptive context

Each link card should include the service-area label as the primary accessible text.

Accessibility confidence: 0.98

---

## 14. Static Architecture Requirements

The future implementation must not introduce:

- `"use client"`
- client state
- effects
- event handlers
- form submission
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

Static architecture requirement:

```text
All route-hub links must be static links to already-completed static routes.
```

Architecture confidence: 0.99

---

## 15. Content and Claim Boundary Requirements

The future `/services` route-hub section must not expand RDDA service claims.

It must not claim RDDA provides:

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

The existing final `/services` boundary card should remain in place.

Boundary confidence: 0.99

---

## 16. Non-Goals for 12BT and Future 12BU

12BT does not approve any of the following:

```text
Global header implementation
Global navigation implementation
Footer implementation
Dropdown navigation
Mobile menu behavior
Search
Filters
CMS-driven service route data
Route-category configuration files
New shared UI primitives
New service-area routes
Services-page copy expansion beyond route exposure
Booking/referral/intake CTAs
```

The next implementation should remain deliberately narrow.

Non-goal confidence: 0.99

---

## 17. Validation Requirements for Future 12BU

After the future implementation, local validation should include:

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

Expected build result:

```text
/services remains static.
All public application routes remain static.
```

Validation confidence: 0.99

---

## 18. Next Production Decision

The next production step should be implementation + validation.

Recommended next checkpoint:

```text
12BU — RDDA Services Page Route-Hub Link Implementation + Validation
```

12BU should:

- modify only `repo/src/app/services/page.tsx`
- add a static lifecycle route-hub section
- preserve the current four-card overview
- preserve the current non-medical boundary card
- use the six approved labels and hrefs
- use static `next/link` links
- avoid new shared UI primitives
- avoid global header/footer work
- avoid dynamic architecture
- add a validation export
- require lint/build validation

Next-step confidence: 0.99

---

## 19. 12BT Final Determination

12BT is complete.

Final determination:

```text
/services should become a secondary static route hub for the six completed lifecycle service-area pages.
The existing /services overview should be preserved.
A new static lifecycle route-hub section should be added after the current overview cards and before the final scope boundary card.
Proceed to 12BU implementation + validation.
```

Final confidence: 0.99

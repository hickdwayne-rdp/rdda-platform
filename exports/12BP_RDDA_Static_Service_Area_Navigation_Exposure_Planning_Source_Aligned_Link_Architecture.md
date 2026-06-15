# 12BP — RDDA Static Service-Area Navigation Exposure Planning + Source-Aligned Link Architecture

**Project:** RDDA production implementation project  
**Checkpoint:** 12BP  
**Checkpoint type:** Static navigation exposure planning + source-aligned link architecture  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA static service area navigation exposure planning`

---

## 1. 12BP Purpose

12BP plans how the completed static service-area route set should be exposed through site navigation and cross-linking.

12BP follows 12BO, which confirmed the six homepage lifecycle service-area routes are complete, reviewed, and static.

12BP answers these planning questions:

- whether homepage lifecycle service-area cards should become links
- whether `/services` should expose the same six route links now or later
- what labels and hrefs should be used
- what implementation boundaries must be preserved
- what the next safe implementation checkpoint should be

12BP is planning-only.

12BP does not implement navigation links.

12BP does not modify homepage files, route files, shared primitives, global styles, metadata, package files, or configuration files.

Planning confidence: 0.99

---

## 2. Current Repository Context

Latest completed checkpoint entering 12BP:

```text
12BO — RDDA Static Service-Area Route Set Completion Review + Next Production Decision
```

Latest commit entering 12BP:

```text
99c6c96 Add RDDA static service area route set completion review
```

Current status entering 12BP:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- The static service-area route set is complete.
- All six homepage lifecycle service-area themes have route-backed static pages.
- 12BO selected navigation exposure planning as the next safe checkpoint.

Repository context confidence: 0.99

---

## 3. Source Files and Controls Reviewed

Files reviewed for 12BP:

```text
exports/12BO_RDDA_Static_Service_Area_Route_Set_Completion_Review_Next_Production_Decision.md
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/services/page.tsx
repo/src/app/page.tsx
```

Active controls applied:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- 12BO static service-area route-set completion review
- current homepage section order
- current static route architecture
- current `SectionCard` contract

Planning confidence: 0.99

---

## 4. Completed Route Set Available for Link Exposure

12BO confirmed the completed static service-area route set:

| Homepage lifecycle service area | Completed static route |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

12BP confirms these are the only six lifecycle service-area routes approved for immediate route exposure planning.

No new route names are introduced at 12BP.

Route-set confidence: 0.99

---

## 5. Current Homepage Link Exposure State

The current homepage imports and renders the service-area section in the approved frozen order:

```text
HomeHeroSection
HomeServiceAreasSection
HomeWhoRddaSupportsSection
HomeApproachSection
```

The current `HomeServiceAreasSection` renders six service-area cards as static text-only `<article>` elements.

The current service-area source list is:

```text
Pregnancy & birth support
Postpartum support
Fertility & preconception support
Pregnancy and infant loss support
Family transitions
End-of-life and grief support
```

Current homepage finding:

```text
The homepage already has the clearest one-to-one visual map between the six service-area labels and the six completed routes.
```

Homepage-link confidence: 0.99

---

## 6. Current `/services` Link Exposure State

The current `/services` page is a static informational overview page.

It groups service areas broadly as:

```text
Pregnancy and birth support
Postpartum and family support
Fertility, loss, and lifecycle care
Doula and community connection
```

The `/services` page does not currently list all six lifecycle service-area routes as separate cards.

Current `/services` finding:

```text
The /services page is not yet structurally aligned to a direct six-route lifecycle link grid.
```

Because `/services` groups topics differently from the homepage, adding six individual route links there should be planned as a separate route-page refinement after homepage link exposure is implemented and validated.

Services-page confidence: 0.98

---

## 7. Navigation Exposure Options Considered

### Option A — Add links only to homepage service-area cards first

This option changes `HomeServiceAreasSection` so each of the six existing cards links to its corresponding completed static route.

Advantages:

- preserves the frozen homepage section order
- uses the existing one-to-one six-card structure
- keeps implementation small and easy to validate
- avoids restructuring `/services`
- exposes the completed route set where the service-area source language already appears
- supports keyboard users if implemented with accessible anchor elements

Risk level: low.

### Option B — Add links to `/services` first

This option would add route links to the existing `/services` page before homepage cards are linked.

Advantages:

- keeps homepage unchanged
- exposes links on a dedicated services page

Risks:

- current `/services` card structure does not match the exact six-route lifecycle set
- likely requires more content restructuring
- may create duplicate or unclear service hierarchy
- less direct than the homepage lifecycle service-area map

Risk level: medium.

### Option C — Add links to both homepage and `/services` in one implementation

Advantages:

- exposes routes in two places at once

Risks:

- larger implementation surface
- more validation scope
- more opportunity for content drift
- harder to isolate accessibility and visual affordance issues
- may require `/services` restructuring before the homepage link behavior is validated

Risk level: medium-high.

### Option D — Do not expose links yet

Advantages:

- avoids immediate UI changes

Risks:

- completed routes remain hidden from normal user flow
- route set is not discoverable from the source service-area section
- delays integration after route completion

Risk level: medium.

Option review confidence: 0.99

---

## 8. Recommended Link Exposure Decision

12BP recommends:

```text
Approve a future implementation checkpoint that links the six homepage service-area cards to the six completed static service-area routes.
```

The homepage should be implemented first because:

- it already contains the exact six lifecycle service-area labels
- it is the source-aligned service-area entry point
- the existing grid maps directly to the completed route set
- it avoids premature `/services` restructuring
- it keeps the next implementation small, static, and easy to validate

12BP does not approve simultaneous `/services` changes.

12BP defers `/services` link architecture to a later planning or refinement checkpoint after homepage link exposure is implemented and reviewed.

Decision confidence: 0.99

---

## 9. Approved Homepage Link Architecture for Next Implementation

The next implementation checkpoint should update only:

```text
repo/src/components/sections/HomeServiceAreasSection.tsx
```

The existing `serviceAreas` array should be converted from string-only values to a static object array using this approved mapping:

| Label | Href |
| --- | --- |
| Pregnancy & birth support | `/birth` |
| Postpartum support | `/postpartum` |
| Fertility & preconception support | `/fertility` |
| Pregnancy and infant loss support | `/loss` |
| Family transitions | `/family-transitions` |
| End-of-life and grief support | `/end-of-life-grief` |

Recommended static data shape:

```ts
type ServiceAreaLink = {
  label: string;
  href: string;
};

const serviceAreas: ServiceAreaLink[] = [
  { label: "Pregnancy & birth support", href: "/birth" },
  { label: "Postpartum support", href: "/postpartum" },
  { label: "Fertility & preconception support", href: "/fertility" },
  { label: "Pregnancy and infant loss support", href: "/loss" },
  { label: "Family transitions", href: "/family-transitions" },
  { label: "End-of-life and grief support", href: "/end-of-life-grief" },
];
```

The next implementation should not create a new shared primitive unless a future checkpoint separately approves it.

Recommended architecture confidence: 0.99

---

## 10. Approved Accessible Link Behavior

The next implementation should use static links with accessible behavior.

Recommended implementation approach:

- import `Link` from `next/link`
- render each card as a `Link` wrapping the existing visible card content
- preserve the existing card title text as the accessible link text
- preserve the existing descriptive paragraph text inside the link card
- keep all links internal and static
- do not add buttons for simple navigation
- do not add click handlers
- do not add client behavior

Each linked card should be keyboard reachable as one link.

The visible card title should remain the service-area label.

A subtle text affordance may be added, such as:

```text
Learn more
```

But 12BP recommends this be simple and non-transactional.

Do not use labels such as:

```text
Book support
Get matched
Request a referral
Start intake
Apply now
```

Reason:

Those labels imply booking, matching, referral, intake, application, or individualized service flows that are out of scope for the current static site.

Accessibility confidence: 0.99

---

## 11. Visual and Styling Boundaries

The next implementation may preserve the current visual card styling.

Acceptable implementation details:

- keep `rounded-2xl border p-5 shadow-sm`
- preserve CSS variable usage for card background and border
- add `transition` or hover/focus visual affordance if static and CSS-only
- add a visible focus style using the existing token system if needed
- keep grid layout unchanged

Do not introduce:

- animation libraries
- client-only hover logic
- stateful UI
- dropdowns
- accordions
- modals
- menus
- filters
- search
- route-specific components
- new shared UI primitives

Visual confidence: 0.98

---

## 12. `/services` Page Decision

12BP does not approve immediate `/services` page link implementation.

Reason:

The current `/services` page uses broader grouped service descriptions and does not yet mirror the six lifecycle service-area route set.

Future `/services` work should be handled as a separate checkpoint, likely after homepage card links are implemented and reviewed.

Possible future `/services` checkpoint scope:

- decide whether `/services` should become a route hub
- decide whether it should list all six lifecycle service-area routes
- preserve the non-medical support boundary
- avoid booking, intake, referral, matching, or dynamic behavior
- keep implementation static

Services decision confidence: 0.98

---

## 13. Static Architecture Boundaries for Next Implementation

The next implementation must not introduce:

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

The next implementation should remain fully static and compatible with the current app-router static build pattern.

Architecture confidence: 0.99

---

## 14. Boundary and Content Controls

The next implementation should not alter service-area content claims beyond link exposure unless explicitly approved.

The homepage service-area card copy should remain broad and informational.

Do not add claims that RDDA provides:

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

## 15. Implementation Validation Requirements for Next Checkpoint

The next implementation checkpoint should run local validation after pulling:

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

Expected build behavior after implementation:

```text
All existing routes remain ○ Static.
```

The homepage route `/` should remain static.

The linked routes should remain static:

```text
/birth
/postpartum
/fertility
/loss
/family-transitions
/end-of-life-grief
```

Validation confidence: 0.99

---

## 16. Issues Found

No route-exposure blocker was found.

No route rename is recommended.

No completed service-area route is missing.

No new shared primitive is required.

No homepage section-order change is recommended.

No `/services` implementation is recommended at this checkpoint.

Issue-review confidence: 0.99

---

## 17. 12BP Decision

12BP approves this next implementation direction:

```text
Implement static homepage service-area card links only.
```

Approved next implementation target:

```text
repo/src/components/sections/HomeServiceAreasSection.tsx
```

Approved link mapping:

```text
Pregnancy & birth support -> /birth
Postpartum support -> /postpartum
Fertility & preconception support -> /fertility
Pregnancy and infant loss support -> /loss
Family transitions -> /family-transitions
End-of-life and grief support -> /end-of-life-grief
```

Deferred:

```text
/services page route-hub changes
site-wide navigation changes
footer navigation changes
new shared link-card primitive
CMS-driven navigation
```

Next checkpoint selected:

```text
12BQ — RDDA Homepage Service-Area Static Link Implementation + Validation
```

Decision confidence: 0.99

---

## 18. Final 12BP Status

12BP final status:

- navigation exposure planning completed
- current homepage card structure reviewed
- current `/services` page structure reviewed
- six completed service-area route hrefs approved
- homepage-first link implementation approved
- `/services` restructuring deferred
- no implementation changes made
- no route files changed
- no shared primitives changed
- next checkpoint selected: 12BQ

Final confidence: 0.99

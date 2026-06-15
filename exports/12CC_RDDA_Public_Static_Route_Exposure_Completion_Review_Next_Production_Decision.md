# 12CC — RDDA Public Static Route Exposure Completion Review + Next Production Decision

**Project:** RDDA production implementation project  
**Checkpoint:** 12CC  
**Checkpoint type:** Completion review + next production decision  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA public static route exposure completion review`

---

## 1. 12CC Purpose

12CC reviews whether the public static route exposure layer is complete enough for the current static public-site pass.

This checkpoint is review-only.

12CC does not modify:

```text
repo/src/components/layout/SiteHeader.tsx
repo/src/components/layout/SiteFooter.tsx
repo/src/components/layout/PageShell.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/services/page.tsx
route page content
shared UI primitives
```

Review confidence: 0.98

---

## 2. Inputs Reviewed

12CC reviewed the current route exposure system created through the following recent checkpoints:

```text
12BQ — Homepage service-area card links
12BR — Homepage service-area card link source alignment review
12BT — Services page route-hub planning
12BU — Services page route-hub link implementation
12BV — Services page route-hub link source alignment review
12BW — Minimal static global navigation planning
12BX — Minimal static global navigation implementation
12BY — Minimal static global navigation source alignment review
12BZ — Minimal static footer planning
12CA — Minimal static footer implementation
12CB — Minimal static footer source alignment review
```

Current source files reviewed:

```text
repo/src/components/layout/SiteHeader.tsx
repo/src/components/layout/SiteFooter.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/services/page.tsx
```

Source-review confidence: 0.99

---

## 3. Current Public Static Route Set

The latest user-provided local validation after 12CA confirmed:

```text
npm run lint passed
npm run build passed
all 19 app routes remained static
working tree remained clean
HEAD was 5bb125a Add RDDA minimal static footer
```

The static route inventory from that validation remained:

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

12CC does not rerun validation. The next checkpoint should perform a dedicated full static inventory and production-readiness validation review using current source and the latest local validation evidence.

Validation-evidence confidence: 0.98

---

## 4. Header Exposure Review

The minimal static header exposes the core public routes:

```text
/
/about
/services
/families
/doulas
/resources
/faq
/contact
```

This aligns with 12BW and 12BY because the header remains intentionally compact and does not include:

```text
service-area dropdowns
mobile menu state
client-side interactivity
auth-aware links
CMS-driven navigation
booking/intake links
external dependency links
```

The header provides broad entry points into the public site without crowding the top navigation.

Header exposure decision: complete for the current static pass.

Header confidence: 0.99

---

## 5. Footer Exposure Review

The minimal static footer exposes:

Core public links:

```text
/
/about
/services
/families
/doulas
/resources
/faq
/contact
```

Supporting public links:

```text
/training
/partners
```

The footer also contains an informational-only boundary statement that keeps the site inside the static public-information scope.

The footer does not introduce:

```text
forms
booking flows
intake flows
referral workflows
CMS-authored navigation
client state
clinical/counselling/legal/crisis/specialist service pathways
```

Footer exposure decision: complete for the current static pass.

Footer confidence: 0.99

---

## 6. Homepage Lifecycle Route Exposure Review

The homepage service-area section exposes the six lifecycle service routes:

```text
Pregnancy & birth support -> /birth
Postpartum support -> /postpartum
Fertility & preconception support -> /fertility
Pregnancy and infant loss support -> /loss
Family transitions -> /family-transitions
End-of-life and grief support -> /end-of-life-grief
```

This gives visitors a direct lifecycle entry point from the homepage without requiring global navigation expansion.

Homepage exposure decision: complete for the current static pass.

Homepage confidence: 0.99

---

## 7. Services Route-Hub Exposure Review

The `/services` route now includes a dedicated lifecycle route-hub section exposing the same six lifecycle service routes:

```text
Pregnancy & birth support -> /birth
Postpartum support -> /postpartum
Fertility & preconception support -> /fertility
Pregnancy and infant loss support -> /loss
Family transitions -> /family-transitions
End-of-life and grief support -> /end-of-life-grief
```

This preserves the existing services overview while adding a clear structured route hub.

The `/services` route-hub does not introduce:

```text
new service claims
booking calls to action
intake flows
forms
CMS/database dependencies
route-specific client behavior
```

Services exposure decision: complete for the current static pass.

Services route-hub confidence: 0.99

---

## 8. Public Route Exposure Coverage

The current exposure model is intentionally layered:

```text
Header:
  Core public routes and broad visitor pathways.

Footer:
  Core public routes plus supporting Training and Partners links.

Homepage:
  Lifecycle service-area route cards.

/services:
  Lifecycle service-area route hub plus broad services overview.
```

Together these layers provide public access to the current static route set without requiring a complex navigation system.

Coverage confidence: 0.98

---

## 9. Remaining Direct-URL Routes

The following lifecycle pages are intentionally not placed in the global header:

```text
/birth
/postpartum
/fertility
/loss
/family-transitions
/end-of-life-grief
```

They are exposed through:

```text
homepage service-area cards
/services route-hub cards
```

This is the correct balance for the current static pass because the global header remains readable while lifecycle routes remain discoverable.

Remaining direct-URL risk: low.

---

## 10. Static Architecture Review

The public exposure system remains consistent with the static architecture baseline:

```text
no "use client"
no state
no effects
no dropdown/menu behavior
no forms
no API routes
no CMS dependency
no database dependency
no authentication dependency
no booking or intake workflow
```

All route exposure is implemented through static `next/link` links and static arrays in server components.

Static architecture decision: aligned.

Architecture confidence: 0.99

---

## 11. Accessibility Review

The route exposure system includes:

```text
semantic header
semantic footer
primary navigation aria label
footer navigation aria label
keyboard-focus-visible link styling
plain anchor/link behavior via next/link
no hidden interactive menus
no keyboard-trap risk
```

The absence of client-side menu state reduces accessibility risk for the current pass.

Accessibility decision: aligned for static MVP.

Accessibility confidence: 0.97

---

## 12. Content Boundary Review

The route exposure system does not expand RDDA service claims beyond existing static route content.

The footer reinforces the public-information boundary by noting that medical, mental health, legal, crisis, emergency, counselling, hospice, palliative, funeral, estate, booking, intake, referral, or specialized service needs should be directed to qualified local providers or urgent services as appropriate.

Content boundary decision: aligned.

Content-boundary confidence: 0.99

---

## 13. Completion Decision

12CC determines that the public static route exposure layer is complete for the current static public-site pass.

Completed exposure layers:

```text
minimal global header
minimal global footer
homepage lifecycle service-area cards
/services lifecycle route hub
```

No additional public-link implementation is required before full static-site validation.

Completion decision: complete.

---

## 14. Next Production Decision

The next checkpoint should be:

```text
12CD — RDDA Full Static Route Inventory + Production Validation Review
```

12CD should:

```text
review all current app routes
review header/footer/PageShell integration
review homepage and /services route exposure
review route-static constraints
review latest lint/build evidence
confirm the current 19-route static inventory
identify any remaining pre-production risks
avoid implementation changes unless a blocking issue is found
```

12CD should be review-only unless the inventory identifies a specific implementation defect.

Next-step confidence: 0.98

---

## 15. 12CC Final Decision

12CC is complete.

The RDDA public static route exposure layer is complete for the current static public-site pass.

The project can proceed to full static route inventory and production validation review.

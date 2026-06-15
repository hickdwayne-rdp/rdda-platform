# 12BZ — RDDA Minimal Static Footer Planning + Source-Aligned Link Architecture

**Project:** RDDA production implementation project  
**Checkpoint:** 12BZ  
**Checkpoint type:** Planning + source-aligned link architecture  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA minimal static footer planning`

---

## 1. 12BZ Purpose

12BZ plans a minimal static footer for the RDDA public frontend after completion and source review of the minimal static global header.

12BZ is planning-only.

12BZ does not implement a footer.

12BZ does not modify:

```text
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/SiteHeader.tsx
repo/src/app/layout.tsx
route page content
homepage service-area links
/services route-hub links
```

Planning confidence: 0.96

---

## 2. Sources Reviewed

12BZ reviewed the following project sources and decisions:

```text
12BY — RDDA Minimal Static Global Navigation Source Alignment Review + Next Production Decision
12BW — RDDA Minimal Static Global Navigation Planning + Source-Aligned Link Architecture
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/SiteHeader.tsx
```

Source-review confidence: 0.98

---

## 3. Current Shared Layout State

The shared layout currently has a centralized static header through `PageShell`:

```tsx
<div className="min-h-screen">
  <SiteHeader />
  {children}
</div>
```

This confirms the correct integration point for a future footer is also `PageShell`, not individual route files.

Current shared layout pattern:

```text
SiteHeader: present
SiteFooter: absent
PageShell: shared route wrapper
layout.tsx: does not need footer-specific modification
```

Layout-readiness confidence: 0.98

---

## 4. Footer Implementation Target

12BZ approves creating one shared footer component:

```text
repo/src/components/layout/SiteFooter.tsx
```

The footer should then be rendered once through:

```text
repo/src/components/layout/PageShell.tsx
```

Approved future `PageShell` shape:

```tsx
<div className="min-h-screen">
  <SiteHeader />
  {children}
  <SiteFooter />
</div>
```

This preserves centralized layout ownership and avoids editing every static route individually.

Implementation-target confidence: 0.98

---

## 5. Approved Footer Content Scope

The footer should be modest and informational.

Approved footer content:

```text
site name: Red Deer Doula Association
regional phrase: Central Alberta doula support
brief informational-only boundary note
core public navigation links
optional supporting-route links if layout remains compact
```

The footer should not duplicate full route-page content.

The footer should not introduce marketing claims beyond existing static site scope.

Content-scope confidence: 0.96

---

## 6. Approved Footer Link Architecture

The footer may include a compact static link set. The preferred link architecture is two small groups.

### Core links

```text
Home -> /
About -> /about
Services -> /services
Families -> /families
Doulas -> /doulas
Resources -> /resources
FAQ -> /faq
Contact -> /contact
```

### Supporting links

```text
Training -> /training
Partners -> /partners
```

The lifecycle service-area routes should not be added individually to the footer in 12CA unless the footer is explicitly re-planned.

Lifecycle route discovery should remain primarily through:

```text
Homepage service-area cards
/services route-hub section
```

This avoids turning the footer into a large sitemap and preserves the minimal static navigation strategy.

Link-architecture confidence: 0.96

---

## 7. Boundary Language Plan

The footer should include a concise informational-only note.

Approved boundary intent:

```text
RDDA provides public information and community-facing doula association resources.
Individual medical, mental health, legal, crisis, emergency, counselling, hospice, palliative, funeral, estate, booking, intake, referral, or specialized service needs should be directed to qualified local providers or urgent services as appropriate.
```

The final implementation may use shorter wording, but must preserve these boundaries.

Footer boundary language must avoid:

```text
clinical advice
counselling claims
legal guidance
crisis response claims
emergency support claims
booking/intake promises
referral promises
provider matching promises
```

Boundary confidence: 0.97

---

## 8. Static Architecture Requirements

The future footer implementation must remain fully static.

The footer must use:

```text
next/link
local static arrays
server component default behavior
existing CSS tokens and Tailwind utility patterns
```

The footer must not use:

```text
"use client"
React state
React effects
browser APIs
forms
newsletter signup
booking links
intake links
referral workflow
CMS data
Supabase data
Payload data
auth-aware links
API routes
analytics scripts
conditional rendering based on user status
```

Static-architecture confidence: 0.99

---

## 9. Accessibility Requirements

The footer should include accessible landmarks and clear link text.

Approved requirements:

```text
Use semantic <footer> element.
Use visible text links.
Use a nav landmark if grouped navigation links are included.
Use aria-label such as "Footer navigation" for footer nav.
Keep focus-visible ring styles consistent with the header.
Avoid hover-only access patterns.
Avoid JavaScript-required interactions.
```

Accessibility confidence: 0.95

---

## 10. Styling Requirements

The footer should visually relate to the header but remain quieter.

Approved styling direction:

```text
border-top using --border
background using --background or --card if needed
text using --foreground and --muted-foreground
links using --primary hover/focus treatment
max-width matching existing PageContainer/header width pattern
responsive wrapping layout without JavaScript
```

No new design tokens should be introduced.

Styling confidence: 0.95

---

## 11. Non-Goals for 12CA

The next footer implementation checkpoint should not add:

```text
dropdowns
accordions
mobile menu state
newsletter signup
contact form
booking/intake button
provider directory
CMS-driven footer links
social-media icons unless separately planned
legal/privacy pages that do not yet exist
new lifecycle route pages
route content rewrites
```

The footer should be a conservative shared layout addition only.

Non-goal confidence: 0.97

---

## 12. Risk Review

Main risks:

```text
Footer could become too large if it duplicates every route.
Boundary language could become too broad or service-promissory.
Future social/contact additions could introduce external-link or form scope creep.
Footer could accidentally imply booking, intake, or referral availability.
```

Mitigations:

```text
Keep footer links compact.
Keep lifecycle discovery in homepage and /services.
Use informational-only wording.
Avoid forms and booking/intake/referral links.
Implement footer through PageShell only.
Validate lint/build after implementation.
```

Risk confidence: 0.94

---

## 13. 12BZ Decision

12BZ approves a minimal static footer implementation as the next production step.

The footer should:

```text
create SiteFooter.tsx
render SiteFooter through PageShell
include site name and Central Alberta regional positioning
include compact core/supporting public links
include concise informational-only boundary language
remain static and server-rendered
avoid lifecycle-route overcrowding
avoid forms, booking, intake, referral, CMS, auth, API, and client behavior
```

Final decision confidence: 0.97

---

## 14. Next Production Checkpoint

Recommended next checkpoint:

```text
12CA — RDDA Minimal Static Footer Implementation + Validation
```

Expected implementation files:

```text
repo/src/components/layout/SiteFooter.tsx
repo/src/components/layout/PageShell.tsx
exports/12CA_RDDA_Minimal_Static_Footer_Implementation_Validation.md
```

Expected validation:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Next-step confidence: 0.96

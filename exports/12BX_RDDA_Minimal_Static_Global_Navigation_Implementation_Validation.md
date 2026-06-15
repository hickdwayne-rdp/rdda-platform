# 12BX — RDDA Minimal Static Global Navigation Implementation + Validation

**Project:** RDDA production implementation project  
**Checkpoint:** 12BX  
**Checkpoint type:** Static implementation + validation record  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA minimal static global navigation`

---

## 1. 12BX Purpose

12BX implements the minimal static global navigation layer approved in 12BW.

The implementation adds a shared public header that appears across routes through the existing centralized `PageShell` wrapper.

12BX does not implement:

```text
footer navigation
dropdowns
hamburger menu state
mobile menu state
client components
CMS-driven navigation
Payload navigation
Supabase navigation
auth-aware navigation
role-aware navigation
search
forms
booking links
intake links
referral claims
```

Implementation confidence: 0.97

---

## 2. Files Changed

12BX changed the following files:

```text
repo/src/components/layout/SiteHeader.tsx
repo/src/components/layout/PageShell.tsx
exports/12BX_RDDA_Minimal_Static_Global_Navigation_Implementation_Validation.md
```

No route content files were modified.

No lifecycle service-area pages were modified.

No `layout.tsx` change was required.

Change-scope confidence: 0.98

---

## 3. Source-Aligned Implementation Summary

12BW approved a minimal static public header using:

```text
Site name: Red Deer Doula Association
Compact supporting label: Central Alberta doula support
Navigation links: Home, About, Services, Families, Doulas, Resources, FAQ, Contact
```

12BX implemented that approved structure in:

```text
repo/src/components/layout/SiteHeader.tsx
```

The header is rendered once through:

```text
repo/src/components/layout/PageShell.tsx
```

This preserves the existing route architecture by keeping the global header centralized in the layout wrapper already used by public route pages.

Implementation-summary confidence: 0.97

---

## 4. Implemented Navigation Links

The implemented global navigation links are:

| Label | Href | Status |
| --- | --- | --- |
| Home | `/` | Implemented |
| About | `/about` | Implemented |
| Services | `/services` | Implemented |
| Families | `/families` | Implemented |
| Doulas | `/doulas` | Implemented |
| Resources | `/resources` | Implemented |
| FAQ | `/faq` | Implemented |
| Contact | `/contact` | Implemented |

`Partners` was not added to the primary header in 12BX.

Reason:

```text
12BW listed Partners as optional only if the header remained visually simple.
12BX kept the header to the core approved public navigation set to reduce crowding risk.
```

Link-map confidence: 0.96

---

## 5. Lifecycle Route Exposure Boundary

12BX does not place all six lifecycle routes directly into the global header.

The six lifecycle service-area routes remain exposed through:

```text
Homepage service-area cards.
/services lifecycle route-hub section.
```

This matches 12BW's decision to keep the global header compact while preserving source-aligned lifecycle route exposure.

Lifecycle-boundary confidence: 0.97

---

## 6. Static Architecture Review

The new `SiteHeader` component:

```text
uses next/link only
uses a static local navigation array
uses no React state
uses no effects
uses no browser APIs
uses no async data fetching
uses no CMS data
uses no auth state
uses no API calls
contains no use client directive
```

`PageShell` now renders:

```tsx
<div className="min-h-screen">
  <SiteHeader />
  {children}
</div>
```

This keeps the global header static and shared without route-by-route duplication.

Static-architecture confidence: 0.98

---

## 7. Accessibility Review

12BX implements the following accessibility requirements from 12BW:

```text
Visible site-name home link.
Visible text labels for all navigation links.
aria-label="Primary navigation" on the nav element.
Keyboard focus styles on the site-name link.
Keyboard focus styles on each navigation link.
No hover-only access pattern.
No JavaScript-required interaction.
```

A skip link was not implemented in 12BX because 12BW stated it was not required for this checkpoint and could be considered later if the header grows.

Accessibility confidence: 0.95

---

## 8. Styling Review

12BX uses existing project styling patterns and tokens only:

```text
--background
--foreground
--muted-foreground
--primary
--border
--card
--focus-ring
```

No new design tokens were added.

The header uses a compact wrapping navigation pattern instead of a JavaScript-controlled responsive menu.

Styling confidence: 0.95

---

## 9. Source Alignment Against 12BW

| 12BW Requirement | 12BX Result |
| --- | --- |
| Create `SiteHeader` | Completed |
| Use `next/link` | Completed |
| Expose core public routes | Completed |
| Keep lifecycle routes out of global header | Completed |
| Update `PageShell` once | Completed |
| Preserve static rendering | Preserved by implementation; pending local build validation |
| Avoid client components and state | Completed |
| Avoid dropdowns and mobile menu state | Completed |

Source-alignment confidence: 0.98

---

## 10. Validation Status

Repository-level source read-back confirms:

```text
SiteHeader.tsx exists.
PageShell.tsx imports SiteHeader.
PageShell renders SiteHeader above page children.
No route files were changed.
No client component directive was introduced in the changed files.
No interactive menu state was introduced.
```

Local validation still required by Dwayne:

```powershell
npm run lint
npm run build
```

Expected validation result:

```text
lint passes
build passes
all public routes remain static
```

Validation confidence before local run: 0.93

---

## 11. Risk Review

Primary risks introduced by a global header are:

```text
Header crowding on smaller screens.
Accidental route duplication if lifecycle routes are later added globally.
Potential future temptation to add client-state mobile menus.
```

12BX mitigates these risks by:

```text
using a compact wrapping nav
keeping the link set limited to core public routes
leaving lifecycle route discovery in homepage and /services hub
using no dropdowns or mobile menu state
centralizing the header through PageShell
```

Risk confidence: 0.94

---

## 12. Final 12BX Decision

12BX successfully implements the approved minimal static global navigation layer.

The implementation is ready for local validation with:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
```

If validation passes, the next checkpoint should be a source-alignment review of the global navigation implementation and a next production decision.

Final-decision confidence: 0.96

---

## 13. Recommended Next Checkpoint

Recommended next checkpoint:

```text
12BY — RDDA Minimal Static Global Navigation Source Alignment Review + Next Production Decision
```

12BY should verify:

```text
header link scope
PageShell centralization
static build results
no use client introduced
no dropdown/mobile state introduced
all public routes remain static
next production focus after global navigation
```

Next-step confidence: 0.96

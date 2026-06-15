# 12BW — RDDA Minimal Static Global Navigation Planning + Source-Aligned Link Architecture

**Project:** RDDA production implementation project  
**Checkpoint:** 12BW  
**Checkpoint type:** Planning + source-aligned link architecture  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA minimal static global navigation planning`

---

## 1. 12BW Purpose

12BW reviews whether RDDA is ready for a minimal static global navigation layer now that:

```text
Homepage service-area card links are complete.
/services route-hub links are complete.
All six lifecycle service-area routes are implemented and source-reviewed.
The public static route set has stable informational destinations.
```

12BW is planning-only.

12BW does not implement a header.

12BW does not modify `layout.tsx`.

12BW does not modify `PageShell`.

12BW does not modify any route content.

12BW does not introduce a footer.

Planning confidence: 0.96

---

## 2. Sources Reviewed

12BW reviewed the following project sources:

```text
12BV — RDDA Services Page Route-Hub Link Source Alignment Review + Next Production Decision
repo/src/app/layout.tsx
repo/src/components/layout/PageShell.tsx
repo/src/app/page.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/services/page.tsx
```

Source review confidence: 0.98

---

## 3. Current Public Route Exposure State

The current public route exposure pattern is:

```text
Homepage: six lifecycle service-area card links.
/services: six lifecycle service-area route-hub links.
Direct route URLs: all public static route pages are available.
Global header/navigation: not yet present.
Footer navigation: not yet present.
```

This means route exposure is functional, but there is no persistent navigation path across the public website.

Route exposure confidence: 0.98

---

## 4. Current Layout Architecture Review

`repo/src/app/layout.tsx` currently renders:

```tsx
<body>{children}</body>
```

There is no global header, global footer, CMS-driven navigation, or dynamic route shell.

`repo/src/components/layout/PageShell.tsx` currently renders:

```tsx
<div className="min-h-screen">{children}</div>
```

This makes the next navigation decision architectural: the safest implementation path is to introduce a minimal static shared header inside `PageShell`, so existing routes receive the same header without modifying every route file individually.

Layout architecture confidence: 0.97

---

## 5. Approved Navigation Scope

12BW approves planning for a minimal static public header.

Approved public top-level links:

| Label | Href | Rationale |
| --- | --- | --- |
| Home | `/` | Always available landing route. |
| About | `/about` | Public organization information. |
| Services | `/services` | Route hub for lifecycle service areas. |
| Families | `/families` | Existing public audience page. |
| Doulas | `/doulas` | Existing public audience page. |
| Resources | `/resources` | Existing informational resource page. |
| FAQ | `/faq` | Existing public support information. |
| Contact | `/contact` | Existing static contact information route. |

Optional secondary link, if space allows without visual crowding:

| Label | Href | Rationale |
| --- | --- | --- |
| Partners | `/partners` | Existing public community/partner route. |

Primary recommendation: include `Partners` only if the header remains visually simple on desktop widths.

Approved-link confidence: 0.94

---

## 6. Links Not Approved for the Global Header

12BW does not approve placing all six lifecycle routes directly in the global header.

The six lifecycle routes should remain exposed through:

```text
Homepage service-area cards.
/services lifecycle route-hub section.
```

Reason:

```text
Putting all lifecycle routes in the global header would make the header too large.
The /services route already acts as the source-aligned lifecycle hub.
The homepage already exposes lifecycle pathways early in the page.
```

Lifecycle routes remain approved destinations, but not top-level global navigation items.

Scope confidence: 0.96

---

## 7. Explicit Non-Goals

The future navigation implementation must not introduce:

```text
use client
dropdowns
hamburger state
mobile menu state
JavaScript-controlled menus
CMS-driven navigation
Payload navigation
Supabase navigation
auth-aware navigation
role-aware navigation
search
dynamic route generation
server actions
API routes
forms
booking links
intake links
referral claims
```

The future implementation must remain static and accessible.

Non-goal confidence: 0.99

---

## 8. Recommended Component Architecture

Recommended future implementation approach:

```text
Create a small static shared component:
repo/src/components/layout/SiteHeader.tsx
```

Then update:

```text
repo/src/components/layout/PageShell.tsx
```

to render:

```tsx
<div className="min-h-screen">
  <SiteHeader />
  {children}
</div>
```

This keeps global navigation centralized and avoids route-by-route duplication.

Component architecture confidence: 0.96

---

## 9. Recommended Static Header Content

Recommended header content:

```text
Site name: Red Deer Doula Association
Supporting text or compact label: Central Alberta doula support
Navigation links: Home, About, Services, Families, Doulas, Resources, FAQ, Contact
```

Recommended `aria-label`:

```text
Primary navigation
```

Recommended structure:

```text
<header>
  <a href="/">Red Deer Doula Association</a>
  <nav aria-label="Primary navigation">
    static links
  </nav>
</header>
```

Use `next/link`, not plain anchor tags, for internal app routes.

Content confidence: 0.95

---

## 10. Styling Constraints

Future implementation should use existing tokens only:

```text
--background
--foreground
--muted-foreground
--primary
--primary-hover
--border
--card
--focus-ring
```

Future implementation should avoid adding new design tokens unless a later checkpoint approves them.

Future implementation should be visually modest and should not dominate the page hero.

Styling confidence: 0.96

---

## 11. Accessibility Requirements

Future implementation must include:

```text
Visible site-name home link.
Visible text labels for all nav links.
Keyboard-focus styles.
aria-label="Primary navigation" on the nav element.
No hover-only access pattern.
No JavaScript-required interaction.
```

A skip link is not required in 12BX but may be considered later if the header grows.

Accessibility confidence: 0.95

---

## 12. Risk Review

Potential implementation risks:

```text
Too many top-level links may crowd smaller screens.
Adding all lifecycle routes to global navigation would duplicate the /services hub too heavily.
A responsive menu requiring state would break the static-first implementation discipline.
A header inside layout.tsx could bypass current PageShell conventions.
```

Risk mitigation:

```text
Keep lifecycle pages linked through homepage and /services.
Use a compact wrapping nav rather than a JavaScript menu.
Add SiteHeader through PageShell, not through route-by-route duplication.
Do not implement dropdowns or mobile state.
```

Risk confidence: 0.95

---

## 13. 12BW Decision

12BW approves a future minimal static global header implementation.

The implementation should:

```text
Create SiteHeader as a shared static layout component.
Use next/link only.
Expose core public routes.
Keep lifecycle service-area routes available through /services and homepage, not as global top-level links.
Update PageShell to include SiteHeader once for all pages.
Preserve static rendering.
Avoid client components and interactive state.
```

No correction is required before moving to implementation.

Decision confidence: 0.96

---

## 14. Next Production Decision

Recommended next checkpoint:

```text
12BX — RDDA Minimal Static Global Navigation Implementation + Validation
```

The next checkpoint should implement only the approved static header/navigation layer.

It should validate:

```text
npm run lint
npm run build
all public routes remain static
no use client introduced
no dropdown or mobile menu state introduced
PageShell remains the centralized layout wrapper
```

Next-step confidence: 0.96

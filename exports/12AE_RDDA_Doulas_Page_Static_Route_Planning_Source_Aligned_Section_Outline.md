# 12AE — RDDA Doulas Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AE  
**Route planned:** `/doulas`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-13  
**Recommended commit message:** `Add RDDA doulas page static route planning`

---

## 1. 12AE Purpose

This checkpoint plans the `/doulas` static public-facing route only.

The goal of 12AE is to create a source-aligned section outline for the future `/doulas` page while preserving the current static frontend architecture and avoiding any implementation changes.

12AE does not create or modify route files, shared UI primitives, CMS logic, forms, dynamic behavior, or client-side behavior.

---

## 2. Starting Repo State Commands

Run these commands from the RDDA project root:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform"

git status --short

git log --oneline -5
```

Expected starting state from the 12AE handoff:

```text
Working tree clean.
Branch main up to date with origin/main.
Latest commit: 5b18cdc Add RDDA families page source alignment review
```

---

## 3. Current Static Public-Facing Route Set

The completed static public-facing route set entering 12AE is:

1. `/`
2. `/about`
3. `/services`
4. `/families`

12AE does not add `/doulas` to the completed route set because 12AE is planning only.

The completed static public-facing route set remains:

1. `/`
2. `/about`
3. `/services`
4. `/families`

---

## 4. Files and Controls Reviewed for 12AE

### 4.1 Required 12AE Handoff Control

Review this file first:

```text
exports/12AD_RDDA_Families_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AD confirmed that `/families` was source-aligned and static, then selected `/doulas` as the next safe static public-facing route.

### 4.2 Existing Static Route Pattern Files

Review these route files for implementation pattern only:

```text
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
```

These files establish the expected static page structure for the next implementation step:

- server component route
- no `"use client"`
- direct static content
- use existing layout primitives
- use `SectionCard` for repeated content groupings
- avoid route-specific component extraction unless already justified by existing architecture

### 4.3 Shared UI Primitive Boundary

Review:

```text
repo/src/components/ui/SectionCard.tsx
```

`SectionCard` remains the only approved shared UI primitive for this route planning step.

12AE does not propose modifying `SectionCard`.

### 4.4 Relevant Prior Checkpoint Controls

The following prior checkpoints remain active controls for 12AE:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- 12U next static route selection decision
- 12V about page static route planning checkpoint
- 12W about page implementation validation checkpoint
- 12X about page source alignment review and next static route decision
- 12Y services page static route planning and section outline
- 12Z services page implementation validation checkpoint
- 12AA services page source alignment review and next static route decision
- 12AB next static route selection and source-aligned page planning decision
- 12AC families page static route implementation validation checkpoint
- 12AD families page source alignment review and next static route decision

---

## 5. 12AE Static Safety Decision

### Decision

`/doulas` is safe to plan as the next static public-facing route.

### Reasoning

The `/doulas` route can be planned as a static informational page because it can describe RDDA's relationship to doulas, professional connection points, education, community support, and association role without requiring dynamic functionality.

The route can remain static if it avoids:

- individual doula directory listings
- doula profiles
- filtering
- search
- availability
- booking
- matching
- application intake
- account access
- member dashboards
- CMS reads
- database reads
- forms
- API routes
- authentication
- client-side state
- client-side effects
- dynamic rendering

### Confidence

Planning `/doulas` as a static informational route is high confidence because 12AD selected it as the next safe route and the expected page scope can be expressed entirely through static copy and repeated content cards.

---

## 6. `/doulas` Page Intent

The `/doulas` page should serve doulas and doula-adjacent professionals who want to understand RDDA's role, values, community orientation, and future connection pathways.

The page should be informational only.

The route should not imply that the site currently provides:

- a live member portal
- a live doula directory
- a real-time referral system
- a booking tool
- a doula application workflow
- a credential verification system
- a searchable database
- a paid membership checkout

The page may safely communicate that RDDA supports doulas through community, shared visibility, professional connection, education-oriented resources, and lifecycle-informed public information, provided the copy remains general and source-aligned.

---

## 7. Source-Aligned Content Boundaries for `/doulas`

The `/doulas` route should align with the existing RDDA production direction:

- RDDA supports families, doulas, and community members across the lifecycle.
- RDDA is a Central Alberta association context, not a clinical provider system.
- Public-facing content should be welcoming, clear, accessible, and non-technical.
- Content should not overpromise services or functionality that has not been implemented.
- Content should remain suitable for a static MVP route.
- Copy should be grounded in support, connection, education, and community awareness.

The route should not create claims beyond the existing source direction.

---

## 8. Proposed `/doulas` Static Page Sections

### Section 1 — Doulas Page Hero

**Purpose:** Introduce the page and identify doulas as a supported RDDA audience.

**Proposed heading:**

```text
For Doulas
```

**Proposed lead direction:**

RDDA recognizes doulas as part of the care and support network for families across Central Alberta. The page should welcome doulas who are looking for connection, shared visibility, community learning, and alignment with RDDA's lifecycle-informed public support role.

**Static implementation notes:**

- Use static text only.
- Use `PageShell` and `PageContainer`.
- No hero-specific component should be created.
- No dynamic content should be introduced.

---

### Section 2 — How RDDA Supports Doulas

**Purpose:** Explain RDDA's supportive association role for doulas without creating operational claims that require backend systems.

**Possible card topics:**

1. Community connection
2. Shared public education
3. Visibility within a broader support ecosystem
4. Professional encouragement and lifecycle awareness

**Source-aligned framing:**

RDDA can be described as helping doulas connect to a wider community of support and public education. The copy should avoid implying active directory participation, account membership, credentialing, or booking functionality.

**Static implementation notes:**

- Use `SectionCard` for the card group.
- Keep card copy concise.
- Do not create a new shared card component.
- Do not create a route-specific section component.

---

### Section 3 — Doulas in the Lifecycle of Support

**Purpose:** Connect doulas to RDDA's broader lifecycle framing.

**Possible content direction:**

This section should explain that doulas may support people and families through pregnancy, birth, postpartum, reproductive transitions, loss, and other lifecycle experiences, while RDDA's public role is to help make support easier to understand and access.

**Important boundary:**

The page should not present doulas as medical providers unless the source documents explicitly support that. The safest wording should emphasize non-clinical, practical, emotional, informational, and community-based support.

**Static implementation notes:**

- Static explanatory copy only.
- No forms, referrals, matching, or searchable service data.
- `SectionCard` may be used if the section is broken into multiple support contexts.

---

### Section 4 — Shared Values and Community Practice

**Purpose:** Present RDDA's values in a doula-facing context.

**Possible card topics:**

1. Respectful support
2. Inclusive access
3. Community connection
4. Clear public information
5. Collaborative care awareness

**Source-aligned framing:**

The wording should remain broad and values-based. It should not create a code of conduct, formal membership standard, certification requirement, or enforceable professional policy unless those already exist in the source documents and are intended for this route.

**Static implementation notes:**

- Use `SectionCard` for repeatable value statements.
- Keep the content consistent with the tone of `/about`, `/services`, and `/families`.
- Avoid adding a new values component.

---

### Section 5 — Connection Without Directory Functionality

**Purpose:** Carefully acknowledge that `/doulas` is a static informational route, not a live directory or application portal.

**Possible heading:**

```text
A Starting Point for Connection
```

**Proposed content direction:**

This section can explain that RDDA's public site is being developed in stages and that the doulas page provides a clear informational starting point. It should avoid any call to action that requires a form, account, intake, database, or automated workflow.

**Safe call-to-action style:**

- Learn about RDDA's role.
- Understand how doulas fit within RDDA's community support focus.
- Watch for future public updates only if source-aligned and not framed as a live feature.

**Unsafe call-to-action style for 12AE/12AF:**

- Apply now.
- Join the directory.
- Create your profile.
- Book a consult.
- Search for doulas.
- Submit your information.
- Log in.

**Static implementation notes:**

- No form.
- No CTA button that implies unavailable functionality.
- No external workflow unless already approved in source and architecture controls.

---

### Section 6 — Future-Safe Closing Section

**Purpose:** End the page with a calm, supportive summary that fits the static public route set.

**Possible heading:**

```text
Supporting the People Who Support Families
```

**Proposed content direction:**

The closing section should reinforce that RDDA's work includes doulas as part of a broader community of care, connection, and public education across Central Alberta.

**Static implementation notes:**

- Text-only section or one `SectionCard` if consistent with existing routes.
- No new primitive.
- No dynamic feature promise.

---

## 9. Proposed `/doulas` Page Outline

The next implementation step should use this proposed static outline:

1. Hero: `For Doulas`
2. Section: `How RDDA Supports Doulas`
3. Section: `Doulas in the Lifecycle of Support`
4. Section: `Shared Values and Community Practice`
5. Section: `A Starting Point for Connection`
6. Closing section: `Supporting the People Who Support Families`

This outline is planning-only and may be refined during implementation if needed to keep the route concise, accessible, and consistent with existing static page patterns.

---

## 10. Content Items to Avoid on `/doulas`

The `/doulas` route must not include:

- doula directory listings
- individual doula profile cards
- searchable doula data
- filtering
- sort controls
- booking flows
- matching tools
- application forms
- membership forms
- contact forms
- payment or checkout language
- login links
- account links
- credential verification claims
- backend-powered content
- CMS-driven content
- database reads
- API calls
- client-side state
- client-side effects
- dynamic rendering
- `"use client"`

---

## 11. Static Architecture Decision for Next Step

### Route Type

The next implementation step should implement `/doulas` as a static server component route.

Expected future file:

```text
repo/src/app/doulas/page.tsx
```

### Approved Existing Building Blocks

The next implementation step should use only existing approved primitives:

- `PageShell`
- `PageContainer`
- `SectionCard`

### Route-Specific Components

No route-specific section components should be created for `/doulas` in the next implementation step.

Rationale:

- the planned sections are concise
- the content can be implemented directly in the page file
- the static route pattern from `/about`, `/services`, and `/families` is sufficient
- route-specific extraction would add unnecessary abstraction at this stage

### Shared UI Primitives

No new shared UI primitives should be created for `/doulas` in the next implementation step.

Rationale:

- `SectionCard` already covers the repeated content-card need
- 12J, 12P, 12Q, and 12R require caution around shared primitive expansion
- no repeated cross-route pattern has been proven that justifies a second shared primitive

---

## 12. Implementation Guardrails for 12AF

The next implementation checkpoint should:

1. Create only `repo/src/app/doulas/page.tsx`.
2. Use a static server component.
3. Use `PageShell`, `PageContainer`, and `SectionCard` only.
4. Avoid new route-specific section components.
5. Avoid new shared UI primitives.
6. Avoid modifying the frozen homepage.
7. Avoid modifying `/about`.
8. Avoid modifying `/services`.
9. Avoid modifying `/families`.
10. Avoid modifying `SectionCard`.
11. Avoid CMS, Payload, Supabase, database logic, authentication, forms, API routes, state, effects, client behavior, and `"use client"`.
12. Validate with lint/build after implementation.

---

## 13. Planned 12AF Validation Commands

These commands are for the next implementation checkpoint, not 12AE:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo"

npm run lint

npm run build
```

If `.next` causes a Windows file-lock problem during build, stop the dev server and remove `.next` before rebuilding:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo"

Remove-Item -Recurse -Force .next

npm run build
```

---

## 14. 12AE File Creation Commands

Use these commands if saving this checkpoint manually from the downloaded file.

### 14.1 Ensure Exports Folder Exists

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform"

New-Item -ItemType Directory -Force -Path ".\exports" | Out-Null
```

### 14.2 Copy Downloaded File into the Repo

If the downloaded file is in the standard Windows Downloads folder, run:

```powershell
Copy-Item "$env:USERPROFILE\Downloads\12AE_RDDA_Doulas_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md" ".\exports\12AE_RDDA_Doulas_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md" -Force
```

### 14.3 Open the File in VS Code

```powershell
code ".\exports\12AE_RDDA_Doulas_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md"
```

---

## 15. 12AE Git Status, Add, Commit, and Push Commands

Run these commands from the RDDA project root after copying the checkpoint file into `exports`:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform"

git status --short --untracked-files=all

git add ".\exports\12AE_RDDA_Doulas_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md"

git commit -m "Add RDDA doulas page static route planning"

git push
```

After pushing, confirm the final clean state:

```powershell
git status --short

git log --oneline -5
```

Expected result:

```text
Working tree clean.
New latest commit: Add RDDA doulas page static route planning
```

---

## 16. First 25 Lines Preview

```markdown
# 12AE — RDDA Doulas Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AE  
**Route planned:** `/doulas`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-13  
**Recommended commit message:** `Add RDDA doulas page static route planning`

---

## 1. 12AE Purpose

This checkpoint plans the `/doulas` static public-facing route only.

The goal of 12AE is to create a source-aligned section outline for the future `/doulas` page while preserving the current static frontend architecture and avoiding any implementation changes.

12AE does not create or modify route files, shared UI primitives, CMS logic, forms, dynamic behavior, or client-side behavior.

---
```

---

## 17. Internal Markdown Fence Verification

This checkpoint uses only three-backtick code fences.

Fence types used:

- `powershell`
- `text`
- `markdown`

No four-backtick fences are used.

No code-fence `id` attributes are used.

No writing-block formatting is used.

---

## 18. 12AE Final Decision

12AE planning is complete.

`/doulas` is confirmed safe to plan as a static public-facing route.

The proposed `/doulas` page should remain informational only.

The next implementation step may create `/doulas` as a static server component route using only:

- `PageShell`
- `PageContainer`
- `SectionCard`

No route-specific section components should be created in the next implementation step.

No new shared UI primitives should be created in the next implementation step.

The completed static public-facing route set remains:

1. `/`
2. `/about`
3. `/services`
4. `/families`

Recommended next chat:

```text
12AF — RDDA Doulas Page Static Route Implementation + Validation
```

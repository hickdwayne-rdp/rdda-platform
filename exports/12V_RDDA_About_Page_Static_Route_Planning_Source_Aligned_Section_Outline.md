# 12V — RDDA About Page Static Route Planning + Source-Aligned Section Outline

## Checkpoint Type

Documentation-first static route planning checkpoint.

This checkpoint plans the next public-facing static route:

`/about`

No implementation is performed during this checkpoint.

---

## Prior Step Confirmed

Previous checkpoint:

`12U — RDDA Next Static Route Selection + Source-Aligned Page Planning`

12U selected `/about` as the next static public-facing route to plan before implementation.

Latest known commit:

`18f1e55 Add RDDA next static route planning decision`

---

## Current Repo State To Confirm Before 12V

Before creating this checkpoint, confirm:

```powershell
git status --short
git status
git log --oneline -5
Test-Path ".\repo\src\app\page.tsx"
Test-Path ".\repo\src\components\ui\SectionCard.tsx"
Get-ChildItem ".\repo\src\components\sections"
```

Expected state:

* branch: `main`
* `main` is up to date with `origin/main`
* working tree is clean
* latest commit includes 12U
* homepage file exists
* `SectionCard.tsx` exists
* current homepage section files remain present

---

## Governing Controls Reviewed

12V is governed by the following controls:

* 11C implementation checklist
* 12B frontend architecture baseline
* 12J shared UI primitive caution
* 12P shared UI primitive planning decision
* 12Q shared UI primitive implementation checkpoint
* 12R SectionCard adoption review decision
* 12S static homepage validation checkpoint
* 12T homepage architecture freeze decision
* 12U next static route selection decision
* current homepage section files
* current `repo/src/components/ui/SectionCard.tsx`
* RDDA source documents already provided for reference:

  1. `01_RDDA_Integrated_Master_Plan.docx`
  2. `02_RDDA_Final_Production_Sitemap_v2_Production_Architecture.docx`
  3. `03_RDDA_Master_Production_Specification.docx`
  4. `04_RDDA_Frontend_Component_System_Template_Architecture_MASTER_Parts_1_to_14.docx`
  5. `05_RDDA_CMS_Database_Production_Specification_Master_COMPLETE.docx`
  6. `06_RDDA_Supabase_Payload_Implementation_Specification_v1_0_MASTER.docx`
  7. `07_RDDA_Phase_9_Master.docx`
  8. `09_RDDA_Production_Codex_Build_Thread_Master_Phases_1_to_8.docx`

---

## Explicit 12V Boundaries

12V does not authorize:

* implementation of `/about`
* modification of the frozen homepage
* homepage content changes
* homepage section order changes
* creation of another shared UI primitive
* navigation implementation
* SiteHeader implementation
* SiteFooter implementation
* CMS integration
* Payload integration
* Supabase integration
* database logic
* authentication
* forms
* API routes
* dynamic behavior
* React state
* React effects
* client component behavior
* `"use client"`

---

## Frozen Homepage Status

The homepage remains frozen.

Frozen homepage section order:

1. Hero
2. Service Areas
3. Who RDDA Supports
4. Approach

No 12V work modifies this order.

No 12V work modifies homepage content.

No 12V work modifies homepage section components.

---

## Shared UI Primitive Status

`SectionCard` remains the only approved shared UI primitive.

No second shared UI primitive is authorized during 12V.

The `/about` page may be planned to use `SectionCard` only if the content structure benefits from the existing primitive.

The `/about` page should not introduce a new `ContentPanel`, `PageSection`, `InfoGrid`, `FeatureCard`, or similar shared abstraction during this checkpoint.

---

## Route Selected For Planning

Selected route:

`/about`

Route type:

* public-facing
* static
* informational
* source-aligned
* non-interactive

Implementation target for a later checkpoint:

`repo/src/app/about/page.tsx`

No file is created during 12V.

---

## Purpose Of The About Page

The `/about` page should explain RDDA’s identity, purpose, and role in a clear public-facing way.

The page should help visitors understand:

* what RDDA is
* who RDDA serves
* why the association exists
* how RDDA supports families, doulas, and the wider community
* how RDDA fits within the broader Central Alberta birth, postpartum, and lifecycle support landscape

The page should remain informational only.

---

## Source-Aligned Content Scope

The `/about` page should draw only from existing RDDA source-aligned themes already established in the project:

* doula support across the lifecycle
* Central Alberta community support
* families seeking care and connection
* doulas seeking professional connection and support
* public education and community awareness
* association-level identity and purpose
* accessible, grounded, non-clinical support language

The page should avoid unsupported claims, exaggerated impact statements, or language that sounds like a finalized legal, clinical, or government mandate unless directly supported by source documents.

---

## Recommended Static Section Outline

The `/about` page should be planned with a modest static structure.

Recommended section order:

1. About RDDA introduction
2. Purpose and role
3. Who RDDA supports
4. Community-centered approach
5. Source-aligned closing note

---

## Section 1 — About RDDA Introduction

Purpose:

Introduce RDDA as a Central Alberta doula association in plain public-facing language.

Content intent:

* identify RDDA
* explain that RDDA exists to support connection, education, and community awareness
* keep language broad and source-aligned
* avoid duplicating the homepage hero too closely

Recommended component approach for future implementation:

* static section component
* no client behavior
* no form
* no CTA logic
* may use plain HTML structure inside the route page or a route-specific section component

Possible future section file:

`repo/src/components/sections/AboutIntroSection.tsx`

Implementation is not authorized during 12V.

---

## Section 2 — Purpose And Role

Purpose:

Explain why RDDA exists and what role it plays.

Content intent:

* support families in understanding doula care
* support doulas through professional community and visibility
* strengthen community awareness of doula support
* stay informational and non-transactional

Recommended component approach for future implementation:

* static route-specific section component
* may use `SectionCard` if the information is naturally divided into short grouped points
* no new shared primitive

Possible future section file:

`repo/src/components/sections/AboutPurposeSection.tsx`

Implementation is not authorized during 12V.

---

## Section 3 — Who RDDA Supports

Purpose:

Explain the groups RDDA is intended to support.

Content intent:

* families
* doulas
* community members
* referring professionals or organizations, only if source-supported
* people seeking to understand doula care

Important constraint:

The homepage already includes a frozen “Who RDDA Supports” section.

The `/about` page may expand on the concept, but should not simply duplicate the homepage section.

Recommended approach:

* use more association-level explanation
* avoid copying homepage wording directly
* keep content source-aligned
* avoid adding new service categories unless supported by source documents

Possible future section file:

`repo/src/components/sections/AboutWhoWeSupportSection.tsx`

Implementation is not authorized during 12V.

---

## Section 4 — Community-Centered Approach

Purpose:

Explain RDDA’s public-facing approach and values at a high level.

Content intent:

* grounded support
* connection
* accessibility
* community education
* family-centered and doula-supportive language
* avoid medicalized or clinical claims

Recommended component approach for future implementation:

* static content only
* may use `SectionCard` for grouped statements
* no new shared UI primitive
* no dynamic content

Possible future section file:

`repo/src/components/sections/AboutCommunityApproachSection.tsx`

Implementation is not authorized during 12V.

---

## Section 5 — Source-Aligned Closing Note

Purpose:

Close the page with a brief statement that reinforces RDDA’s role without adding forms, CTAs, or navigation dependencies.

Content intent:

* keep the page complete without requiring a contact form
* avoid “join now,” “book now,” or other action language until those routes are planned
* avoid linking to unimplemented routes unless navigation is formally authorized later

Recommended component approach for future implementation:

* simple static closing section
* no button required
* no form
* no dynamic route dependency

Possible future section file:

`repo/src/components/sections/AboutClosingSection.tsx`

Implementation is not authorized during 12V.

---

## Recommended Future File Structure

For a later implementation checkpoint, the likely file structure is:

```text
repo/src/app/about/page.tsx
repo/src/components/sections/AboutIntroSection.tsx
repo/src/components/sections/AboutPurposeSection.tsx
repo/src/components/sections/AboutWhoWeSupportSection.tsx
repo/src/components/sections/AboutCommunityApproachSection.tsx
repo/src/components/sections/AboutClosingSection.tsx
```

This is a planning recommendation only.

12V does not create these files.

---

## Recommended Use Of Existing Layout Components

The future `/about` route should reuse existing approved layout structure where appropriate.

Expected future usage:

* `PageShell`
* `PageContainer`
* existing global design tokens
* existing typography conventions
* `SectionCard` only where already appropriate

The future implementation should not introduce a new layout system.

---

## Recommended Use Of SectionCard

`SectionCard` may be used only for grouped static content where it improves consistency.

Potential appropriate uses:

* purpose statements
* supported audience groups
* community approach points

Potential inappropriate uses:

* wrapping every section automatically
* creating a new grid abstraction
* replacing route-specific semantic structure
* forcing content into cards when plain section markup is clearer

Decision:

`SectionCard` may be reused during future `/about` implementation, but no new shared UI primitive is authorized.

---

## Implementation Readiness Assessment

The `/about` route is suitable for a later static implementation checkpoint if the following remain true:

* repo is clean
* homepage remains frozen
* `SectionCard` remains the only shared UI primitive
* no new dynamic requirements are introduced
* source-aligned copy is drafted conservatively
* lint and build remain required after implementation

Confidence assessment:

| Subproblem                                              | Assessment                                              | Confidence |
| ------------------------------------------------------- | ------------------------------------------------------- | ---------: |
| `/about` is the correct next route to plan after 12U    | Confirmed by 12U                                        |       0.98 |
| `/about` should be planned before implementation        | Confirmed by 12U and current controls                   |       0.98 |
| Homepage should remain frozen                           | Confirmed by 12T and 12U                                |       0.99 |
| No second shared primitive should be created            | Confirmed by 12J, 12P, 12Q, and 12R                     |       0.97 |
| `/about` can be implemented statically later            | Supported by frontend baseline and static route pattern |       0.94 |
| Proposed section outline is source-aligned and low-risk | Conservative association-level structure                |       0.90 |

Weighted confidence:

`0.96`

---

## 12V Planning Decision

12V recommends that `/about` proceed to a future implementation checkpoint as a static public-facing route.

The future `/about` implementation should:

* create `repo/src/app/about/page.tsx`
* reuse existing layout components
* use route-specific section components if needed
* use `SectionCard` only where appropriate
* remain fully static
* avoid modifying the homepage
* avoid creating new shared UI primitives
* avoid CMS, Payload, Supabase, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, and `"use client"`

---

## Recommended Next Step

Recommended next checkpoint:

`12W — RDDA About Page Static Route Implementation + Validation`

Purpose:

* implement `/about` as a static route
* create only route-specific `/about` section components if needed
* reuse existing layout components
* reuse `SectionCard` only where appropriate
* preserve the frozen homepage
* run lint and build
* document validation results

12W should not begin until 12V is committed and pushed.

---

## 12V Completion Note

12V completed a documentation-first static route planning checkpoint for `/about`.

No application source code was modified.

No homepage files were modified.

No homepage content or section order was changed.

No second shared UI primitive was created.

No CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or `"use client"` was introduced.

The recommended next step is:

`12W — RDDA About Page Static Route Implementation + Validation`

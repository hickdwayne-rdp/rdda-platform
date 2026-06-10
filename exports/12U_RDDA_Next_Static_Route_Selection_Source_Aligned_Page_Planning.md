# 12U — RDDA Next Static Route Selection + Source-Aligned Page Planning

## Checkpoint Status

12U is a documentation-first planning checkpoint.

The previous checkpoint, 12T — RDDA Homepage Static Architecture Freeze Decision + Next Production Area Selection, is complete.

Latest confirmed commit before 12U:

e129982 Add RDDA homepage architecture freeze decision

---

## Confirmed Repo State

The repo state was confirmed before beginning 12U:

- Branch: main
- main is up to date with origin/main
- Working tree is clean
- 12T checkpoint file exists
- 12T checkpoint file ends with: 12T is complete.
- SectionCard exists at repo/src/components/ui/SectionCard.tsx
- Current homepage section files exist in repo/src/components/sections

Confirmed homepage section files:

- HomeHeroSection.tsx
- HomeServiceAreasSection.tsx
- HomeWhoRddaSupportsSection.tsx
- HomeApproachSection.tsx

---

## 12T Carry-Forward Controls

The following controls remain active:

- Homepage static architecture is frozen as stable for now.
- Homepage content is frozen.
- Homepage section order is frozen:
  1. Hero
  2. Service Areas
  3. Who RDDA Supports
  4. Approach
- SectionCard remains the only approved shared UI primitive.
- No second shared UI primitive is authorized.
- No CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or "use client" may be introduced.

---

## Source and Control Documents Used for 12U Planning

12U is controlled by:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- current homepage section files
- current repo/src/components/ui/SectionCard.tsx
- RDDA source documents already provided for reference, including:
  1. 01_RDDA_Integrated_Master_Plan.docx
  2. 02_RDDA_Final_Production_Sitemap_v2_Production_Architecture.docx
  3. 03_RDDA_Master_Production_Specification.docx
  4. 04_RDDA_Frontend_Component_System_Template_Architecture_MASTER_Parts_1_to_14.docx
  5. 05_RDDA_CMS_Database_Production_Specification_Master_COMPLETE.docx
  6. 06_RDDA_Supabase_Payload_Implementation_Specification_v1_0_MASTER.docx
  7. 07_RDDA_Phase_9_Master.docx
  8. 09_RDDA_Production_Codex_Build_Thread_Master_Phases_1_to_8.docx

---

## Purpose of 12U

The purpose of 12U is to select the next static public-facing route to plan before implementation.

12U does not implement the selected route.

12U does not modify the frozen homepage.

12U does not authorize a second shared UI primitive.

---

## Static Route Candidates Considered

The following public-facing static route candidates were considered:

1. /about
2. /services
3. /families
4. /doulas
5. /resources
6. /contact

---

## Candidate Review

### /about

Assessment:

- Static public-facing route.
- Strong fit for source-aligned organizational content.
- Can explain RDDA identity, purpose, role, and values.
- Does not require CMS.
- Does not require forms.
- Does not require authentication.
- Does not require API routes.
- Does not require dynamic routing.
- Does not require database logic.
- Can reuse existing layout components.
- Can reuse SectionCard if appropriate.
- Does not require another shared UI primitive.

Risk level: Low.

Planning suitability: High.

---

### /services

Assessment:

- Public-facing and important.
- Likely source-aligned.
- May require more detailed service taxonomy.
- Could create pressure toward service detail pages, referral pathways, or future CMS-backed structures.

Risk level: Medium.

Planning suitability: Moderate.

---

### /families

Assessment:

- Public-facing and important.
- Likely source-aligned.
- May overlap with the existing homepage "Who RDDA Supports" section.
- Needs careful separation from services and resources.

Risk level: Medium.

Planning suitability: Moderate.

---

### /doulas

Assessment:

- Public-facing and important.
- Could later require profiles, listings, applications, membership information, or CMS-backed content.
- Higher risk of becoming dynamic too early.

Risk level: Medium to High.

Planning suitability: Lower for this checkpoint.

---

### /resources

Assessment:

- Public-facing and useful.
- Could later require categories, repeatable content, updates, downloads, CMS ownership, or database-backed publishing.
- Not the safest first static route after homepage freeze.

Risk level: Medium to High.

Planning suitability: Lower for this checkpoint.

---

### /contact

Assessment:

- Public-facing and common.
- Contact pages often create pressure to add forms, API logic, validation, email handling, spam protection, or external integrations.
- Since forms and API logic are prohibited at this stage, contact should not be selected next.

Risk level: High under current constraints.

Planning suitability: Not recommended yet.

---

## 12U Route Selection Decision

The next static public-facing route to plan is:

/about

This route is selected because it is the safest next production area after the homepage architecture freeze.

The /about route can be planned as a static, source-aligned, public-facing informational page without requiring:

- CMS
- Payload
- Supabase
- database logic
- authentication
- forms
- API logic
- dynamic behavior
- client state
- effects
- client components
- "use client"
- another shared UI primitive

---

## Recommended /about Page Purpose

The /about page should explain RDDA's public identity and organizational role.

Recommended purpose:

To explain who RDDA is, why it exists, who it serves at a high level, and how it supports doula care, families, doulas, and community connection in Central Alberta.

---

## Recommended /about Page Planning Scope

The /about page should be planned only at this stage.

Recommended static page sections for a future planning checkpoint:

1. About RDDA
2. Our Purpose
3. Our Role in the Community
4. Supporting Families, Doulas, and Community
5. Source-Aligned Values or Principles

These sections are planning-level only.

They are not yet approved for implementation.

---

## Architecture Constraints for Future /about Work

If /about is implemented in a later checkpoint, it must follow these constraints:

- Use the existing Next.js app router structure.
- Create a static route only.
- Keep all content server-rendered by default.
- Do not use "use client".
- Do not use state or effects.
- Do not introduce data fetching.
- Do not introduce dynamic route params.
- Do not introduce CMS integration.
- Do not introduce Payload.
- Do not introduce Supabase.
- Do not introduce database logic.
- Do not introduce form handling.
- Do not introduce API routes.
- Do not create another shared UI primitive.
- Reuse existing layout components where appropriate.
- Reuse SectionCard only if it naturally fits the content.
- Do not modify the frozen homepage.

---

## Homepage Protection Rule

The homepage must not be edited during the next route planning or implementation step.

Protected files include, but are not limited to:

- repo/src/app/page.tsx
- repo/src/components/sections/HomeHeroSection.tsx
- repo/src/components/sections/HomeServiceAreasSection.tsx
- repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
- repo/src/components/sections/HomeApproachSection.tsx

Any future /about work must be isolated from homepage structure and content.

---

## 12U Decision Summary

12U confirms:

- The current repo state is clean.
- 12T is complete.
- The homepage remains frozen.
- The next production area should be a new static public-facing route.
- The selected next route is /about.
- /about should be planned before implementation.
- No implementation is performed in 12U.
- No homepage changes are authorized.
- No second shared UI primitive is authorized.
- No CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or "use client" is authorized.

---

## Recommended Next Step

Recommended next checkpoint:

12V — RDDA About Page Static Route Planning + Source-Aligned Section Outline

Purpose:

- Plan the /about route in more detail.
- Define the source-aligned static section outline.
- Confirm whether SectionCard should be reused.
- Confirm the file structure before implementation.
- Keep the homepage frozen.
- Avoid CMS, forms, API logic, dynamic behavior, state, effects, client behavior, or "use client".

12U is complete.

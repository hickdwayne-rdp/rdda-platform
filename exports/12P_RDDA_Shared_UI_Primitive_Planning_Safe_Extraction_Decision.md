# 12P — RDDA Shared UI Primitive Planning + Safe Extraction Decision

## Purpose

This checkpoint reviews whether the current RDDA homepage structure justifies future shared UI primitive extraction.

This is a documentation-only planning and architecture decision step.

No application source code is modified in 12P.

---

## Source and Checkpoint Inputs Reviewed

This checkpoint is controlled by the following prior RDDA implementation documents:

- exports/11C_RDDA_Implementation_Step_Template.md
- exports/12B_RDDA_Frontend_Component_Architecture_Baseline.md
- exports/12J_RDDA_Shared_UI_Primitive_Review.md
- exports/12K_RDDA_Homepage_Content_Structure_Review.md
- exports/12L_RDDA_Homepage_Content_Gap_Decision.md
- exports/12M_RDDA_Who_RDDA_Supports_Section_Decision.md
- exports/12N_RDDA_Homepage_Static_Content_Validation_Checkpoint.md
- exports/12O_RDDA_Homepage_Final_Static_Structure_Review_Next_Architecture_Decision.md

The current application structure was also reviewed through:

- repo/src/app/page.tsx
- repo/src/components/layout/PageShell.tsx
- repo/src/components/layout/PageContainer.tsx
- repo/src/components/sections/HomeHeroSection.tsx
- repo/src/components/sections/HomeServiceAreasSection.tsx
- repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
- repo/src/components/sections/HomeApproachSection.tsx
- repo/src/components/ui

---

## 11C Implementation Checklist Review

12P complies with the 11C implementation control framework.

This step is:

- small
- controlled
- documentation-only
- limited to a single export document
- intended to support safe future implementation
- not intended to modify application source files

Expected file change:

- exports/12P_RDDA_Shared_UI_Primitive_Planning_Safe_Extraction_Decision.md

No files under repo/src/ should be modified during 12P.

---

## 12B Frontend Architecture Review

12B established that the RDDA frontend should grow through controlled component architecture.

For 12P, this means shared UI primitives should only be considered where they support:

- clarity
- consistency
- maintainability
- source-aligned static presentation
- small and reversible implementation steps

12P does not authorize:

- new routes
- navigation
- SiteHeader
- SiteFooter
- CMS integration
- Payload
- Supabase
- database logic
- authentication
- forms
- API logic
- dynamic behavior
- state
- effects
- client component behavior
- "use client"

---

## 12J Shared UI Primitive Carry-Forward Review

12J remains the controlling caution for this step.

The existence of repo/src/components/ui does not itself justify creating shared UI primitives.

Shared UI primitive extraction should only occur when:

- a repeated visual or layout pattern is confirmed across multiple components
- the abstraction improves readability
- the abstraction does not obscure RDDA-specific meaning
- the abstraction remains static
- the extraction does not introduce behavior
- the extraction can be validated by lint and build
- the extraction is limited to one safe primitive at a time

12P preserves this caution.

---

## 12K Homepage Content Structure Carry-Forward Review

12K reviewed the homepage content structure and confirmed the homepage had moved into a controlled section-based architecture.

12P carries forward the 12K finding that future work must remain:

- controlled
- source-document-aligned
- limited in scope
- organized around the current homepage structure

12P does not reopen homepage content structure decisions.

---

## 12L Homepage Content Gap Carry-Forward Review

12L considered whether the homepage required additional source-aligned content before moving further into architecture work.

12P carries forward the 12L direction that homepage content additions should be limited and deliberate.

12P does not add new homepage content.

---

## 12M Who RDDA Supports Carry-Forward Review

12M added and finalized the Who RDDA Supports homepage section.

12P carries forward the confirmed section as part of the stable homepage structure.

The current homepage section order includes:

1. HomeHeroSection
2. HomeServiceAreasSection
3. HomeWhoRddaSupportsSection
4. HomeApproachSection

12P does not modify that order.

---

## 12N Static Validation Carry-Forward Review

12N confirmed the homepage static content structure was valid and ready for a controlled architecture checkpoint.

12P carries forward the requirement that the homepage must remain static.

No dynamic behavior, state, effects, client components, API calls, database logic, CMS logic, or form behavior should be introduced.

---

## 12O Carry-Forward Review

12O confirmed that the homepage should pause additional static content additions.

12O recommended 12P as the next step:

- RDDA Shared UI Primitive Planning + Safe Extraction Decision

12P therefore does not add homepage content and does not create shared UI primitives.

The purpose of 12P is to decide whether the now-stable homepage structure is ready for a future shared UI primitive extraction step.

---

## Current Homepage Architecture

The homepage currently composes:

- PageShell
- PageContainer
- HomeHeroSection
- HomeServiceAreasSection
- HomeWhoRddaSupportsSection
- HomeApproachSection

Current layout components:

- repo/src/components/layout/PageShell.tsx
- repo/src/components/layout/PageContainer.tsx

Current section components:

- repo/src/components/sections/HomeHeroSection.tsx
- repo/src/components/sections/HomeServiceAreasSection.tsx
- repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
- repo/src/components/sections/HomeApproachSection.tsx

Current UI component folder:

- repo/src/components/ui exists
- repo/src/components/ui currently contains only .gitkeep
- no shared UI primitive exists yet

---

## Repeated Pattern Review

The current homepage sections appear to contain early repeated presentation patterns that may later justify shared UI primitive extraction.

Patterns to review include:

- rounded section or card containers
- bordered content panels
- repeated card spacing
- repeated section heading structure
- repeated eyebrow or label text
- repeated muted descriptive text
- repeated list or card group structures
- repeated static content block patterns
- repeated use of theme variables such as card, border, foreground, and muted foreground
- repeated use of responsive padding and spacing classes

These repeated patterns suggest that shared UI primitive extraction may become useful.

However, the repeated patterns are still tied closely to homepage-specific content and should not be abstracted prematurely without a focused implementation step.

---

## Possible Future Shared UI Primitive Candidates

The following candidates may be considered in a future implementation step if the current repeated patterns are confirmed.

### 1. SectionCard or ContentPanel

Possible purpose:

- standardize rounded bordered homepage content containers
- reduce repeated class strings
- preserve static layout consistency
- provide a clear reusable wrapper for section-level card presentation

Risk:

- may become too generic too early
- may obscure section-specific layout decisions
- may duplicate responsibility already handled by PageContainer or section components

Preliminary assessment:

This is the strongest possible first candidate, but it should not be implemented until the actual repeated pattern is confirmed in the current section files.

### 2. SectionHeader

Possible purpose:

- standardize eyebrow, heading, and introductory paragraph structure
- reduce repeated heading markup
- improve consistency across static sections

Risk:

- section headings may still require different semantic structures
- premature extraction could reduce readability
- may hide content-specific hierarchy

Preliminary assessment:

Potentially useful later, but likely not the safest first primitive.

### 3. Eyebrow

Possible purpose:

- standardize small label-style text
- reduce repeated styling for introductory labels

Risk:

- too small to justify immediate extraction
- may create unnecessary component fragmentation

Preliminary assessment:

Not recommended as the first shared primitive.

### 4. BodyText or MutedText

Possible purpose:

- standardize muted descriptive text
- reduce repeated paragraph class names

Risk:

- too small as a first primitive
- may reduce readability without meaningful architectural benefit

Preliminary assessment:

Not recommended as the first shared primitive.

### 5. SimpleList or FeatureList

Possible purpose:

- standardize simple static list structures
- support repeated service or audience list patterns

Risk:

- lists may differ meaningfully by section
- premature abstraction may force unrelated content into the same structure

Preliminary assessment:

May be useful later, but not recommended as the first primitive.

---

## Safe Extraction Decision

Shared UI primitives should not be implemented during 12P.

12P approves planning only.

A future shared UI primitive implementation may be safe if it is limited to one carefully selected primitive and if it does not alter homepage content, routing, behavior, data flow, or static rendering.

The safest future candidate appears to be either:

- SectionCard
- ContentPanel

The next step should decide on one candidate only and perform a minimal extraction only if justified by the actual section files.

---

## 12P Decision

Decision:

Shared UI primitive implementation should be planned first, not implemented immediately in 12P.

Rationale:

- 12J cautions against premature abstraction.
- 12O pauses additional homepage content additions.
- The homepage structure is now stable enough to review repeated patterns.
- The components/ui folder exists but should remain empty until a justified primitive is selected.
- A future implementation step can safely extract one primitive if the pattern is confirmed across multiple existing sections.
- 12P is intended to be a decision checkpoint, not an implementation step.

---

## Guardrails for the Next Step

The next implementation step must not include:

- new routes
- navigation
- SiteHeader
- SiteFooter
- CMS
- Payload
- Supabase
- database logic
- authentication
- forms
- API logic
- dynamic behavior
- state
- effects
- client component behavior
- "use client"

The next step should modify only the files necessary for one small primitive extraction, if extraction is approved.

---

## Recommended Next Step

Recommended next step:

12Q — RDDA Shared UI Primitive Extraction: SectionCard / ContentPanel Decision + Minimal Implementation

Purpose:

- review the repeated homepage card and container patterns
- select only one primitive if justified
- create the first shared UI primitive in repo/src/components/ui
- refactor only the smallest safe amount of homepage section code
- preserve static rendering
- run lint and build validation
- commit only the controlled primitive extraction

If the repeated pattern is not strong enough, 12Q should remain documentation-only and defer shared UI primitive creation.

---

## Validation Expectation

Since 12P is documentation-only:

- no lint run is required
- no build run is required
- no application source files should change
- git diff should show only the new 12P export document

Recommended validation commands:

- git diff --stat
- git status --short

Expected changed file:

- exports/12P_RDDA_Shared_UI_Primitive_Planning_Safe_Extraction_Decision.md

No files under repo/src/ should appear in git status.

---

## If Validation Fails

If git status shows modified source files under repo/src/, do not commit.

First inspect the changes:

- git diff --stat
- git diff

If the source changes were accidental, restore them before committing 12P:

- git restore .\repo\src

Then recheck:

- git status --short

Only commit when the 12P export file is the only changed file.

---

## Commit Expectation

The 12P commit should include only:

- exports/12P_RDDA_Shared_UI_Primitive_Planning_Safe_Extraction_Decision.md

Suggested commit message:

Add RDDA shared UI primitive planning decision

---

## 12P Completion Note

12P completed a documentation-only shared UI primitive planning and safe extraction decision checkpoint.

The checkpoint reviewed the current homepage structure against:

- the 11C implementation checklist
- the 12B frontend architecture baseline
- the 12J shared UI primitive caution
- the 12K homepage content structure review
- the 12L homepage content gap decision
- the 12M Who RDDA Supports section decision
- the 12N static validation checkpoint
- the 12O homepage final static structure decision

12P determined that shared UI primitives should not be implemented immediately during this checkpoint.

The safest future direction is a controlled 12Q step that evaluates one possible primitive, likely SectionCard or ContentPanel, and only implements it if the repeated pattern is strong enough.

No application source code was modified during 12P.

---

## Final Recommendation

Proceed next to:

12Q — RDDA Shared UI Primitive Extraction: SectionCard / ContentPanel Decision + Minimal Implementation

12Q should remain narrow, controlled, and source-aligned. It should either implement one justified shared UI primitive or document why extraction should still be deferred.

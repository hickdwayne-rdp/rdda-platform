12Q — RDDA Shared UI Primitive Extraction: SectionCard / ContentPanel Decision + Minimal Implementation
Purpose

This checkpoint documents the controlled 12Q implementation step for the RDDA production implementation project.

The purpose of 12Q is to decide whether one shared UI primitive should be extracted from the current homepage section structure and, only if justified, implement the smallest safe primitive.

12Q follows the recommendation from:

12P — RDDA Shared UI Primitive Planning + Safe Extraction Decision

The candidate primitives reviewed for 12Q were:

SectionCard
ContentPanel

Only one shared UI primitive is permitted in this step.

Step Type

12Q is an application-code implementation checkpoint with a generated export checkpoint.

This is not a documentation-only step.

Application source changes are permitted only because the current homepage section files confirm a repeated static section-card shell pattern.

Starting Git State

12Q began from a clean working tree.

Starting commit:

2866370 Add RDDA shared UI primitive planning decision

Starting status:

branch: main
branch state: up to date with origin/main
working tree: clean

No uncommitted files were present before the 12Q implementation began.

Control Framework Reviewed Before Implementation

Before implementation, 12Q was reviewed against:

exports/11C_RDDA_Implementation_Step_Template.md
exports/12B_RDDA_Frontend_Component_Architecture_Baseline.md
exports/12J_RDDA_Shared_UI_Primitive_Review.md
exports/12P_RDDA_Shared_UI_Primitive_Planning_Safe_Extraction_Decision.md
repo/src/app/page.tsx
repo/src/components/sections/HomeHeroSection.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
repo/src/components/sections/HomeApproachSection.tsx
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/PageContainer.tsx
repo/src/components/ui
11C Implementation Checklist Review

12Q is controlled by the 11C implementation framework.

The following 11C requirements apply to 12Q:

confirm branch and clean working tree before implementation
identify the implementation area before changing code
keep the implementation small and controlled
change only the files required for the current step
keep application source code inside repo/
place generated checkpoint documentation inside exports/
do not modify source documents inside docs/
do not mix unrelated changes into the same step
do not add CMS, database, authentication, deployment, forms, API logic, or dynamic functionality
run lint when application code changes
run build when application code changes
review git status and git diff before committing
commit only expected files

12Q complies with the 11C implementation control framework if the final commit includes only the approved files listed below.

12B Frontend Architecture Review

12B defines repo/src/components/ui as the correct location for small reusable UI primitives.

12Q follows that architecture by creating:

repo/src/components/ui/SectionCard.tsx

The new primitive is static and presentational only.

It does not include:

CMS logic
Payload logic
Supabase logic
database access
authentication
forms
API logic
routing logic
dynamic behavior
state
effects
client component behavior
third-party UI libraries
"use client"

The component remains aligned with the 12B frontend component architecture baseline.

12J Shared UI Primitive Carry-Forward Review

12J previously reviewed shared UI primitive extraction and deferred implementation.

12J found repeated visual patterns but determined they were not stable enough at that time to justify a shared primitive.

12Q carries forward the 12J caution by:

creating only one primitive
requiring confirmation of a repeated pattern before implementation
avoiding broad UI-system creation
avoiding multiple primitives in one step
avoiding premature text/list/header primitives
preserving section-specific content and meaning
preserving static rendering

12Q does not create:

SectionHeader
Eyebrow
BodyText
MutedText
SimpleList
FeatureList
ButtonLink
PrimaryLink
Card variants
ContentPanel
any second UI primitive
12P Shared UI Primitive Planning Carry-Forward Review

12P was documentation-only.

12P determined that shared UI primitive implementation should not occur during 12P and should instead be planned first.

12P identified the safest future primitive candidates as:

SectionCard
ContentPanel

12Q completes the planned next decision step by evaluating both candidates and selecting only one.

SectionCard is selected.

ContentPanel is not selected because it is broader and more abstract than required for the confirmed repeated section-level shell pattern.

Current Homepage Architecture Reviewed

Before implementation, repo/src/app/page.tsx was reviewed.

The homepage composes:

PageShell
PageContainer
HomeHeroSection
HomeServiceAreasSection
HomeWhoRddaSupportsSection
HomeApproachSection

The homepage section order before 12Q was:

HomeHeroSection
HomeServiceAreasSection
HomeWhoRddaSupportsSection
HomeApproachSection

12Q does not modify repo/src/app/page.tsx.

12Q does not change homepage composition.

12Q does not change the homepage section order.

Current Layout Components Reviewed

The current layout components were reviewed:

repo/src/components/layout/PageShell.tsx
repo/src/components/layout/PageContainer.tsx

PageShell remains responsible for the broad page shell.

PageContainer remains responsible for max-width and vertical page spacing.

12Q does not modify layout components.

The layout layer remains separate from the UI primitive layer.

Current UI Folder Reviewed

Before 12Q implementation:

repo/src/components/ui existed
repo/src/components/ui contained only .gitkeep
no shared UI primitive existed yet

12Q creates the first shared UI primitive inside repo/src/components/ui.

Current Homepage Section Files Reviewed

The following section files were reviewed:

repo/src/components/sections/HomeHeroSection.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
repo/src/components/sections/HomeApproachSection.tsx

The review confirmed that some homepage sections had a repeated section-level card/surface wrapper pattern.

Repeated Pattern Review

A repeated static section-card shell pattern was confirmed in:

HomeHeroSection
HomeWhoRddaSupportsSection
HomeApproachSection

The repeated pattern included:

rounded section/card container
border
padding
responsive padding
shadow
card background variable
border color variable
static children content

The common styling pattern is strong enough to justify one shared primitive.

Pattern Evidence

HomeHeroSection used a card-like header wrapper with:

flex column layout
gap spacing
rounded-3xl
border
p-6
shadow-sm
sm
lg
background: var(--card)
borderColor: var(--border)

HomeWhoRddaSupportsSection used a card-like section wrapper with:

rounded-3xl
border
p-6
shadow-sm
sm
lg
background: var(--card)
borderColor: var(--border)

HomeApproachSection used a card-like section wrapper with:

grid layout
gap spacing
rounded-3xl
border
p-6
sm
lg
background: var(--card)
borderColor: var(--border)
aria-labelledby

The repeated pattern is section-level and static.

Files Intentionally Not Refactored

repo/src/components/sections/HomeServiceAreasSection.tsx was reviewed but not refactored.

Reason:

its outer wrapper is a grid section, not the same section-card shell
its repeated article cards are smaller internal cards
extracting internal article cards would create a second abstraction concern
internal card extraction would expand 12Q beyond the approved one-primitive scope

This preserves the 12Q guardrail against broad abstraction.

Candidate Decision

Candidates evaluated:

SectionCard
ContentPanel

Selected:

SectionCard

Rejected:

ContentPanel

Decision rationale:

SectionCard directly matches the confirmed repeated pattern: a static rounded, bordered, padded section-card shell.

ContentPanel was not selected because it is broader, more generic, and less tightly tied to the confirmed repeated section-level pattern.

Implementation Summary

Created:

repo/src/components/ui/SectionCard.tsx

Modified:

repo/src/components/sections/HomeHeroSection.tsx
repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
repo/src/components/sections/HomeApproachSection.tsx

Not modified:

repo/src/app/page.tsx
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/PageContainer.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
docs/
source documents
package files
configuration files
SectionCard Responsibilities

SectionCard provides a reusable static section-card shell.

It supports:

children
optional semantic element through as
optional className
optional id
optional aria-labelledby support through ariaLabelledBy

SectionCard applies the shared section-card styling:

rounded-3xl
border
p-6
shadow-sm
sm
lg
background: var(--card)
borderColor: var(--border)

SectionCard does not contain RDDA-specific copy.

SectionCard does not contain homepage-specific content.

SectionCard does not fetch data.

SectionCard does not introduce runtime behavior.

Semantic Preservation

HomeHeroSection previously used a header element.

12Q preserves that semantic meaning by rendering SectionCard as a header through:

SectionCard as="header"

HomeApproachSection previously used aria-labelledby.

12Q preserves that accessible relationship through:

ariaLabelledBy="approach-heading"

HomeWhoRddaSupportsSection remains a semantic section because SectionCard defaults to rendering section.

Content Preservation

12Q does not intentionally change homepage content.

The following content remains unchanged:

hero eyebrow text
hero heading
hero paragraph
hero links
Who RDDA Supports heading
Who RDDA Supports paragraph
support group titles
support group descriptions
Our Approach eyebrow
Our Approach heading
Our Approach paragraph
Built for future growth panel
future growth list items

The only source-level changes are wrapper extraction and formatting cleanup caused by rewriting the files.

Static Rendering Preservation

12Q preserves the static homepage model.

No dynamic rendering behavior is introduced.

No client component behavior is introduced.

No "use client" directive is added.

No state or effects are added.

The homepage must continue to prerender as static content after the build.

Scope Guardrails Preserved

12Q does not add:

routes
navigation
SiteHeader
SiteFooter
CMS
Payload
Supabase
database logic
authentication
forms
API logic
dynamic behavior
state
effects
client behavior
"use client"
third-party UI libraries
additional UI primitives
source document edits
homepage content changes
section order changes
Validation Commands

The following validation commands must be run after application source changes:

cd ".\repo"
npm run lint
npm run build
cd ..

Expected validation result:

npm run lint passes
npm run build passes
/ remains prerendered as static content
/_not-found remains prerendered as static content
Validation Result

To be completed after final validation.

Expected final result:

npm run lint: passed
npm run build: passed
/ remained prerendered as static content
/_not-found remained prerendered as static content
Git Diff Review

The 12Q diff must be reviewed before commit.

Expected controlled source changes:

repo/src/components/ui/SectionCard.tsx
repo/src/components/sections/HomeHeroSection.tsx
repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
repo/src/components/sections/HomeApproachSection.tsx

Expected generated checkpoint file:

exports/12Q_RDDA_Shared_UI_Primitive_Extraction_Checkpoint.md

No unrelated files should be included in the 12Q commit.

Expected Final Git Status Before Commit

Before staging, expected status:

M repo/src/components/sections/HomeApproachSection.tsx
M repo/src/components/sections/HomeHeroSection.tsx
M repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
?? repo/src/components/ui/SectionCard.tsx
?? exports/12Q_RDDA_Shared_UI_Primitive_Extraction_Checkpoint.md

After staging, expected status:

A  exports/12Q_RDDA_Shared_UI_Primitive_Extraction_Checkpoint.md
M  repo/src/components/sections/HomeApproachSection.tsx
M  repo/src/components/sections/HomeHeroSection.tsx
M  repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
A  repo/src/components/ui/SectionCard.tsx
Known Git Warning

PowerShell/Git may show line-ending warnings such as:

LF will be replaced by CRLF the next time Git touches it

This warning is expected in this Windows working copy and is not a build or lint failure.

The warning does not block the 12Q commit if the actual changed files are expected and validation passes.

If Validation Fails

If lint or build fails, do not commit.

Review the error output and inspect the changed files:

git status --short
git diff

Likely issues to check:

missing SectionCard import
unclosed JSX tag
incorrect prop name
leftover section closing tag
accidental content change
accidental layout file change
accidental change to HomeServiceAreasSection
accidental change to page.tsx

After fixing, rerun:

cd ".\repo"
npm run lint
npm run build
cd ..

Only proceed to commit after both lint and build pass.

Rollback Instructions

If the 12Q implementation needs to be abandoned before commit, run:

git restore ".\repo\src\components\sections\HomeHeroSection.tsx"
git restore ".\repo\src\components\sections\HomeWhoRddaSupportsSection.tsx"
git restore ".\repo\src\components\sections\HomeApproachSection.tsx"
Remove-Item ".\repo\src\components\ui\SectionCard.tsx"
Remove-Item ".\exports\12Q_RDDA_Shared_UI_Primitive_Extraction_Checkpoint.md"
git status --short

This returns the repository to the pre-12Q source state.

Commit Scope

The 12Q commit should include only:

repo/src/components/ui/SectionCard.tsx
repo/src/components/sections/HomeHeroSection.tsx
repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
repo/src/components/sections/HomeApproachSection.tsx
exports/12Q_RDDA_Shared_UI_Primitive_Extraction_Checkpoint.md

Suggested commit message:

Extract RDDA SectionCard UI primitive
12Q Completion Note Template

Use this after validation, commit, and push are complete:

12Q complete.

Completed:

Reviewed the 11C implementation checklist control framework.
Reviewed the 12B frontend architecture baseline.
Reviewed the 12J shared UI primitive caution.
Reviewed the 12P shared UI primitive planning decision.
Reviewed the current homepage composition and section files.
Reviewed the current layout files.
Reviewed repo/src/components/ui contents.
Confirmed repo/src/components/ui previously contained only .gitkeep.
Confirmed a repeated static section-card shell pattern existed in the homepage sections.
Selected SectionCard instead of ContentPanel as the safest first shared UI primitive.
Created repo/src/components/ui/SectionCard.tsx.
Refactored HomeHeroSection to use SectionCard while preserving header semantics.
Refactored HomeWhoRddaSupportsSection to use SectionCard.
Refactored HomeApproachSection to use SectionCard while preserving aria-labelledby.
Left HomeServiceAreasSection unchanged because its outer wrapper is a grid section and internal card extraction would expand scope.
Did not modify repo/src/app/page.tsx.
Did not modify PageShell.
Did not modify PageContainer.
Did not change homepage content.
Did not change section order.
Did not add routes.
Did not add navigation.
Did not add SiteHeader or SiteFooter.
Did not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or "use client".
Ran npm run lint successfully.
Ran npm run build successfully.
Confirmed / remained prerendered as static content.
Created exports/12Q_RDDA_Shared_UI_Primitive_Extraction_Checkpoint.md.
Committed and pushed the controlled 12Q changes.

Latest commit:

[PASTE COMMIT HASH] Extract RDDA SectionCard UI primitive

Current status:

Working tree is clean.
Branch is up to date with origin/main.

Recommended next step:

12R — RDDA Shared UI Primitive Adoption Review + Second Safe Extraction Decision

Recommended Next Step

Recommended next step:

12R — RDDA Shared UI Primitive Adoption Review + Second Safe Extraction Decision

Purpose:

review the SectionCard extraction for usefulness and stability
confirm the homepage remains static and source-aligned
confirm no over-abstraction was introduced
confirm no content or section order changed
confirm lint and build remain clean
decide whether to stop further UI primitive extraction or plan one additional safe primitive later
remain documentation-first unless a second extraction is clearly justified

No additional shared UI primitive should be created until the SectionCard extraction is reviewed for stability and usefulness.
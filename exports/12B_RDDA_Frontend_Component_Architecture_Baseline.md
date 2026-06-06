# 12B — RDDA Frontend Component Architecture Baseline + First Component Map

## Purpose

This checkpoint establishes the first source-aligned frontend component architecture baseline for the Red Deer Doula Association production build.

This is a documentation/checkpoint step only. It does not create application components, change homepage content, change styling, add routes, or introduce CMS, Payload, Supabase, authentication, forms, database logic, or dynamic functionality.

The goal is to define how the scaffolded frontend folders created in 12A should be used in future controlled implementation steps.

---

## Source Documents Referenced

This checkpoint is based on the following RDDA source and checkpoint documents:

1. `docs/01_RDDA_Integrated_Master_Plan.docx`
2. `docs/02_RDDA_Final_Production_Sitemap_v2_Production_Architecture.docx`
3. `docs/03_RDDA_Master_Production_Specification.docx`
4. `docs/04_RDDA_Frontend_Component_System_Template_Architecture_MASTER_Parts_1_to_14.docx`
5. `docs/09_RDDA_Production_Codex_Build_Thread_Master_Phases_1_to_8.docx`
6. `exports/11B_RDDA_Source_Document_Control_Index.md`
7. `exports/11C_RDDA_Implementation_Step_Template.md`

No source documents in `docs/` are modified by this checkpoint.

---

## Repository Responsibility Rules

The repository remains organized as:

```text
rdda-platform/
├── docs/
├── repo/
└── exports/
```

Responsibilities:

- `docs/` contains source documents.
- `repo/` contains the Next.js application.
- `exports/` contains generated checkpoint, planning, reference, and handoff documents.

Planning files must not be placed in `repo/src/`.

Application source files must not be placed in `exports/`.

---

## Folder Responsibility Map

### `repo/src/components/`

Role:

Parent folder for reusable frontend components.

Intended future use:

- Shared component organization.
- Parent folder for layout, UI, and section components.
- Helps keep page files clean and readable.

Not for:

- planning files
- source documents
- CMS logic
- database clients
- authentication logic
- form handlers
- route definitions

---

### `repo/src/components/layout/`

Role:

Site-level layout components.

Likely future components:

- `SiteHeader`
- `SiteFooter`
- `PageShell`
- `PageContainer`
- `MainContent`

Purpose:

- Provide consistent page structure.
- Support accessible landmarks.
- Keep site-wide layout separate from page-specific content.

Guardrail:

Initial layout components should remain static and should not include CMS-driven menus, login state, dashboards, database access, or dynamic route logic.

---

### `repo/src/components/ui/`

Role:

Small reusable UI primitives.

Likely future components:

- `ButtonLink`
- `PrimaryLink`
- `SecondaryLink`
- `Card`
- `Badge`
- `SectionWrapper`
- `SectionHeading`

Purpose:

- Reduce repeated markup.
- Keep styling consistent.
- Support accessible reusable interface elements.

Guardrail:

Initial UI components should not include client-side state, form logic, analytics, CMS fetching, database access, or third-party UI libraries.

---

### `repo/src/components/sections/`

Role:

Larger reusable page-section components.

Likely future components:

- `HomepageHero`
- `HomepageIntroSection`
- `SupportPathwaysSection`
- `DoulaDirectoryPreviewSection`
- `EducationPreviewSection`
- `CommunityCalloutSection`

Purpose:

- Group page content into clear sections.
- Keep page files readable.
- Support future route-by-route page construction.

Guardrail:

Initial section components should not add CMS content, forms, search, directory filtering, authentication, or dynamic behavior.

---

### `repo/src/lib/`

Role:

Shared non-visual utility logic.

Likely future use:

- site constants
- navigation configuration
- formatting helpers
- route helpers
- accessibility helpers

Guardrail:

Do not add Payload clients, Supabase clients, database utilities, authentication helpers, server actions, or API logic at this stage.

---

### `repo/src/types/`

Role:

Shared TypeScript type definitions.

Likely future use:

- navigation item types
- component prop types
- shared content model types
- future CMS types when CMS implementation is approved

Guardrail:

Do not create speculative CMS, database, user, member, authentication, or form submission types before those systems are approved.

---

## Component Category Definitions

### Layout Components

Layout components define broad page structure.

Examples:

- `SiteHeader`
- `SiteFooter`
- `PageShell`
- `PageContainer`

They are responsible for:

- site structure
- accessibility landmarks
- page framing
- reusable layout patterns

They are not responsible for:

- database access
- CMS access
- authentication
- forms
- business logic

---

### UI Components

UI components are small reusable interface elements.

Examples:

- `ButtonLink`
- `PrimaryLink`
- `Card`
- `Badge`
- `SectionWrapper`

They are responsible for:

- repeated interface patterns
- consistent styling
- accessible markup
- simple presentational reuse

They are not responsible for:

- data fetching
- route architecture
- CMS logic
- business rules
- form submission

---

### Section Components

Section components are larger content blocks used on pages.

Examples:

- `HomepageHero`
- `HomepageIntroSection`
- `SupportPathwaysSection`

They are responsible for:

- organizing visible page content
- keeping page files maintainable
- aligning content blocks with the RDDA source documents

They are not responsible for:

- global layout
- CMS fetching
- database access
- authentication
- search
- filtering
- forms

---

## First Component Implementation Map

The following components are likely early candidates for future implementation.

These components are not built during 12B.

---

### 1. `PageShell` or `PageContainer`

Likely location:

```text
repo/src/components/layout/PageShell.tsx
```

or:

```text
repo/src/components/layout/PageContainer.tsx
```

Purpose:

Provides a consistent page wrapper for static pages.

Future responsibilities:

- wrap page content
- provide consistent width and spacing
- support accessible structure

Do not include yet:

- CMS content
- authentication state
- database access
- dynamic routing logic

Recommended timing:

First implementation step after 12B.

---

### 2. `SiteHeader`

Likely location:

```text
repo/src/components/layout/SiteHeader.tsx
```

Purpose:

Provides the site header and future navigation area.

Future responsibilities:

- site identity
- accessible header landmark
- source-aligned static navigation structure

Do not include yet:

- CMS-driven navigation
- member login state
- dashboard links
- mobile menu behavior unless explicitly scoped

Recommended timing:

After the page shell/container is approved.

---

### 3. `SiteFooter`

Likely location:

```text
repo/src/components/layout/SiteFooter.tsx
```

Purpose:

Provides the site footer.

Future responsibilities:

- footer landmark
- association identity
- basic public-facing supporting links

Do not include yet:

- newsletter forms
- contact forms
- CMS-driven footer content
- social media embeds

Recommended timing:

After or alongside the site header.

---

### 4. `SectionWrapper`

Likely location:

```text
repo/src/components/ui/SectionWrapper.tsx
```

Purpose:

Provides consistent section spacing and structure.

Future responsibilities:

- section spacing
- width control
- semantic section support

Do not include yet:

- animation
- CMS fetching
- business logic
- dynamic display rules

Recommended timing:

Before extracting homepage sections.

---

### 5. `ButtonLink` or `PrimaryLink`

Likely location:

```text
repo/src/components/ui/ButtonLink.tsx
```

or:

```text
repo/src/components/ui/PrimaryLink.tsx
```

Purpose:

Provides a reusable link styled as a button.

Future responsibilities:

- consistent call-to-action styling
- accessible link behavior
- support internal links

Do not include yet:

- analytics
- authentication checks
- form behavior
- third-party routing abstraction

Recommended timing:

Before or during homepage section extraction.

---

### 6. `HomepageHero`

Likely location:

```text
repo/src/components/sections/HomepageHero.tsx
```

Purpose:

Extracts the homepage hero content into a reusable section component.

Future responsibilities:

- preserve existing homepage opening message
- preserve accessible heading structure
- keep source-aligned public language

Do not include yet:

- CMS content
- animation
- new service claims
- new homepage copy unless explicitly scoped

Recommended timing:

After layout and UI primitives are in place.

---

### 7. `HomepageIntroSection`

Likely location:

```text
repo/src/components/sections/HomepageIntroSection.tsx
```

Purpose:

Extracts homepage introductory content into a controlled section component.

Future responsibilities:

- explain RDDA purpose
- identify supported audiences
- maintain source-aligned public language

Do not include yet:

- CMS content
- forms
- dynamic data
- medical or clinical claims

Recommended timing:

After `HomepageHero`.

---

## First Safe Implementation Sequence

Recommended future sequence:

1. Confirm the working tree is clean.
2. Review the 11C checklist.
3. Choose one small implementation scope.
4. Implement one layout component or one simple UI component.
5. Import it only where needed.
6. Avoid changing visible homepage content unless explicitly scoped.
7. Run `npm run lint`.
8. Run `npm run build`.
9. Confirm `/` remains prerendered as static content.
10. Review `git diff`.
11. Commit only the expected files.

Recommended order:

```text
1. PageShell or PageContainer
2. SiteHeader
3. SiteFooter
4. SectionWrapper
5. ButtonLink or PrimaryLink
6. HomepageHero
7. HomepageIntroSection
```

---

## Guardrails: What Not To Build Yet

Do not build or add:

- CMS integration
- Payload configuration
- Supabase integration
- database clients
- authentication
- protected routes
- login/logout
- member accounts
- forms
- form submissions
- server actions
- API routes
- dynamic routing
- directory filtering
- search
- newsletter signup
- payment processing
- event registration
- admin dashboard
- analytics
- global styling redesign
- homepage copy rewrites
- source document edits
- third-party UI libraries

The purpose of this checkpoint is architectural control, not feature expansion.

---

## Validation Checklist for Future Component Steps

Before implementation:

```text
- Working tree is clean.
- Branch is main.
- Branch is up to date with origin/main.
- Required source documents exist in docs/.
- Generated checkpoint/reference files are kept in exports/.
- Application code changes are limited to repo/.
- No planning files are placed in repo/src/.
- Component scope is small and clearly defined.
```

During implementation:

```text
- Keep changes narrow.
- Do not add unrelated styling changes.
- Do not add new routes unless explicitly scoped.
- Do not add CMS, Supabase, Payload, authentication, forms, or database logic.
- Keep components accessible and semantic.
- Keep public-facing content source-aligned.
```

After implementation:

```text
- Run npm run lint from repo/.
- Run npm run build from repo/.
- Confirm / remains prerendered as static content.
- Run git status from the parent repository.
- Review git diff.
- Commit only expected files.
- Push only after validation passes.
```

---

## 12B Validation Expectations

Expected changed file:

```text
exports/12B_RDDA_Frontend_Component_Architecture_Baseline.md
```

Expected unchanged areas:

```text
docs/
repo/src/
repo/src/app/
repo/src/components/
repo/src/lib/
repo/src/types/
```

No component files should be created during this checkpoint.

No application source files should be modified during this checkpoint.

---

## Recommended Next Step After 12B

Recommended next step:

```text
12C — RDDA First Layout Component Implementation: PageShell/PageContainer
```

Recommended 12C scope:

- Create one foundational layout component only.
- Likely file:
  - `repo/src/components/layout/PageShell.tsx`
  - or `repo/src/components/layout/PageContainer.tsx`
- Import it into the homepage only if the change is minimal.
- Do not change homepage copy.
- Do not change global styling.
- Do not add CMS, Payload, Supabase, forms, authentication, routing changes, or dynamic behavior.
- Run lint and build.
- Confirm `/` remains prerendered as static content.
- Commit only the controlled files.

---

## 12B Completion Note Template

```text
12B complete.

Created:
- exports/12B_RDDA_Frontend_Component_Architecture_Baseline.md

The checkpoint defines:
- frontend scaffold folder responsibilities
- layout, UI, section, lib, and type category roles
- first component implementation map
- safe future implementation sequence
- guardrails for what not to build yet
- validation checklist for future component steps
- recommended next step after 12B

No application source files were changed.
No homepage content was changed.
No styling was changed.
No routing was changed.
No CMS, Payload, Supabase, database logic, authentication, forms, or dynamic functionality was added.
No source documents in docs/ were modified.

Validation completed:
- git status reviewed
- only the 12B checkpoint file changed
- controlled checkpoint file committed and pushed

Commit:
Add RDDA frontend component architecture baseline

Working tree is clean and up to date with origin/main.
```

---

## 12B Completion Status

This checkpoint completes the RDDA frontend component architecture baseline and first component implementation map.

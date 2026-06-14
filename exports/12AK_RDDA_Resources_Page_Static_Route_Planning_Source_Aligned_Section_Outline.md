# 12AK — RDDA Resources Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AK  
**Route planned:** `/resources`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA resources page static route planning`

---

## 1. 12AK Purpose

12AK plans the `/resources` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/resources` page while preserving the approved static frontend architecture and avoiding all implementation changes.

12AK does not create the `/resources` route file.

12AK does not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/training`
- `SectionCard`
- shared UI primitives

12AK does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12AK:

```text
12AJ — RDDA Training Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12AK:

```text
d3218a3 Add RDDA training page source alignment review
```

Current status entering 12AK:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12AJ checkpoint is committed and pushed.
- GitHub-direct write access is confirmed working.

Current completed static public-facing route set entering 12AK:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/training`

12AK is planning-only, so `/resources` is not added to the completed route set in this checkpoint.

---

## 3. GitHub-Direct Checkpoint Creation

GitHub-direct write access is confirmed for:

```text
hickdwayne-rdp/rdda-platform
```

This checkpoint file is created directly in GitHub at:

```text
exports/12AK_RDDA_Resources_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

No downloadable Markdown file is required for 12AK unless GitHub-direct creation fails.

---

## 4. Files Reviewed for 12AK

### 4.1 12AJ Handoff Reviewed

Reviewed:

```text
exports/12AJ_RDDA_Training_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AJ confirmed:

- `/training` is complete.
- `/training` remains static.
- `/training` remains informational only.
- `/training` remains source-aligned.
- `/training` uses only approved layout and UI primitives.
- `/training` did not introduce forbidden systems or behavior.
- existing completed routes remain untouched.
- the frozen homepage architecture remains untouched.
- `/resources` is selected as the next safe static public-facing route.

### 4.2 Existing Static Route Pattern Files

Reviewed implementation pattern files:

```text
repo/src/app/page.tsx
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
repo/src/app/doulas/page.tsx
repo/src/app/training/page.tsx
```

These files confirm the current static route pattern:

- static server component route files
- direct page-level content
- no `"use client"`
- no route handlers
- no API logic
- no runtime data fetching
- no CMS reads
- no database reads
- no form behavior
- no client-side state or effects
- existing layout primitives only
- repeated informational content can be represented with static arrays
- repeated content can be grouped with `SectionCard`
- no new route-specific section components required

### 4.3 Shared UI Primitive Reviewed

Reviewed shared UI primitive:

```text
repo/src/components/ui/SectionCard.tsx
```

Confirmed current `SectionCard` public props:

```text
children
as
className
id
ariaLabelledBy
```

Important implementation reminder for the next checkpoint:

- Do not pass unsupported `SectionCard` props.
- Do not pass `title` or `eyebrow` props.
- Do not pass `description`, `heading`, `variant`, or `items` props.
- Put headings, labels, lists, and paragraphs inside `SectionCard` as children.
- Do not modify `SectionCard`.
- Do not create another shared UI primitive.

---

## 5. Prior Controls Active for 12AK

The following prior controls remain active:

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
- 12AE doulas page static route planning and source-aligned section outline
- 12AF doulas page static route implementation validation checkpoint
- 12AG doulas page source alignment review and next static route decision
- 12AH training page static route planning and source-aligned section outline
- 12AI training page static route implementation validation checkpoint
- 12AJ training page source alignment review and next static route decision
- current homepage route
- current `/about` route
- current `/services` route
- current `/families` route
- current `/doulas` route
- current `/training` route
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

---

## 6. 12AK Static Safety Decision

### Decision

`/resources` is safe to plan as the next static public-facing route.

### Reasoning

The `/resources` route can be planned as a static informational page because it can describe general support categories, navigation guidance, education, community resource awareness, and broader support-landscape information without requiring a searchable database, live directory, referral system, intake workflow, medical triage tool, crisis-response tool, booking system, account feature, or CMS-managed resource list.

The page can remain static if it avoids:

- searchable resource databases
- live directories
- live listings
- filters
- personalized recommendations
- referral forms
- intake forms
- eligibility screening
- crisis-response tools
- emergency support workflows
- medical triage
- clinical assessment
- booking systems
- appointment scheduling
- account profiles
- saved resources
- external booking or enrollment workflows
- CMS-managed resource lists
- database-backed resource records

### Confidence

Static planning confidence: 0.93

The route is appropriate for static planning because resource information can be framed as general public education and navigation guidance rather than as a transactional or live service system.

---

## 7. `/resources` Page Role

The `/resources` page should help visitors understand types of support that may exist around pregnancy, birth, postpartum, loss, family transitions, doula care, and community wellbeing.

The page should function as:

- a public orientation page
- a general support-category overview
- a navigation guide for thinking about support needs
- an educational resource-awareness page
- a bridge between RDDA's public routes and broader community support understanding

The page should not function as:

- a crisis-response system
- a medical triage tool
- a searchable directory
- a referral workflow
- a resource database
- a live list of agencies
- a booking pathway
- an intake pathway
- an account-based saved-resource feature

---

## 8. Source-Aligned Content Direction

The `/resources` page should align with RDDA's public-facing role by keeping resource information broad, supportive, community-centred, and non-transactional.

The copy should emphasize:

- education before action
- general support categories rather than specific live listings
- family-centred navigation language
- doula-informed awareness
- Central Alberta community context
- respectful, inclusive, and accessible wording
- appropriate boundaries between doula support, medical care, emergency care, and community support
- encouragement to contact qualified professionals or emergency services when urgent, clinical, legal, or safety concerns exist

The copy should avoid:

- promising access to services
- implying RDDA verifies live availability
- presenting RDDA as a clinical, legal, emergency, or crisis-response provider
- presenting specific agencies as currently available unless later explicitly maintained through an approved static content process
- implying personalized recommendations
- implying referral, booking, or intake completion
- claiming comprehensive coverage of all resources

---

## 9. Intended `/resources` Page Sections

### 9.1 Hero Section

Working heading direction:

```text
Resources for understanding support options.
```

Static copy direction:

- Introduce `/resources` as a public information page.
- Frame resources as general education and support-navigation awareness.
- Mention families, doulas, and community members.
- Keep the wording calm, plain, and non-urgent.
- Avoid implying that the page is a live directory or crisis service.

Implementation direction:

- Use direct JSX inside `repo/src/app/resources/page.tsx`.
- Use `PageShell` and `PageContainer`.
- Use a top-level `<main>` with spacing consistent with completed routes.
- Do not wrap the hero in a route-specific component.

### 9.2 Resource Orientation Section

Working section title direction:

```text
A starting point for resource awareness
```

Static copy direction:

- Explain that the page helps visitors think through support categories.
- State that resource needs may differ across pregnancy, birth, postpartum, loss, adoption, surrogacy, fertility experiences, family transitions, and doula practice.
- Keep the section educational and non-prescriptive.
- Do not offer assessment, diagnosis, eligibility screening, or personalized direction.

Implementation direction:

- Use one `SectionCard`.
- Put eyebrow text, heading, and paragraph content inside `SectionCard` as children.
- Do not pass invalid `SectionCard` props.

### 9.3 Support Category Cards

Working card category direction:

1. Pregnancy and birth support
2. Postpartum and newborn support
3. Loss, grief, and family transitions
4. Doula learning and professional connection
5. Community and practical supports
6. Health, safety, and urgent needs

Static copy direction:

- Describe each category at a high level.
- Use careful language such as `may include`, `can help people think about`, and `support needs may involve`.
- Keep the category descriptions educational.
- Avoid naming live agencies, live phone numbers, live availability, booking links, or service-specific claims.
- For urgent needs, state generally that urgent, emergency, medical, mental health, legal, or safety concerns should be directed to appropriate qualified services or emergency supports.

Implementation direction:

- Use a static `resourceCategories` array.
- Render cards with `SectionCard` inside a responsive grid.
- Each card may include `label`, `title`, and `description` fields in the static array.
- Render labels, headings, and descriptions as children inside `SectionCard`.

### 9.4 How to Use Resource Information Section

Working section title direction:

```text
Using resource information thoughtfully
```

Static copy direction:

- Explain that visitors can use the page to identify questions, clarify support needs, and understand broad types of help.
- Encourage people to confirm details directly with qualified providers or organizations when they need current information.
- Reinforce that RDDA's static page does not replace medical, legal, emergency, counselling, or crisis care.
- Keep tone supportive rather than defensive.

Implementation direction:

- Use `SectionCard`.
- Static bullet list can be used for guidance points.
- Use direct JSX or a static array, whichever is simpler.

### 9.5 Audience Guidance Section

Working section title direction:

```text
Who this resource page may support
```

Static copy direction:

- Identify broad audiences without creating account paths or workflows.
- Suggested audiences:
  - families exploring support options
  - doulas looking for community-aware language
  - community partners wanting to understand doula-adjacent support needs
  - people learning how supports may fit together across family transitions
- Avoid implying eligibility decisions or direct service matching.

Implementation direction:

- Use one or two `SectionCard` blocks in a responsive grid.
- Static list items may be stored in a `resourceAudiences` array.

### 9.6 Static Scope Boundaries Section

Working section title direction:

```text
What this page does not do
```

Static copy direction:

- Clearly state that `/resources` is informational only.
- Confirm it is not a searchable database, live directory, referral service, intake form, medical triage tool, crisis-response tool, booking system, or account feature.
- Confirm it does not provide live availability, personalized recommendations, or verified current listings.
- This section should be clear but not alarming.

Implementation direction:

- Use `SectionCard`.
- Use a static `staticBoundaries` array.
- Render as a simple unordered list.

### 9.7 Closing Community Navigation Section

Working section title direction:

```text
Support awareness as part of community care
```

Static copy direction:

- Close by connecting resources to RDDA's broader public education role.
- Emphasize that understanding support categories can help families, doulas, and community partners communicate more clearly.
- Reinforce that the page is a static foundation for resource awareness, not a live resource platform.

Implementation direction:

- Use `SectionCard`.
- Keep this closing section concise.
- Do not add calls to action that imply form submission, booking, enrollment, or referral.

---

## 10. Recommended Static Arrays for 12AL Implementation

The next implementation checkpoint may use static arrays similar to the current `/training` route pattern.

Suggested arrays:

```text
resourceCategories
resourceAudiences
resourceUseGuidance
staticBoundaries
```

Possible `resourceCategories` structure:

```text
label
title
description
```

Possible `resourceAudiences`, `resourceUseGuidance`, and `staticBoundaries` structures:

```text
string[]
```

Implementation should keep arrays inside:

```text
repo/src/app/resources/page.tsx
```

Do not move these arrays into shared configuration files in the next checkpoint.

---

## 11. Approved Implementation Pattern for 12AL

The next implementation checkpoint should create:

```text
repo/src/app/resources/page.tsx
```

The implementation should use only:

- `PageShell`
- `PageContainer`
- `SectionCard`
- static arrays where appropriate
- direct JSX inside the route file

The implementation should not create:

- route-specific section components
- new shared UI primitives
- new layout components
- new data-access helpers
- CMS utilities
- database utilities
- API routes
- route handlers
- client components

The implementation should follow this import pattern:

```text
import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";
```

The implementation should export a default server component page function:

```text
export default function ResourcesPage() {
  return (
    <PageShell>
      <PageContainer>
        <main>
          Static resources page content goes here.
        </main>
      </PageContainer>
    </PageShell>
  );
}
```

The actual 12AL implementation should use the established route spacing and typography patterns from the completed static routes.

---

## 12. SectionCard Usage Requirements

`SectionCard` must be used only as an approved presentational wrapper.

Allowed `SectionCard` props remain:

```text
children
as
className
id
ariaLabelledBy
```

The next checkpoint must not use invalid `SectionCard` props such as:

```text
title
eyebrow
description
heading
variant
items
```

All headings, labels, descriptions, lists, and paragraphs must be passed as children inside `SectionCard`.

No changes to `SectionCard` are authorized in 12AL.

---

## 13. Forbidden Feature Boundaries for `/resources`

The `/resources` route must not add:

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
- `"use client"`
- searchable resource databases
- live directories
- live listings
- filters
- referral forms
- intake forms
- crisis-response tools
- emergency dispatch workflows
- medical triage
- clinical assessment
- booking systems
- account profiles
- saved resources
- external booking workflows
- external enrollment workflows
- personalized resource recommendations
- location-based lookup behavior
- map integrations
- runtime availability checks

---

## 14. Content Risk Register

### Risk 1 — Resource page may drift into a live directory

Resource pages naturally invite lists of agencies, phone numbers, live links, maps, filters, and current availability claims.

Mitigation:

- Keep `/resources` category-based and educational.
- Avoid live agency listings in the initial static implementation.
- Do not add search, filtering, maps, or availability logic.
- Do not imply comprehensive or current resource coverage.

Confidence: 0.91

### Risk 2 — Resource page may drift into referral or intake behavior

Visitors may expect resource pages to guide them into a direct referral, intake, booking, or eligibility pathway.

Mitigation:

- Use wording such as `resource awareness`, `support categories`, and `starting points`.
- Avoid submit buttons, intake language, referral language, and personalized matching language.
- Keep all content static and informational.

Confidence: 0.92

### Risk 3 — Resource page may be interpreted as crisis, medical, legal, or clinical guidance

Resources can overlap with urgent health, safety, mental health, legal, and family crisis topics.

Mitigation:

- Clearly state that the page is not a crisis-response tool, medical triage tool, legal advice tool, or clinical assessment tool.
- Use general language directing urgent, emergency, medical, mental health, legal, or safety concerns to appropriate qualified services or emergency supports.
- Avoid specific clinical, legal, or crisis instructions.

Confidence: 0.9

### Risk 4 — Resource page may overpromise RDDA's verification role

A resource page could imply RDDA verifies current resource availability, eligibility, suitability, or quality.

Mitigation:

- Avoid claims that RDDA verifies current listings.
- Encourage visitors to confirm details directly with qualified providers or organizations.
- Present the page as awareness and navigation education only.

Confidence: 0.9

---

## 15. 12AL Implementation Scope

The next checkpoint should be:

```text
12AL — RDDA Resources Page Static Route Implementation + Validation
```

12AL should implement `/resources` only.

12AL should create:

```text
repo/src/app/resources/page.tsx
```

12AL should also create its implementation validation checkpoint file:

```text
exports/12AL_RDDA_Resources_Page_Static_Route_Implementation_Validation.md
```

12AL should validate:

- route file exists at `repo/src/app/resources/page.tsx`
- route imports only approved layout and UI primitives
- route renders static public-facing informational content
- route uses `PageShell`, `PageContainer`, and `SectionCard`
- route uses static arrays where appropriate
- route uses direct JSX inside the route file
- route creates no route-specific section components
- route creates no new shared UI primitives
- route does not modify `SectionCard`
- route does not use invalid `SectionCard` props
- route does not include `"use client"`
- route does not include state, effects, forms, CMS, database, API, dynamic behavior, search, filters, live listings, referral workflows, intake workflows, crisis tools, medical triage, booking systems, account features, or saved resources
- `npm run lint` passes from `repo/`
- `npm run build` passes from `repo/`
- `/resources` is prerendered as a static route

---

## 16. 12AK Completion Decision

12AK is complete when this checkpoint file is committed to GitHub.

Completion decision:

- `/resources` has been planned only.
- No `/resources` route file has been created in this checkpoint.
- No completed route has been modified.
- No frozen homepage content or section order has been modified.
- No shared UI primitive has been modified.
- No new shared UI primitive has been created.
- No CMS, database, API, form, dynamic, client, search, directory, referral, intake, crisis, medical triage, booking, or account behavior has been planned for implementation.
- The next implementation checkpoint is authorized to build `/resources` as a static public-facing informational page only.

Overall 12AK planning confidence: 0.92

The plan is high confidence because `/resources` can be implemented using the same static route pattern as the completed public pages while keeping content category-based, educational, and non-transactional.

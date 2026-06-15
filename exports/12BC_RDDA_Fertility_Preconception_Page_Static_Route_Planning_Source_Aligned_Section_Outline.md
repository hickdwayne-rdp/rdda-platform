# 12BC — RDDA Fertility and Preconception Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12BC  
**Route planned:** `/fertility`  
**Working route theme:** Fertility & preconception support  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA fertility preconception page static route planning`

---

## 1. 12BC Purpose

12BC plans the `/fertility` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/fertility` page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12BC does not create the `/fertility` route file.

12BC does not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/training`
- `/resources`
- `/contact`
- `/partners`
- `/faq`
- `/birth`
- `/postpartum`
- `SectionCard`
- shared UI primitives
- layout primitives

12BC does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Planning confidence: 0.97

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12BC:

```text
12BB — RDDA Postpartum Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12BC:

```text
3805a5e Add RDDA postpartum page source alignment review
```

Current status entering 12BC:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12BB checkpoint is committed and pushed.
- `/postpartum` has been reviewed and confirmed source-aligned.
- 12BB selected `/fertility` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12BC:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/training`
7. `/resources`
8. `/contact`
9. `/partners`
10. `/faq`
11. `/birth`
12. `/postpartum`

12BC is planning-only, so `/fertility` is not added to the completed route set in this checkpoint.

Repository context confidence: 0.97

---

## 3. Files and Controls Reviewed for 12BC

Reviewed source and checkpoint files:

```text
exports/12BB_RDDA_Postpartum_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
exports/12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
exports/12AW_RDDA_Birth_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/birth/page.tsx
repo/src/app/postpartum/page.tsx
repo/src/components/ui/SectionCard.tsx
```

Active controls applied:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- 12AW birth page static route planning checkpoint
- 12AZ postpartum page static route planning checkpoint
- 12BA postpartum page static route implementation validation checkpoint
- 12BB postpartum page source alignment review and next static route decision
- current homepage route
- current `/about` route
- current `/services` route
- current `/families` route
- current `/doulas` route
- current `/training` route
- current `/resources` route
- current `/contact` route
- current `/partners` route
- current `/faq` route
- current `/birth` route
- current `/postpartum` route
- current `repo/src/components/ui/SectionCard.tsx`

Review confidence: 0.96

---

## 4. 12BB Handoff Reviewed

12BB confirmed:

- `/postpartum` is complete.
- `/postpartum` remains source-aligned.
- `/postpartum` remains static.
- `/postpartum` remains informational.
- `/postpartum` remains architecture-compliant.
- `/postpartum` uses approved primitives only.
- `SectionCard` was reused correctly.
- No invalid `SectionCard` props were used.
- No `"use client"` was added.
- No prohibited dynamic systems were introduced.
- `/fertility` is selected as the next safe static public-facing route to plan.

12BB also cautioned that fertility and preconception content can drift into medical, reproductive-health, treatment, counselling, therapy, referral, intake, or sensitive-information collection territory. 12BC must therefore keep `/fertility` limited to general non-medical doula-adjacent support awareness and static public information.

Handoff confidence: 0.95

---

## 5. Homepage Service-Area Order Confirmation

The homepage service-area order currently includes:

1. Pregnancy & birth support
2. Postpartum support
3. Fertility & preconception support
4. Pregnancy and infant loss support
5. Family transitions
6. End-of-life and grief support

The completed route set now includes:

- `/birth`
- `/postpartum`

Therefore the next planned route is:

```text
/fertility
```

Working public-facing theme:

```text
Fertility & preconception support
```

Route-order confidence: 0.95

---

## 6. Existing Static Route Pattern

The current completed static route pattern remains established by:

```text
repo/src/app/page.tsx
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
repo/src/app/doulas/page.tsx
repo/src/app/training/page.tsx
repo/src/app/resources/page.tsx
repo/src/app/contact/page.tsx
repo/src/app/partners/page.tsx
repo/src/app/faq/page.tsx
repo/src/app/birth/page.tsx
repo/src/app/postpartum/page.tsx
```

These route files establish the approved public-page implementation pattern:

- static server component route files
- direct page-level content
- static arrays are acceptable for repeated informational content
- no `"use client"`
- no route handlers
- no API logic
- no runtime data fetching
- no CMS reads
- no database reads
- no form behavior
- no client-side state or effects
- existing layout primitives only
- repeated informational content can be grouped with `SectionCard`
- no new route-specific section components required

The future `/fertility` implementation should follow the same page-level pattern used by `/birth` and `/postpartum`.

Pattern confidence: 0.95

---

## 7. Source-Aligned Fertility and Preconception Themes

The existing homepage and completed route pattern support a narrow `/fertility` page through the homepage service-area theme:

```text
Fertility & preconception support
```

Safe source-aligned themes for `/fertility` include:

- general fertility and preconception support awareness
- emotional support while people are considering pregnancy, trying to conceive, or preparing for possible pregnancy
- informational support that helps people organize questions for qualified providers
- practical planning support around preferences, appointments, communication, routines, and support people
- family-centred support for partners, family members, or chosen support people
- respectful acknowledgement that fertility and preconception experiences vary widely
- encouragement to bring medical, reproductive-health, treatment, medication, genetic, testing, diagnosis, and individualized questions to qualified providers
- Central Alberta community orientation
- general reflection about fit, scope, availability, fees, location, and support style with individual doulas

The route must not expand into unsupported claims about:

- medical fertility advice
- reproductive-health instructions
- diagnosis
- treatment guidance
- medication guidance
- testing guidance
- cycle tracking instructions
- conception planning instructions
- fertility treatment explanation or recommendations
- pregnancy outcome promises
- counselling or therapy
- grief counselling
- crisis response
- emergency support
- clinical screening
- provider replacement
- referral workflows
- intake workflows
- booking workflows
- matching workflows
- payment workflows
- account workflows
- collection of sensitive health, fertility, pregnancy, reproductive, relationship, grief, or family information

Theme confidence: 0.91

---

## 8. Route Absence Check

The future implementation target is:

```text
repo/src/app/fertility/page.tsx
```

This route must not be created in 12BC.

The `/fertility` route remains unimplemented at the end of 12BC.

Route absence confidence: 0.92

---

## 9. Shared UI Primitive Review

Shared UI primitive under control:

```text
repo/src/components/ui/SectionCard.tsx
```

Current `SectionCard` public props remain:

```text
children
as
className
id
ariaLabelledBy
```

Important implementation reminder for 12BD:

- Do not pass unsupported `SectionCard` props.
- Do not pass `title` or `eyebrow` props.
- Do not pass `description`, `heading`, `variant`, or `items` props.
- Put headings, labels, lists, and paragraphs inside `SectionCard` as children.
- Do not modify `SectionCard`.
- Do not create another shared UI primitive.

SectionCard confidence: 0.99

---

## 10. Proposed `/fertility` Page Purpose

The future `/fertility` page should provide a static, public, non-clinical overview of fertility and preconception-related doula-adjacent support.

The page should help visitors understand:

- what general fertility and preconception support can include
- how non-medical support can be emotional, informational, practical, and family-centred
- that support may vary depending on the family, doula, circumstances, location, and services offered
- that medical, reproductive-health, testing, treatment, medication, diagnosis, and individualized questions belong with qualified providers
- that the website is not an intake, booking, referral, screening, counselling, therapy, crisis, or emergency pathway

Purpose confidence: 0.92

---

## 11. Recommended Route Metadata and Labels

Recommended route path:

```text
/fertility
```

Recommended file path for future implementation:

```text
repo/src/app/fertility/page.tsx
```

Recommended page label:

```text
Fertility & Preconception Support
```

Recommended H1:

```text
Non-medical support before pregnancy.
```

Recommended introductory framing:

```text
Red Deer Doula Association recognizes fertility and preconception support as steady emotional, informational, practical, and family-centred support for people considering pregnancy, preparing for pregnancy, or navigating questions before pregnancy. This support works alongside qualified providers and does not replace medical care.
```

Metadata confidence: 0.9

---

## 12. Source-Aligned Section Outline for Future `/fertility` Route

### 12.1 Hero Section

Recommended content role:

- Introduce `/fertility` as non-medical support before pregnancy.
- Use general language only.
- Name RDDA and Central Alberta context.
- Immediately place support alongside qualified providers.
- Avoid claims about fertility outcomes, pregnancy outcomes, treatment support, diagnosis, testing, medication, counselling, therapy, or referral.

Recommended hero label:

```text
Fertility & Preconception Support
```

Recommended hero heading:

```text
Non-medical support before pregnancy.
```

Recommended hero paragraph:

```text
Red Deer Doula Association recognizes fertility and preconception support as steady emotional, informational, practical, and family-centred support for people considering pregnancy, preparing for pregnancy, or navigating questions before pregnancy. This page is general public information for families, support people, doulas, and community members across Central Alberta.
```

Hero confidence: 0.9

### 12.2 What Support Can Include

Recommended section purpose:

- Present broad safe support categories.
- Follow the `/birth` and `/postpartum` grid-card pattern.
- Use `SectionCard` with child content only.

Recommended card categories:

1. Emotional support
2. Informational support
3. Practical support
4. Family-centred support

Recommended safe descriptions:

- Emotional support: Calm presence, encouragement, reassurance, and respectful support during a time that may involve hope, uncertainty, planning, or waiting.
- Informational support: Helping people organize questions and feel more prepared for conversations with qualified providers.
- Practical support: General planning support around preferences, appointments, communication, routines, and support people, depending on the individual doula's services.
- Family-centred support: Support that respects the person's or family's needs, values, household context, culture, and chosen support people.

This section must not describe fertility treatment, medical decisions, medication, testing, cycle tracking, pregnancy prediction, or individualized reproductive-health guidance.

Section confidence: 0.91

### 12.3 Before Pregnancy

Recommended section purpose:

- Describe preconception preparation broadly.
- Keep emphasis on questions, preferences, communication, and practical readiness.
- Redirect medical and individualized questions to qualified providers.

Recommended section label:

```text
Before pregnancy
```

Recommended heading:

```text
Preparation can focus on questions, preferences, and practical support
```

Recommended content boundaries:

- People may think about what kind of support helps them feel prepared and respected.
- Doulas may help organize broad questions and practical considerations.
- Medical, reproductive-health, medication, testing, diagnosis, or treatment questions remain with qualified providers.

Recommended list items:

- Think about what kind of support would feel steady, respectful, and useful before pregnancy.
- Organize questions for conversations with qualified providers.
- Consider communication preferences, support people, appointments, routines, and practical readiness.
- Recognize that preparation looks different for each person, family, circumstance, and care context.

Section confidence: 0.9

### 12.4 Fertility and Preconception Questions

Recommended section purpose:

- Acknowledge questions without answering them medically.
- Help visitors understand the boundary between general doula support and qualified care.

Recommended section label:

```text
Questions before pregnancy
```

Recommended heading:

```text
Doulas can support questions without replacing qualified care
```

Recommended content boundaries:

- Fertility and preconception experiences can involve many questions.
- Doulas may help people organize questions and feel supported while communicating with qualified providers.
- Health-related, treatment-related, medication-related, testing-related, diagnosis-related, genetic, reproductive-health, or individualized concerns belong with qualified providers.

This section must not answer questions about how to conceive, when to conceive, treatments, tests, medication, fertility tracking, pregnancy chances, pregnancy risk, or medical decision-making.

Section confidence: 0.92

### 12.5 Emotional Support and Qualified Supports

Recommended section purpose:

- Use careful emotional-support language.
- Avoid counselling, therapy, grief counselling, trauma treatment, mental-health triage, crisis, or urgent-care claims.

Recommended section label:

```text
Emotional support and qualified supports
```

Recommended heading:

```text
Emotional support is not counselling, therapy, diagnosis, treatment, or urgent care
```

Recommended content boundaries:

- Fertility and preconception support may include calm presence, encouragement, reassurance, and helping people feel less alone.
- Doula emotional support is not counselling, therapy, diagnosis, treatment, urgent support, or emergency response.
- Visitors should use qualified health, mental-health, community, emergency, or other appropriate supports when concerns are clinical, urgent, safety-related, or require regulated care.

Section confidence: 0.93

### 12.6 Partners, Family, and Support People

Recommended section purpose:

- Keep support-person language broad.
- Avoid counselling, relationship therapy, legal advice, coercion, conflict management, or parenting assessment.

Recommended section label:

```text
Families and support people
```

Recommended heading:

```text
Fertility and preconception support can include the people around the family
```

Recommended card topics:

1. Partners and support people
2. Household context

Recommended safe descriptions:

- Partners and support people: Support may include helping partners, family members, or chosen support people understand practical ways to be present, respectful, and encouraging.
- Household context: Doulas may help create a steadier support environment through reassurance, practical presence, and general information.

This section must not provide counselling, family therapy, relationship assessment, consent advice, legal advice, or conflict-management guidance.

Section confidence: 0.9

### 12.7 Thinking About Fit

Recommended section purpose:

- Help visitors reflect without creating an eligibility tool or matching system.
- Keep questions broad and non-sensitive.

Recommended section label:

```text
Thinking about fit
```

Recommended heading:

```text
Is fertility or preconception support right for my family?
```

Recommended paragraph:

```text
Families may use this page as a gentle starting point for broad reflection. It is not a screening tool, eligibility process, recommendation engine, intake pathway, or promise that RDDA will find or assign a doula.
```

Recommended reflection items:

- What kind of support would feel steady, respectful, and useful before pregnancy?
- What questions should be discussed directly with a qualified provider or appropriate specialist?
- What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?

Section confidence: 0.91

### 12.8 Website Boundaries

Recommended section purpose:

- Explicitly preserve static and informational scope.
- Prevent operational-service or sensitive-information collection drift.

Recommended section label:

```text
Website boundaries
```

Recommended heading:

```text
Static public information only
```

Recommended boundary paragraph:

```text
This page does not collect personal fertility, reproductive-health, pregnancy, treatment, testing, medication, relationship, grief, safety, or family information. It does not provide clinical, legal, counselling, therapy, emergency, booking, referral, intake, payment, account, search, filtering, CRM, or email automation services.
```

Recommended closing paragraph:

```text
Visitors should confirm current details directly with qualified providers, responsible organizations, or individual doulas when current or individualized information matters.
```

Section confidence: 0.94

---

## 13. Recommended Static Data Shape for Future Implementation

A future 12BD implementation may use local static arrays similar to `/birth` and `/postpartum`.

Recommended arrays:

```text
fertilitySupportAreas
preconceptionItems
familySupportItems
reflectionItems
```

These arrays should be local to:

```text
repo/src/app/fertility/page.tsx
```

They should only contain static display text.

They must not contain:

- clinical decision logic
- conditional pathways
- triage logic
- referral logic
- eligibility logic
- location search logic
- provider matching logic
- booking logic
- user-submitted data
- sensitive health or reproductive information

Static data-shape confidence: 0.92

---

## 14. Recommended Implementation Architecture for 12BD

Future 12BD implementation should create only:

```text
repo/src/app/fertility/page.tsx
```

Recommended imports:

```text
import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";
```

Recommended architecture:

- export a default server component page
- wrap page in `PageShell`
- use `PageContainer`
- use `<main className="space-y-10 py-12 md:py-16">`
- use static local arrays for repeated text
- use `SectionCard` only with children
- avoid unsupported props
- avoid route-specific section components
- avoid new shared UI primitives
- avoid modifying completed routes

Implementation architecture confidence: 0.95

---

## 15. Explicit 12BD Non-Goals

The 12BD implementation must not create or modify:

- CMS collections
- Payload config
- Supabase tables
- database access
- API routes
- route handlers
- authentication
- accounts
- forms
- booking tools
- intake tools
- referral tools
- matching tools
- search or filtering tools
- payment tools
- CRM or email automation
- client components
- state
- effects
- dynamic rendering
- route-specific section components
- shared UI primitives
- existing completed route content unless compile correctness requires it

Non-goal confidence: 0.98

---

## 16. Boundary Checklist for 12BD

Before committing the future `/fertility` implementation, confirm:

- no `"use client"`
- no forms
- no API routes
- no dynamic behavior
- no state or effects
- no CMS reads
- no database reads
- no auth
- no route-specific section components
- no new shared UI primitives
- no unsupported `SectionCard` props
- no medical fertility advice
- no reproductive-health instruction
- no diagnosis
- no treatment guidance
- no medication guidance
- no testing guidance
- no cycle tracking instructions
- no conception-timing guidance
- no fertility outcome claim
- no pregnancy outcome claim
- no counselling claim
- no therapy claim
- no crisis claim
- no emergency response pathway
- no referral workflow
- no intake workflow
- no booking workflow
- no matching workflow
- no collection of sensitive information
- page appears in static build output after `npm run build`

Boundary checklist confidence: 0.97

---

## 17. Validation Decision for 12BC

12BC creates a Markdown planning checkpoint only.

No source-code files are modified.

Because no application source files are changed, `npm run lint` and `npm run build` are not required for compile correctness in 12BC.

Future 12BD implementation should run:

```text
npm run lint
npm run build
```

after creating `repo/src/app/fertility/page.tsx`.

Validation decision confidence: 0.94

---

## 18. 12BC Decision

Decision: `/fertility` is approved for the next static-route implementation checkpoint, provided it remains a narrow, static, non-clinical, informational route about fertility and preconception support.

The approved future route path is:

```text
/fertility
```

The approved future implementation file is:

```text
repo/src/app/fertility/page.tsx
```

No code implementation is performed in 12BC.

No existing completed route requires modification in 12BC.

Decision confidence: 0.94

---

## 19. Next Recommended Checkpoint

Recommended next checkpoint:

```text
12BD — RDDA Fertility and Preconception Page Static Route Implementation + Validation
```

Recommended implementation target:

```text
repo/src/app/fertility/page.tsx
```

Recommended validation commands:

```text
npm run lint
npm run build
```

Recommended checkpoint file:

```text
exports/12BD_RDDA_Fertility_Preconception_Page_Static_Route_Implementation_Validation.md
```

Recommended commit message for 12BD:

```text
Add RDDA fertility preconception page static route
```

Next checkpoint confidence: 0.94

---

## 20. Final 12BC Status

12BC is complete when this file is committed and pushed.

Summary:

- `/fertility` route planning is complete.
- `/fertility` is not implemented in this checkpoint.
- Existing routes are unchanged.
- Shared UI primitives are unchanged.
- `SectionCard` remains unchanged.
- The planned route remains static, informational, and non-clinical.
- The next checkpoint should implement and validate `/fertility`.

Final confidence: 0.95

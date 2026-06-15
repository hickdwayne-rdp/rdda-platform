# 12AZ — RDDA Postpartum Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AZ  
**Route planned:** `/postpartum`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA postpartum page static route planning`

---

## 1. Purpose

12AZ plans the future `/postpartum` static public-facing route.

This checkpoint creates the source-aligned section outline only. It does not implement the route and does not modify any completed public route.

12AZ does not create:

```text
repo/src/app/postpartum/page.tsx
```

12AZ creates only:

```text
exports/12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Planning confidence: 0.96

---

## 2. Current Repository Context

Latest completed checkpoint entering 12AZ:

```text
12AY — RDDA Birth Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12AZ:

```text
924a8c6 Add RDDA birth page source alignment review
```

Current status entering 12AZ:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12AY checkpoint is committed and pushed.
- `/birth` has been reviewed and confirmed source-aligned.
- `/postpartum` is the next selected safe static public-facing route.

Completed static public-facing route set entering 12AZ:

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

12AZ is planning-only, so `/postpartum` is not added to the completed route set in this checkpoint.

Repository context confidence: 0.96

---

## 3. Active Controls

The following controls remain active:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- 12AY birth page source alignment review and next static route decision
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
- current `repo/src/components/ui/SectionCard.tsx`

Controls confidence: 0.94

---

## 4. Static Architecture Requirements

The future `/postpartum` route must remain static and informational only.

Required constraints:

- no CMS
- no Payload
- no Supabase
- no database
- no auth
- no forms
- no API routes
- no dynamic behavior
- no state
- no effects
- no client behavior
- no `"use client"`
- no route-specific section components
- no new shared UI primitives
- no changes to completed routes
- no changes to `SectionCard`

The later implementation should use only the existing approved page pattern:

```text
PageShell
PageContainer
SectionCard
static arrays inside the route file if useful
direct JSX inside the route file
```

Architecture confidence: 0.97

---

## 5. SectionCard Usage Boundary

Current `SectionCard` props remain:

```text
children
as
className
id
ariaLabelledBy
```

The later implementation may use `SectionCard` as a presentational wrapper only.

Approved usage:

```tsx
<SectionCard>
  <h2>...</h2>
  <p>...</p>
</SectionCard>
```

Do not use unsupported props:

```text
title
eyebrow
description
heading
variant
items
```

SectionCard confidence: 0.98

---

## 6. Source-Aligned Route Purpose

The future `/postpartum` page should introduce postpartum doula support as non-medical, practical, emotional, informational, and family-centred support during the early transition after birth.

The page should align with existing RDDA public content by staying general, calm, accessible, and community-oriented.

The page should help visitors understand broad support categories without becoming an advice tool, intake pathway, booking route, matching service, directory, form, or dynamic resource system.

Route purpose confidence: 0.92

---

## 7. Source-Aligned Content Boundaries

Safe themes for `/postpartum`:

- postpartum and family support
- early transition after birth
- practical care
- reassurance
- education
- general community-resource awareness
- emotional, informational, practical, and family transition support
- families, support people, doulas, and community members across Central Alberta
- doulas working alongside qualified providers and community supports
- static public information

Avoid unsupported expansion into:

- individualized advice
- provider replacement claims
- guaranteed service promises
- outcome promises
- eligibility screening
- recommendation logic
- matching logic
- directory logic
- intake workflows
- referral workflows
- booking workflows
- payment workflows
- account workflows
- search or filtering systems
- live availability
- personalized content

Source-alignment confidence: 0.91

---

## 8. Exact Future `/postpartum` Section Order

The future `/postpartum` route should use this section order.

### Section 1 — Hero

Purpose:

- Introduce the page as a general postpartum support overview.
- Set a non-medical and static public-information expectation.
- Connect the page to RDDA's Central Alberta community context.

Suggested content direction:

- Page label: `Postpartum Support`
- Heading concept: `Non-medical doula support during the early transition after birth.`
- Intro concept: Postpartum support may include practical, emotional, informational, and family-centred support that works alongside qualified providers and community supports.

Confidence: 0.92

### Section 2 — What Postpartum Doula Support Can Include

Purpose:

- Explain broad support categories.
- Keep language practical, general, and source-aligned.

Suggested cards:

1. `Emotional reassurance`
   - Calm presence, listening, encouragement, and steady support.
2. `Practical family support`
   - General practical support that helps a family feel more organized and supported.
3. `Informational support`
   - Helping families organize questions for qualified providers, organizations, or individual doulas.
4. `Family transition support`
   - Support around routines, support people, and home adjustment in broad terms.

Suggested implementation pattern:

- Use a static array inside `repo/src/app/postpartum/page.tsx`.
- Map over the array inside the route file.
- Wrap cards in `SectionCard`.
- Do not create route-specific card components.

Confidence: 0.9

### Section 3 — The Early Postpartum Transition

Purpose:

- Describe the early after-birth transition in general language.
- Keep the page focused on support roles rather than instructions.

Suggested content direction:

- Families may experience changing routines, rest needs, questions, and support needs after birth.
- Doulas may provide reassurance, practical presence, and general support as families adjust.
- Each family context is different.
- Current or individualized questions should be confirmed with qualified providers, responsible organizations, or individual doulas.

Confidence: 0.88

### Section 4 — Practical Support Without Operational Promises

Purpose:

- Explain practical support without guaranteeing specific services or outcomes.

Suggested content direction:

- Practical support may help families feel more settled, organized, and supported.
- Support may include broad topics such as routines, rest-friendly environments, family communication, and preparing questions.
- Support can vary based on the family, doula, home context, and circumstances.

Confidence: 0.89

### Section 5 — Questions, Education, and Community Resources

Purpose:

- Describe safe informational support and general community-resource awareness.
- Avoid implying live referrals, eligibility decisions, or case management.

Suggested content direction:

- Doulas may help families organize questions for qualified providers, public supports, community organizations, or individual doulas.
- Education language should remain general and non-individualized.
- Families should confirm current details directly with qualified providers, organizations, or individual doulas.
- RDDA's website is a public information starting point.

Confidence: 0.9

### Section 6 — Working Alongside Qualified Providers

Purpose:

- Make the non-medical support boundary clear.
- Prevent the page from being mistaken for individualized guidance or live support.

Suggested content direction:

- Doulas provide non-medical support.
- Doulas do not replace qualified providers or responsible organizations.
- Families should bring current and individualized questions to the appropriate qualified provider, organization, or individual doula.
- RDDA public pages are a starting point for general understanding only.

Confidence: 0.96

### Section 7 — Families, Partners, and Support People After Birth

Purpose:

- Connect postpartum support to family context and support people.
- Keep language inclusive and general.

Suggested content direction:

- Postpartum support can include helping support people understand supportive roles in broad terms.
- Doulas may help create a steadier support environment through reassurance and practical presence.
- Families can consider what kind of support feels respectful and useful after birth.

Confidence: 0.86

### Section 8 — Is Postpartum Support Right for My Family?

Purpose:

- Provide gentle orientation without screening, scoring, matching, or eligibility logic.

Suggested content direction:

- Families may consider support needs, values, communication preferences, location, home context, and questions.
- Families may ask individual doulas about training, scope, availability, communication style, service area, and the kinds of non-medical support they provide.
- RDDA public pages can be a starting point for learning, not a replacement for direct conversations.

Confidence: 0.88

### Section 9 — Static Website Boundaries

Purpose:

- Close with clear website boundaries.
- Reaffirm that the page is static public information only.

Suggested content direction:

- This page is static and informational.
- It does not collect personal information.
- It does not provide booking, referral, intake, payment, account, search, filtering, case-management, or live support services.
- Visitors should confirm current details directly with qualified providers, organizations, or individual doulas when needed.

Confidence: 0.95

---

## 9. Proposed Static Content Objects for Later Implementation

The later implementation may use static arrays inside `repo/src/app/postpartum/page.tsx` for repeated content.

Safe array examples:

```text
postpartumSupportAreas
earlyTransitionItems
familyReflectionItems
supportPeopleItems
```

Allowed static array content types:

- titles
- short descriptions
- short list strings

Not allowed:

- API-loaded data
- CMS-loaded data
- database-loaded data
- generated content
- user-specific data
- form state
- search indexes
- dynamic filters
- live directory entries
- availability data
- pricing data
- booking data
- referral data

Implementation confidence: 0.93

---

## 10. Validation Expectations for Later Implementation

The later implementation checkpoint should run local validation from:

```text
repo/
```

Expected validation commands:

```text
npm run lint
npm run build
```

Expected validation outcomes:

- lint passes
- production build passes
- `/postpartum` is prerendered as a static route
- no client component behavior is introduced
- no prohibited systems are introduced
- no existing completed static routes regress
- no invalid `SectionCard` props are used
- no JSX apostrophe escaping issues are introduced

Validation confidence: 0.95

---

## 11. Explicit Non-Goals for `/postpartum`

The `/postpartum` route is not:

- an advice tool
- a directory
- a matching service
- an intake form
- a referral workflow
- a booking page
- a payment page
- a contact form
- an account page
- a searchable or filterable resource
- a CMS-managed content page
- a dynamic help centre

Non-goal confidence: 0.97

---

## 12. Weighted Planning Confidence

Subproblem confidence:

1. 12AY handoff interpretation: 0.94
2. Existing route theme alignment: 0.9
3. Postpartum scope safety: 0.88
4. Static architecture compatibility: 0.97
5. `SectionCard` compatibility: 0.98
6. Future validation expectations: 0.95
7. Prohibited systems exclusion: 0.97

Weighted confidence:

```text
0.94
```

The planning confidence is above 0.8, so no retry or alternate route selection is required.

---

## 13. 12AZ Decision

12AZ decision:

```text
Proceed later to /postpartum implementation only after this planning checkpoint is committed and synced locally.
```

Next implementation checkpoint should be:

```text
12BA — RDDA Postpartum Page Static Route Implementation + Validation
```

Future 12BA implementation target:

```text
repo/src/app/postpartum/page.tsx
```

Do not implement `/postpartum` in 12AZ.

Decision confidence: 0.96

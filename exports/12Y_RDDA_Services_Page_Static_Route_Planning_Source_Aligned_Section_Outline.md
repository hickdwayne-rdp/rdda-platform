# 12Y — RDDA Services Page Static Route Planning + Source-Aligned Section Outline

## Checkpoint Type

Planning/documentation only.

No application source code is to be modified during 12Y.

---

## Current Repo State Confirmation

Based on the completed 12X checkpoint and latest reported repository state:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- Latest commit is:

```text
a502b16 Add RDDA about page source alignment review
```

- Homepage static architecture remains frozen.
- Homepage content remains frozen.
- Homepage section order remains frozen:

  1. Hero
  2. Service Areas
  3. Who RDDA Supports
  4. Approach

- `/about` has been implemented and reviewed as a safe static route.
- `/about` uses:
  - `PageShell`
  - `PageContainer`
  - `SectionCard`

- `SectionCard` remains the only approved shared UI primitive.
- `/services` has been selected as the next safe static public-facing route.
- No CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or `"use client"` should be introduced.

Before committing 12Y, confirm locally with:

```powershell
git status --short
git log --oneline -5
```

Expected status before creating this file:

```text
nothing to commit, working tree clean
```

After creating this 12Y checkpoint file, expected status should show only:

```text
?? exports/12Y_RDDA_Services_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

---

## Purpose of 12Y

The purpose of 12Y is to plan the next static public-facing route:

```text
/services
```

This checkpoint does not implement `/services`.

12Y defines:

- why `/services` is the next safe route
- what `/services` should contain
- what `/services` must avoid
- the recommended source-aligned page structure
- the safe implementation boundaries for the future 12Z implementation step

---

## Governing Controls Reviewed

12Y is governed by the following existing project controls:

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
- current homepage section files
- current `repo/src/app/about/page.tsx`
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

---

## Non-Negotiable 12Y Constraints

12Y must remain planning/documentation only.

Do not:

- implement `/services`
- modify the frozen homepage
- change homepage content
- change homepage section order
- create another shared UI primitive
- create route-specific section components
- add CMS
- add Payload
- add Supabase
- add database logic
- add authentication
- add forms
- add API logic
- add dynamic behavior
- add state
- add effects
- add client component behavior
- add `"use client"`

---

## Current Static Architecture Baseline

The current frontend baseline supports a cautious static-first implementation pattern.

Approved current primitives and layout structures:

- `PageShell`
- `PageContainer`
- `SectionCard`

The homepage has already been frozen and should not be used as an active editing surface.

The `/about` route confirms that additional static routes can be safely added without creating new component complexity.

The future `/services` route should follow the same static implementation pattern used by `/about`.

---

## Why `/services` Is The Next Safe Static Route

`/services` is the next safest route because it is:

- public-facing
- informational
- source-document-aligned
- expected in the production sitemap
- closely connected to existing homepage service-area content
- suitable for static text-based presentation
- safe to implement without CMS or database logic
- safe to implement without forms or intake functionality
- safe to implement without dynamic filtering, state, effects, or client behavior

The `/services` route can expand on existing source-supported service-area themes without changing the homepage.

This keeps the homepage frozen while allowing the production site structure to grow safely.

---

## Important Distinction From Homepage Service Areas

The homepage already includes a high-level service areas section.

The future `/services` page should not duplicate the homepage word-for-word.

Instead, `/services` should act as a more detailed static overview of RDDA’s support areas.

The homepage remains a short public introduction.

The `/services` page becomes a fuller informational page.

This avoids:

- homepage expansion
- homepage section order changes
- repeated homepage content
- premature dynamic service directories
- premature provider listings
- premature intake workflows

---

## Recommended `/services` Route Purpose

The `/services` route should explain the types of support RDDA connects families, doulas, and the wider community with across Central Alberta.

The page should remain general, informational, and static.

Recommended page purpose:

```text
To provide a clear, source-aligned overview of RDDA’s service and support areas for families, doulas, and community partners across the reproductive and family life cycle in Central Alberta.
```

---

## Recommended Route Path

Future implementation route:

```text
repo/src/app/services/page.tsx
```

This route should be created only during the next implementation step.

Do not create it during 12Y.

---

## Recommended Page Title

Recommended visible page title:

```text
Services
```

Alternative source-aligned title:

```text
Doula Services and Community Support
```

Recommended decision:

Use:

```text
Services
```

Reason:

- simple
- sitemap-aligned
- predictable for users
- easy to support in navigation later
- avoids over-defining service categories before the full site structure is implemented

---

## Recommended Page Intro

The `/services` intro should explain that RDDA supports access to doula care, education, community connection, and professional support.

Suggested direction:

- RDDA helps families understand available doula support.
- RDDA supports doulas through community, education, and visibility.
- RDDA connects the wider community with reproductive and family-support resources.
- RDDA serves Central Alberta.

Avoid:

- promising direct medical care
- promising guaranteed service matching
- suggesting emergency support
- suggesting legal, clinical, or therapeutic services
- creating intake expectations
- implying a live database of doulas or services

---

## Recommended `/services` Page Structure

The future `/services` page should be structured as one static route using existing approved layout and UI primitives only.

Recommended structure:

1. Page heading and intro
2. Birth and labour support
3. Postpartum and newborn support
4. Fertility, pregnancy loss, and reproductive transitions
5. Family education and preparation
6. Doula community and professional support
7. Community connection and referrals
8. Closing clarification / next-step orientation

---

## Section 1 — Page Heading and Intro

Recommended section purpose:

Introduce the services page as a source-aligned overview of RDDA’s areas of support.

Recommended content themes:

- RDDA supports families, doulas, and communities.
- Support may occur across pregnancy, birth, postpartum, reproductive transitions, and family life.
- The page is informational.
- Families may use it to understand the types of doula and community supports connected to RDDA’s mission.

Recommended implementation pattern:

- Use `PageShell`.
- Use `PageContainer`.
- Use regular static HTML headings and paragraphs.
- Use `SectionCard` only where card grouping improves readability.

Do not create a custom hero component.

---

## Section 2 — Birth and Labour Support

Recommended section purpose:

Describe birth and labour-related doula support in broad, non-clinical language.

Recommended content themes:

- emotional support
- informational support
- physical comfort support
- preparation for labour and birth
- support for families during birth experiences
- respect for different birth settings and choices

Suggested section heading:

```text
Birth and labour support
```

Important wording boundary:

Do not describe doulas as medical providers.

Avoid:

- medical claims
- clinical advice
- promises of outcomes
- language implying doulas replace nurses, midwives, physicians, or other regulated professionals

Recommended static framing:

Birth and labour support may include emotional, practical, and informational support before and during birth, while medical care remains with regulated health professionals.

Confidence: 0.91

---

## Section 3 — Postpartum and Newborn Support

Recommended section purpose:

Describe postpartum and newborn support as practical, emotional, and family-centered.

Recommended content themes:

- adjustment after birth
- newborn care support
- feeding support in general language
- rest and recovery
- family routines
- emotional reassurance
- household transition support

Suggested section heading:

```text
Postpartum and newborn support
```

Important wording boundary:

Avoid specific medical, lactation, mental-health, or sleep-training claims unless directly supported by source documents and framed carefully.

Recommended static framing:

Postpartum support can help families adjust after birth through practical, emotional, and informational support during the early weeks and months.

Confidence: 0.90

---

## Section 4 — Fertility, Pregnancy Loss, and Reproductive Transitions

Recommended section purpose:

Acknowledge that doula support may extend beyond birth into fertility, pregnancy loss, reproductive decision-making, and life transitions.

Recommended content themes:

- fertility journeys
- pregnancy loss
- reproductive transitions
- compassionate support
- non-judgmental care
- emotional and informational presence

Suggested section heading:

```text
Reproductive transitions and loss support
```

Important wording boundary:

This section must be sensitive and general.

Avoid:

- clinical counselling claims
- therapy claims
- medical guidance
- crisis-response framing
- detailed intervention language

Recommended static framing:

Some families seek doula support through fertility experiences, pregnancy loss, or other reproductive transitions. RDDA can describe these areas of support in compassionate, non-clinical language.

Confidence: 0.86

---

## Section 5 — Family Education and Preparation

Recommended section purpose:

Describe education-oriented support without creating course registration, events, or dynamic scheduling expectations.

Recommended content themes:

- birth preparation
- postpartum preparation
- understanding doula roles
- family decision-making
- community learning
- resource awareness

Suggested section heading:

```text
Education and preparation
```

Important wording boundary:

Do not add event listings, class calendars, registrations, or forms.

Recommended static framing:

Education and preparation support may help families understand options, ask informed questions, and prepare for pregnancy, birth, postpartum, and family transitions.

Confidence: 0.88

---

## Section 6 — Doula Community and Professional Support

Recommended section purpose:

Reflect RDDA’s role in supporting doulas and strengthening the local doula community.

Recommended content themes:

- professional connection
- peer support
- visibility
- learning
- collaboration
- community standards
- strengthening doula care in Central Alberta

Suggested section heading:

```text
Support for doulas
```

Important wording boundary:

Do not create membership functionality.

Do not add:

- member login
- profile management
- directory logic
- certification verification
- payment logic
- private community features

Recommended static framing:

RDDA supports doulas through connection, shared learning, visibility, and community-building while the site remains in a static public-facing phase.

Confidence: 0.89

---

## Section 7 — Community Connection and Referrals

Recommended section purpose:

Explain RDDA’s broader community connection role without building referral or intake logic.

Recommended content themes:

- connection to community resources
- helping people understand support options
- collaboration with families, doulas, and community partners
- Central Alberta focus

Suggested section heading:

```text
Community connection
```

Important wording boundary:

Avoid implying that `/services` is an active referral form or live matching system.

Do not add:

- referral form
- intake form
- contact workflow
- database search
- provider matching
- directory filtering
- emergency support claims

Recommended static framing:

RDDA can help clarify the types of support families and community partners may look for, while future contact or directory workflows should be handled separately and only when approved.

Confidence: 0.87

---

## Section 8 — Closing Clarification / Next-Step Orientation

Recommended section purpose:

Close the page by guiding users without adding interactive functionality.

Suggested heading:

```text
Finding the right support
```

Recommended content themes:

- every family’s needs are different
- doula support can vary by stage, family, and circumstance
- RDDA’s role is to make support easier to understand and access
- future site areas may provide more detailed navigation when approved

Important wording boundary:

Avoid calls to action that require unavailable forms or workflows.

Acceptable static language:

- “Learn more about RDDA”
- “Explore the types of support available”
- “Contact options will be handled in a future approved route”
- “Directory or referral functionality should not be implied at this stage”

Confidence: 0.84

---

## Recommended Visual Structure

The `/services` route should remain visually consistent with `/about`.

Recommended page-level pattern:

```tsx
<PageShell>
  <PageContainer>
    static page heading and intro
    <SectionCard>...</SectionCard>
    <SectionCard>...</SectionCard>
    <SectionCard>...</SectionCard>
  </PageContainer>
</PageShell>
```

This is only a planning sketch.

Do not implement during 12Y.

---

## Recommended Implementation Style For Future 12Z

Future implementation should:

- create only `repo/src/app/services/page.tsx`
- use `PageShell`
- use `PageContainer`
- use `SectionCard`
- use static text only
- keep content source-aligned
- avoid new shared UI primitives
- avoid route-specific section components
- avoid homepage edits
- avoid metadata changes unless specifically planned
- avoid navigation changes unless separately approved
- avoid dynamic behavior

---

## Route-Specific Section Component Decision

Decision:

Do not create route-specific section components for `/services`.

Reason:

The `/services` page can be safely implemented as a single static route file using existing layout wrappers and `SectionCard`.

Creating route-specific section components at this stage would add unnecessary abstraction before the final services content structure has been validated.

Confidence: 0.93

---

## Shared UI Primitive Decision

Decision:

Do not create another shared UI primitive during `/services` planning or future `/services` implementation.

Reason:

12J, 12P, 12Q, and 12R established caution around shared primitive extraction.

`SectionCard` is already sufficient for the expected `/services` content.

Confidence: 0.95

---

## Homepage Freeze Protection

The `/services` route must not modify the homepage.

Do not modify:

```text
repo/src/app/page.tsx
```

Do not modify current homepage section files.

Do not change homepage section order:

1. Hero
2. Service Areas
3. Who RDDA Supports
4. Approach

Do not expand homepage content as part of `/services`.

Confidence: 0.97

---

## About Route Protection

The `/services` route should use `/about` as a safe implementation reference, but should not modify `/about`.

Do not modify:

```text
repo/src/app/about/page.tsx
```

The `/about` route remains validated and should not be changed during `/services` implementation unless a separate checkpoint approves it.

Confidence: 0.96

---

## Content Risk Review

Potential risk:

The `/services` page could accidentally imply clinical care, emergency care, guaranteed matching, or active referral functionality.

Mitigation:

Use general, static, informational language.

Avoid:

- clinical claims
- emergency support language
- therapy claims
- medical advice
- guaranteed outcomes
- live directory language
- intake language
- form language
- registration language
- booking language

Confidence: 0.88

---

## Source Alignment Review

The `/services` page should remain aligned with RDDA’s documented role across:

- family support
- doula support
- community support
- reproductive and family life cycle support
- Central Alberta service orientation
- education and connection
- non-clinical doula care

The page should not invent detailed programs, pricing, schedules, certifications, eligibility criteria, or operational workflows unless already established in approved RDDA source documents.

Confidence: 0.90

---

## Recommended `/services` Section Outline

Recommended future page outline:

```text
/services

1. Services
   Introductory overview of RDDA’s support areas.

2. Birth and labour support
   Emotional, practical, and informational doula support before and during birth.

3. Postpartum and newborn support
   Family-centered support during the adjustment after birth.

4. Reproductive transitions and loss support
   Compassionate non-clinical support through fertility experiences, pregnancy loss, and reproductive transitions.

5. Education and preparation
   Support for families as they learn, prepare, and understand available options.

6. Support for doulas
   Community, visibility, connection, and professional support for doulas.

7. Community connection
   RDDA’s role in helping families, doulas, and community partners understand support options.

8. Finding the right support
   Closing orientation that remains static and does not imply unavailable workflows.
```

---

## Recommended Future 12Z Scope

The next implementation step should be:

```text
12Z — RDDA Services Page Static Route Implementation + Validation
```

Recommended 12Z scope:

- create `repo/src/app/services/page.tsx`
- use `PageShell`
- use `PageContainer`
- use `SectionCard`
- implement static source-aligned `/services` content
- do not modify homepage
- do not modify `/about`
- do not create shared UI primitives
- do not create route-specific section components
- do not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or `"use client"`
- run lint
- run build
- create implementation validation checkpoint
- commit and push only after validation passes

---

## Files Expected To Be Modified In 12Y

Only this file should be created:

```text
exports/12Y_RDDA_Services_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

No app source files should be modified during 12Y.

---

## Files Not To Modify In 12Y

Do not modify:

```text
repo/src/app/page.tsx
repo/src/app/about/page.tsx
repo/src/components/ui/SectionCard.tsx
```

Do not modify homepage section files.

Do not create:

```text
repo/src/app/services/page.tsx
```

during 12Y.

---

## Validation Commands For 12Y

Because 12Y is documentation-only, lint and build are not required unless source files are accidentally changed.

Recommended verification:

```powershell
git status --short
```

Expected after creating this file:

```text
?? exports/12Y_RDDA_Services_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

If only the 12Y export file appears, proceed with commit.

---

## Recommended Commit Commands

```powershell
git add ".\exports\12Y_RDDA_Services_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md"
git commit -m "Add RDDA services page static route planning"
git push
```

---

## 12Y Decision

Decision:

Proceed with `/services` as the next static public-facing route, but do not implement it during 12Y.

The future `/services` page should be a source-aligned, static informational route using only the already-approved layout and UI patterns:

- `PageShell`
- `PageContainer`
- `SectionCard`

No homepage changes are approved.

No `/about` changes are approved.

No new shared UI primitives are approved.

No route-specific section components are approved.

No CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or `"use client"` are approved.

---

## Confidence Review

Subproblem confidence:

- Repo state interpretation from 12X completion: 0.94
- `/services` route selection as next safe static route: 0.92
- Homepage freeze protection: 0.97
- Use of existing layout and `SectionCard`: 0.95
- Avoidance of new primitives and route-specific components: 0.95
- Source-aligned section outline: 0.88
- Risk controls around clinical/referral/intake language: 0.88
- Future 12Z scope clarity: 0.93

Weighted overall confidence:

```text
0.93
```

Primary reason confidence is above 0.90:

The `/services` route is a natural continuation after `/about`, can remain fully static, and can reuse the already validated `/about` implementation pattern without touching the frozen homepage or expanding the component system.

---

## 12Y Completion Note

12Y completed planning for the future `/services` static route.

This checkpoint confirmed that `/services` should be implemented only as a static, source-aligned public-facing informational page.

The recommended future page structure includes:

1. Services intro
2. Birth and labour support
3. Postpartum and newborn support
4. Reproductive transitions and loss support
5. Education and preparation
6. Support for doulas
7. Community connection
8. Finding the right support

12Y did not approve implementation yet.

12Y did not approve homepage changes.

12Y did not approve `/about` changes.

12Y did not approve new shared UI primitives.

12Y did not approve route-specific section components.

12Y did not approve CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client behavior, or `"use client"`.

Recommended next step:

```text
12Z — RDDA Services Page Static Route Implementation + Validation
```

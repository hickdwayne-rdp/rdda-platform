# 12BF — RDDA Pregnancy and Infant Loss Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12BF  
**Route planned:** `/loss`  
**Working route theme:** Pregnancy and infant loss support  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA pregnancy infant loss page static route planning`

---

## 1. 12BF Purpose

12BF plans the `/loss` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future pregnancy and infant loss support page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12BF does not create the `/loss` route file.

12BF does not modify:

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
- `/fertility`
- `SectionCard`
- shared UI primitives
- layout primitives

12BF does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Planning confidence: 0.97

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12BF:

```text
12BE — RDDA Fertility and Preconception Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12BF:

```text
e34bf24 Add RDDA fertility preconception page source alignment review
```

Current status entering 12BF:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12BE checkpoint is committed and pushed.
- `/fertility` has been reviewed and confirmed source-aligned.
- 12BE selected `/loss` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12BF:

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
13. `/fertility`

12BF is planning-only, so `/loss` is not added to the completed route set in this checkpoint.

Repository context confidence: 0.98

---

## 3. Files and Controls Reviewed for 12BF

Reviewed source and checkpoint files:

```text
exports/12BE_RDDA_Fertility_Preconception_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
exports/12BC_RDDA_Fertility_Preconception_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/birth/page.tsx
repo/src/app/fertility/page.tsx
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
- 12BC fertility and preconception page static route planning checkpoint
- 12BD fertility and preconception page static route implementation validation checkpoint
- 12BE fertility and preconception page source alignment review and next static route decision
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
- current `/fertility` route
- current `repo/src/components/ui/SectionCard.tsx`

Review confidence: 0.96

---

## 4. 12BE Handoff Reviewed

12BE confirmed:

- `/fertility` is complete.
- `/fertility` remains source-aligned.
- `/fertility` remains static.
- `/fertility` remains informational.
- `/fertility` remains architecture-compliant.
- `/fertility` uses approved primitives only.
- `SectionCard` was reused correctly.
- No invalid `SectionCard` props were used.
- No `"use client"` was added.
- No prohibited dynamic systems were introduced.
- `/loss` is selected as the next safe static public-facing route to plan.

12BE also identified the remaining homepage service-area order as:

1. Pregnancy & birth support
2. Postpartum support
3. Fertility & preconception support
4. Pregnancy and infant loss support
5. Family transitions
6. End-of-life and grief support

Because `/birth`, `/postpartum`, and `/fertility` are already complete, 12BF plans the fourth service-area route.

Handoff confidence: 0.97

---

## 5. Homepage Service-Area Order Confirmation

The homepage currently lists the lifecycle service areas in this order:

```text
Pregnancy & birth support
Postpartum support
Fertility & preconception support
Pregnancy and infant loss support
Family transitions
End-of-life and grief support
```

The completed service-area route set now includes:

```text
/birth
/postpartum
/fertility
```

Therefore the next planned route is:

```text
/loss
```

Working public-facing theme:

```text
Pregnancy and infant loss support
```

Important naming decision:

- `/loss` is selected for pregnancy and infant loss support.
- `/loss` must not become the broader end-of-life and grief route.
- The later homepage service area, “End-of-life and grief support,” should remain available for a separate future route decision.

Route-order confidence: 0.96

---

## 6. Existing Static Route Pattern

The current completed static route pattern remains established by:

```text
repo/src/app/birth/page.tsx
repo/src/app/postpartum/page.tsx
repo/src/app/fertility/page.tsx
```

The future `/loss` route should follow the same implementation style:

- one route file only
- direct page-level JSX
- server component by default
- no route-specific section components
- no new shared UI primitives
- local static arrays for repeated display content if useful
- `PageShell`
- `PageContainer`
- existing `SectionCard`
- semantic headings
- accessible text hierarchy
- responsive card grids only where useful
- static informational copy

The future implementation file should be:

```text
repo/src/app/loss/page.tsx
```

Pattern confidence: 0.96

---

## 7. Source-Aligned Content Direction

The `/loss` page should be a gentle, non-clinical public information page about pregnancy and infant loss support.

The page may describe support in broad terms such as:

- steady emotional presence
- respectful acknowledgement of grief
- practical support around communication, planning, and household needs
- support for partners, family members, siblings, and chosen support people
- informational support that helps people organize questions for qualified providers or appropriate supports
- support that respects culture, family structure, values, rituals, and privacy
- support before, during, or after a loss experience, depending on the individual doula's scope and services
- community-facing awareness that loss experiences are personal and varied

The page should not describe RDDA or doulas as providing:

- grief counselling
- therapy
- psychotherapy
- mental-health treatment
- crisis intervention
- emergency response
- medical care
- clinical advice
- diagnosis
- treatment planning
- bereavement counselling as a regulated or clinical service
- funeral direction
- legal advice
- child protection advice
- spiritual direction
- religious counselling
- referral matching
- intake, triage, or case management

Source-alignment confidence: 0.94

---

## 8. Required Boundary Positioning

Pregnancy and infant loss content is emotionally sensitive and higher-risk than ordinary informational service pages.

The future `/loss` implementation must include clear boundary language.

Required boundary position:

```text
This page is general public information only. It is not medical advice, counselling, therapy, crisis support, emergency support, or a substitute for qualified care.
```

The page should direct visitors to qualified providers or appropriate supports for:

- medical concerns
- urgent health concerns
- emergency concerns
- safety concerns
- mental-health concerns
- thoughts of self-harm
- crisis support
- grief counselling or therapy needs
- diagnosis or treatment questions
- legal, funeral, or regulated-service questions

The page should not invite visitors to disclose sensitive loss details through any form or dynamic workflow.

The future route should remain static and informational only.

Boundary confidence: 0.98

---

## 9. Approved Route-Level Content Plan

Approved route path:

```text
/loss
```

Approved route file:

```text
repo/src/app/loss/page.tsx
```

Approved page label:

```text
Pregnancy and Infant Loss Support
```

Approved H1 direction:

```text
Gentle, non-clinical support through pregnancy and infant loss.
```

Approved introductory framing:

- RDDA recognizes pregnancy and infant loss support as steady, respectful, non-clinical support for families and support people navigating loss.
- The page is general public information for families, support people, doulas, and community members across Central Alberta.
- Loss support may look different depending on the family, doula, timing, circumstances, culture, and support needs.
- Qualified medical, mental-health, crisis, emergency, spiritual, legal, funeral, or regulated supports remain outside this page's scope.

Content-plan confidence: 0.95

---

## 10. Source-Aligned Section Outline

The future `/loss` route should use this section structure.

### 10.1 Hero Section

Purpose:

- identify the page as pregnancy and infant loss support
- introduce loss support gently and respectfully
- state that the page is general public information
- avoid any promise that support can resolve grief, trauma, medical questions, or crisis needs

Suggested content direction:

```text
Pregnancy and Infant Loss Support
Gentle, non-clinical support through pregnancy and infant loss.
```

Suggested paragraph direction:

```text
Red Deer Doula Association recognizes pregnancy and infant loss support as steady emotional, informational, practical, and family-centred support for families and support people navigating loss. This page is general public information for families, support people, doulas, and community members across Central Alberta.
```

Avoid:

- “healing services”
- “trauma treatment”
- “grief therapy”
- “bereavement counselling” as a clinical service
- “crisis support”
- “emergency support”
- “specialized treatment”

Hero confidence: 0.95

---

### 10.2 What Support Can Include

Purpose:

- describe broad categories of non-clinical support
- keep categories parallel to the birth/postpartum/fertility pages
- avoid clinical, counselling, therapeutic, crisis, or emergency claims

Approved card topics:

1. Emotional presence
2. Informational support
3. Practical support
4. Family-centred support

Suggested card directions:

**Emotional presence**

```text
Calm, respectful presence, acknowledgement, and steady support during an experience that may involve grief, shock, uncertainty, or many different emotions.
```

**Informational support**

```text
Helping families organize questions for qualified providers or appropriate supports without replacing medical, mental-health, crisis, legal, funeral, spiritual, or regulated care.
```

**Practical support**

```text
General support around communication, planning, household needs, routines, appointments, or support people, depending on the individual doula's scope and services.
```

**Family-centred support**

```text
Support that respects the family's values, privacy, culture, relationships, children, household context, and chosen support people.
```

Support-category confidence: 0.95

---

### 10.3 During and After Loss

Purpose:

- explain that support may happen at different points
- avoid prescriptive advice about what people should do
- keep support practical and non-clinical

Suggested heading direction:

```text
Support may focus on presence, communication, and practical needs
```

Suggested body direction:

- support may differ before, during, or after a loss experience
- doulas may help families think about who they want present
- doulas may help families organize general questions for qualified providers or appropriate supports
- doulas may support communication preferences and practical planning
- families should bring medical, mental-health, crisis, emergency, legal, funeral, spiritual, or regulated-care questions to qualified providers or appropriate supports

Avoid:

- procedural medical guidance
- advice about testing, treatment, medication, labour, delivery, recovery, funeral decisions, legal documents, or crisis planning
- instructions about what to say or do in acute medical or emergency situations

Section confidence: 0.94

---

### 10.4 Questions Families May Consider

Purpose:

- offer non-prescriptive reflection prompts
- help visitors prepare for conversations with qualified providers and potential doulas
- avoid intake-like data collection

Approved reflection prompts:

```text
What kind of support would feel steady, respectful, and useful right now?
What questions should be discussed directly with a qualified medical provider or appropriate support?
Who does the family want involved in communication, planning, or practical support?
What cultural, spiritual, household, privacy, or family considerations should a support person understand?
What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?
```

These should be presented as public information only, not as a form, checklist submission, or intake tool.

Question-section confidence: 0.95

---

### 10.5 Supporting Partners, Children, and Family Members

Purpose:

- acknowledge that pregnancy and infant loss can affect a wider family system
- include partners, siblings, grandparents, relatives, and chosen support people
- remain non-therapeutic and non-clinical

Approved content direction:

- support may include helping partners and chosen support people understand practical ways to be present
- support may include respecting children and family members in age-appropriate, family-led, and culturally respectful ways
- support may include helping households think about routines, privacy, communication, and practical needs
- therapeutic grief support, mental-health support, crisis support, and child-specific clinical guidance remain outside this page's scope

Suggested card topics:

1. Partners and support people
2. Children and family context

Family-section confidence: 0.94

---

### 10.6 Thinking About Fit

Purpose:

- help visitors understand that individual doulas may differ in training, scope, availability, fees, location, and experience
- avoid promising that RDDA assigns, matches, screens, certifies, supervises, or refers doulas
- avoid intake or booking language

Approved content direction:

- families may wish to ask individual doulas about experience with pregnancy and infant loss support
- families may wish to ask about training, scope, boundaries, availability, communication, fees, and service area
- families should use qualified providers or appropriate supports for clinical, counselling, crisis, emergency, legal, funeral, spiritual, or regulated questions
- RDDA public pages should remain informational and should not imply dynamic matching or referral workflows

Fit-section confidence: 0.95

---

### 10.7 Website Boundaries

Purpose:

- provide explicit scope limitations
- protect visitors and project integrity
- reduce risk of unsupported claims

Required boundary language direction:

```text
This website provides general public information only. It does not provide medical advice, counselling, therapy, crisis support, emergency support, bereavement counselling, legal advice, funeral direction, spiritual direction, intake, referral, matching, booking, or individualized recommendations.
```

Additional direction:

```text
Medical, urgent, emergency, safety, mental-health, self-harm, crisis, legal, funeral, spiritual, or regulated-care concerns should be directed to qualified providers or appropriate supports.
```

Boundary-section confidence: 0.98

---

## 11. Suggested Static Data Structures for Future Implementation

The future `/loss` route may use local arrays similar to `/birth`, `/postpartum`, and `/fertility`.

Suggested static arrays:

```text
lossSupportAreas
lossPlanningItems
familySupportItems
reflectionItems
```

These arrays should contain static strings or plain objects only.

Allowed:

- static `title`
- static `description`
- static display strings
- `.map()` rendering over local arrays

Not allowed:

- fetched data
- CMS data
- database data
- form data
- user data
- location detection
- state
- effects
- event handlers
- dynamic filtering
- search
- intake-like data collection

Static-data confidence: 0.97

---

## 12. SectionCard Usage Plan

The existing `SectionCard` contract remains:

```text
children
as
className
id
ariaLabelledBy
```

Future `/loss` implementation should use `SectionCard` safely by placing headings, labels, paragraphs, and lists inside the component as children.

Allowed examples:

```tsx
<SectionCard>
  <article className="space-y-3">
    <h3>Emotional presence</h3>
    <p>...</p>
  </article>
</SectionCard>
```

Do not pass unsupported props such as:

- `title`
- `eyebrow`
- `description`
- `heading`
- `variant`
- `items`

No `SectionCard` change is planned or required.

SectionCard confidence: 0.99

---

## 13. Architecture Constraints for 12BG Implementation

The next implementation checkpoint must not create or modify anything except:

```text
repo/src/app/loss/page.tsx
exports/12BG_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Implementation_Validation.md
```

The next implementation checkpoint must not modify:

- frozen homepage
- existing completed routes
- shared UI primitives
- layout primitives
- global styles
- metadata
- package files
- config files

The route must remain:

- static
- public-facing
- informational
- non-clinical
- non-therapeutic
- non-crisis
- non-emergency
- non-dynamic
- server-rendered by default

The route must not include:

- `"use client"`
- state
- effects
- event handlers
- runtime fetching
- forms
- API routes
- route handlers
- CMS reads
- Payload
- Supabase
- database reads
- authentication
- booking flows
- intake flows
- referral flows
- matching flows
- payment flows
- account flows
- search or filtering
- collection of sensitive loss, grief, medical, mental-health, crisis, safety, legal, funeral, spiritual, or family information

Architecture confidence: 0.98

---

## 14. Validation Expectations for 12BG

After implementing `/loss`, run from the app directory:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Expected validation result:

- lint passes
- production build passes
- build output includes `○ /loss`
- `/loss` is listed as static prerendered content
- working tree is clean after commit

If `.next/static` unlink `EPERM` appears again, treat it as likely OneDrive/Windows/Defender file-lock noise only if source review and git status remain clean. Clearing `.next` may be used again if needed.

Validation confidence: 0.96

---

## 15. Issues Found During Planning

No source-alignment or architecture issues were found that block planning `/loss`.

Planning risk identified:

Pregnancy and infant loss content carries elevated sensitivity and can easily drift into grief counselling, therapy, crisis support, emergency support, medical advice, legal advice, funeral direction, spiritual direction, or individualized recommendations.

Mitigation:

- keep all content general and informational
- use gentle but bounded language
- avoid clinical or counselling claims
- include explicit boundary language
- direct regulated, urgent, crisis, emergency, medical, mental-health, legal, funeral, spiritual, or individualized concerns to qualified providers or appropriate supports

Issue-review confidence: 0.95

---

## 16. 12BF Decision

Decision: `/loss` is approved for the next static public-facing route implementation checkpoint.

Approved next route:

```text
/loss
```

Approved implementation file:

```text
repo/src/app/loss/page.tsx
```

Approved next checkpoint:

```text
12BG — RDDA Pregnancy and Infant Loss Page Static Route Implementation + Validation
```

Approved next checkpoint file:

```text
exports/12BG_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Implementation_Validation.md
```

Approved next commit message:

```text
Add RDDA pregnancy infant loss page static route
```

Decision confidence: 0.97

---

## 17. Final 12BF Status

12BF is complete when this checkpoint file is committed.

12BF final status:

- planning-only checkpoint created
- `/loss` selected as the next route
- pregnancy and infant loss support boundaries defined
- source-aligned section outline created
- architecture constraints preserved
- no route implementation performed
- no existing route modified
- no shared UI primitive modified
- no CMS, database, auth, forms, API, dynamic behavior, state, effects, client behavior, or `"use client"` introduced

Final confidence: 0.97

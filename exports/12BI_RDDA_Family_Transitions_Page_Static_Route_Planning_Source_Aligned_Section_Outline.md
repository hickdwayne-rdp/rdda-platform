# 12BI — RDDA Family Transitions Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12BI  
**Route planned:** `/family-transitions`  
**Working route theme:** Family transitions  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA family transitions page static route planning`

---

## 1. 12BI Purpose

12BI plans the `/family-transitions` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future family transitions page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12BI does not create the `/family-transitions` route file.

12BI does not modify:

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
- `/loss`
- `SectionCard`
- shared UI primitives
- layout primitives
- global styles
- metadata
- package files
- config files

12BI does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Planning confidence: 0.97

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12BI:

```text
12BH — RDDA Pregnancy and Infant Loss Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12BI:

```text
1400ec6 Add RDDA pregnancy infant loss page source alignment review
```

Current status entering 12BI:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12BH checkpoint is committed and pushed.
- `/loss` has been reviewed and confirmed source-aligned.
- 12BH selected `/family-transitions` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12BI:

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
14. `/loss`

12BI is planning-only, so `/family-transitions` is not added to the completed route set in this checkpoint.

Repository context confidence: 0.98

---

## 3. Files and Controls Reviewed for 12BI

Reviewed source and checkpoint files:

```text
exports/12BH_RDDA_Pregnancy_Infant_Loss_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
exports/12BF_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
repo/src/components/sections/HomeServiceAreasSection.tsx
repo/src/app/page.tsx
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
- 12BF pregnancy and infant loss page static route planning checkpoint
- 12BG pregnancy and infant loss page static route implementation validation checkpoint
- 12BH pregnancy and infant loss page source alignment review and next static route decision
- current homepage route
- current homepage service-area order
- current `/birth` route pattern
- current `/postpartum` route pattern
- current `/fertility` route pattern
- current `/loss` route pattern
- current `repo/src/components/ui/SectionCard.tsx`

Review confidence: 0.96

---

## 4. 12BH Handoff Reviewed

12BH confirmed:

- `/loss` is complete.
- `/loss` remains source-aligned.
- `/loss` remains static.
- `/loss` remains informational.
- `/loss` remains architecture-compliant.
- `/loss` uses approved primitives only.
- `SectionCard` was reused correctly.
- No invalid `SectionCard` props were used.
- No `"use client"` was added.
- No prohibited dynamic systems were introduced.
- `/family-transitions` is selected as the next safe static public-facing route to plan.

12BH also identified the homepage service-area order as:

1. Pregnancy & birth support
2. Postpartum support
3. Fertility & preconception support
4. Pregnancy and infant loss support
5. Family transitions
6. End-of-life and grief support

Because `/birth`, `/postpartum`, `/fertility`, and `/loss` are already complete, 12BI plans the fifth service-area route.

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
/loss
```

Therefore the next planned route is:

```text
/family-transitions
```

Working public-facing theme:

```text
Family transitions
```

Important naming decision:

- `/family-transitions` is selected for broad family transition support.
- `/family-transitions` must not become a counselling, mediation, custody, legal, child-protection, advocacy, or case-management page.
- `/family-transitions` must not become the broader end-of-life and grief route.
- The later homepage service area, “End-of-life and grief support,” should remain available for a separate future route decision.

Route-order confidence: 0.96

---

## 6. Existing Static Route Pattern

The current completed static service-area route pattern remains established by:

```text
repo/src/app/birth/page.tsx
repo/src/app/postpartum/page.tsx
repo/src/app/fertility/page.tsx
repo/src/app/loss/page.tsx
```

The future `/family-transitions` route should follow the same implementation style:

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
repo/src/app/family-transitions/page.tsx
```

Pattern confidence: 0.96

---

## 7. Source-Aligned Content Direction

The `/family-transitions` page should be a broad, non-clinical public information page about support during family change.

The page may describe support in broad terms such as:

- steady emotional presence during periods of family change
- practical support around routines, planning, communication, and household needs
- informational support that helps families organize questions for qualified providers or appropriate supports
- support that respects changing family structures, culture, values, privacy, and chosen support people
- support during transitions such as welcoming a new baby, changing family roles, blending families, separation-adjacent family adjustment, caregiving changes, household changes, or shifts in support networks
- support that helps families identify what kind of doula support may fit their stage, needs, and boundaries

The page should not describe RDDA or doulas as providing:

- counselling
- therapy
- psychotherapy
- mental-health treatment
- crisis intervention
- emergency response
- mediation
- arbitration
- parenting coordination
- custody advice
- access or parenting-time advice
- legal advice
- court-process advice
- child-protection advice
- domestic violence safety planning
- case management
- advocacy before agencies, courts, schools, healthcare providers, or child-protection systems
- referral matching
- intake, triage, assessment, screening, or booking
- individualized recommendations

Source-alignment confidence: 0.94

---

## 8. Required Boundary Positioning

Family transitions content can easily drift into regulated or high-risk areas, especially when family change overlaps with separation, conflict, caregiving, safety, legal, mental-health, or child-protection concerns.

The future `/family-transitions` implementation must include clear boundary language.

Required boundary position:

```text
This page is general public information only. It is not counselling, therapy, mediation, legal advice, crisis support, emergency support, child-protection advice, case management, advocacy, or a substitute for qualified care.
```

The page should direct visitors to qualified providers or appropriate supports for:

- legal questions
- custody, parenting-time, or court-process questions
- mediation, arbitration, or parenting coordination needs
- family violence, safety, coercion, or emergency concerns
- child-protection concerns
- mental-health concerns
- self-harm or crisis concerns
- medical or regulated-care questions
- counselling, therapy, or clinical support needs
- individualized recommendations or complex family-system support needs

The page should not invite visitors to disclose sensitive family, safety, legal, child-protection, mental-health, or crisis details through any form or dynamic workflow.

The future route should remain static and informational only.

Boundary confidence: 0.98

---

## 9. Approved Route-Level Content Plan

Approved route path:

```text
/family-transitions
```

Approved route file:

```text
repo/src/app/family-transitions/page.tsx
```

Approved page label:

```text
Family Transitions
```

Approved H1 direction:

```text
Support for families moving through change.
```

Approved introductory framing:

- RDDA recognizes family transitions as seasons of change where families may benefit from steady, respectful, non-clinical support.
- The page is general public information for families, support people, doulas, and community members across Central Alberta.
- Family transitions may involve changing roles, routines, relationships, households, caregiving responsibilities, support networks, or family structures.
- Legal, counselling, therapy, crisis, emergency, child-protection, mediation, case-management, advocacy, and regulated supports remain outside this page's scope.

Content-plan confidence: 0.95

---

## 10. Source-Aligned Section Outline

The future `/family-transitions` route should use this section structure.

### 10.1 Hero Section

Purpose:

- identify the page as family transitions support
- introduce support during family change in broad, non-clinical language
- state that the page is general public information
- avoid promising conflict resolution, legal outcomes, emotional healing, counselling, or crisis response

Suggested content direction:

```text
Family Transitions
Support for families moving through change.
```

Suggested paragraph direction:

```text
Red Deer Doula Association recognizes family transitions as periods when families may need steady emotional, informational, practical, and family-centred support. This page is general public information for families, support people, doulas, and community members across Central Alberta.
```

Avoid:

- “family counselling”
- “mediation”
- “custody support”
- “case management”
- “advocacy services”
- “legal support”
- “crisis support”
- “domestic violence support”
- “child-protection support”
- “conflict resolution services”

Hero confidence: 0.95

---

### 10.2 What Family Transition Support Can Include

Purpose:

- describe broad categories of non-clinical support
- keep categories parallel to the birth/postpartum/fertility/loss pages
- avoid counselling, mediation, legal, child-protection, advocacy, crisis, or emergency claims

Approved card topics:

1. Emotional steadiness
2. Informational support
3. Practical support
4. Family-centred support

Suggested card directions:

**Emotional steadiness**

```text
Calm, respectful presence during seasons of change, uncertainty, adjustment, or shifting family roles.
```

**Informational support**

```text
Helping families organize general questions, options, and conversations without replacing legal, counselling, medical, child-protection, crisis, or regulated supports.
```

**Practical support**

```text
General support around routines, household needs, communication preferences, planning, appointments, caregiving rhythms, or support people, depending on the individual doula's scope and services.
```

**Family-centred support**

```text
Support that respects family structure, culture, values, privacy, children, relationships, changing roles, and chosen support people.
```

Support-category confidence: 0.95

---

### 10.3 Types of Family Change

Purpose:

- give visitors examples of family transitions without creating an exhaustive or intake-like list
- keep language broad and inclusive
- avoid presenting RDDA as providing specialized regulated services for complex legal, safety, clinical, or protection matters

Suggested heading direction:

```text
Family change can take many forms
```

Approved content direction:

The page may mention broad examples such as:

- welcoming a new child
- changing parenting or caregiving roles
- blended or extended family adjustment
- household changes
- support-network changes
- returning to work, school, or caregiving responsibilities
- separation-adjacent adjustment, only in broad family-change language
- major family routines shifting after birth, loss, illness, relocation, or caregiving change

Avoid:

- legal separation advice
- divorce advice
- custody or access advice
- parenting-time recommendations
- mediation claims
- safety planning
- domestic violence intervention
- child-protection advice
- court-related support claims
- therapeutic family-system treatment claims

Section confidence: 0.94

---

### 10.4 Questions Families May Consider

Purpose:

- offer non-prescriptive reflection prompts
- help visitors prepare for conversations with qualified providers and potential doulas
- avoid intake-like data collection

Approved reflection prompts:

```text
What kind of support would feel steady, respectful, and useful during this transition?
What routines, household needs, communication preferences, or support people matter right now?
What questions should be discussed directly with a qualified legal, medical, mental-health, child-protection, crisis, or regulated-care provider?
What family values, culture, privacy, children, relationships, or changing roles should a support person understand?
What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?
```

These should be presented as public information only, not as a form, checklist submission, intake tool, or triage tool.

Question-section confidence: 0.95

---

### 10.5 Supporting Children, Partners, and Chosen Family

Purpose:

- acknowledge that family transitions affect more than one person
- include children, partners, relatives, grandparents, friends, chosen family, and other support people
- remain non-therapeutic, non-clinical, non-legal, and non-mediation-oriented

Approved content direction:

- support may include helping families think about practical ways support people can be present
- support may include respecting children in family-led, age-aware, and culturally respectful ways
- support may include helping households think about routines, privacy, communication, meals, rest, transportation, appointments, and practical needs
- therapeutic support, mental-health support, crisis support, legal support, child-protection support, and family-mediation support remain outside this page's scope

Suggested card topics:

1. Children and household rhythms
2. Partners, relatives, and chosen support people

Family-section confidence: 0.94

---

### 10.6 Thinking About Fit

Purpose:

- help visitors understand that individual doulas may differ in training, scope, availability, fees, location, and experience
- avoid promising that RDDA assigns, matches, screens, certifies, supervises, refers, or books doulas
- avoid intake, case-management, mediation, legal, counselling, or advocacy language

Approved content direction:

- families may wish to ask individual doulas about their experience supporting family transitions
- families may wish to ask about training, scope, boundaries, availability, communication, fees, and service area
- families should use qualified providers or appropriate supports for legal, counselling, crisis, emergency, child-protection, mediation, medical, mental-health, safety, or regulated questions
- RDDA public pages should remain informational and should not imply dynamic matching, referral, intake, or booking workflows

Fit-section confidence: 0.95

---

### 10.7 Website Boundaries

Purpose:

- provide explicit scope limitations
- protect visitors and project integrity
- reduce risk of unsupported claims

Required boundary language direction:

```text
This website provides general public information only. It does not provide counselling, therapy, mediation, legal advice, custody advice, parenting-time advice, child-protection advice, crisis support, emergency support, case management, advocacy, intake, referral, matching, booking, or individualized recommendations.
```

Additional direction:

```text
Legal, safety, crisis, emergency, mental-health, medical, child-protection, mediation, counselling, therapy, or regulated-care concerns should be directed to qualified providers or appropriate supports.
```

Boundary-section confidence: 0.98

---

## 11. Suggested Static Data Structures for Future Implementation

The future `/family-transitions` route may use local arrays similar to `/birth`, `/postpartum`, `/fertility`, and `/loss`.

Suggested static arrays:

```text
transitionSupportAreas
transitionExamples
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
- triage-like questions
- sensitive family, legal, safety, child-protection, crisis, or mental-health disclosures

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

Future `/family-transitions` implementation should use `SectionCard` safely by placing headings, labels, paragraphs, and lists inside the component as children.

Allowed examples:

```tsx
<SectionCard>
  <article className="space-y-3">
    <h3>Emotional steadiness</h3>
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
- `icon`
- `href`

No `SectionCard` change is planned or required.

SectionCard confidence: 0.99

---

## 13. Architecture Constraints for 12BJ Implementation

The next implementation checkpoint must not create or modify anything except:

```text
repo/src/app/family-transitions/page.tsx
exports/12BJ_RDDA_Family_Transitions_Page_Static_Route_Implementation_Validation.md
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
- non-legal
- non-mediation
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
- counselling or therapy claims
- mediation, arbitration, or parenting coordination claims
- legal, custody, parenting-time, court-process, or child-protection advice
- advocacy or case-management claims
- collection of sensitive family, legal, safety, child-protection, mental-health, crisis, or family-conflict information

Architecture confidence: 0.98

---

## 14. Validation Expectations for 12BJ

After implementing `/family-transitions`, run from the app directory:

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
- build output includes `○ /family-transitions`
- `/family-transitions` is listed as static prerendered content
- working tree is clean after commit

If `.next/static` unlink `EPERM` appears again, treat it as likely OneDrive/Windows/Defender file-lock noise only if source review and git status remain clean. Clearing `.next` may be used again if needed.

Validation confidence: 0.96

---

## 15. Issues Found During Planning

No source-alignment or architecture issues were found that block planning `/family-transitions`.

Planning risk identified:

Family transitions language can easily drift into counselling, mediation, legal advice, custody advice, child-protection advice, domestic-violence safety planning, crisis support, case management, advocacy, or individualized recommendations.

Mitigation:

- keep all content general and informational
- use broad family-change language
- avoid regulated-service claims
- avoid legal, mediation, counselling, therapy, child-protection, crisis, emergency, or safety-planning language
- include explicit boundary language
- direct legal, safety, crisis, emergency, child-protection, mental-health, medical, counselling, mediation, therapy, or regulated-care concerns to qualified providers or appropriate supports

Issue-review confidence: 0.95

---

## 16. 12BI Decision

Decision: `/family-transitions` is approved for the next static public-facing route implementation checkpoint.

Approved next route:

```text
/family-transitions
```

Approved implementation file:

```text
repo/src/app/family-transitions/page.tsx
```

Approved next checkpoint:

```text
12BJ — RDDA Family Transitions Page Static Route Implementation + Validation
```

Approved next checkpoint file:

```text
exports/12BJ_RDDA_Family_Transitions_Page_Static_Route_Implementation_Validation.md
```

Approved next commit message:

```text
Add RDDA family transitions page static route
```

Decision confidence: 0.97

---

## 17. Final 12BI Status

12BI is complete when this checkpoint file is committed.

12BI final status:

- planning-only checkpoint created
- `/family-transitions` selected as the next route
- family transitions support boundaries defined
- source-aligned section outline created
- architecture constraints preserved
- no route implementation performed
- no existing route modified
- no shared UI primitive modified
- no CMS, database, auth, forms, API, dynamic behavior, state, effects, client behavior, or `"use client"` introduced

Final confidence: 0.97

# 12BL — RDDA End-of-Life and Grief Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12BL  
**Route planned:** `/end-of-life-grief`  
**Working route theme:** End-of-life and grief support  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA end of life grief page static route planning`

---

## 1. 12BL Purpose

12BL plans the `/end-of-life-grief` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future end-of-life and grief support page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12BL does not create the `/end-of-life-grief` route file.

12BL does not modify:

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
- `/family-transitions`
- `SectionCard`
- shared UI primitives
- layout primitives
- global styles
- metadata
- package files
- config files

12BL does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Planning confidence: 0.98

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12BL:

```text
12BK — RDDA Family Transitions Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12BL:

```text
d36f9d9 Add RDDA family transitions page source alignment review
```

Current status entering 12BL:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12BK checkpoint is committed and pushed.
- `/family-transitions` has been reviewed and confirmed source-aligned.
- 12BK selected `/end-of-life-grief` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12BL:

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
15. `/family-transitions`

12BL is planning-only, so `/end-of-life-grief` is not added to the completed route set in this checkpoint.

Repository context confidence: 0.99

---

## 3. Files and Controls Reviewed for 12BL

Reviewed source and checkpoint files:

```text
exports/12BK_RDDA_Family_Transitions_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
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
- 12BK family transitions page source alignment review and next route decision
- current homepage service-area order
- current public-facing route pattern
- current `SectionCard` contract

The homepage service-area list includes `End-of-life and grief support` after `Family transitions`, confirming that this is the next service-area theme to plan.

Review confidence: 0.98

---

## 4. Source Basis and Route Selection

The homepage service-area order remains:

```text
Pregnancy & birth support
Postpartum support
Fertility & preconception support
Pregnancy and infant loss support
Family transitions
End-of-life and grief support
```

Completed service-area routes now include:

```text
/birth
/postpartum
/fertility
/loss
/family-transitions
```

Therefore the next route to plan is:

```text
/end-of-life-grief
```

Working public-facing theme:

```text
End-of-life and grief support
```

Important distinction:

- `/loss` is for pregnancy and infant loss support.
- `/end-of-life-grief` is for broader end-of-life and grief support.

This route must not duplicate the pregnancy and infant loss page. It should address family, caregiver, relational, practical, and informational support around dying, death, bereavement, grief, remembrance, household rhythms, and support planning in broad, non-clinical terms.

Route-selection confidence: 0.98

---

## 5. Approved Static Route Intent

The future `/end-of-life-grief` page should be a static public-facing information page for people exploring how doula support may fit around end-of-life and grief experiences.

Approved intent:

- describe end-of-life and grief support in plain, compassionate language
- explain that doulas may provide steady presence, practical help, family-centred information, reflection prompts, and continuity of care-like presence within a non-clinical scope
- acknowledge that grief and end-of-life experiences may involve family, friends, chosen family, caregivers, and community supports
- help visitors understand what questions they may wish to ask a doula
- clearly define website boundaries
- direct clinical, counselling, crisis, legal, funeral, spiritual, estate, benefits, hospice, palliative, MAID, emergency, or regulated-care concerns to qualified providers or appropriate supports

Not approved:

- medical advice
- hospice care claims
- palliative care claims
- MAID advice or decision support
- counselling or therapy claims
- crisis intervention
- emergency support
- funeral-service arrangement claims
- spiritual direction claims
- legal, estate, benefits, or financial advice
- case management
- intake
- referral
- booking
- matching
- individualized recommendations

Intent confidence: 0.98

---

## 6. Approved Page Architecture

The future route should follow the existing static route pattern used by the completed lifecycle service pages.

Expected route file:

```text
repo/src/app/end-of-life-grief/page.tsx
```

Approved imports:

```ts
import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";
```

Approved implementation style:

- page-level server component by default
- local static arrays allowed
- semantic headings
- static copy only
- existing layout primitives only
- `SectionCard` as a child-content wrapper only
- no route-specific section components
- no new shared UI primitives
- no shared UI primitive changes

Architecture confidence: 0.99

---

## 7. Proposed Section Outline

The future `/end-of-life-grief` page should use the following section outline.

### 7.1 Hero Section

Purpose:

- introduce end-of-life and grief support as compassionate, practical, family-centred, and informational
- use calm language for people navigating dying, death, bereavement, caregiving, remembrance, and changing family rhythms
- clarify that the page is informational and does not replace qualified providers

Possible hero heading:

```text
End-of-life and grief support
```

Possible hero summary:

```text
Information for families, caregivers, and support people exploring doula support around end-of-life, death, bereavement, remembrance, and grief.
```

Boundary note in hero:

```text
This page is informational only and does not provide medical, hospice, palliative, MAID, counselling, legal, estate, funeral, crisis, emergency, or spiritual-direction services.
```

Hero confidence: 0.97

---

### 7.2 What End-of-Life and Grief Support Can Include

Purpose:

- describe broad non-clinical support categories
- avoid regulated-care language
- frame support as presence, practical help, information, planning conversations, and emotional steadiness without therapy claims

Possible support categories:

1. Steady presence
2. Practical support
3. Family and caregiver information
4. Memory, ritual, and remembrance support
5. Communication and planning support
6. Grief-aware follow-up presence

Approved copy direction:

- `Steady presence` may refer to calm companionship, listening, sitting with uncertainty, and helping families feel less alone.
- `Practical support` may refer to household rhythms, visitor planning, comfort items, family preferences, and support-person coordination.
- `Family and caregiver information` may refer to general non-clinical information about questions to ask and supports to consider.
- `Memory, ritual, and remembrance support` may refer to reflection, personal meaning, keepsakes, family values, and chosen practices without spiritual-direction or funeral-service claims.
- `Communication and planning support` may refer to helping families think about what matters to communicate to care teams, relatives, and support people, without advocacy or case management claims.
- `Grief-aware follow-up presence` may refer to general check-in, remembrance, and transition support, without counselling or therapy claims.

This section must not imply that doulas provide medical monitoring, symptom management, hospice care, palliative care, counselling, therapy, crisis intervention, funeral planning, religious guidance, legal advice, estate planning, benefits advice, or regulated care.

Section confidence: 0.98

---

### 7.3 End-of-Life Support May Look Different for Every Family

Purpose:

- acknowledge diverse family structures, relationships, cultures, beliefs, and needs
- avoid promising specific outcomes or individualized planning
- frame support as flexible, respectful, and preference-aware

Approved examples of contexts:

- an individual nearing end of life
- a family supporting a loved one
- caregivers experiencing fatigue or uncertainty
- chosen family or close friends providing support
- relatives navigating distance, communication, or changing roles
- families preparing for remembrance, rituals, or legacy conversations
- people grieving after a death

Boundary guardrails:

- no prognosis language
- no symptom-management language
- no promise of grief processing or trauma treatment
- no spiritual-direction claims
- no substitute for hospice, palliative, medical, counselling, legal, funeral, or crisis professionals

Section confidence: 0.97

---

### 7.4 Questions Families May Consider

Purpose:

- provide general reflection prompts
- help visitors understand what they may wish to discuss with qualified care providers, loved ones, and possible doula supports
- avoid individualized recommendations

Possible prompts:

- What kind of presence feels supportive right now?
- Who does the person or family want involved in support conversations?
- What routines, traditions, cultural practices, or values should be respected?
- What practical tasks are adding pressure for caregivers or family members?
- What information should be gathered from medical, hospice, palliative, legal, funeral, spiritual, or counselling providers?
- What would help family members communicate clearly and gently?
- What remembrance, memory, or legacy practices feel meaningful?
- What supports may be needed after a death or during grief?

Required framing:

```text
These questions are general reflection prompts only. They are not medical, counselling, legal, funeral, spiritual, estate, benefits, crisis, emergency, or individualized advice.
```

Section confidence: 0.98

---

### 7.5 Supporting Caregivers, Families, and Chosen Support People

Purpose:

- acknowledge that end-of-life and grief affect more than one person
- describe family-centred and caregiver-aware support without case-management claims
- acknowledge children, adults, partners, friends, relatives, and chosen family in broad terms

Approved content direction:

- end-of-life and grief can change daily routines, roles, communication, energy, and emotional capacity
- families may need help thinking through who is present, who needs updates, and how support can be shared
- chosen family, friends, cultural community, and support networks may be important
- support can be paced, respectful, and responsive to privacy and family preference

Not approved:

- family therapy
- grief counselling
- parenting advice
- child-development advice
- conflict resolution
- mediation
- legal advocacy
- medical-care coordination
- case management
- child-protection advice

Section confidence: 0.97

---

### 7.6 Thinking About Fit With a Doula

Purpose:

- help visitors think about fit without creating a booking, referral, or matching flow
- keep questions general and informational

Possible fit questions:

- What end-of-life or grief-related training, experience, or mentorship does the doula describe?
- What does the doula include and not include in their scope?
- How does the doula communicate boundaries with medical, hospice, palliative, counselling, legal, spiritual, funeral, and crisis providers?
- What types of practical or emotional presence does the doula describe?
- How does the doula approach culture, faith, privacy, family structure, and chosen support people?
- What availability, fees, service area, and communication expectations should be clarified?
- What qualified providers should remain involved for regulated, clinical, legal, funeral, spiritual, or crisis needs?

Required boundary:

```text
RDDA website content does not match, book, refer, assess, or recommend a specific doula or provider.
```

Section confidence: 0.98

---

### 7.7 Website Boundaries

Purpose:

- close with explicit scope boundaries
- reinforce static informational role
- direct regulated or urgent matters away from the website

Required boundary concepts:

The page must clearly state that the RDDA website does not provide:

- medical care
- hospice care
- palliative care
- MAID advice or decision support
- counselling
- therapy
- grief treatment
- trauma treatment
- crisis intervention
- emergency response
- funeral-service arrangements
- spiritual direction
- religious instruction
- legal advice
- estate advice
- benefits advice
- financial advice
- case management
- advocacy
- intake
- referral
- matching
- booking
- individualized recommendations

Required direction:

Visitors with medical, hospice, palliative, MAID, counselling, mental-health, crisis, emergency, funeral, spiritual, legal, estate, benefits, or regulated-care questions should contact qualified providers, emergency services, crisis supports, or appropriate professional supports.

Section confidence: 0.99

---

## 8. Approved Content Boundaries

The `/end-of-life-grief` route must remain:

- static
- informational
- public-facing
- non-clinical
- non-therapeutic
- non-legal
- non-crisis
- non-booking
- non-referral
- non-matching
- non-intake
- non-dynamic

The route must avoid claims of:

- medical support
- hospice support as a regulated service
- palliative support as a regulated service
- MAID counselling or decision-making support
- grief counselling
- grief therapy
- trauma therapy
- mental-health assessment
- suicide or crisis support
- funeral arranging
- spiritual direction
- legal planning
- estate planning
- benefits navigation
- financial advice
- case management
- advocacy before agencies or providers
- care coordination as a regulated service
- guaranteed outcomes
- individualized recommendations

Boundary confidence: 0.99

---

## 9. Approved SectionCard Usage

The current `SectionCard` contract remains:

```text
children
as
className
id
ariaLabelledBy
```

Future implementation may use `SectionCard` only as a wrapper for nested child content.

Approved examples:

```tsx
<SectionCard>
  <h2>Heading</h2>
  <p>Copy</p>
</SectionCard>
```

```tsx
<SectionCard as="article" className="space-y-4">
  <h3>Heading</h3>
  <p>Copy</p>
</SectionCard>
```

Do not use unsupported props:

- `title`
- `eyebrow`
- `description`
- `heading`
- `variant`
- `items`
- `icon`
- `href`

No `SectionCard` modification is planned or permitted for this route.

SectionCard confidence: 0.99

---

## 10. Static Architecture Requirements for 12BM

The future implementation checkpoint should preserve all static architecture requirements.

Implementation must not add:

- `"use client"`
- state
- effects
- event handlers
- runtime fetching
- CMS reads
- Payload
- Supabase
- database reads
- authentication
- forms
- API routes
- route handlers
- search
- dynamic filtering
- booking flow
- referral flow
- matching flow
- intake flow
- payment flow
- account flow
- route-specific section components
- new shared UI primitives
- shared UI primitive modifications

Expected validation commands after implementation:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Architecture confidence: 0.99

---

## 11. Recommended Implementation Notes for 12BM

Recommended implementation checkpoint:

```text
12BM — RDDA End-of-Life and Grief Page Static Route Implementation + Validation
```

Recommended route file:

```text
repo/src/app/end-of-life-grief/page.tsx
```

Recommended validation checkpoint file:

```text
exports/12BM_RDDA_End_Of_Life_Grief_Page_Static_Route_Implementation_Validation.md
```

Recommended commit message:

```text
Add RDDA end of life grief page static route
```

Implementation notes:

- Follow the same structure used by `/birth`, `/postpartum`, `/fertility`, `/loss`, and `/family-transitions`.
- Use existing `PageShell`, `PageContainer`, and `SectionCard` only.
- Use local static arrays if helpful.
- Keep language compassionate but bounded.
- Avoid clinical, therapeutic, legal, funeral, spiritual, crisis, or individualized claims.
- Include strong website-boundary copy.

Implementation confidence: 0.98

---

## 12. Issues Found During Planning

No blocking planning issues were found.

No existing route requires modification.

No shared primitive change is required.

No homepage change is required.

Primary risk for 12BM:

The end-of-life and grief topic can easily drift into regulated or sensitive areas, especially hospice, palliative care, MAID, counselling, funeral planning, spiritual direction, estate/legal advice, crisis support, or individualized recommendations. 12BM must keep all language general, informational, and boundary-forward.

Issue-review confidence: 0.98

---

## 13. 12BL Decision

Decision: `/end-of-life-grief` is approved as the next static public-facing service-area route to implement.

Approved route path:

```text
/end-of-life-grief
```

Approved route file:

```text
repo/src/app/end-of-life-grief/page.tsx
```

Approved theme:

```text
End-of-life and grief support
```

The route must remain static, informational, non-clinical, non-therapeutic, non-legal, non-crisis, non-booking, non-referral, non-matching, and non-intake.

Decision confidence: 0.98

---

## 14. Final 12BL Status

12BL final status:

- `/end-of-life-grief` route planned
- source-aligned section outline created
- homepage service-area order respected
- pregnancy and infant loss route kept distinct from broader grief/end-of-life route
- static architecture preserved
- `SectionCard` usage boundaries preserved
- clinical, hospice, palliative, MAID, counselling, crisis, funeral, spiritual, legal, estate, benefits, referral, booking, matching, intake, and individualized-claim boundaries defined
- no implementation performed
- no existing route modified
- no shared UI primitive modified
- next checkpoint selected: 12BM

Final confidence: 0.98

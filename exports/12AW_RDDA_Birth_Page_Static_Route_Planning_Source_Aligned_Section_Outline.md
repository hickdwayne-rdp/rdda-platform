# 12AW — RDDA Birth Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AW  
**Route planned:** `/birth`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA birth page static route planning`

---

## 1. 12AW Purpose

12AW plans the `/birth` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/birth` page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12AW does not create the `/birth` route file.

12AW does not modify:

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
- `SectionCard`
- shared UI primitives
- layout primitives

12AW does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Planning confidence: 0.96

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12AW:

```text
12AV — RDDA FAQ Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12AW:

```text
6b275a7 Add RDDA FAQ page source alignment review
```

Current status entering 12AW:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12AV checkpoint is committed and pushed.
- GitHub-direct write access is confirmed working.
- `/faq` has been reviewed and confirmed source-aligned, static, informational, and architecture-compliant.
- 12AV selected `/birth` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12AW:

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

12AW is planning-only, so `/birth` is not added to the completed route set in this checkpoint.

Repository context confidence: 0.96

---

## 3. GitHub-Direct Checkpoint Creation

GitHub-direct write access is confirmed for:

```text
hickdwayne-rdp/rdda-platform
```

This checkpoint file is created directly in GitHub at:

```text
exports/12AW_RDDA_Birth_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

No downloadable Markdown file is required for 12AW because GitHub-direct creation succeeded.

GitHub-direct confidence: 0.95

---

## 4. Files and Controls Reviewed for 12AW

### 4.1 12AV Handoff Reviewed

Reviewed:

```text
exports/12AV_RDDA_FAQ_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AV confirmed:

- `/faq` is complete.
- `/faq` remains source-aligned.
- `/faq` remains static.
- `/faq` remains informational.
- `/faq` remains architecture-compliant.
- `/faq` uses approved primitives only.
- `SectionCard` was reused correctly.
- No invalid `SectionCard` props were used.
- No `"use client"` was added.
- No prohibited dynamic systems were introduced.
- `/birth` is selected as the next safe static public-facing route to plan.

12AV also cautioned that birth-related content can drift into medical or clinical guidance. 12AW must therefore keep `/birth` limited to general non-medical doula support awareness and static public information.

Handoff confidence: 0.94

### 4.2 Existing Static Route Pattern Files

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
```

These route files establish the current approved public-page implementation pattern:

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

Pattern confidence: 0.92

### 4.3 Current Source-Aligned Birth-Related Themes

The completed routes already support a narrow `/birth` page through existing broad content themes.

Existing safe themes include:

- pregnancy and birth support
- birth preparation
- comfort measures
- emotional support
- practical planning
- informed decision-making
- continuous non-medical support before and during birth
- families considering their needs, values, location, and preferred support style
- doulas working alongside qualified health-care providers without replacing medical care
- Central Alberta community orientation

Existing route language supports a page about birth support only if the page stays general, public-facing, non-clinical, and informational.

The route must not expand into unsupported claims about:

- clinical recommendations
- diagnosis
- treatment
- medical decisions
- birth outcomes
- labour management instructions
- emergency triage
- medical provider replacement
- hospital, clinic, or regulated service workflows
- doula matching, intake, booking, payment, or referral processing

Theme confidence: 0.9

### 4.4 Shared UI Primitive Reviewed

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

Important implementation reminder for the next checkpoint:

- Do not pass unsupported `SectionCard` props.
- Do not pass `title` or `eyebrow` props.
- Do not pass `description`, `heading`, `variant`, or `items` props.
- Put headings, labels, lists, and paragraphs inside `SectionCard` as children.
- Do not modify `SectionCard`.
- Do not create another shared UI primitive.

SectionCard confidence: 0.98

### 4.5 Route Absence Check

The future implementation target is:

```text
repo/src/app/birth/page.tsx
```

This route must not be created in 12AW.

The `/birth` route remains unimplemented at the end of 12AW.

Route absence confidence: 0.9

---

## 5. Prior Controls Active for 12AW

The following prior controls remain active:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- 12AV FAQ page source alignment review and next static route decision
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
- current `repo/src/components/ui/SectionCard.tsx`

Controls confidence: 0.94

---

## 6. Planning Summary

12AW plans `/birth` as a static public-facing informational route about birth-related doula support.

The page should help families and support people understand how doula support may assist during birth preparation and the birth experience while keeping the role clearly non-medical.

The page should use calm, accessible, source-aligned language that fits the existing RDDA public site. It should not attempt to become a clinical birth education guide, medical decision tool, labour instruction page, birth plan template generator, referral system, intake pathway, booking page, or service marketplace.

Planning confidence: 0.91

Primary caution:

Birth pages carry higher risk of accidental clinical advice. The future implementation must describe support roles and general categories only. It must avoid telling families what medical choices to make, how to manage labour clinically, when to seek medical care, or what outcomes to expect.

---

## 7. Route Purpose

The `/birth` page should serve as a public overview of birth doula support in RDDA's source-aligned language.

The route should:

- introduce birth support as one area of non-medical doula care
- explain broad ways doulas may support families before and during birth
- reinforce that families continue working with qualified health-care providers for clinical care
- connect birth support to the existing RDDA themes of family support, doula support, informed decision-making, preparation, comfort, and community awareness
- keep the page static, readable, and informational
- provide enough clarity for the future implementation to be useful without creating operational systems

The route should not:

- provide medical advice
- provide clinical birth education
- provide labour-management instructions
- recommend or discourage specific medical interventions
- make outcome promises
- provide emergency guidance or triage
- collect birth plans
- collect contact requests
- create accounts
- book doulas
- process payments
- match families with doulas
- create referral workflows
- search or filter listings
- fetch live availability
- personalize content

Route purpose confidence: 0.92

---

## 8. Source-Aligned Birth Theme Boundaries

### 8.1 Birth Support Overview

Safe themes:

- Birth doula support is one area of non-medical support recognized by RDDA's existing public content.
- Birth support may include emotional, physical, informational, and practical support.
- Support may begin before birth and continue during the birth experience.
- The page can frame birth support as steady, respectful, and family-centred.

Avoid:

- claiming all doulas provide the same services
- promising continuous attendance in every circumstance
- guaranteeing availability
- promising outcomes
- implying RDDA directly provides or assigns birth doulas
- implying the page is a booking or matching system

Confidence: 0.91

### 8.2 Preparation Before Birth

Safe themes:

- Families may think about their support needs, values, preferences, and questions before birth.
- Doulas may help families prepare conversations, organize non-clinical questions, and understand support preferences.
- Planning can be described generally without providing a medical birth plan template.
- Support can include reassurance, information, practical preparation, and communication support.

Avoid:

- specific medical planning instructions
- clinical recommendations
- birth plan templates
- instructions for accepting or refusing medical interventions
- advice about medication, induction, cesarean birth, monitoring, emergency procedures, or provider decisions
- promises that preparation prevents complications or improves outcomes

Confidence: 0.88

### 8.3 Support During Birth

Safe themes:

- Birth doulas may provide calm presence, encouragement, comfort measures, practical support, and informational support during birth.
- Support can be described as non-clinical and complementary to medical care.
- Families remain under the care of qualified health-care providers for clinical needs.
- The page may mention that support style can vary by family, doula, setting, and circumstances.

Avoid:

- clinical instructions for labour
- pain-management medical advice
- claims about monitoring, diagnosis, treatment, or emergency assessment
- direction about when to go to hospital or call a provider
- directions about fetal movement, bleeding, contractions, rupture of membranes, blood pressure, fever, or other clinical symptoms
- suggestions that a doula replaces nurses, midwives, physicians, or other regulated health-care providers

Confidence: 0.9

### 8.4 Informed Decision-Making Support

Safe themes:

- Doulas may help families organize questions and feel supported as they communicate with their care team.
- Informational support can help families understand options discussed by qualified providers.
- Families should confirm clinical information and decisions with qualified health-care providers.
- The page can support respectful communication and confidence without directing decisions.

Avoid:

- recommending specific choices
- interpreting clinical risks
- ranking medical options
- providing medical consent advice
- replacing provider explanations
- presenting RDDA as a clinical authority

Confidence: 0.87

### 8.5 Support People and Family Context

Safe themes:

- Birth support may include helping partners, family members, or chosen support people understand supportive roles.
- Doulas may help create a steadier support environment through reassurance and practical presence.
- The page can recognize that every family and birth setting is different.

Avoid:

- family counselling claims
- conflict-resolution guarantees
- mental health treatment claims
- instructions for excluding or managing specific people
- legal advice about decision-making authority or consent

Confidence: 0.86

### 8.6 Birth Settings and Care Teams

Safe themes:

- Doula support can be described as working alongside qualified health-care providers.
- The page can use broad language such as birth settings, care teams, and qualified providers.
- The page can emphasize that clinical care remains with regulated providers.

Avoid:

- hospital-specific instructions
- home birth safety advice
- midwifery or physician scope explanations beyond general qualified-provider language
- promises about support across every setting
- advice about choosing a birth location
- advice about changing providers or care plans

Confidence: 0.85

### 8.7 Non-Medical Boundary

Safe themes:

- Doula support does not replace medical care.
- Doulas do not diagnose, treat, prescribe, or provide emergency care through this static website.
- Families should rely on qualified health-care providers for clinical concerns.
- Urgent, emergency, safety, or crisis concerns should be directed to appropriate emergency or qualified supports.

Avoid:

- clinical triage
- symptom guidance
- emergency instructions beyond general redirection
- medical scope expansion
- regulated health-service claims

Confidence: 0.95

### 8.8 Website and Static Information Boundaries

Safe themes:

- The page is static public information.
- The page does not collect personal details or manage individual circumstances.
- The page is not an intake, referral, booking, payment, CRM, or emergency-response system.
- Current details should be confirmed directly with qualified providers, organizations, or individual doulas when applicable.

Avoid:

- dynamic lookup tools
- searchable listings
- filtering by birth preferences
- intake forms
- referral matching
- availability calendars
- payments
- account features
- live chat
- user-submitted birth details

Confidence: 0.96

---

## 9. Exact Future `/birth` Section Order

The future `/birth` static route should use the following section order.

### Section 1 — Hero

Purpose:

- Introduce `/birth` as a general birth support information page.
- Set a non-medical and source-aligned expectation from the top.
- Connect birth support to RDDA's broader Central Alberta public information role.

Safe content direction:

- Page label: `Birth Support`
- Heading concept: `Non-medical doula support before and during birth.`
- Intro concept: RDDA recognizes birth support as steady emotional, physical, informational, and practical support that works alongside qualified health-care providers.

Avoid:

- implying RDDA provides direct clinical care
- implying RDDA assigns or books doulas
- using urgent or clinical language
- promising outcomes

Suggested implementation pattern:

- Use a standard hero section with a text label, heading, and paragraph.
- No `SectionCard` is required for the hero unless the existing route pattern benefits from one.
- Keep the hero direct, static, and concise.

Confidence: 0.92

### Section 2 — What Birth Doula Support Can Include

Purpose:

- Explain broad support categories.
- Keep support language practical and non-clinical.
- Mirror the existing site language about emotional, physical, informational, and practical support.

Safe content direction:

Possible cards:

1. `Emotional support`
   - Calm presence, encouragement, reassurance, and steady support.
2. `Physical comfort support`
   - General comfort measures and practical support without clinical instruction.
3. `Informational support`
   - Helping families organize questions and understand conversations with their care team.
4. `Practical support`
   - Helping the birth environment feel more prepared, respectful, and supported.

Avoid:

- instructions for labour positions, medications, induction, monitoring, or procedures
- claims that comfort measures manage pain clinically
- clinical education modules
- provider replacement language

Suggested implementation pattern:

- Static array inside `repo/src/app/birth/page.tsx` is acceptable.
- Map over the array inside the route file.
- Wrap each item in `SectionCard` with heading and paragraph as children.
- Do not create a route-specific card component.

Confidence: 0.9

### Section 3 — Before Birth: Preparation and Questions

Purpose:

- Show how support can begin before birth.
- Help families think generally about preparation without generating a birth plan or medical checklist.
- Reinforce that clinical questions belong with qualified care providers.

Safe content direction:

- Families may consider what kind of support helps them feel prepared.
- Doulas may support conversations about preferences, questions, communication, and practical readiness.
- The page can encourage families to bring clinical questions to their qualified care team.
- The page can mention that preparation looks different for each family.

Avoid:

- birth plan templates
- medical checklists
- clinical decision trees
- advice about interventions or procedures
- instructions about when or how to access medical care

Suggested implementation pattern:

- Use one `SectionCard` with a heading, paragraph, and short static list.
- List items should remain broad and non-clinical.
- Use plain JSX inside the route file.

Confidence: 0.88

### Section 4 — During Birth: Steady Non-Medical Presence

Purpose:

- Describe support during birth without drifting into clinical labour guidance.
- Clarify that doulas support the family while qualified providers manage clinical care.

Safe content direction:

- Birth doulas may provide encouragement, reassurance, practical support, comfort support, and information.
- Support may help families feel heard and grounded during the birth experience.
- Care teams remain responsible for clinical care, diagnosis, treatment, and emergency decisions.
- Support can vary based on the family, doula, setting, and circumstances.

Avoid:

- labour instructions
- symptom interpretation
- pain-management medical claims
- direction about hospital admission or emergency timing
- medical scope explanations beyond broad provider boundary language

Suggested implementation pattern:

- Use one larger `SectionCard` or a two-column static section.
- Keep all text in direct JSX.
- No dynamic behaviour, collapsible content, or interactive checklist.

Confidence: 0.89

### Section 5 — Working Alongside Your Care Team

Purpose:

- Make the non-medical support boundary visible and central.
- Prevent the page from being mistaken for clinical guidance.
- Reinforce collaboration with qualified providers.

Safe content direction:

- Doulas provide non-medical support.
- Doulas do not replace physicians, midwives, nurses, or other qualified health-care providers.
- Families should ask qualified providers about medical care, symptoms, risks, treatment, medication, procedures, and urgent concerns.
- The RDDA website is a public information starting point, not a clinical decision tool.

Avoid:

- detailed regulated-provider scope comparison
- medical advice
- diagnosis or treatment language
- emergency instructions beyond appropriate redirection

Suggested implementation pattern:

- Use a clear `SectionCard` with strong boundary language.
- This section should be present in the later implementation.
- Keep the content short and explicit.

Confidence: 0.95

### Section 6 — Families, Partners, and Support People

Purpose:

- Connect birth support to family context and support people.
- Keep language inclusive without making counselling or conflict-management claims.

Safe content direction:

- Birth support can include helping support people understand how to be present and encouraging.
- Doulas may help create a calmer support environment through reassurance and practical presence.
- Families can consider what kind of support feels respectful and useful to them.

Avoid:

- counselling claims
- family therapy claims
- conflict-management guarantees
- legal consent advice
- instructions about who should or should not attend birth

Suggested implementation pattern:

- Use a static two-column section or a small group of cards.
- Use `SectionCard` only as a presentational wrapper.
- No interactive decision aid.

Confidence: 0.86

### Section 7 — Is Birth Support Right for My Family?

Purpose:

- Provide a gentle orientation section without screening or eligibility logic.
- Help visitors think about fit in broad terms.

Safe content direction:

- Families may consider their support needs, values, communication preferences, location, birth setting, and questions.
- Families may ask individual doulas about training, scope, availability, communication style, and service area.
- RDDA public pages can be a starting point for learning, not a replacement for direct conversations with providers or doulas.

Avoid:

- eligibility criteria
- matching logic
- recommendation engines
- scoring tools
- intake or referral language
- promises that RDDA will find a doula

Suggested implementation pattern:

- Use one `SectionCard` with a short list of reflection prompts.
- The list must not function as a screening tool.
- No form fields, checkboxes, saved state, or calculators.

Confidence: 0.88

### Section 8 — Static Website Boundaries

Purpose:

- Close with clear boundaries about the website and route.
- Reaffirm that urgent or clinical matters require appropriate qualified supports.

Safe content direction:

- This page is static and informational.
- It does not collect personal birth information.
- It does not provide clinical, legal, emergency, counselling, booking, referral, intake, or payment services.
- Visitors should confirm current details directly with qualified providers, organizations, or individual doulas when needed.

Avoid:

- response-time promises
- contact workflow claims
- live support claims
- directory or availability claims
- dynamic system language

Suggested implementation pattern:

- Use a final `SectionCard` or simple closing section.
- Keep the language brief and boundary-aware.

Confidence: 0.94

---

## 10. Proposed Static Content Objects for Later Implementation

The later implementation may use static arrays inside `repo/src/app/birth/page.tsx` for repeated content.

Safe array examples:

```text
birthSupportAreas
birthPreparationItems
familyReflectionItems
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

Implementation confidence: 0.93

---

## 11. Future `/birth` Architecture Requirements

The later implementation checkpoint should create only:

```text
repo/src/app/birth/page.tsx
```

The implementation should use:

```text
PageShell
PageContainer
SectionCard
static arrays inside the route file if useful
direct JSX inside the route file
```

The implementation must remain a default server component.

Required architecture constraints:

- no `"use client"`
- no `useState`
- no `useEffect`
- no client component behavior
- no route handlers
- no API routes
- no runtime data fetching
- no CMS
- no Payload
- no Supabase
- no database
- no authentication
- no authorization
- no user accounts
- no forms
- no search
- no filtering
- no booking
- no payment
- no intake
- no referral matching
- no CRM
- no email automation
- no dynamic content loading
- no personalized guidance
- no clinical decision tool
- no birth plan builder
- no emergency triage
- no route-specific section components
- no new shared UI primitives
- no modification to `SectionCard`
- no homepage change
- no navigation change unless a separately approved checkpoint directs it
- no global style change

Architecture confidence: 0.97

---

## 12. Future `SectionCard` Usage Requirements

The later `/birth` implementation may use `SectionCard` for grouped content.

Approved usage:

```tsx
<SectionCard>
  <h2>...</h2>
  <p>...</p>
</SectionCard>
```

Approved optional usage:

```tsx
<SectionCard className="..." id="..." ariaLabelledBy="...">
  ...
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

Do not modify `SectionCard` to accept those props.

SectionCard usage confidence: 0.98

---

## 13. Validation Expectations for Later Implementation

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
- `/birth` is prerendered as a static route
- no client component behavior is introduced
- no prohibited systems are introduced
- no existing completed static routes regress
- no invalid `SectionCard` props are used
- no JSX apostrophe escaping issues are introduced

The later implementation checkpoint should inspect build output for `/birth` and confirm it appears as static prerendered content.

Validation confidence: 0.95

---

## 14. Explicit Non-Goals for `/birth`

The `/birth` route is not:

- a medical advice page
- a labour instruction page
- a childbirth education course
- a birth plan generator
- a triage guide
- a symptom checker
- a crisis support page
- a clinical risk explanation page
- a provider comparison page
- a hospital or birth-setting recommendation page
- a doula directory
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

## 15. Source Alignment Risk Review

Primary source-alignment risk:

Birth-related pages can easily overreach into medical guidance, particularly when describing preparation, comfort measures, informed decision-making, care teams, interventions, emergencies, or labour support.

Risk controls for later implementation:

- describe categories of support, not instructions
- use `may include` language rather than promises
- keep medical care with qualified health-care providers
- avoid naming specific medical interventions unless only saying clinical questions belong with qualified providers
- avoid symptom guidance
- avoid outcome claims
- avoid operational promises
- avoid suggesting RDDA assigns, screens, books, or manages doulas
- avoid personalized advice

Risk review confidence: 0.9

---

## 16. Weighted Planning Confidence

Subproblem confidence:

1. 12AV handoff interpretation: 0.94
2. Existing route theme alignment: 0.9
3. Birth scope safety: 0.88
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

## 17. 12AW Decision

Decision:

```text
/birth is approved for future static route implementation planning output only.
```

12AW confirms:

- `/birth` has been planned only.
- `/birth` has not been implemented.
- The future `/birth` page can be implemented using existing static patterns.
- The future `/birth` page can use approved `SectionCard` usage only.
- No route-specific section components are required.
- No new shared UI primitives are required.
- No dynamic systems are required.
- The page must remain informational and non-medical.
- The page must avoid clinical advice, outcome promises, intake, referral, booking, payment, accounts, search, filtering, CMS, database, API routes, client state, effects, and `"use client"`.

---

## 18. Final 12AW Status

12AW complete.

Created checkpoint file:

```text
exports/12AW_RDDA_Birth_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Commit message used:

```text
Add RDDA birth page static route planning
```

GitHub-direct creation succeeded.

No downloadable Markdown file was required.

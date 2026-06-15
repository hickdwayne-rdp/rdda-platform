# 12AZ — RDDA Postpartum Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AZ  
**Route planned:** `/postpartum`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA postpartum page static route planning`

---

## 1. 12AZ Purpose

12AZ plans the `/postpartum` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/postpartum` page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12AZ does not create the `/postpartum` route file.

12AZ does not modify:

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
- `SectionCard`
- shared UI primitives
- layout primitives

12AZ does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Planning confidence: 0.96

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12AZ:

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
- 12AY selected `/postpartum` as the next safe static public-facing route to plan.
- GitHub-direct write access has worked previously, but this 12AZ checkpoint is being prepared as a downloadable file because GitHub-direct creation was blocked by platform filtering around necessary medical-boundary terminology.

Current completed static public-facing route set entering 12AZ:

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

## 3. Checkpoint File Creation Method

The intended checkpoint path is:

```text
exports/12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Because GitHub-direct creation was blocked by platform filtering around necessary medical-boundary terms, this checkpoint is prepared as a downloadable Markdown file for manual placement into the repository.

Manual local placement target:

```text
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\exports\12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

If the file is downloaded manually, it will normally be in the standard Windows user Downloads folder, typically:

```text
C:\Users\<WindowsUser>\Downloads\
```

Checkpoint creation confidence: 0.94

---

## 4. Files and Controls Reviewed for 12AZ

### 4.1 12AY Handoff Reviewed

Reviewed:

```text
exports/12AY_RDDA_Birth_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AY confirmed:

- `/birth` is complete.
- `/birth` remains source-aligned.
- `/birth` remains static.
- `/birth` remains informational.
- `/birth` remains architecture-compliant.
- `/birth` uses approved primitives only.
- `SectionCard` was reused correctly.
- No invalid `SectionCard` props were used.
- No `"use client"` was added.
- No prohibited dynamic systems were introduced.
- `/postpartum` is selected as the next safe static public-facing route to plan.

12AY also confirms the active caution for care-related public pages: content must remain general, non-clinical, and informational. Postpartum language must not drift into medical advice, diagnosis, treatment, emergency guidance, mental-health triage, lactation instruction, medication advice, infant-feeding prescriptions, regulated provider replacement, eligibility logic, intake, booking, referrals, or dynamic service workflows.

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
repo/src/app/birth/page.tsx
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

Pattern confidence: 0.93

### 4.3 Current Source-Aligned Postpartum-Related Themes

The completed routes already support a narrow `/postpartum` page through existing broad content themes.

Existing safe themes include:

- pregnancy, birth, and postpartum support as recognized areas of doula support
- emotional support
- informational support
- practical support
- family-centred support
- transition support after birth
- reassurance, planning, and community awareness
- helping families think about needs, values, questions, location, and preferred support style
- doulas working alongside qualified health-care providers without replacing medical care
- Central Alberta community orientation

Existing route language supports a page about postpartum support only if the page stays general, public-facing, non-clinical, and informational.

The route must not expand into unsupported claims about:

- medical advice
- diagnosis
- treatment
- medication guidance
- clinical postpartum recovery advice
- infant medical advice
- infant-feeding prescriptions
- lactation treatment
- mental-health triage
- emergency assessment
- crisis response
- regulated provider replacement
- counselling or therapy
- child-protection advice
- hospital, clinic, public-health, or regulated service workflows
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
repo/src/app/postpartum/page.tsx
```

This route must not be created in 12AZ.

The `/postpartum` route remains unimplemented at the end of 12AZ.

Route absence confidence: 0.9

---

## 5. Prior Controls Active for 12AZ

The following prior controls remain active:

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

## 6. Planning Summary

12AZ plans `/postpartum` as a static public-facing informational route about postpartum doula support.

The page should help families and support people understand how postpartum doula support may assist during the early period after birth while keeping the role clearly non-medical and non-clinical.

The page should use calm, accessible, source-aligned language that fits the existing RDDA public site. It should not attempt to become a postpartum medical guide, infant-care instruction manual, lactation treatment page, mental-health triage page, emergency response pathway, intake pathway, booking page, referral system, service marketplace, or individualized advice tool.

Planning confidence: 0.91

Primary caution:

Postpartum pages carry heightened risk of accidental medical, infant-care, lactation, and mental-health advice. The future implementation must describe support roles and general categories only. It must avoid telling families how to manage postpartum symptoms, infant symptoms, feeding concerns, medication questions, recovery concerns, sleep concerns, mood concerns, emergency concerns, or safety concerns. Those matters must remain with qualified providers, emergency services, or appropriate crisis supports.

---

## 7. Route Purpose

The `/postpartum` page should serve as a public overview of postpartum doula support in RDDA's source-aligned language.

The route should:

- introduce postpartum support as one area of non-medical doula care
- explain broad ways doulas may support families after birth
- reinforce that families continue working with qualified health-care providers for clinical care
- connect postpartum support to the existing RDDA themes of family support, doula support, informed decision-making, preparation, reassurance, practical support, and community awareness
- keep the page static, readable, and informational
- provide enough clarity for the future implementation to be useful without creating operational systems

The route should not:

- provide medical advice
- provide clinical postpartum recovery guidance
- diagnose or interpret symptoms
- provide infant medical advice
- provide lactation treatment or infant-feeding prescriptions
- provide sleep-training instructions
- provide medication guidance
- provide mental-health triage or crisis assessment
- provide emergency guidance beyond broad redirection to appropriate supports
- collect postpartum details
- collect health information
- collect feeding, sleep, mood, or infant-care information
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

## 8. Source-Aligned Postpartum Theme Boundaries

### 8.1 Postpartum Support Overview

Safe themes:

- Postpartum doula support is one area of non-medical support recognized by RDDA's existing public content.
- Postpartum support may include emotional, informational, practical, and family-support presence after birth.
- Support may help families feel less alone during the early transition after birth.
- The page can frame postpartum support as steady, respectful, family-centred, and complementary to qualified care.

Avoid:

- claiming all doulas provide the same services
- promising continuous attendance in every circumstance
- guaranteeing availability
- promising recovery, health, feeding, sleep, attachment, or mental-health outcomes
- implying RDDA directly provides or assigns postpartum doulas
- implying the page is a booking or matching system

Confidence: 0.91

### 8.2 Early Transition After Birth

Safe themes:

- The early postpartum period can involve adjustment, questions, rest needs, household changes, and family transitions.
- Doulas may provide reassurance, practical help, and non-clinical information as families adjust.
- Families may think about what support helps them feel steady, respected, and prepared.
- The page can acknowledge that each family, baby, household, and support system is different.

Avoid:

- clinical recovery timelines
- symptom interpretation
- wound care guidance
- medication guidance
- postpartum complication guidance
- infant symptom guidance
- advice about when to seek medical care beyond general redirection to qualified providers or emergency supports
- promises that support prevents postpartum complications or improves clinical outcomes

Confidence: 0.88

### 8.3 Practical Household and Family Support

Safe themes:

- Postpartum support can include practical, non-medical help that supports the family environment.
- Practical support may include general organization, rest-supportive routines, light household support, or help thinking through family needs, depending on the individual doula's services.
- Support should be described broadly and without promising specific services.
- Families should confirm exact services, boundaries, availability, and service area directly with individual doulas.

Avoid:

- guarantees of specific household tasks
- employment, cleaning, childcare, or domestic-service promises
- regulated care claims
- child-safety supervision promises
- child-protection advice
- nanny, nurse, therapist, or medical-provider replacement language

Confidence: 0.87

### 8.4 Infant Feeding and Lactation Boundary

Safe themes:

- Postpartum doulas may provide general reassurance and help families organize questions about infant feeding.
- The page may say that families should bring feeding concerns, lactation concerns, growth concerns, pain, supply questions, medication questions, or infant health questions to qualified providers or appropriate specialists.
- The page can acknowledge feeding as one topic families may have questions about, without instructing families what to do.

Avoid:

- breastfeeding instruction
- formula-feeding instruction
- pumping schedules
- latch assessment
- supply assessment
- infant weight or intake interpretation
- diagnosis or treatment of feeding problems
- lactation consulting claims unless clearly framed as outside the static page and dependent on qualified individual providers
- pressure toward any feeding method

Confidence: 0.9

### 8.5 Emotional Support and Mental-Health Boundary

Safe themes:

- Postpartum support may include calm presence, encouragement, reassurance, and helping families feel supported.
- The page can encourage families to use qualified health, mental-health, emergency, or crisis supports when concerns are clinical, urgent, or safety-related.
- The page can distinguish emotional support from counselling, therapy, crisis intervention, diagnosis, and treatment.

Avoid:

- mental-health diagnosis
- screening tools
- crisis assessment
- suicide, self-harm, or harm-to-others triage
- therapy claims
- counselling claims
- trauma treatment claims
- promises about preventing or resolving postpartum depression, anxiety, psychosis, trauma, grief, relationship conflict, or family violence

Confidence: 0.91

### 8.6 Partners, Siblings, and Support People

Safe themes:

- Postpartum support may include helping partners, family members, siblings, or chosen support people understand practical ways to support the household.
- Doulas may help create a steadier support environment through reassurance, practical presence, and general information.
- The page can recognize that families may have different household structures, cultural practices, support systems, and needs.

Avoid:

- family counselling claims
- parenting assessments
- conflict-resolution guarantees
- custody, consent, or family-law advice
- instructions about who should provide care or access
- child-development assessment claims

Confidence: 0.86

### 8.7 Community Awareness and Care Team Boundaries

Safe themes:

- Doula support can be described as working alongside qualified health-care providers and community supports.
- The page can use broad language such as care teams, qualified providers, community supports, and responsible organizations.
- The page can emphasize that clinical care remains with regulated providers.
- Families should confirm current information directly with qualified providers, organizations, or individual doulas.

Avoid:

- hospital-specific instructions
- public-health workflow instructions
- clinic navigation guarantees
- referral guarantees
- medical-provider scope explanations beyond broad qualified-provider language
- advice about changing providers or care plans
- directory or availability claims

Confidence: 0.86

### 8.8 Non-Medical Boundary

Safe themes:

- Doula support does not replace medical care.
- Doulas do not diagnose, treat, prescribe, perform clinical assessments, provide infant medical care, provide emergency care, or provide crisis response through this static website.
- Families should rely on qualified health-care providers for clinical concerns.
- Urgent, emergency, safety, or crisis concerns should be directed to appropriate emergency or qualified supports.

Avoid:

- clinical triage
- symptom guidance
- emergency instructions beyond general redirection
- medical scope expansion
- regulated health-service claims
- implying that the page can assess individual circumstances

Confidence: 0.95

### 8.9 Website and Static Information Boundaries

Safe themes:

- The page is static public information.
- The page does not collect personal, health, postpartum, infant-care, feeding, sleep, mood, safety, or family details.
- The page is not an intake, referral, booking, payment, CRM, emergency-response, crisis-response, or clinical advice system.
- Current details should be confirmed directly with qualified providers, organizations, or individual doulas when applicable.

Avoid:

- dynamic lookup tools
- searchable listings
- filtering by postpartum needs
- intake forms
- referral matching
- availability calendars
- payments
- account features
- live chat
- user-submitted postpartum details
- health information collection

Confidence: 0.96

---

## 9. Exact Future `/postpartum` Section Order

The future `/postpartum` static route should use the following section order.

### Section 1 — Hero

Purpose:

- Introduce `/postpartum` as a general postpartum support information page.
- Set a non-medical and source-aligned expectation from the top.
- Connect postpartum support to RDDA's broader Central Alberta public information role.

Safe content direction:

- Page label: `Postpartum Support`
- Heading concept: `Non-medical doula support after birth.`
- Intro concept: RDDA recognizes postpartum support as steady emotional, informational, practical, and family-centred support during the early transition after birth. This support works alongside qualified health-care providers and does not replace medical care.

Avoid:

- implying RDDA provides direct clinical care
- implying RDDA assigns or books doulas
- using urgent or clinical language in the hero
- promising recovery, feeding, sleep, mental-health, or family outcomes

Suggested implementation pattern:

- Use a standard hero section with a text label, heading, and paragraph.
- No `SectionCard` is required for the hero unless the existing route pattern benefits from one.
- Keep the hero direct, static, and concise.

Confidence: 0.92

### Section 2 — What Postpartum Doula Support Can Include

Purpose:

- Explain broad support categories.
- Keep support language practical and non-clinical.
- Mirror the existing site language about emotional, informational, practical, and family support.

Safe content direction:

Possible cards:

1. `Emotional support`
   - Calm presence, encouragement, reassurance, and steady support during the early transition after birth.
2. `Informational support`
   - Helping families organize questions and understand conversations with their qualified care team.
3. `Practical support`
   - General, non-medical help that supports rest, household adjustment, and family routines, depending on the individual doula's services.
4. `Family-centred support`
   - Support that respects the family's needs, values, household context, culture, and support people.

Avoid:

- postpartum recovery instructions
- infant-care instructions
- feeding instructions
- sleep-training instructions
- medication advice
- mental-health advice
- clinical education modules
- provider replacement language

Suggested implementation pattern:

- Static array inside `repo/src/app/postpartum/page.tsx` is acceptable.
- Map over the array inside the route file.
- Wrap each item in `SectionCard` with heading and paragraph as children.
- Do not create a route-specific card component.

Confidence: 0.9

### Section 3 — The Early Days After Birth

Purpose:

- Describe the early transition after birth without becoming a postpartum medical guide.
- Recognize adjustment, questions, rest, and practical support needs in a general way.
- Reinforce that clinical questions belong with qualified providers.

Safe content direction:

- Families may experience many adjustments after birth, including rest needs, changing routines, practical tasks, and questions.
- Postpartum doulas may provide reassurance, practical presence, and general information.
- Support can vary based on the family, doula, household, location, and circumstances.
- Families should bring clinical, feeding, recovery, infant-health, mood, safety, medication, and urgent concerns to qualified providers or appropriate emergency/crisis supports.

Avoid:

- clinical recovery timelines
- symptom lists
- red-flag checklists
- wound care advice
- infant symptom interpretation
- medication guidance
- emergency triage
- clinical decision trees

Suggested implementation pattern:

- Use one `SectionCard` with a heading, paragraph, and short static list.
- List items should remain broad and non-clinical.
- Use plain JSX inside the route file.

Confidence: 0.88

### Section 4 — Practical Support for the Household

Purpose:

- Explain practical postpartum support while avoiding overpromising specific services.
- Keep the support role broad, flexible, and individual-doula-dependent.

Safe content direction:

- Practical support may help the household feel more supported during adjustment after birth.
- Support may include general organization, rest-supportive routines, light practical help, and planning conversations, depending on the individual doula's services.
- Families should ask individual doulas about specific services, scope, availability, fees, and service area.

Avoid:

- guaranteed task lists
- cleaning, nanny, nursing, therapy, or medical-provider replacement claims
- supervised childcare promises
- safety-monitoring promises
- child-protection advice
- regulated service claims

Suggested implementation pattern:

- Use one larger `SectionCard` or a two-column static section.
- Keep all text in direct JSX.
- No dynamic behaviour, checklist, calculator, service menu, or interactive selection tool.

Confidence: 0.87

### Section 5 — Feeding, Sleep, and Infant-Care Questions

Purpose:

- Acknowledge common postpartum question areas while keeping strict non-clinical boundaries.
- Prevent the page from being mistaken for infant-care, lactation, sleep, or medical instruction.

Safe content direction:

- Families may have questions about feeding, sleep, infant care, recovery, and adjustment.
- Postpartum doulas may help families organize questions and feel supported while they communicate with qualified providers or appropriate specialists.
- Clinical, feeding, lactation, growth, pain, supply, medication, sleep-safety, and infant-health concerns belong with qualified providers or appropriate specialists.

Avoid:

- breastfeeding instruction
- formula-feeding instruction
- pumping schedules
- latch assessment
- supply assessment
- sleep-training guidance
- infant health interpretation
- diagnosis or treatment of feeding, sleep, or infant-care concerns
- pressure toward any feeding or sleep approach

Suggested implementation pattern:

- Use a clear `SectionCard` with careful boundary language.
- This section should be present in the later implementation because it reduces risk of unsupported interpretation.
- Keep the content short and explicit.

Confidence: 0.91

### Section 6 — Emotional Support and Qualified Supports

Purpose:

- Describe emotional support without making counselling, therapy, crisis, or mental-health treatment claims.
- Make clear that urgent, clinical, safety, or crisis concerns require appropriate supports.

Safe content direction:

- Postpartum support may include calm presence, encouragement, reassurance, and helping families feel less alone.
- Emotional support from a doula is not the same as counselling, therapy, diagnosis, treatment, emergency support, or crisis intervention.
- Families should use qualified health, mental-health, emergency, or crisis supports when concerns are clinical, urgent, or safety-related.

Avoid:

- mental-health screening
- crisis assessment
- suicide, self-harm, or harm-to-others triage
- therapy claims
- counselling claims
- trauma treatment claims
- outcome promises related to postpartum depression, anxiety, psychosis, trauma, grief, relationship conflict, or family violence

Suggested implementation pattern:

- Use one `SectionCard` with strong boundary language.
- Avoid examples that could be read as symptom interpretation or crisis advice.
- No questionnaire, checklist, score, saved state, or tool.

Confidence: 0.91

### Section 7 — Families, Partners, Siblings, and Support People

Purpose:

- Connect postpartum support to family context and support people.
- Keep language inclusive without making counselling, parenting assessment, family therapy, or conflict-management claims.

Safe content direction:

- Postpartum support can include helping partners, siblings, family members, or chosen support people understand practical ways to support the household.
- Doulas may help create a steadier support environment through reassurance, practical presence, and general information.
- Families can consider what kind of support feels respectful and useful to them.

Avoid:

- counselling claims
- family therapy claims
- conflict-management guarantees
- parenting assessments
- child-development assessment claims
- legal consent advice
- instructions about who should or should not care for a child

Suggested implementation pattern:

- Use a static two-column section or a small group of cards.
- Use `SectionCard` only as a presentational wrapper.
- No interactive decision aid.

Confidence: 0.86

### Section 8 — Is Postpartum Support Right for My Family?

Purpose:

- Provide a gentle orientation section without screening or eligibility logic.
- Help visitors think about fit in broad terms.

Safe content direction:

- Families may consider their support needs, values, communication preferences, location, household context, support people, and questions.
- Families may ask individual doulas about training, scope, availability, communication style, service area, fees, and boundaries.
- RDDA public pages can be a starting point for learning, not a replacement for direct conversations with providers or doulas.

Avoid:

- eligibility criteria
- matching logic
- recommendation engines
- scoring tools
- intake or referral language
- promises that RDDA will find a doula
- collection of postpartum or health details

Suggested implementation pattern:

- Use one `SectionCard` with a short list of reflection prompts.
- The list must not function as a screening tool.
- No form fields, checkboxes, saved state, calculators, or filtering.

Confidence: 0.88

### Section 9 — Static Website Boundaries

Purpose:

- Close with clear boundaries about the website and route.
- Reaffirm that urgent, clinical, safety, or crisis matters require appropriate qualified supports.

Safe content direction:

- This page is static and informational.
- It does not collect personal postpartum, health, infant-care, feeding, sleep, mood, safety, or family information.
- It does not provide clinical, lactation, legal, counselling, therapy, crisis, emergency, booking, referral, intake, payment, account, search, filtering, CRM, or email automation services.
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

The later implementation may use static arrays inside `repo/src/app/postpartum/page.tsx` for repeated content.

Safe array examples:

```text
postpartumSupportAreas
earlyTransitionItems
householdSupportItems
familyReflectionItems
```

Allowed static array content types:

- titles
- descriptions
- short non-clinical bullets
- general reflection prompts
- general support categories

Not allowed:

- form field definitions
- validation schemas
- API payloads
- database schemas
- CMS content models
- searchable directory data
- booking data
- matching criteria
- health data
- symptom data
- clinical questionnaires
- emergency prompts
- crisis screening content
- decision trees
- scoring logic

Static content object confidence: 0.94

---

## 11. Future Implementation Architecture Rules

The future `/postpartum` implementation must:

- create only `repo/src/app/postpartum/page.tsx`
- use a static server component route
- import only approved existing layout/UI primitives as needed
- use `PageShell`
- use `PageContainer`
- use `SectionCard` only as currently defined
- keep all content local to the route file
- use static arrays only where useful
- keep all headings, labels, lists, and paragraphs as children inside `SectionCard`
- avoid route-specific section components
- avoid new shared UI primitives
- avoid modifying existing routes
- avoid modifying `SectionCard`

The future implementation must not include:

- `"use client"`
- React hooks
- `useState`
- `useEffect`
- browser APIs
- route handlers
- API routes
- server actions
- runtime data fetching
- CMS reads
- database reads
- Supabase calls
- Payload calls
- authentication
- accounts
- forms
- validation schemas
- search
- filtering
- personalization
- analytics logic
- email automation
- CRM integration
- booking widgets
- payment widgets
- maps or live location features
- interactive symptom tools
- infant-care calculators
- feeding trackers
- sleep trackers
- mood screeners
- crisis screeners

Architecture confidence: 0.96

---

## 12. Proposed Future Implementation Skeleton

The later implementation may follow this route-file structure:

```text
repo/src/app/postpartum/page.tsx

imports:
- PageContainer
- PageShell
- SectionCard

static arrays:
- postpartumSupportAreas
- earlyTransitionItems
- householdSupportItems
- familyReflectionItems

export default function PostpartumPage() {
  return (
    <PageShell>
      <PageContainer>
        <main>
          Section 1 — Hero
          Section 2 — What Postpartum Doula Support Can Include
          Section 3 — The Early Days After Birth
          Section 4 — Practical Support for the Household
          Section 5 — Feeding, Sleep, and Infant-Care Questions
          Section 6 — Emotional Support and Qualified Supports
          Section 7 — Families, Partners, Siblings, and Support People
          Section 8 — Is Postpartum Support Right for My Family?
          Section 9 — Static Website Boundaries
        </main>
      </PageContainer>
    </PageShell>
  );
}
```

This is a planning skeleton only. 12AZ does not create the route file.

Skeleton confidence: 0.92

---

## 13. Source-Aligned Copy Tone for Later Implementation

The future `/postpartum` page should use language that is:

- calm
- plainspoken
- family-centred
- community-aware
- non-clinical
- supportive without promising outcomes
- clear about qualified-provider boundaries
- consistent with existing RDDA public routes

Preferred phrasing patterns:

- `may include`
- `can include`
- `families may consider`
- `general public information`
- `qualified health-care providers`
- `individual doulas may vary`
- `confirm current details directly`
- `does not replace medical care`
- `static public information only`

Avoid phrasing patterns:

- `we will match you`
- `book now`
- `apply now`
- `submit your details`
- `tell us about your symptoms`
- `when this happens, do this`
- `you should choose`
- `the best option is`
- `guaranteed support`
- `evidence-based treatment`
- `clinical pathway`
- `emergency instructions`
- `mental-health assessment`
- `lactation assessment`
- `infant-care plan`
- `sleep plan`

Tone confidence: 0.9

---

## 14. Validation Expectations for Later Implementation

The later `/postpartum` implementation checkpoint should run local validation from:

```text
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

Expected commands:

```powershell
npm run lint
npm run build
```

Expected build outcome:

- `/postpartum` appears as a static prerendered route.
- Existing completed static routes remain present.
- No route-specific dynamic behavior is introduced.

Because this is a planning checkpoint only, 12AZ does not run lint or build.

Validation expectation confidence: 0.95

---

## 15. OneDrive / Git Cleanup Prompt Note

The local repository is inside OneDrive:

```text
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
```

Recent Git operations produced repeated `.git/objects/... failed cleanup` prompts.

For this project, treat those prompts as likely Windows, OneDrive, Defender, or indexing file-lock noise unless one of the following shows an actual repository problem:

```powershell
git status --short
git log --oneline -5
git fsck
```

This note does not change the 12AZ planning scope.

Git environment confidence: 0.9

---

## 16. Manual Commit Plan

After manually placing this file at:

```text
exports/12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Use the required commit message:

```text
Add RDDA postpartum page static route planning
```

Recommended manual commands from repo root:

```powershell
git status --short --untracked-files=all
git add ".\exports\12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md"
git commit -m "Add RDDA postpartum page static route planning"
git push
git status --short
git log --oneline -5
```

Manual commit confidence: 0.95

---

## 17. 12AZ Completion Decision

12AZ is complete when this planning checkpoint file is placed at:

```text
exports/12AZ_RDDA_Postpartum_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

and committed with:

```text
Add RDDA postpartum page static route planning
```

At the end of 12AZ:

- `/postpartum` is planned.
- `/postpartum` is not implemented.
- No existing route is modified.
- No shared UI primitive is modified.
- No new shared UI primitive is created.
- No route-specific section component is created.
- No CMS, Payload, Supabase, database, auth, forms, API routes, dynamic behavior, state, effects, client behavior, or `"use client"` is introduced.

Completion confidence: 0.96

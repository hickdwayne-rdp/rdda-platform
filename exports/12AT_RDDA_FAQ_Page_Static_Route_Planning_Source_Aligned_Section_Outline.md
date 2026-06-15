# 12AT — RDDA FAQ Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AT  
**Route planned:** `/faq`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA FAQ page static route planning`

---

## 1. 12AT Purpose

12AT plans the `/faq` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/faq` page while preserving the approved RDDA static frontend architecture and avoiding all implementation changes.

12AT does not create the `/faq` route file.

12AT does not modify:

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
- `SectionCard`
- shared UI primitives
- layout primitives

12AT does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12AT:

```text
12AS — RDDA Partners Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12AT:

```text
fe67ac9 Add RDDA partners page source alignment review
```

Current status entering 12AT:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12AS checkpoint is committed and pushed.
- GitHub-direct write access is confirmed working.
- `/partners` has been reviewed and confirmed source-aligned.
- 12AS selected `/faq` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12AT:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/training`
7. `/resources`
8. `/contact`
9. `/partners`

12AT is planning-only, so `/faq` is not added to the completed route set in this checkpoint.

---

## 3. GitHub-Direct Checkpoint Creation

GitHub-direct write access is confirmed for:

```text
hickdwayne-rdp/rdda-platform
```

This checkpoint file is created directly in GitHub at:

```text
exports/12AT_RDDA_FAQ_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

No downloadable Markdown file is required for 12AT because GitHub-direct creation succeeded.

---

## 4. Files and Controls Reviewed for 12AT

### 4.1 12AS Handoff Reviewed

Reviewed:

```text
exports/12AS_RDDA_Partners_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AS confirmed:

- `/partners` is complete.
- `/partners` remains static.
- `/partners` remains informational only.
- `/partners` remains source-aligned.
- `/partners` uses only approved layout and UI primitives.
- `/partners` did not introduce forbidden systems or behavior.
- existing completed routes remain untouched.
- the frozen homepage architecture remains untouched.
- `/faq` is selected as the next safe static public-facing route to plan.

Review confidence: 0.93

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

Review confidence: 0.9

### 4.3 Shared UI Primitive Reviewed

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
- Put headings, labels, lists, questions, answers, and paragraphs inside `SectionCard` as children.
- Do not modify `SectionCard`.
- Do not create another shared UI primitive.

Review confidence: 0.96

### 4.4 Current Completed Routes Reviewed for Theme Safety

The completed static public-facing route set supports a conservative FAQ route focused on:

- what RDDA is
- who the site is for
- broad doula support awareness
- non-medical support boundaries
- families and support people
- doulas and professional learning
- resources and public education
- respectful community connection
- contact and communication expectations
- static website boundaries

The completed routes do not support inventing:

- program details
- eligibility rules
- clinical claims
- service guarantees
- fees or pricing
- intake workflows
- application pathways
- partner workflows
- referral workflows
- appointment workflows
- membership approval systems
- live directories
- searchable listings
- crisis response systems
- case management pathways

Review confidence: 0.88

### 4.5 Route Absence Check

Repository inspection before this checkpoint confirmed that 12AT is planning-only. The future implementation target is:

```text
repo/src/app/faq/page.tsx
```

This route must not be created in 12AT.

The `/faq` route remains unimplemented at the end of 12AT.

Review confidence: 0.9

---

## 5. Prior Controls Active for 12AT

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
- 12Y services page static route planning and source-aligned section outline
- 12Z services page implementation validation checkpoint
- 12AA services page source alignment review and next static route decision
- 12AB next static route selection and source-aligned page planning decision
- 12AC families page static route implementation validation checkpoint
- 12AD families page source alignment review and next static route decision
- 12AE doulas page static route planning and source-aligned section outline
- 12AF doulas page implementation validation checkpoint
- 12AG doulas page source alignment review and next static route decision
- 12AH training page static route planning and source-aligned section outline
- 12AI training page static route implementation validation checkpoint
- 12AJ training page source alignment review and next static route decision
- 12AK resources page static route planning and source-aligned section outline
- 12AL resources page implementation validation checkpoint
- 12AM resources page source alignment review and next static route decision
- 12AN contact page static route planning and source-aligned section outline
- 12AO contact page implementation validation checkpoint
- 12AP contact page source alignment review and next static route decision
- 12AQ partners page static route planning and source-aligned section outline
- 12AR partners page implementation validation checkpoint
- 12AS partners page source alignment review and next static route decision
- current homepage route
- current `/about` route
- current `/services` route
- current `/families` route
- current `/doulas` route
- current `/training` route
- current `/resources` route
- current `/contact` route
- current `/partners` route
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

---

## 6. Planning Summary

12AT plans `/faq` as a static public-facing informational route that answers broad questions using existing RDDA source-aligned themes.

The page should help visitors understand RDDA's public role, doula support language, non-medical boundaries, family and doula audiences, resource-awareness boundaries, training-orientation boundaries, contact expectations, and website limitations.

The page must not become a dynamic FAQ platform, searchable knowledge base, intake pathway, application pathway, referral pathway, booking path, payment path, membership system, partner workflow, clinical guidance tool, legal advice tool, crisis-response tool, or database-backed information system.

Planning confidence: 0.89

The main caution is that FAQ pages naturally drift into specific promises, operational details, eligibility answers, step-by-step workflows, fees, referral instructions, application instructions, medical/legal guidance, or dynamic help-centre behavior. The future implementation must keep `/faq` static, general, source-aligned, and informational only.

---

## 7. Route Purpose

The `/faq` page should serve as a public frequently asked questions page for general RDDA website visitors.

The route should:

- orient families, doulas, community partners, and general visitors
- summarize safe themes already present across existing static pages
- answer broad questions without adding new operational detail
- reinforce that doula support is non-medical
- reinforce appropriate use of static website information
- direct urgent, clinical, legal, safety, or crisis needs away from the static page and toward qualified services or emergency supports
- preserve calm, accessible, community-aware language

The route should not:

- collect questions
- submit contact requests
- create accounts
- search or filter FAQ items
- fetch live answers
- personalize answers
- provide eligibility screening
- provide intake guidance
- provide referral routing
- provide partner approval guidance
- provide clinical, legal, emergency, counselling, or crisis advice

---

## 8. Source-Aligned FAQ Theme Boundaries

The following FAQ themes are safe because they are already supported by the completed static route set and source-aligned public content direction.

### 8.1 RDDA Orientation

Safe themes:

- What RDDA is at a broad public level.
- Who the website is written for.
- How RDDA uses public information to support community clarity.
- How visitors can use the website as a starting point for awareness.

Avoid:

- formal legal status claims not already established
- governance details not already established
- membership rules not already established
- board structures not already established
- operational promises not already established

Confidence: 0.88

### 8.2 Doula Support Awareness

Safe themes:

- Doulas may provide non-medical emotional, physical, informational, and practical support.
- Doula support may relate to pregnancy, birth, postpartum, fertility, loss, lifecycle care, and family transitions at a broad level.
- Doula support does not replace medical care.
- Families should continue working with qualified health-care providers for clinical needs.

Avoid:

- clinical claims
- medical advice
- outcome guarantees
- diagnosis or treatment language
- regulated health-service claims
- claims about individual doula scope beyond established public language

Confidence: 0.9

### 8.3 Families and Support People

Safe themes:

- Families and support people may use RDDA pages to understand broad support categories.
- Public information can help people prepare questions and think about support needs.
- Static content is not personalized guidance.
- Specific decisions should be confirmed with qualified providers or appropriate organizations.

Avoid:

- eligibility screening
- customized service recommendations
- promises of matching
- intake directions
- direct referral language
- case-specific advice

Confidence: 0.87

### 8.4 Doulas and Professional Learning

Safe themes:

- Doulas may use RDDA public content for community-aware language and broad professional learning orientation.
- Training and learning information should remain general and informational.
- Static pages should not imply credentialing, certification, assessment, enrollment, approval, or membership processing unless such details are already supported elsewhere.

Avoid:

- application pathways
- credential guarantees
- certification claims
- training fees
- course registration workflows
- professional approval workflows
- continuing education promises

Confidence: 0.84

### 8.5 Resource Awareness

Safe themes:

- Resources can be described as broad categories for awareness.
- Resource information is a starting point for questions, conversations, and support planning.
- Visitors should confirm current details directly with qualified providers or organizations when current information matters.
- Urgent, emergency, medical, mental health, legal, or safety concerns should be directed to appropriate qualified services or emergency supports.

Avoid:

- live agency listings
- verified service availability
- referral pathways
- intake pathways
- crisis response
- medical triage
- legal advice
- counselling advice
- database-backed directories

Confidence: 0.9

### 8.6 Contact and Communication Expectations

Safe themes:

- Contact information can be framed as general public communication orientation.
- Static pages cannot manage urgent requests.
- Website visitors should use appropriate qualified or emergency supports for urgent matters.
- The FAQ can explain that the website is informational and not an automated response system.

Avoid:

- response-time guarantees
- intake promises
- email automation claims
- CRM workflows
- appointment booking
- case coordination
- emergency support handling

Confidence: 0.88

### 8.7 Partners and Community Connection

Safe themes:

- Partnerships can be described as respectful community connection and public education alignment.
- Community partners may use public pages to understand RDDA's language and boundaries.
- FAQ content can clarify that partner-related information is not an approval system, partner directory, referral engine, or workflow.

Avoid:

- partner application instructions
- sponsor listings
- endorsement claims
- ranking partners
- approving partners
- referral commitments
- event submission workflows
- donation workflows

Confidence: 0.86

### 8.8 Website and Static Information Boundaries

Safe themes:

- RDDA public pages are static informational pages.
- The website does not provide personalized assessment, clinical advice, legal advice, crisis response, account access, payments, booking, search, filtering, or dynamic records.
- Static information should be used alongside current information from qualified providers or organizations when decisions require up-to-date details.

Avoid:

- dynamic FAQ system
- search feature
- filtering feature
- user-submitted questions
- saved FAQ content
- CMS-managed answer updates
- API-driven answer logic
- personalization

Confidence: 0.95

---

## 9. Exact Future `/faq` Section Order

The future `/faq` static route should use the following section order.

### Section 1 — Hero

Purpose:

- Introduce `/faq` as a general questions page.
- Set expectation that the page answers broad public questions.
- Clarify that the page is static and informational.

Safe content direction:

- Page label: `FAQ`
- Heading concept: `Questions about RDDA, doula support, and public information.`
- Intro concept: RDDA answers common questions in general, source-aligned language for families, doulas, and community members across Central Alberta.

Avoid:

- promising complete answers
- promising current operational details
- promising response handling
- implying interactive support

### Section 2 — Using This FAQ

Purpose:

- Explain how visitors should use the FAQ.
- Position the page as a starting point for general understanding.
- Separate static information from personalized advice.

Safe FAQ prompts:

- `How should I use this FAQ?`
- `Is this page personalized advice?`
- `Can this page help with urgent or clinical questions?`

Safe content direction:

- Use this page for general orientation.
- Confirm important current details with qualified providers or organizations.
- Use emergency or appropriate qualified supports for urgent, clinical, legal, safety, or crisis concerns.

### Section 3 — About RDDA

Purpose:

- Answer broad questions about RDDA's public role and website purpose.
- Keep organizational claims general and source-aligned.

Safe FAQ prompts:

- `What is RDDA?`
- `Who is this website for?`
- `What kind of information does RDDA share publicly?`

Safe content direction:

- RDDA public pages support awareness, education, and community clarity.
- The website is written for families, doulas, community partners, and general visitors.
- Public content stays informational and boundary-aware.

Avoid:

- governance claims not already established
- formal membership claims not already established
- operational promises not already established

### Section 4 — Doula Support Basics

Purpose:

- Answer broad questions about doula support using existing service language.
- Reinforce non-medical boundaries.

Safe FAQ prompts:

- `What kind of support may doulas provide?`
- `Is doula support medical care?`
- `Can doula support relate to birth, postpartum, fertility, loss, or family transitions?`

Safe content direction:

- Doula support may include emotional, physical, informational, and practical support.
- Doula support does not replace medical care.
- Families should continue receiving clinical care from qualified health-care providers.

Avoid:

- diagnosis or treatment advice
- medical recommendations
- outcome promises
- guarantees of availability or suitability

### Section 5 — Families and Support People

Purpose:

- Answer common questions from families and support people without creating an intake path.

Safe FAQ prompts:

- `Can families use this website to learn about support options?`
- `Does this FAQ tell me what support is right for my situation?`
- `Should I rely only on this website when making decisions?`

Safe content direction:

- Families can use public information to identify questions and think about broad support categories.
- The website does not provide personalized assessment, eligibility screening, or service matching.
- Current details should be confirmed with appropriate providers or organizations.

Avoid:

- referral instructions
- intake instructions
- individualized advice
- claims about specific family outcomes

### Section 6 — Doulas and Learning

Purpose:

- Answer common questions from doulas and learners while avoiding credentialing or enrollment claims.

Safe FAQ prompts:

- `Can doulas use this site for learning and language clarity?`
- `Does this page provide certification or credentialing information?`
- `Does the FAQ create a training registration pathway?`

Safe content direction:

- Doulas may use public information for community-aware language and broad professional orientation.
- Static public pages do not create certification, credentialing, approval, application, enrollment, or registration workflows.

Avoid:

- credential promises
- course fees
- certification guarantees
- registration workflows
- professional assessment language

### Section 7 — Resources and Community Supports

Purpose:

- Answer common resource-awareness questions without becoming a directory or referral system.

Safe FAQ prompts:

- `Does RDDA provide a live resource directory?`
- `How should I use resource information?`
- `What should I do for urgent, emergency, medical, legal, mental health, or safety needs?`

Safe content direction:

- Resource information is general education and support-navigation awareness.
- It is not a live directory, referral pathway, intake system, medical triage, counselling service, legal advice service, or crisis-response tool.
- Urgent needs should go to appropriate qualified services or emergency supports.

Avoid:

- live listings
- agency availability claims
- comprehensive resource coverage claims
- referral or intake workflows

### Section 8 — Contact and Community Connection

Purpose:

- Answer general questions about contact, communication, and community partnership boundaries.

Safe FAQ prompts:

- `Can I contact RDDA through this website?`
- `Does the website manage urgent requests?`
- `Does the partners page create a partner application or referral pathway?`

Safe content direction:

- Contact-related information should remain general and informational.
- Static public pages do not create urgent response systems, booking systems, CRM systems, partner applications, referral pathways, or approval workflows.
- Partnership language should remain broad, respectful, and non-transactional.

Avoid:

- response-time guarantees
- approval commitments
- referral promises
- partner application instructions
- CRM or email automation claims

### Section 9 — Website Boundaries

Purpose:

- Make static architecture and appropriate-use boundaries clear for visitors.

Safe FAQ prompts:

- `Is this website interactive?`
- `Does this FAQ use search, filtering, accounts, or saved answers?`
- `Does this website provide booking, payment, intake, or referral tools?`

Safe content direction:

- The `/faq` route is static and informational only.
- It does not include search, filtering, account access, forms, booking, payments, database records, CMS content, API-driven answers, personalized answers, or dynamic behavior.

Avoid:

- any wording that implies hidden dynamic systems or future system promises

### Section 10 — Closing Clarity

Purpose:

- Close with a calm reminder that clear public information supports respectful community understanding.
- Reinforce that the FAQ is part of RDDA's public education role.

Safe content direction:

- Clear answers can help families, doulas, and community partners understand language, boundaries, and appropriate next steps.
- The page remains static, public, and informational.

Avoid:

- calls to submit questions
- calls to book services
- calls to apply
- calls to register
- calls to request referrals
- calls to create accounts

---

## 10. Recommended Static FAQ Data Shape for Future Implementation

The future implementation may use simple static arrays inside:

```text
repo/src/app/faq/page.tsx
```

Suggested static data pattern:

```text
const faqSections = [
  {
    label: "Using this FAQ",
    title: "A starting point for general understanding",
    items: [
      {
        question: "How should I use this FAQ?",
        answer: "...",
      },
    ],
  },
];
```

Implementation caution:

- This is a static array inside the page file only.
- This is not CMS content.
- This is not database content.
- This is not fetched content.
- This is not client state.
- This is not a dynamic FAQ system.
- This should not require a route-specific FAQ component.
- The page can map over static arrays directly inside the route file.

Confidence: 0.87

---

## 11. Future Implementation Constraints for `/faq`

The future `/faq` implementation must:

- create only `repo/src/app/faq/page.tsx`
- import only approved layout/UI primitives already used by other public routes
- keep the route as a server component by default
- avoid `"use client"`
- avoid new shared UI primitives
- avoid route-specific section components
- reuse `SectionCard` only as already approved
- place all headings, labels, paragraphs, questions, answers, and lists inside `SectionCard` as children
- avoid unsupported `SectionCard` props
- use static page-level content only
- use static arrays only where helpful for repeated FAQ content
- avoid runtime data fetching
- avoid API routes
- avoid route handlers
- avoid forms
- avoid search
- avoid filtering
- avoid collapsible client-side FAQ interactions
- avoid account features
- avoid booking features
- avoid payment features
- avoid CRM/email automation features
- avoid CMS/database dependencies

The future `/faq` implementation should not modify:

- `repo/src/app/page.tsx`
- `repo/src/app/about/page.tsx`
- `repo/src/app/services/page.tsx`
- `repo/src/app/families/page.tsx`
- `repo/src/app/doulas/page.tsx`
- `repo/src/app/training/page.tsx`
- `repo/src/app/resources/page.tsx`
- `repo/src/app/contact/page.tsx`
- `repo/src/app/partners/page.tsx`
- `repo/src/components/ui/SectionCard.tsx`
- layout primitives
- global styles
- navigation unless a later checkpoint explicitly authorizes navigation changes

---

## 12. Explicit Non-Goals

12AT does not authorize:

- implementation of `/faq`
- adding `/faq` to navigation
- adding a FAQ search bar
- adding filters
- adding accordions requiring client state
- adding forms
- collecting questions
- storing answers
- CMS-managed FAQ content
- database-managed FAQ content
- API-managed FAQ content
- dynamic FAQ routes
- FAQ categories loaded from external services
- accounts
- authentication
- booking
- payments
- referrals
- intake
- partner applications
- member applications
- training applications
- enrollment workflows
- automated emails
- CRM workflows
- service matching
- eligibility screening
- urgent request handling
- clinical advice
- legal advice
- counselling advice
- crisis response
- medical triage

---

## 13. Verification

### 13.1 Scope Verification

12AT planned `/faq` only.

No implementation file was created.

Verification confidence: 0.96

### 13.2 Source Alignment Verification

The planned `/faq` themes are limited to broad public information already reflected in the completed static route set:

- RDDA orientation
- doula support awareness
- families and support people
- doulas and learning
- resources and community supports
- contact and communication expectations
- partners and community connection
- website/static information boundaries

No new program detail, eligibility rule, clinical claim, guarantee, fee, intake workflow, partner workflow, referral workflow, application pathway, or dynamic system is introduced.

Verification confidence: 0.88

### 13.3 Architecture Verification

The plan preserves the approved static frontend architecture:

- no CMS
- no Payload
- no Supabase
- no database
- no authentication
- no forms
- no API
- no dynamic behavior
- no client state
- no effects
- no client component behavior
- no `"use client"`
- no route-specific section components
- no new shared UI primitives
- approved `SectionCard` reuse only

Verification confidence: 0.94

### 13.4 Section Order Verification

The exact future `/faq` section order is:

1. Hero
2. Using This FAQ
3. About RDDA
4. Doula Support Basics
5. Families and Support People
6. Doulas and Learning
7. Resources and Community Supports
8. Contact and Community Connection
9. Website Boundaries
10. Closing Clarity

Verification confidence: 0.9

---

## 14. 12AT Decision

Decision:

```text
/faq is approved for future static route implementation planning handoff.
```

The future implementation checkpoint should implement `/faq` only, using the section order established in this file.

The implementation should create:

```text
repo/src/app/faq/page.tsx
```

The implementation should not create or modify any other route or shared UI primitive unless a later checkpoint explicitly authorizes it.

---

## 15. Final 12AT Status

12AT complete.

Created checkpoint file:

```text
exports/12AT_RDDA_FAQ_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Commit message used:

```text
Add RDDA FAQ page static route planning
```

GitHub-direct creation succeeded.

No downloadable Markdown file was required.

`/faq` remains unimplemented at the end of 12AT.

# 12AN — RDDA Contact Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AN  
**Route planned:** `/contact`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA contact page static route planning`

---

## 1. 12AN Purpose

12AN plans the `/contact` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/contact` page while preserving the approved static frontend architecture and avoiding all implementation changes.

12AN does not create the `/contact` route file.

12AN does not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/training`
- `/resources`
- `SectionCard`
- shared UI primitives
- layout primitives

12AN does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

---

## 2. Current Repository Context

Latest completed RDDA project checkpoint entering 12AN:

```text
12AM — RDDA Resources Page Source Alignment Review + Next Static Route Decision
```

Latest commit entering 12AN:

```text
642cd6c Add RDDA resources page source alignment review
```

Current status entering 12AN:

- Branch `main` is up to date with `origin/main`.
- Working tree is clean.
- 12AM checkpoint is committed and pushed.
- GitHub-direct write access is confirmed working.
- `/resources` has been reviewed and confirmed source-aligned.
- 12AM selected `/contact` as the next safe static public-facing route to plan.

Current completed static public-facing route set entering 12AN:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/training`
7. `/resources`

12AN is planning-only, so `/contact` is not added to the completed route set in this checkpoint.

---

## 3. GitHub-Direct Checkpoint Creation

GitHub-direct write access is confirmed for:

```text
hickdwayne-rdp/rdda-platform
```

This checkpoint file is created directly in GitHub at:

```text
exports/12AN_RDDA_Contact_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

No downloadable Markdown file is required for 12AN unless GitHub-direct creation fails.

---

## 4. Files and Controls Reviewed for 12AN

### 4.1 12AM Handoff Reviewed

Reviewed:

```text
exports/12AM_RDDA_Resources_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AM confirmed:

- `/resources` is complete.
- `/resources` remains static.
- `/resources` remains informational only.
- `/resources` remains source-aligned.
- `/resources` uses only approved layout and UI primitives.
- `/resources` did not introduce forbidden systems or behavior.
- existing completed routes remain untouched.
- the frozen homepage architecture remains untouched.
- `/contact` is selected as the next safe static public-facing route if constrained as static contact orientation only.

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
```

These route files establish the current approved public-page implementation pattern:

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

---

## 5. Prior Controls Active for 12AN

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
- 12AF doulas page implementation validation checkpoint
- 12AG doulas page source alignment review and next static route decision
- 12AH training page static route planning and source-aligned section outline
- 12AI training page implementation validation checkpoint
- 12AJ training page source alignment review and next static route decision
- 12AK resources page static route planning and source-aligned section outline
- 12AL resources page implementation validation checkpoint
- 12AM resources page source alignment review and next static route decision
- current homepage route
- current `/about` route
- current `/services` route
- current `/families` route
- current `/doulas` route
- current `/training` route
- current `/resources` route
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

---

## 6. Planning Summary

12AN plans `/contact` as a static public-facing informational route focused on contact orientation, communication expectations, broad inquiry guidance, appropriate-use boundaries, and non-urgent public-facing contact guidance.

The route should help visitors understand how to think about contacting RDDA without converting the website into a contact form, intake form, referral form, booking calendar, live scheduling tool, emergency dispatch workflow, crisis-response tool, triage tool, CRM workflow, email automation system, account feature, database-backed contact system, CMS-managed contact system, API-driven feature, dynamic route, or client component route.

The page should be careful, calm, and boundary-aware. It should help visitors orient themselves before contacting RDDA while making clear that urgent, emergency, medical, legal, counselling, child-safety, family-crisis, or immediate-risk matters require appropriate qualified services or emergency supports outside the website.

Planning confidence: 0.88

The main caution is that contact pages naturally drift into forms, booking workflows, intake pathways, referral tools, email automation, or urgent-response expectations. The future implementation must keep `/contact` static, informational, and non-transactional.

---

## 7. Route Purpose

The `/contact` page should serve as a public contact-orientation page.

The route should help visitors understand:

- what kinds of broad inquiries may be appropriate for RDDA contact
- how communication expectations should be framed
- what information may be useful to think about before reaching out
- which matters should not be routed through the website
- that urgent or specialized concerns require appropriate qualified supports
- that the public page does not complete intake, booking, referral, screening, triage, or case management

The page should function as:

- a static contact orientation page
- a communication expectations page
- a broad inquiry guidance page
- an appropriate-use boundary page
- a non-urgent public-facing contact guidance page
- a bridge between the public informational routes and future contact details

The page should not function as:

- a contact form
- an intake form
- a referral form
- a booking calendar
- a live scheduling tool
- an emergency dispatch workflow
- a crisis-response tool
- a medical triage tool
- a legal triage tool
- a counselling triage tool
- a CRM workflow
- an email automation system
- an account feature
- a database-backed contact system
- a CMS-managed contact system
- an API-driven feature
- a dynamic route
- a client component route

---

## 8. Source Alignment Rationale

The `/contact` page aligns with RDDA's public-facing route set when it is framed as static orientation rather than a transactional contact system.

The content direction should stay aligned with RDDA's current public route pattern:

- calm public education
- Central Alberta community context
- family-aware language
- doula-informed communication
- broad support navigation
- clear scope boundaries
- non-urgent public guidance
- respect for professional limits
- no personalized assessment or triage
- no dynamic service workflow

The page can be source-aligned if it emphasizes communication clarity without promising:

- immediate responses
- emergency support
- clinical advice
- legal advice
- counselling support
- eligibility decisions
- service matching
- referral completion
- booking completion
- account-based follow-up
- saved inquiry records
- automated email processing
- live availability

Source-alignment confidence: 0.87

The content is appropriate for static planning because contact orientation can be expressed through general guidance, expectations, and boundaries without requiring forms, data storage, dynamic routing, APIs, client state, or CMS-managed contact records.

---

## 9. Recommended Page Sections

The future `/contact` page should include these sections:

1. Hero section
2. Contact orientation section
3. Appropriate inquiry categories section
4. Communication expectations section
5. Before reaching out section
6. What this page does not do section
7. Urgent and specialized support boundaries section
8. Closing public guidance section

This structure keeps the page helpful while avoiding form, intake, referral, booking, triage, CRM, and emergency-response drift.

---

## 10. Section-by-Section Outline

### 10.1 Hero Section

Working heading direction:

```text
Contact RDDA with clear expectations.
```

Static copy direction:

- Introduce `/contact` as a public orientation page for non-urgent RDDA communication.
- Frame the page around clear expectations, respectful inquiry guidance, and appropriate boundaries.
- Mention families, doulas, community partners, and people learning about RDDA where appropriate.
- Keep the tone calm, direct, accessible, and non-urgent.
- Avoid implying that the website processes forms, bookings, referrals, applications, emergencies, or crisis requests.

Implementation direction for future checkpoint:

- Use direct JSX inside `repo/src/app/contact/page.tsx`.
- Use `PageShell` and `PageContainer`.
- Use a top-level `<main>` with spacing consistent with completed static routes.
- Do not wrap the hero in a route-specific component.
- Do not add a form, button-driven workflow, booking link, scheduling tool, or client behavior.

Confidence: 0.9

### 10.2 Contact Orientation Section

Working section title direction:

```text
A starting point for non-urgent contact
```

Static copy direction:

- Explain that `/contact` helps visitors understand the kinds of communication RDDA may receive.
- Emphasize that the page is informational and orientation-based.
- Clarify that visitors should use appropriate qualified services for urgent, emergency, medical, legal, counselling, or safety needs.
- Avoid promising response timelines, case review, eligibility decisions, or service outcomes.

Implementation direction for future checkpoint:

- Use one `SectionCard`.
- Put eyebrow text, heading, paragraphs, and any list content inside `SectionCard` as children.
- Do not pass invalid `SectionCard` props.

Confidence: 0.9

### 10.3 Appropriate Inquiry Categories Section

Working section title direction:

```text
Common reasons people may reach out
```

Suggested static inquiry category direction:

1. Learning about RDDA
2. Family and community questions
3. Doula connection and public education
4. Training and learning inquiries
5. Resource and navigation questions
6. Community partnership conversations

Static copy direction:

- Keep categories broad and informational.
- Use careful language such as `may include`, `can help orient`, and `general questions about`.
- Avoid implying service eligibility, intake processing, referral completion, appointment booking, client onboarding, or personalized matching.
- Avoid collecting details or instructing visitors to submit personal, medical, legal, counselling, safety, or crisis information through the page.

Implementation direction for future checkpoint:

- Use a static `inquiryCategories` array.
- Render cards with `SectionCard` inside a responsive grid.
- Each card may include `label`, `title`, and `description` fields in the static array.
- Render labels, headings, and descriptions as children inside `SectionCard`.
- Do not create route-specific card components.

Confidence: 0.88

### 10.4 Communication Expectations Section

Working section title direction:

```text
Communication expectations
```

Static copy direction:

- Explain that RDDA communication should be respectful, clear, and non-urgent.
- Encourage visitors to keep inquiries focused on general RDDA information or public-facing questions.
- Avoid specific response time promises unless later approved as static content.
- Avoid automated reply expectations, case tracking, ticket systems, status dashboards, or CRM language.
- Avoid representing the page as a guaranteed response pathway.

Implementation direction for future checkpoint:

- Use one `SectionCard`.
- Use a static `communicationExpectations` array if a short list is helpful.
- Keep all content static and visible in the route file.

Confidence: 0.87

### 10.5 Before Reaching Out Section

Working section title direction:

```text
Before reaching out
```

Static copy direction:

- Invite visitors to consider what type of information they are looking for.
- Encourage visitors to review relevant public pages first where appropriate, such as `/services`, `/families`, `/doulas`, `/training`, and `/resources`.
- Keep this as general public guidance rather than a required screening process.
- Do not create intake questions, eligibility checklists, referral criteria, account prompts, booking prompts, or form-field-like content.

Implementation direction for future checkpoint:

- Use `SectionCard`.
- A static list can be used for general reflection points.
- Do not include input fields, text areas, checkboxes, dropdowns, or submit buttons.

Confidence: 0.86

### 10.6 What This Page Does Not Do Section

Working section title direction:

```text
What this page does not do
```

Static copy direction:

- Clearly state that `/contact` is informational and non-transactional.
- Confirm it is not a contact form, intake form, referral form, booking calendar, live scheduling tool, emergency dispatch workflow, crisis-response tool, medical triage tool, legal triage tool, counselling triage tool, CRM workflow, email automation system, account feature, database-backed contact system, CMS-managed contact system, API-driven feature, dynamic route, or client component route.
- Keep the wording clear and firm without sounding alarming.

Implementation direction for future checkpoint:

- Use one `SectionCard`.
- Use a static `contactBoundaries` array.
- Render as a simple unordered list.
- Do not add any interactive affordance that contradicts the boundary language.

Confidence: 0.93

### 10.7 Urgent and Specialized Support Boundaries Section

Working section title direction:

```text
Urgent and specialized needs require appropriate supports
```

Static copy direction:

- State generally that urgent, emergency, medical, legal, counselling, child-safety, family-violence, mental-health crisis, or immediate-risk concerns should be directed to appropriate qualified services or emergency supports.
- Avoid giving clinical, legal, counselling, child-protection, crisis-response, or emergency-dispatch instructions beyond the general boundary statement.
- Avoid creating a triage pathway or decision tree.
- Avoid listing live emergency numbers unless a later source-maintenance decision authorizes static number content.

Implementation direction for future checkpoint:

- Use one `SectionCard`.
- Keep content short and general.
- Do not add crisis buttons, emergency workflows, live chat, or resource dispatch behavior.

Confidence: 0.89

### 10.8 Closing Public Guidance Section

Working section title direction:

```text
Clear communication supports community care
```

Static copy direction:

- Close by connecting contact orientation to RDDA's broader public education role.
- Emphasize that clear expectations help families, doulas, and community partners communicate more effectively.
- Reinforce that `/contact` remains a static orientation page, not an intake, referral, booking, or urgent-response system.

Implementation direction for future checkpoint:

- Use one `SectionCard`.
- Keep the closing section concise.
- Do not add calls to action that imply form submission, booking, enrollment, referral, case review, or automated follow-up.

Confidence: 0.88

---

## 11. Recommended Static Arrays for 12AO Implementation

The next implementation checkpoint may use static arrays similar to the current completed static route pattern.

Suggested arrays:

```text
inquiryCategories
communicationExpectations
beforeContactGuidance
contactBoundaries
urgentBoundaryPoints
```

Possible `inquiryCategories` structure:

```text
label
title
description
```

Possible `communicationExpectations`, `beforeContactGuidance`, `contactBoundaries`, and `urgentBoundaryPoints` structures:

```text
string[]
```

Implementation should keep arrays inside:

```text
repo/src/app/contact/page.tsx
```

Do not move these arrays into shared configuration files in the next checkpoint.

---

## 12. Approved Implementation Approach for the Future Route

The next implementation checkpoint should create:

```text
repo/src/app/contact/page.tsx
```

The future implementation should use only:

- `PageShell`
- `PageContainer`
- `SectionCard`
- static arrays where appropriate
- direct JSX inside the route file

The future implementation should not create:

- route-specific section components
- new shared UI primitives
- new layout components
- new data-access helpers
- CMS utilities
- database utilities
- API routes
- route handlers
- client components

The future implementation should follow this import pattern:

```text
import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";
```

The implementation should export a default server component page function:

```text
export default function ContactPage() {
  return (
    <PageShell>
      <PageContainer>
        <main>
          Static contact page content goes here.
        </main>
      </PageContainer>
    </PageShell>
  );
}
```

The actual 12AO implementation should use the established route spacing and typography patterns from the completed static routes.

Future implementation approach confidence: 0.92

---

## 13. SectionCard Usage Requirements

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

No changes to `SectionCard` are authorized in 12AO.

---

## 14. Prohibited Items Confirmation

The `/contact` route must not add:

- contact form
- intake form
- referral form
- booking calendar
- live scheduling tool
- emergency dispatch workflow
- crisis-response tool
- medical triage tool
- legal triage tool
- counselling triage tool
- CRM workflow
- email automation system
- account feature
- database-backed contact system
- CMS-managed contact system
- API-driven feature
- dynamic route
- client component route
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
- route-specific section components
- new shared UI primitives
- new layout primitives
- external booking workflows
- external enrollment workflows
- saved inquiries
- account profiles
- live chat
- ticket systems
- case management workflows
- autoresponder workflows
- status dashboards
- eligibility screening
- personalized recommendations
- referral matching
- triage decision trees

Prohibited-items confidence: 0.95

---

## 15. Contact-Page Risk Register

### Risk 1 — Contact page drift toward form behavior

Contact pages often become forms, intake pages, referral pages, or data collection workflows.

Mitigation:

- Keep `/contact` static and informational.
- Do not add input fields, text areas, checkboxes, dropdowns, submit buttons, validation, server actions, route handlers, API endpoints, or database writes.
- Use orientation language rather than submission language.

Risk level: High for future edits, low for this planning checkpoint.

Confidence: 0.93

### Risk 2 — Contact page drift toward booking or scheduling

Visitors may expect contact pages to include booking calendars, scheduling links, training enrollment, or live availability.

Mitigation:

- Do not add calendars, scheduling widgets, booking links, appointment requests, availability checks, enrollment workflows, or external booking systems.
- Keep any future contact details static and non-transactional unless a later architecture decision authorizes otherwise.

Risk level: Medium for future edits, low for this planning checkpoint.

Confidence: 0.9

### Risk 3 — Contact page drift toward urgent-response or crisis workflow

A public contact page can be misread as an emergency, crisis, medical, legal, counselling, child-safety, or immediate-risk pathway.

Mitigation:

- Include clear static boundary language.
- Direct urgent and specialized needs generally to appropriate qualified services or emergency supports.
- Do not add live chat, emergency buttons, crisis workflows, triage decision trees, medical instructions, legal instructions, counselling assessment, or dispatch logic.

Risk level: Medium for future edits, low for this planning checkpoint.

Confidence: 0.89

### Risk 4 — Contact page drift toward CRM or email automation

Contact pages often become ticket systems, autoresponders, CRM pipelines, account features, saved inquiry records, or email automation workflows.

Mitigation:

- Do not add CRM integrations, email automation, account profiles, saved inquiries, dashboards, ticket IDs, tracking statuses, or database-backed contact records.
- Do not add API-driven contact features.
- Do not add client component behavior.

Risk level: Medium for future edits, low for this planning checkpoint.

Confidence: 0.91

### Risk 5 — Contact page drift toward personalized advice or triage

A contact page may accidentally ask visitors to self-identify needs in ways that imply medical, legal, counselling, eligibility, or service-matching triage.

Mitigation:

- Avoid assessment questions, eligibility prompts, referral criteria, personal history prompts, case summaries, and decision trees.
- Keep copy broad, public, and orientation-based.
- Keep urgent or specialized concerns outside the website workflow.

Risk level: Medium for future edits, low for this planning checkpoint.

Confidence: 0.88

---

## 16. Static-Only Boundaries

The future `/contact` implementation must remain static by design.

Static-only indicators expected in 12AO:

- direct route file at `repo/src/app/contact/page.tsx`
- no dynamic route segment
- no route handler
- no runtime data fetching
- no CMS
- no database
- no API logic
- no forms
- no authentication
- no client component behavior
- no state
- no effects
- no server actions
- no email automation
- no CRM integration
- no booking or scheduling integration
- no crisis-response workflow
- no medical, legal, or counselling triage workflow
- static arrays only where repeated content is useful
- direct JSX only

Static-only boundary confidence: 0.94

---

## 17. Future Validation Expectations

The next checkpoint should validate:

- route file exists at `repo/src/app/contact/page.tsx`
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
- route does not include state, effects, forms, server actions, CMS, database, API, dynamic behavior, search, filters, live listings, referral workflows, intake workflows, contact forms, booking systems, scheduling systems, crisis-response tools, medical triage, legal triage, counselling triage, CRM behavior, email automation, account features, saved inquiries, or external booking/enrollment workflows
- frozen homepage remains untouched
- `/about`, `/services`, `/families`, `/doulas`, `/training`, and `/resources` remain untouched
- `npm run lint` passes from `repo/`
- `npm run build` passes from `repo/`
- `/contact` is prerendered as a static route

Validation confidence: 0.9

The main future validation limitation is that structural review is not a substitute for local `npm run lint` and `npm run build`. The implementation checkpoint should include command results after the route file is created.

---

## 18. 12AO Implementation Scope

The next checkpoint should be:

```text
12AO — RDDA Contact Page Static Route Implementation + Validation
```

12AO should implement `/contact` only.

12AO should create:

```text
repo/src/app/contact/page.tsx
```

12AO should also create its implementation validation checkpoint file:

```text
exports/12AO_RDDA_Contact_Page_Static_Route_Implementation_Validation.md
```

12AO should validate:

- `/contact` is implemented as a static public-facing informational route
- `/contact` follows the established completed-route pattern
- `/contact` uses only approved implementation tools
- `/contact` does not create route-specific section components
- `/contact` does not create new shared UI primitives
- `/contact` does not modify existing shared UI primitives
- `/contact` does not introduce forms, intake, referral, booking, scheduling, crisis-response, triage, CRM, email automation, account, CMS, database, API, authentication, state, effects, client behavior, dynamic behavior, or `"use client"`
- local lint and build validations pass

---

## 19. Next Checkpoint Recommendation

Recommended next checkpoint:

```text
12AO — RDDA Contact Page Static Route Implementation + Validation
```

12AO should:

- implement `/contact` only
- create `repo/src/app/contact/page.tsx`
- create `exports/12AO_RDDA_Contact_Page_Static_Route_Implementation_Validation.md`
- keep `/contact` static, public-facing, informational, and source-aligned
- frame `/contact` as contact orientation, communication expectations, broad inquiry guidance, appropriate-use boundaries, and non-urgent public-facing contact guidance
- avoid forms, booking, intake, referral, crisis-response, medical triage, legal triage, counselling triage, CRM, email automation, API, database, CMS, authentication, state, effects, client behavior, dynamic behavior, and `"use client"`
- use only `PageShell`, `PageContainer`, `SectionCard`, static arrays where appropriate, and direct JSX inside the route file
- preserve the frozen homepage and completed route set
- preserve `SectionCard` unchanged

Next checkpoint confidence: 0.9

---

## 20. 12AN Completion Decision

12AN is complete when this checkpoint file is committed to GitHub.

Completion decision:

- `/contact` has been planned only.
- No `/contact` route file has been created in this checkpoint.
- No completed route has been modified.
- No frozen homepage content or section order has been modified.
- No shared UI primitive has been modified.
- No new shared UI primitive has been created.
- No route-specific section component has been created.
- No CMS, database, API, form, dynamic, client, contact-form, intake, referral, booking, scheduling, crisis-response, medical triage, legal triage, counselling triage, CRM, email automation, account, saved-inquiry, or external workflow behavior has been planned for implementation.
- The next implementation checkpoint is authorized to build `/contact` as a static public-facing informational contact-orientation page only.

Overall 12AN planning confidence: 0.9

The plan is high confidence because `/contact` can be implemented using the same static route pattern as the completed public pages while keeping content orientation-based, non-urgent, non-transactional, and free of form, intake, referral, booking, triage, CRM, email automation, API, database, CMS, authentication, dynamic, and client behavior.
# 12AJ — RDDA Training Page Source Alignment Review + Next Static Route Decision

**Project:** RDDA production implementation project  
**Checkpoint:** 12AJ  
**Review target:** `/training`  
**Checkpoint type:** Source alignment review and next static route decision  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA training page source alignment review`

---

## 1. 12AJ Purpose

12AJ reviews the completed `/training` static public-facing route after 12AI implementation and validation.

This checkpoint confirms whether `/training` remains aligned with the approved static RDDA frontend architecture, the 12AH source-aligned planning checkpoint, and the 12AI implementation validation checkpoint.

12AJ also selects the next safe static public-facing route to plan.

12AJ does not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/training`
- `SectionCard`
- shared UI primitives

12AJ does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

---

## 2. Current Repository Context

Latest completed implementation checkpoint entering 12AJ:

```text
12AI — RDDA Training Page Static Route Implementation + Validation
```

Latest commit entering 12AJ:

```text
ff73abc Add RDDA training page static route
```

Important GitHub-direct commit note:

```text
09d5fd5 Add RDDA training page static route
ff73abc Add RDDA training page static route
```

The duplicate commit message is acceptable because GitHub-direct file creation wrote the route file and validation checkpoint separately.

Final state entering 12AJ is clean, pushed, and validated.

Current completed static public-facing route set:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/training`

Validation status entering 12AJ:

- `npm run lint` passed.
- `npm run build` passed.
- `/training` is prerendered as static content.
- Branch `main` is up to date with `origin/main`.
- Working tree is clean.

---

## 3. Files Reviewed for 12AJ

Reviewed route implementation:

```text
repo/src/app/training/page.tsx
```

Reviewed planning checkpoint:

```text
exports/12AH_RDDA_Training_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Reviewed implementation validation checkpoint:

```text
exports/12AI_RDDA_Training_Page_Static_Route_Implementation_Validation.md
```

Reviewed shared UI primitive:

```text
repo/src/components/ui/SectionCard.tsx
```

Reviewed existing completed route guardrails:

```text
repo/src/app/page.tsx
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
repo/src/app/doulas/page.tsx
```

---

## 4. Active Controls Applied

The following controls remain active for this review:

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
- 12AF doulas page static route implementation validation checkpoint
- 12AG doulas page source alignment review and next static route decision
- 12AH training page static route planning and source-aligned section outline
- 12AI training page static route implementation validation checkpoint
- current homepage route
- current `/about` route
- current `/services` route
- current `/families` route
- current `/doulas` route
- current `/training` route
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

---

## 5. `/training` Route Review Summary

The `/training` route remains within the approved static public-facing scope.

The route:

- exists at `repo/src/app/training/page.tsx`
- imports `PageShell`
- imports `PageContainer`
- imports `SectionCard`
- exports a default server component page function
- uses static arrays for repeated informational content
- renders page-level sections directly in the route file
- uses `SectionCard` only as an approved presentational wrapper
- includes no route-specific section components
- includes no new shared UI primitives
- includes no CMS reads
- includes no database logic
- includes no API logic
- includes no forms
- includes no client component behavior
- includes no `"use client"`

---

## 6. Static Scope Confirmation

### Decision

`/training` remains static.

### Findings

The route contains static imports, static content arrays, static JSX, and direct page rendering.

The route does not include:

- `"use client"`
- `useState`
- `useEffect`
- `fetch`
- `async`
- server actions
- API calls
- route handlers
- database calls
- CMS calls
- Payload
- Supabase
- authentication
- sessions
- cookies
- headers-based runtime behavior
- dynamic rendering configuration

### Confidence

Static route confidence: 0.96

The route is high confidence static because it contains only static page content and the local build has already confirmed `/training` is prerendered as static content.

---

## 7. Public-Facing and Informational Scope Confirmation

### Decision

`/training` remains public-facing and informational only.

### Findings

The page presents training as:

- education
- learning
- awareness
- professional growth
- shared community knowledge
- informed support
- respectful care
- community connection

The page does not create private, transactional, or account-based training functionality.

The page does not include:

- training registration
- course enrollment
- applications
- payment
- checkout
- LMS behavior
- learner accounts
- account profiles
- attendance tracking
- certificate generation
- calendar booking
- waitlists
- search
- filtering
- live schedules
- eligibility screening
- interactive forms

### Confidence

Informational scope confidence: 0.95

The content is framed as general public learning information and does not imply a functioning course platform.

---

## 8. Source Alignment Review

### 8.1 Alignment With 12AH Planning

12AH planned `/training` as a static informational page about RDDA's education, learning, training orientation, community knowledge-sharing, doula development support, and family/community awareness.

12AI implemented that plan through these page areas:

1. Hero: `Training and Education`
2. Learning context: `A learning-focused public resource`
3. Learning-area cards
4. Supported audiences
5. Helpful starting points
6. Static scope boundaries
7. Closing community-care learning section

This matches the 12AH section direction.

### 8.2 Alignment With RDDA Static Production Direction

The page remains aligned with the existing RDDA static production direction because it:

- supports families, doulas, and community partners
- keeps copy grounded in Central Alberta community support
- describes learning without overpromising active training systems
- avoids unsupported credentialing or certification claims
- avoids transactional course language
- avoids live schedule or availability claims
- avoids private account, enrollment, or payment assumptions

### 8.3 Alignment Concern Review

No blocking source-alignment concern was found.

The main future caution is that training-related copy can easily drift into course catalog, registration, credentialing, payment, LMS, certificate, or booking language.

Future training work should continue to keep `/training` framed as static informational content unless a later approved checkpoint explicitly authorizes dynamic training platform functionality.

### Confidence

Source-alignment confidence: 0.92

The page follows the 12AH plan and stays within the current RDDA public information scope.

---

## 9. SectionCard Review

Current `SectionCard` supports only:

```text
children
as
className
id
ariaLabelledBy
```

The `/training` route does not pass unsupported `SectionCard` props.

The route does not pass:

- `title`
- `eyebrow`
- `description`
- `heading`
- `variant`
- `items`

All headings, labels, paragraphs, and lists are passed as children inside `SectionCard`, which matches the approved usage pattern.

### Decision

No invalid `SectionCard` props were introduced.

### Confidence

SectionCard usage confidence: 0.97

The route uses `SectionCard` only as a wrapper and does not require any change to the shared primitive.

---

## 10. Shared UI Primitive Review

12AJ confirms:

- no new shared UI primitive was created
- no existing shared UI primitive was modified
- `SectionCard` remains the only approved shared UI primitive used by the new static route pattern
- no route-specific section components were created for `/training`

### Decision

Shared UI primitive discipline remains intact.

### Confidence

Shared primitive confidence: 0.95

No evidence of new shared primitives or route-specific section components was found in the `/training` implementation.

---

## 11. Frozen Homepage and Completed Route Review

12AJ confirms that the review did not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/training`
- `SectionCard`

The homepage remains ordered as frozen in 12T:

1. Hero
2. Service Areas
3. Who RDDA Supports
4. Approach

The completed static public-facing route set remains:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`
6. `/training`

### Decision

No frozen homepage or completed static route change is required or authorized in 12AJ.

### Confidence

Route preservation confidence: 0.91

The reviewed files show the expected route structure remains in place, and this checkpoint creates only a new export file.

---

## 12. Forbidden Feature Review

12AJ confirms `/training` did not introduce:

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
- training registration
- enrollment
- payment
- checkout
- LMS behavior
- course dashboards
- learner accounts
- account profiles
- attendance tracking
- certificates
- calendar booking
- waitlists
- live class schedules
- searchable course data
- route-specific section components
- new shared UI primitives

### Decision

No forbidden feature was introduced.

### Confidence

Forbidden feature exclusion confidence: 0.96

The route implementation and validation checkpoint both support this conclusion.

---

## 13. Risk Register

### Risk 1 — Training page may drift toward platform behavior later

Training pages naturally invite registration, enrollment, schedules, payment, attendance, certificate, and learner-account features.

Mitigation:

- Keep `/training` static and informational.
- Do not add training workflows without a later explicit architecture decision.
- Use future checkpoints to separate public information from any future platform planning.

Risk level: Medium for future work, low for current implementation.

### Risk 2 — Credentialing or certification claims could be overextended

Training content can accidentally imply RDDA provides certification, accreditation, or credentialing.

Mitigation:

- Avoid unsupported credentialing language.
- Keep copy focused on education, awareness, learning, and professional growth.
- Do not add certificate generation or credential verification.

Risk level: Low for current implementation, medium for future edits.

### Risk 3 — Course catalog wording could imply live availability

Learning-area cards could be mistaken for live course offerings if future copy changes use course, date, seat, price, or instructor language.

Mitigation:

- Keep cards framed as learning themes.
- Avoid course inventory language.
- Avoid schedule, price, enrollment, and booking language.

Risk level: Low for current implementation.

---

## 14. 12AJ Review Decision

### Decision

`/training` passes the 12AJ source alignment review.

The route remains:

- static
- public-facing
- informational only
- source-aligned
- server component only
- free of route-specific section components
- free of new shared UI primitives
- free of CMS/database/API/forms/client behavior
- free of training registration, enrollment, payment, LMS, calendar booking, attendance tracking, certificates, account profiles, and interactive forms

### Overall confidence

Overall 12AJ review confidence: 0.94

The strongest evidence is the direct route review, the 12AH planning alignment, the 12AI validation checkpoint, the successful local lint/build status, and the absence of unsupported `SectionCard` props or forbidden dynamic behavior.

---

## 15. Next Safe Static Public-Facing Route Decision

### Decision

The next safe static public-facing route to plan is:

```text
/resources
```

### Rationale

`/resources` is the next safest static route because it can be implemented as a public informational page that points visitors toward general support categories, education, navigation guidance, and community resource awareness without requiring dynamic systems.

A static `/resources` route can safely describe:

- general resource categories
- family support navigation
- doula support navigation
- community support awareness
- education and information themes
- when visitors may want to seek professional, medical, emergency, or community support
- how RDDA fits into a broader support landscape

A static `/resources` route must not introduce:

- searchable directories
- filters
- live listings
- availability checks
- referral forms
- intake forms
- crisis response tools
- medical triage
- account profiles
- saved resources
- CMS-managed resource databases
- API-driven data
- external booking or enrollment workflows

### Why `/resources` before more dynamic candidates

`/resources` can be built safely as a static public page.

More dynamic candidates should remain deferred if they require:

- member directories
- doula profile systems
- contact forms
- intake workflows
- booking calendars
- payments
- training enrollment
- event calendars
- CMS-managed content
- authentication

### Confidence

Next route selection confidence: 0.88

`/resources` is a strong next route because it extends the public information architecture without requiring forbidden functionality. The main caution is to avoid turning it into a searchable database, directory, intake system, or crisis-response workflow.

---

## 16. Next Checkpoint Handoff

The next checkpoint should be:

```text
12AK — RDDA Resources Page Static Route Planning + Source-Aligned Section Outline
```

12AK should plan `/resources` only.

12AK should not implement the route.

12AK should review:

```text
repo/src/app/page.tsx
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
repo/src/app/doulas/page.tsx
repo/src/app/training/page.tsx
repo/src/components/ui/SectionCard.tsx
exports/12AJ_RDDA_Training_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AK should preserve:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/training`
- `SectionCard`
- shared UI primitives

12AK should avoid:

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
- searchable resource databases
- live directories
- intake workflows
- medical triage
- crisis-response tools
- booking systems
- account profiles

---

## 17. Completion Criteria

12AJ is complete when:

- `/training` source alignment review is documented
- `/training` static scope is confirmed
- `/training` public informational scope is confirmed
- invalid `SectionCard` props are ruled out
- forbidden training platform behavior is ruled out
- frozen homepage and completed static routes are preserved
- next safe static public-facing route is selected
- checkpoint file exists at `exports/12AJ_RDDA_Training_Page_Source_Alignment_Review_Next_Static_Route_Decision.md`

---

## 18. 12AJ Completion Note

12AJ confirms that `/training` remains a valid completed static public-facing RDDA route.

Created checkpoint:

```text
exports/12AJ_RDDA_Training_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

Next planned route:

```text
/resources
```

Next checkpoint:

```text
12AK — RDDA Resources Page Static Route Planning + Source-Aligned Section Outline
```
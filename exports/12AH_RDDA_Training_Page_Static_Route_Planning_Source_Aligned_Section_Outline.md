# 12AH — RDDA Training Page Static Route Planning + Source-Aligned Section Outline

**Project:** RDDA production implementation project  
**Checkpoint:** 12AH  
**Route planned:** `/training`  
**Checkpoint type:** Planning only  
**Implementation status:** Not implemented in this checkpoint  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA training page static route planning`

---

## 1. 12AH Purpose

12AH plans the `/training` static public-facing route only.

The purpose of this checkpoint is to create a source-aligned section outline for a future `/training` page while preserving the approved static frontend architecture and avoiding all implementation changes.

12AH does not create the `/training` route file.

12AH does not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `/doulas`
- `SectionCard`
- shared UI primitives

12AH does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

---

## 2. Current Repository Context

Latest RDDA project checkpoint commit entering 12AH:

```text
ff38d11 Add RDDA doulas page source alignment review
```

There are later GitHub connector test cleanup commits after 12AG:

```text
76c2c55 Test GitHub write access
872e9b6 Remove GitHub write access test file
```

Those later commits confirmed GitHub-direct write/delete access only.

They are not RDDA production implementation checkpoints.

The current completed static public-facing route set entering 12AH is:

1. `/`
2. `/about`
3. `/services`
4. `/families`
5. `/doulas`

12AH is planning-only, so `/training` is not added to the completed route set in this checkpoint.

---

## 3. GitHub-Direct Checkpoint Creation

GitHub-direct write access is confirmed for:

```text
hickdwayne-rdp/rdda-platform
```

This checkpoint file is created directly in GitHub at:

```text
exports/12AH_RDDA_Training_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

No downloadable Markdown file is required for 12AH unless GitHub-direct creation fails.

---

## 4. Files Reviewed for 12AH

### 4.1 Existing Static Route Pattern Files

Reviewed implementation pattern files:

```text
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
repo/src/app/doulas/page.tsx
```

These files confirm the current static route pattern:

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
- repeated content can be grouped with `SectionCard`
- no new route-specific section components required

### 4.2 Shared UI Primitive Reviewed

Reviewed shared UI primitive:

```text
repo/src/components/ui/SectionCard.tsx
```

Confirmed current `SectionCard` public props:

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
- Put headings, labels, lists, and paragraphs inside `SectionCard` as children.
- Do not modify `SectionCard`.
- Do not create another shared UI primitive.

### 4.3 12AG Handoff Reviewed

Reviewed:

```text
exports/12AG_RDDA_Doulas_Page_Source_Alignment_Review_Next_Static_Route_Decision.md
```

12AG confirmed:

- `/doulas` is complete.
- `/doulas` remains static.
- `/doulas` remains informational only.
- `/doulas` remains source-aligned.
- `/doulas` uses only approved layout/UI primitives.
- `/doulas` did not introduce forbidden systems or behavior.
- existing completed routes remain untouched.
- the frozen homepage architecture remains untouched.
- `/training` is selected as the next safe static public-facing route.

---

## 5. Prior Controls Active for 12AH

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
- 12AF doulas page static route implementation validation checkpoint
- 12AG doulas page source alignment review and next static route decision
- current homepage route
- current `/about` route
- current `/services` route
- current `/families` route
- current `/doulas` route
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

---

## 6. 12AH Static Safety Decision

### Decision

`/training` is safe to plan as the next static public-facing route.

### Reasoning

The `/training` route can be planned as a static informational page because it can describe RDDA's education, learning, training orientation, community knowledge-sharing, doula development support, and family/community awareness without requiring transactional functionality.

The page can remain static if it avoids:

- training registration
- course enrollment
- applications
- payments
- checkout
- LMS behavior
- learner accounts
- login
- profiles
- certificate generation
- attendance tracking
- calendar booking
- waitlists
- live schedules
- availability logic
- search
- filtering
- forms
- API routes
- CMS reads
- database reads
- client-side state
- client-side effects
- dynamic rendering
- `"use client"`

### Confidence

Planning `/training` as a static informational route is high confidence because 12AG selected it as the next safe route and the expected page scope can be expressed entirely through static page copy and repeated content cards.

---

## 7. `/training` Page Intent

The `/training` page should help visitors understand RDDA's relationship to education, learning, doula training awareness, professional growth, and community knowledge.

The page should be public-facing and informational only.

The page may safely communicate that RDDA values education, shared learning, informed support, and community-based training awareness.

The page must not imply that the site currently provides:

- a live course catalog
- course registration
- class enrollment
- payment processing
- an LMS
- certificates
- attendance records
- training applications
- account dashboards
- instructor profiles
- live class schedules
- automated waitlists
- booking calendars
- eligibility screening
- searchable course data

The route should support a future implementation that is calm, concise, accessible, and consistent with the static RDDA route set already completed.

---

## 8. Source-Aligned Content Boundaries for `/training`

The `/training` route should align with the existing RDDA production direction:

- RDDA supports families, doulas, and community members across Central Alberta.
- RDDA's public site communicates support, education, resources, and community connection.
- Doula support remains non-medical and works alongside medical care.
- Public-facing copy should be clear, grounded, welcoming, and non-technical.
- Training-related content should be framed as education and learning awareness, not a transactional training platform.
- Content should not overpromise services, credentials, courses, or functionality that has not been implemented.
- Content should remain suitable for a static MVP route.
- Copy should avoid creating legal, professional, certification, or accreditation claims unless explicitly supported by source documents.

The route should not create claims beyond the established RDDA source-aligned direction.

---

## 9. Proposed `/training` Static Page Sections

### Section 1 — Training Page Hero

**Purpose:** Introduce `/training` as a public information page about learning, education, and knowledge-sharing connected to RDDA's community role.

**Proposed eyebrow:**

```text
Training and Education
```

**Proposed heading direction:**

```text
Learning that strengthens doula support and community care.
```

**Proposed lead direction:**

The hero should explain that RDDA values education, learning, and shared understanding for doulas, families, and community members across Central Alberta.

**Static implementation notes:**

- Use static text only.
- Use `PageShell` and `PageContainer`.
- No hero-specific component should be created.
- No dynamic content should be introduced.

---

### Section 2 — What Training Means in the RDDA Context

**Purpose:** Define training broadly and safely as learning, education, awareness, and professional growth without implying active course registration or credentialing.

**Possible heading:**

```text
A learning-focused public resource
```

**Possible content direction:**

This section can explain that training-related content may help visitors understand doula care, community support, informed practice, and the value of ongoing learning.

**Source-aligned framing:**

RDDA can be described as supporting education and awareness. The copy should not claim that RDDA is currently operating a course platform, certification body, or registration system.

**Static implementation notes:**

- Use a `SectionCard`.
- Keep content explanatory and concise.
- Do not add forms or links that imply enrollment.
- Do not add course cards that imply live availability.

---

### Section 3 — Learning Areas RDDA Can Safely Describe

**Purpose:** Present general topic areas that fit the RDDA source direction without creating a live course catalog.

**Possible card topics:**

1. Doula role awareness
2. Birth and postpartum support learning
3. Family and lifecycle support education
4. Community connection and referral awareness
5. Inclusive and respectful care principles
6. Continuing professional growth

**Source-aligned framing:**

These are learning themes, not bookable classes.

The implementation should make clear that the page is informational and does not display a live schedule, registration flow, or course inventory.

**Static implementation notes:**

- Use `SectionCard` for repeatable learning-area cards.
- Cards may be rendered from a static array inside the page file.
- Do not create a route-specific card component.
- Do not create a new shared primitive.
- Do not add search, filters, dates, registration buttons, or payment language.

---

### Section 4 — Who the Training Information Supports

**Purpose:** Identify public audiences that may benefit from training-related information while avoiding account, membership, or enrollment assumptions.

**Possible audience groups:**

1. Doulas seeking professional growth and connection
2. Families wanting to understand doula support
3. Community partners learning how doula care fits within local support networks
4. People exploring the doula role

**Source-aligned framing:**

The page may explain that education supports clearer understanding between doulas, families, and community partners.

The page should not imply that each audience has separate user accounts, portals, dashboards, application flows, or personalized content.

**Static implementation notes:**

- Use static text and `SectionCard`.
- Keep the audience language public-facing.
- Avoid segmented account or profile language.
- Avoid "apply", "register", "enroll", or "log in" wording.

---

### Section 5 — Informational Boundaries

**Purpose:** Clearly preserve static scope and prevent future implementation drift.

**Possible heading:**

```text
Informational only
```

**This section should state that the `/training` page does not include:**

- course registration
- training enrollment
- applications
- payment
- checkout
- LMS features
- account profiles
- attendance tracking
- certificate generation
- calendar booking
- waitlists
- forms
- dynamic schedules
- automated eligibility screening

**Static implementation notes:**

- Use one `SectionCard`.
- A short bullet list is acceptable.
- Do not create a validation or policy component.
- Keep tone calm and public-facing.

---

### Section 6 — Future-Safe Closing Section

**Purpose:** End with a supportive summary that reinforces RDDA's education-oriented public role without promising unavailable systems.

**Possible heading:**

```text
Education as part of community care
```

**Proposed content direction:**

The closing section should reinforce that learning and shared understanding help doulas, families, and community partners participate in informed, respectful, community-centered support.

**Static implementation notes:**

- Use static text only.
- Use `SectionCard` if consistent with the final page layout.
- No CTA requiring forms, registration, accounts, booking, or payments.
- No dynamic feature promise.

---

## 10. Proposed `/training` Page Outline

The next implementation step should use this proposed static outline:

1. Hero: `Training and Education`
2. Section: `A learning-focused public resource`
3. Section: `Learning areas RDDA can safely describe`
4. Section: `Who the training information supports`
5. Section: `Informational only`
6. Closing section: `Education as part of community care`

This outline is planning-only and may be refined during implementation if needed to keep the route concise, accessible, and consistent with existing static page patterns.

---

## 11. Content Items to Avoid on `/training`

The `/training` route must not include:

- registration forms
- course enrollment
- training applications
- payment buttons
- checkout language
- LMS features
- learner accounts
- login links
- account links
- attendance tracking
- certificate generation
- completion tracking
- instructor dashboards
- student dashboards
- bookable calendars
- live schedules
- waitlists
- automated reminders
- eligibility screening
- searchable course data
- filtering
- sort controls
- dynamic dates
- database-driven course cards
- CMS-driven content
- API calls
- client-side state
- client-side effects
- dynamic rendering
- `"use client"`
- claims of accreditation, certification, or credentialing unless explicitly supported by approved source documents

---

## 12. Static Architecture Decision for Next Step

### Route Type

The next implementation step should implement `/training` as a static server component route.

Expected future file:

```text
repo/src/app/training/page.tsx
```

### Approved Existing Building Blocks

The next implementation step should use only existing approved primitives:

- `PageShell`
- `PageContainer`
- `SectionCard`

### Route-Specific Components

No route-specific section components should be created for `/training` in the next implementation step.

Rationale:

- the planned sections are concise
- the content can be implemented directly in the page file
- the static route pattern from `/about`, `/services`, `/families`, and `/doulas` is sufficient
- route-specific extraction would add unnecessary abstraction at this stage

### Shared UI Primitives

No new shared UI primitives should be created for `/training` in the next implementation step.

Rationale:

- `SectionCard` already covers the repeated content-card need
- 12J, 12P, 12Q, and 12R require caution around shared primitive expansion
- no repeated cross-route pattern has been proven that justifies a second shared primitive

---

## 13. Implementation Guardrails for 12AI

The next implementation checkpoint should:

1. Create only `repo/src/app/training/page.tsx`.
2. Use a static server component.
3. Use `PageShell`, `PageContainer`, and `SectionCard` only.
4. Avoid unsupported `SectionCard` props.
5. Avoid new route-specific section components.
6. Avoid new shared UI primitives.
7. Avoid modifying the frozen homepage.
8. Avoid modifying `/about`.
9. Avoid modifying `/services`.
10. Avoid modifying `/families`.
11. Avoid modifying `/doulas`.
12. Avoid modifying `SectionCard`.
13. Avoid CMS, Payload, Supabase, database logic, authentication, forms, API routes, state, effects, client behavior, and `"use client"`.
14. Avoid training registration, course enrollment, applications, payment, LMS, attendance tracking, certificate generation, account profiles, interactive forms, booking, search, or filtering.
15. Validate locally with lint/build after implementation.

---

## 14. Planned 12AI Validation Commands

These commands are for the next implementation checkpoint, not 12AH.

Run from the local app directory after 12AI creates the `/training` route:

```powershell
cd .\repo

npm run lint

npm run build
```

If `.next` causes a Windows file-lock problem during build, stop the dev server and remove `.next` before rebuilding:

```powershell
cd .\repo

Remove-Item -Recurse -Force .next

npm run build
```

---

## 15. 12AH Git Scope

Only this checkpoint file should be committed for 12AH:

```text
exports/12AH_RDDA_Training_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Commit message:

```text
Add RDDA training page static route planning
```

No route file should be created in 12AH.

Do not create:

```text
repo/src/app/training/page.tsx
```

That file belongs to the next implementation checkpoint only.

---

## 16. 12AH Final Decision

12AH confirms that `/training` can safely remain the next planned static public-facing route.

Final 12AH findings:

- `/training` can be static.
- `/training` can be public-facing.
- `/training` can be informational only.
- `/training` can be source-aligned.
- `/training` can be implemented later without route-specific section components.
- `/training` can be implemented later without new shared UI primitives.
- `/training` can use `PageShell`, `PageContainer`, and `SectionCard`.
- `/training` does not require CMS, database, forms, booking, registration, payment, account logic, API logic, search, filtering, dynamic behavior, or client behavior.
- Existing completed routes remain untouched.
- The frozen homepage architecture remains untouched.

Next checkpoint:

```text
12AI — RDDA Training Page Static Route Implementation + Validation
```

Next route selected for implementation:

```text
/training
```

---

## 17. Local Sync Commands After GitHub-Direct Commit

After this GitHub-direct checkpoint commit, run these commands from the local repository root:

```powershell
git pull

git status --short

git log --oneline -5
```

Expected local status after pull:

```text
Working tree is clean.
Latest RDDA checkpoint commit is Add RDDA training page static route planning.
```

---

## 18. 12AH Completion

12AH is complete when:

- this checkpoint file exists at `exports/12AH_RDDA_Training_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md`
- the checkpoint file is committed to `main`
- no `/training` implementation file is created in this checkpoint
- no existing completed route is modified
- `SectionCard` is not modified
- `/training` is recorded as safe for the next implementation checkpoint
- the next checkpoint is identified as 12AI

12AH complete.

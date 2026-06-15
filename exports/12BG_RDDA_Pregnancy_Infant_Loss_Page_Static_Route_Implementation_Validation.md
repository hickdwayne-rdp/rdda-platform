# 12BG — RDDA Pregnancy and Infant Loss Page Static Route Implementation + Validation

**Project:** RDDA production implementation project  
**Checkpoint:** 12BG  
**Route implemented:** `/loss`  
**Route theme:** Pregnancy and infant loss support  
**Checkpoint type:** Static route implementation + validation  
**Implementation status:** Implemented  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA pregnancy infant loss page static route`

---

## 1. 12BG Purpose

12BG implements the `/loss` static public-facing route approved in 12BF.

The route provides gentle, bounded, general public information about pregnancy and infant loss support while preserving the established RDDA static frontend architecture.

12BG creates only:

```text
repo/src/app/loss/page.tsx
exports/12BG_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Implementation_Validation.md
```

12BG does not modify:

- frozen homepage
- homepage service-area order
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
- global styles
- metadata
- package files
- config files

Implementation confidence: 0.97

---

## 2. Repository Context Entering 12BG

Latest completed checkpoint entering 12BG:

```text
12BF — RDDA Pregnancy and Infant Loss Page Static Route Planning + Source-Aligned Section Outline
```

Latest commit entering 12BG:

```text
7ad3c44 Add RDDA pregnancy infant loss page static route planning
```

Status entering 12BG:

- Branch `main` was up to date with `origin/main`.
- Working tree was clean.
- 12BF checkpoint was committed and pushed.
- `/loss` was approved as the next static public-facing route implementation.

Completed static public-facing route set entering 12BG:

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

12BG adds:

```text
/loss
```

Repository-context confidence: 0.98

---

## 3. Files and Controls Reviewed

Reviewed implementation controls and reference files:

```text
exports/12BF_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
repo/src/app/fertility/page.tsx
repo/src/app/birth/page.tsx
repo/src/components/ui/SectionCard.tsx
```

Applied controls:

- 11C implementation checklist
- 12B frontend architecture baseline
- 12J shared UI primitive caution
- 12P shared UI primitive planning decision
- 12Q implementation checkpoint
- 12R adoption review decision
- 12S static validation checkpoint
- 12T homepage architecture freeze decision
- 12BF pregnancy and infant loss page static route planning checkpoint
- current static route implementation pattern
- current `SectionCard` prop contract

Review confidence: 0.97

---

## 4. Route File Created

Created route file:

```text
repo/src/app/loss/page.tsx
```

The route uses:

- `PageShell`
- `PageContainer`
- `SectionCard`
- direct page-level JSX
- local static arrays
- static `.map()` rendering
- semantic section headings
- responsive card grids
- general public information copy

The route does not use:

- route-specific section components
- new shared UI primitives
- client components
- dynamic rendering
- fetched data
- CMS data
- database data
- form data
- user data
- browser APIs
- state
- effects
- event handlers

Route-file confidence: 0.97

---

## 5. Source Alignment Confirmation

The implemented `/loss` route follows the 12BF source-aligned section outline.

Implemented section structure:

1. Hero section
2. What support can include
3. During and after loss
4. Questions families may consider
5. Partners, children, and family members
6. Thinking about fit
7. Website boundaries

Implemented support categories:

- Emotional presence
- Informational support
- Practical support
- Family-centred support

Implemented family-support categories:

- Partners and support people
- Children and family context

Implemented reflection prompts:

- steady, respectful, useful support
- qualified medical provider or appropriate support questions
- communication, planning, or practical support people
- cultural, spiritual, household, privacy, or family considerations
- training, scope, availability, communication style, service area, fees, and boundaries for an individual doula

Source-alignment confidence: 0.96

---

## 6. Boundary and Scope Confirmation

The `/loss` route remains a gentle, non-clinical public information page.

The page does not claim that RDDA or doulas provide:

- medical advice
- medical care
- diagnosis
- treatment
- treatment planning
- mental-health treatment
- counselling
- therapy
- psychotherapy
- grief counselling
- bereavement counselling
- crisis support
- emergency support
- self-harm support
- legal advice
- funeral direction
- spiritual direction
- referral matching
- intake
- case management
- booking
- individualized recommendations

The page includes explicit boundary language:

```text
This website provides general public information only. It does not provide medical advice, counselling, therapy, crisis support, emergency support, bereavement counselling, legal advice, funeral direction, spiritual direction, intake, referral, matching, booking, or individualized recommendations.
```

It also directs medical, urgent, emergency, safety, mental-health, self-harm, crisis, legal, funeral, spiritual, or regulated-care concerns to qualified providers or appropriate supports.

Boundary confidence: 0.98

---

## 7. Static Architecture Confirmation

The `/loss` route remains static and server-rendered by default.

Confirmed absent from source:

```text
"use client"
useState
useEffect
onClick
onSubmit
fetch(
async function
cookies
headers
searchParams
params
form
input
textarea
select
button
api
route handler
Payload
Supabase
database
auth
login
booking
intake
referral
matching
payment
account
CRM
email automation
```

The route relies only on static imports and local static display arrays.

Static architecture confidence: 0.98

---

## 8. SectionCard Usage Confirmation

The current `SectionCard` contract supports:

```text
children
as
className
id
ariaLabelledBy
```

The `/loss` route uses `SectionCard` safely by passing content as children only.

No unsupported props are used, including:

- `title`
- `eyebrow`
- `description`
- `heading`
- `variant`
- `items`

No `SectionCard` changes were made or required.

SectionCard confidence: 0.99

---

## 9. Files Changed in 12BG

Files changed:

```text
repo/src/app/loss/page.tsx
exports/12BG_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Implementation_Validation.md
```

No other route, layout, component, primitive, style, config, package, CMS, database, auth, or API file was intentionally modified.

File-change confidence: 0.97

---

## 10. Validation Status

Source-level validation completed through repository review.

Confirmed by source review:

- route file exists
- imports resolve to established project aliases used by existing routes
- route is a server component by default
- local arrays are static
- JSX follows existing page patterns
- `SectionCard` usage matches the existing prop contract
- no route-specific section components were created
- no new shared UI primitives were created
- no dynamic systems were introduced
- no unsupported clinical, counselling, crisis, emergency, booking, referral, or intake claims were introduced

Local validation still required after pulling 12BG:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Expected local validation result:

- lint passes
- production build passes
- build output includes `○ /loss`
- `/loss` is listed as static prerendered content
- working tree remains clean after pull and validation

Validation confidence before local npm execution: 0.91

---

## 11. Issues Found

One source-display issue was found and corrected during 12BG:

- Two apostrophes were initially over-escaped inside JavaScript string values.
- This would have displayed literal `&apos;` text in rendered card descriptions.
- The string values were corrected to use normal apostrophes inside JavaScript strings.

No remaining source-alignment or architecture issues were found in the final source review.

Issue-review confidence: 0.96

---

## 12. 12BG Decision

Decision: `/loss` is implemented as a static public-facing pregnancy and infant loss support route.

The route is ready for local validation.

After local validation passes, the next checkpoint should be:

```text
12BH — RDDA Pregnancy and Infant Loss Page Source Alignment Review + Next Static Route Decision
```

The likely next static route decision after `/loss` is:

```text
/family-transitions
```

Rationale:

The homepage service-area order is:

1. Pregnancy & birth support
2. Postpartum support
3. Fertility & preconception support
4. Pregnancy and infant loss support
5. Family transitions
6. End-of-life and grief support

Because `/birth`, `/postpartum`, `/fertility`, and `/loss` are now implemented or in validation, the next service-area theme to review after 12BH is family transitions.

Decision confidence: 0.95

---

## 13. Final 12BG Status

12BG is complete when this checkpoint file is committed.

Final 12BG status:

- `/loss` route implemented
- implementation validation checkpoint created
- source alignment confirmed against 12BF
- architecture boundaries preserved
- `SectionCard` used safely
- no existing completed route modified
- no shared primitive modified
- no CMS introduced
- no database introduced
- no auth introduced
- no forms introduced
- no API introduced
- no dynamic behavior introduced
- no state introduced
- no effects introduced
- no client behavior introduced
- no `"use client"` introduced
- local lint/build validation pending user-side execution after pull

Final confidence: 0.94

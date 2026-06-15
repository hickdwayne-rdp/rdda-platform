# 12BH — RDDA Pregnancy and Infant Loss Page Source Alignment Review + Next Static Route Decision

**Project:** RDDA production implementation project  
**Checkpoint:** 12BH  
**Route reviewed:** `/loss`  
**Route theme:** Pregnancy and infant loss support  
**Checkpoint type:** Source alignment review + next static route decision  
**Implementation status:** Review complete  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA pregnancy infant loss page source alignment review`

---

## 1. 12BH Purpose

12BH reviews the `/loss` route implemented in 12BG against the approved 12BF pregnancy and infant loss planning checkpoint.

This checkpoint confirms whether `/loss`:

- follows the approved source-aligned section outline
- preserves the static frontend architecture
- avoids unsupported clinical, counselling, therapy, crisis, emergency, booking, referral, intake, matching, funeral, spiritual-direction, legal, or individualized-service claims
- uses `SectionCard` safely
- remains static and informational only
- is ready to remain in the completed public-facing static route set

12BH does not implement a new route.

12BH does not modify:

- frozen homepage
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

12BH does not add CMS, Payload, Supabase, database logic, authentication, forms, API logic, dynamic behavior, state, effects, client component behavior, or `"use client"`.

Review confidence: 0.98

---

## 2. Repository Context Entering 12BH

Latest completed checkpoint entering 12BH:

```text
12BG — RDDA Pregnancy and Infant Loss Page Static Route Implementation + Validation
```

Latest commit entering 12BH:

```text
c8c09ac Add RDDA pregnancy infant loss page static route
```

User-side validation after pulling 12BG confirmed:

```text
npm run lint
npm run build
```

Validation result:

- lint passed
- production build passed
- build output listed `○ /loss`
- `/loss` was prerendered as static content
- working tree remained clean
- local `HEAD` matched `origin/main`

Completed static public-facing route set entering 12BH:

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

Repository-context confidence: 0.99

---

## 3. Files and Controls Reviewed

Reviewed source and checkpoint files:

```text
exports/12BF_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
exports/12BG_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Implementation_Validation.md
repo/src/app/loss/page.tsx
repo/src/components/ui/SectionCard.tsx
repo/src/components/sections/HomeServiceAreasSection.tsx
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
- current homepage service-area order
- current `/birth` route pattern
- current `/postpartum` route pattern
- current `/fertility` route pattern
- current `/loss` route
- current `repo/src/components/ui/SectionCard.tsx`

Review confidence: 0.98

---

## 4. 12BG Implementation Review

12BG created exactly the expected files:

```text
repo/src/app/loss/page.tsx
exports/12BG_RDDA_Pregnancy_Infant_Loss_Page_Static_Route_Implementation_Validation.md
```

No other route, layout, shared primitive, global style, package, config, CMS, database, auth, API, or form file was intentionally modified.

The implemented route uses:

- `PageShell`
- `PageContainer`
- `SectionCard`
- direct page-level JSX
- local static arrays
- static `.map()` rendering
- semantic section headings
- responsive card grids
- general public information copy

The implemented route does not use:

- route-specific section components
- new shared UI primitives
- client components
- browser-only APIs
- data fetching
- forms
- interactive handlers
- dynamic rendering
- user-specific state

Implementation review confidence: 0.98

---

## 5. Source-Alignment Confirmation

The `/loss` route follows the approved 12BF section outline.

Approved 12BF route path:

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

Implemented page structure:

1. Hero section
2. What support can include
3. During and after loss
4. Questions families may consider
5. Partners, children, and family members
6. Thinking about fit
7. Website boundaries

Implemented support categories match the 12BF approved categories:

- Emotional presence
- Informational support
- Practical support
- Family-centred support

Implemented family-support topics match the 12BF approved direction:

- Partners and support people
- Children and family context

Implemented reflection prompts remain general and non-individualized.

The route clearly preserves the distinction between:

```text
Pregnancy and infant loss support
```

and the later separate homepage service area:

```text
End-of-life and grief support
```

Source-alignment confidence: 0.97

---

## 6. Boundary and Scope Confirmation

The `/loss` page remains a gentle, non-clinical public information page.

It does not claim that RDDA or doulas provide:

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

The implemented page includes explicit boundary language:

```text
This website provides general public information only. It does not provide medical advice, counselling, therapy, crisis support, emergency support, bereavement counselling, legal advice, funeral direction, spiritual direction, intake, referral, matching, booking, or individualized recommendations.
```

It also directs medical, urgent, emergency, safety, mental-health, self-harm, crisis, legal, funeral, spiritual, or regulated-care concerns to qualified providers or appropriate supports.

This boundary language is stronger than the minimum 12BF requirement and is appropriate for the sensitivity of pregnancy and infant loss content.

Boundary confidence: 0.99

---

## 7. Static Architecture Confirmation

The `/loss` route remains static and server-rendered by default.

Confirmed absent from `repo/src/app/loss/page.tsx`:

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

The route relies only on:

- static imports
- local static display arrays
- deterministic JSX rendering
- existing layout primitives
- existing UI primitive

The local build confirmed `/loss` as static prerendered content.

Static architecture confidence: 0.99

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

The `/loss` route uses `SectionCard` safely by passing content as children.

No unsupported props are used, including:

- `title`
- `eyebrow`
- `description`
- `heading`
- `variant`
- `items`
- `icon`
- `href`

No `SectionCard` change was made or required.

SectionCard confidence: 0.99

---

## 9. Validation Confirmation

User-side local validation after pulling 12BG confirmed:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Observed validation result:

- `npm run lint` passed
- `npm run build` passed
- Next.js compiled successfully
- TypeScript finished successfully
- static page generation completed successfully
- build output listed `○ /loss`
- build output confirmed static prerendering
- `git status --short` returned clean
- `git log --oneline -5` showed `c8c09ac` at `HEAD`, `origin/main`, and `origin/HEAD`

Validation confidence: 0.99

---

## 10. Issues Found

No unresolved source-alignment, architecture, or boundary issues were found.

One source-display issue had been found and corrected during 12BG before the final 12BG commit:

- two over-escaped apostrophes inside JavaScript string values were corrected
- final source no longer displays literal `&apos;` text in those card descriptions

No additional issue was found in 12BH.

Issue-review confidence: 0.98

---

## 11. Completed Route Set After 12BH

With `/loss` implemented and reviewed, the completed static public-facing route set is now:

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

Completed-route confidence: 0.99

---

## 12. Next Static Route Decision

The homepage service-area order is:

1. Pregnancy & birth support
2. Postpartum support
3. Fertility & preconception support
4. Pregnancy and infant loss support
5. Family transitions
6. End-of-life and grief support

The first four lifecycle service-area routes are now implemented and reviewed:

```text
/birth
/postpartum
/fertility
/loss
```

Therefore the next static public-facing route to plan should be:

```text
/family-transitions
```

Working route theme:

```text
Family transitions
```

Important boundary decision for the next route:

- `/family-transitions` should remain broad, informational, and non-clinical.
- It should not become a counselling, mediation, legal, custody, child-protection, crisis, case-management, referral, intake, or advocacy service page.
- It should not overlap with the later end-of-life and grief route except where family change is discussed in broad lifecycle-support terms.

Next-route confidence: 0.96

---

## 13. Next Recommended Checkpoint

Next recommended checkpoint:

```text
12BI — RDDA Family Transitions Page Static Route Planning + Source-Aligned Section Outline
```

Recommended route path to plan:

```text
/family-transitions
```

Recommended checkpoint file:

```text
exports/12BI_RDDA_Family_Transitions_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md
```

Recommended commit message:

```text
Add RDDA family transitions page static route planning
```

Checkpoint confidence: 0.97

---

## 14. 12BH Final Decision

Decision: `/loss` is source-aligned, architecture-compliant, static, informational, and complete.

12BH confirms:

- `/loss` follows the 12BF approved plan
- `/loss` passed lint locally
- `/loss` passed production build locally
- `/loss` is static prerendered content
- `/loss` avoids unsupported clinical, counselling, therapy, crisis, emergency, booking, referral, intake, matching, funeral-direction, spiritual-direction, legal, and individualized-service claims
- `/loss` uses `SectionCard` safely
- no existing completed route was modified
- no shared primitive was modified
- no CMS was introduced
- no database was introduced
- no auth was introduced
- no forms were introduced
- no API was introduced
- no dynamic behavior was introduced
- no state was introduced
- no effects were introduced
- no client behavior was introduced
- no `"use client"` was introduced

12BH selects `/family-transitions` as the next static public-facing route to plan.

Final confidence: 0.98

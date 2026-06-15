# 12AU — RDDA FAQ Page Static Route Implementation + Validation

**Project:** RDDA production implementation project  
**Checkpoint:** 12AU  
**Route implemented:** `/faq`  
**Checkpoint type:** Static route implementation + validation  
**Created:** 2026-06-14  
**Commit message:** `Add RDDA FAQ page static route`

---

## 1. Purpose

12AU implements the `/faq` static public-facing route only.

The implementation follows the 12AT FAQ page static route planning and source-aligned section outline. The route answers broad public questions about RDDA, doula support, families and support people, doulas and learning, resources, contact, partners, website boundaries, and appropriate use of static public information.

12AU does not modify the frozen homepage, existing completed routes, `SectionCard`, layout primitives, shared UI primitives, navigation, or global styles.

---

## 2. Files Created

Created:

```text
repo/src/app/faq/page.tsx
exports/12AU_RDDA_FAQ_Page_Static_Route_Implementation_Validation.md
```

No existing route files were modified.

---

## 3. Implementation Summary

The `/faq` route uses only:

```text
PageShell
PageContainer
SectionCard
static arrays inside the route file
direct JSX inside the route file
```

The page follows the exact section order from 12AT:

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

---

## 4. Static-Only Controls

Confirmed by source inspection:

- no `"use client"`
- no client state
- no effects
- no runtime data fetching
- no API calls
- no route handlers
- no CMS reads
- no database reads
- no authentication
- no forms
- no search
- no filtering
- no dynamic FAQ system
- no collapsible client-side FAQ behavior
- no accounts
- no booking
- no payments
- no CRM or email automation
- no route-specific section components
- no new shared UI primitives

---

## 5. SectionCard Usage

`SectionCard` is reused only as the approved presentational wrapper.

All labels, headings, paragraphs, questions, answers, and lists are passed as children.

Invalid props were not used.

The implementation does not pass:

- `title`
- `eyebrow`
- `description`
- `heading`
- `variant`
- `items`

`SectionCard` was not modified.

---

## 6. Source Alignment

The FAQ content stays limited to source-aligned themes from 12AT:

- RDDA orientation
- doula support awareness
- non-medical support boundaries
- families and support people
- doulas and learning
- resources and community supports
- contact and communication expectations
- partners and community connection
- website and static information boundaries

The implementation does not invent program details, eligibility rules, clinical claims, guarantees, fees, intake workflows, partner workflows, referral workflows, application pathways, or dynamic systems.

---

## 7. Validation Status

GitHub-direct file creation was used for this checkpoint.

Local commands were not run inside this chat because the GitHub connector can create and read repository files but does not provide a local Node.js execution environment.

Required local validation after sync:

```text
npm run lint
npm run build
```

Expected result based on source review:

- lint should pass
- build should pass
- `/faq` should appear as a static/prerendered route in the build output

---

## 8. GitHub-Direct Commit Note

The requested commit message was:

```text
Add RDDA FAQ page static route
```

The GitHub contents API writes one file path at a time, so the route file and checkpoint file may appear as two GitHub-direct commits using the same requested commit message.

---

## 9. Final Status

12AU is complete from the GitHub-direct implementation side.

Created:

```text
repo/src/app/faq/page.tsx
exports/12AU_RDDA_FAQ_Page_Static_Route_Implementation_Validation.md
```

The completed static public-facing route set is now:

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

12AU implementation confidence: 0.86

Primary limitation: lint/build could not be executed from the GitHub connector environment, so final confirmation should be completed locally after pulling the commit.

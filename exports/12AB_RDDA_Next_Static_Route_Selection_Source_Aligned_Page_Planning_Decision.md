# 12AB — RDDA Next Static Route Selection + Source-Aligned Page Planning Decision

## Purpose

This checkpoint performs a documentation-only next static route selection and source-aligned page planning decision after completion of:

12AA — RDDA Services Page Source Alignment Review + Next Static Route Decision

12AB reviews the current completed public-facing static route set, evaluates source-supported next route candidates, selects one safe next static route for planning only, and creates a source-aligned page outline for the selected route.

No implementation occurs during 12AB.

---

## 12AB Checkpoint Type

This is a documentation-only planning checkpoint.

12AB does not:

- modify the frozen homepage
- change homepage content
- change homepage section order
- modify `/about`
- modify `/services`
- implement a new route
- create another shared UI primitive
- create route-specific section components
- add CMS
- add Payload
- add Supabase
- add database logic
- add authentication
- add forms
- add API logic
- add dynamic behavior
- add state
- add effects
- add client component behavior
- add `"use client"`

---

## Repository State To Confirm Before 12AB

Before creating this checkpoint, confirm the repository state from:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
```

Run:

```powershell
git status --short
```

Expected result:

```text

```

No output means the working tree is clean.

Run:

```powershell
git log --oneline -5
```

Expected latest completed checkpoint:

```text
01a36e8 Add RDDA services page source alignment review
```

This confirms 12AA is committed and pushed before 12AB work begins.

---

## Current Completed Static Public-Facing Route Set

As of 12AB, the completed static public-facing route set is:

- `/`
- `/about`
- `/services`

These three routes form the current static public-facing base of the RDDA production implementation.

---

## Current Route Status Review

### Homepage `/`

The homepage is frozen under the 12T homepage architecture freeze decision.

Current homepage section order remains:

1. Hero
2. Service Areas
3. Who RDDA Supports
4. Approach

12AB does not reopen the homepage.

The homepage must not be changed during this checkpoint or during the next route implementation unless a later checkpoint explicitly authorizes it.

### About Route `/about`

The `/about` route has already completed:

- 12V planning
- 12W implementation validation
- 12X source alignment review

The `/about` route is not reopened during 12AB.

No changes are planned for `/about`.

### Services Route `/services`

The `/services` route has already completed:

- 12Y planning
- 12Z implementation validation
- 12AA source alignment review

12AA confirmed that `/services` follows the planning outline and does not require correction before moving to the next static public-facing route.

The `/services` route is not reopened during 12AB.

No changes are planned for `/services`.

---

## Control Documents And Prior Checkpoints Reviewed

12AB is governed by the following controls and prior decisions:

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
- current homepage route
- current `/about` route
- current `/services` route
- current `repo/src/components/ui/SectionCard.tsx`
- RDDA source documents already provided for reference

The purpose of reviewing these controls is to preserve the established implementation discipline:

- static-first
- source-aligned
- public-facing
- minimal code movement
- no premature abstraction
- no CMS or database implementation
- no client-side behavior
- no form or API workflows
- no unnecessary shared components

---

## Existing Shared UI Primitive Review

The current shared layout and UI structure remains:

```text
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/PageContainer.tsx
repo/src/components/ui/SectionCard.tsx
```

The current shared UI primitive set remains sufficient for another static informational route.

12AB does not identify a need for:

- another shared UI primitive
- a content panel component
- a route-specific card component
- route-specific section components
- a page-specific component folder
- a client component

The future selected route should reuse the existing route structure and `SectionCard` pattern unless a later implementation checkpoint identifies a clear source-aligned reason to do otherwise.

---

## Route Selection Criteria

The next static route must be selected using the following criteria.

The route must be:

- public-facing
- static
- source-supported
- informational
- safe to implement as a server component
- consistent with the current `/`, `/about`, and `/services` structure
- capable of being implemented without forms
- capable of being implemented without CMS
- capable of being implemented without database logic
- capable of being implemented without authentication
- capable of being implemented without API routes
- capable of being implemented without dynamic behavior
- capable of being implemented without state, effects, or client behavior

The route should also:

- build naturally from the existing public-facing content
- strengthen the site’s public information architecture
- avoid introducing operational workflows too early
- avoid directory, membership, intake, account, or submission behavior
- avoid claims not supported by RDDA source documents
- avoid creating implementation dependencies that belong to later CMS/Payload/Supabase phases

---

## Source-Supported Next Route Candidate Review

The current completed route set already covers:

- general homepage introduction
- RDDA organizational identity through `/about`
- service-area and support-topic framing through `/services`

The next safe route should extend the public-facing static structure without adding operational complexity.

The following candidates were reviewed.

---

## Candidate 1 — `/families`

### Route Concept

```text
/families
```

Possible page title:

```text
Support for Families
```

Possible public label:

```text
For Families
```

### Source Alignment

A family-facing page is source-aligned because RDDA’s public site must speak directly to families seeking doula-related support, information, and community connection.

The homepage already includes a “Who RDDA Supports” direction, and the services route already outlines categories of support.

A `/families` route can deepen that family-facing public explanation without adding forms, intake, booking, directory logic, or CMS content.

### Static Suitability

`/families` is highly suitable for the current static phase because it can be implemented as a simple informational page.

It does not require:

- user accounts
- search
- filtering
- submissions
- forms
- payment
- booking
- database content
- authentication
- CMS-managed entries
- API routes
- dynamic rendering
- client-side interactivity

### Implementation Risk

Low.

A family-facing informational page can reuse:

- `PageShell`
- `PageContainer`
- `SectionCard`

It can be implemented later as:

```text
repo/src/app/families/page.tsx
```

No new shared UI primitive is needed.

No route-specific section components are needed.

### Decision

Strong candidate.

---

## Candidate 2 — `/doulas`

### Route Concept

```text
/doulas
```

Possible page title:

```text
Support for Doulas
```

Possible public label:

```text
For Doulas
```

### Source Alignment

A doula-facing route is likely source-supported because RDDA is an association that supports both families and doulas.

This route may eventually explain association support, professional connection, learning, community, membership, or doula-facing resources.

### Static Suitability

A simple doula-facing informational page could be implemented statically.

However, the route has a higher chance of later connecting to:

- membership workflows
- applications
- doula profiles
- directories
- training/event listings
- private resources
- account features
- CMS-managed content

### Implementation Risk

Moderate.

The route is not unsafe, but it may be better planned after the family-facing route because doula-facing content may eventually intersect with operational association features.

### Decision

Do not select for 12AB.

Keep as a future candidate.

---

## Candidate 3 — `/resources`

### Route Concept

```text
/resources
```

Possible page title:

```text
Resources
```

### Source Alignment

A resources route is likely useful and source-supported.

It may eventually hold educational information, community links, downloads, support topics, or referral-related material.

### Static Suitability

A resources route can be implemented statically if limited to curated text content.

However, it has a higher risk of becoming CMS-driven because resources often require:

- categories
- repeated entries
- downloads
- external links
- updates
- filtering
- resource cards
- topic-based navigation
- CMS-managed content

### Implementation Risk

Moderate to high for the current static-only phase.

The route may be best delayed until the project is ready to define how static resource content should transition into CMS-managed content later.

### Decision

Do not select for 12AB.

Keep as a future candidate.

---

## Candidate 4 — `/contact`

### Route Concept

```text
/contact
```

Possible page title:

```text
Contact RDDA
```

### Source Alignment

A contact route is public-facing and likely part of the eventual sitemap.

### Static Suitability

A contact route can technically be static if it only displays basic contact information.

However, contact pages commonly introduce or imply:

- contact forms
- submissions
- validation
- spam protection
- email delivery
- API routes
- integrations
- privacy wording
- operational workflows

12AB explicitly prohibits forms and API logic.

### Implementation Risk

High for the current checkpoint sequence.

Even if built statically, `/contact` could create pressure to add form behavior before the architecture is ready.

### Decision

Do not select for 12AB.

Delay until the project intentionally addresses static contact content versus future form behavior.

---

## Candidate 5 — `/events`

### Route Concept

```text
/events
```

Possible page title:

```text
Events
```

### Source Alignment

An events route may be relevant to RDDA’s community role.

### Static Suitability

A fully static events page is possible only if it avoids dynamic listings.

However, events commonly require:

- dates
- recurring updates
- registration
- filtering
- CMS entries
- archive behavior
- calendar integration
- event detail pages
- forms or external links

### Implementation Risk

High for the current static-only stage.

### Decision

Do not select for 12AB.

Delay until CMS/content strategy is ready.

---

## Candidate 6 — `/membership`

### Route Concept

```text
/membership
```

Possible page title:

```text
Membership
```

### Source Alignment

Membership may be relevant to an association website.

### Static Suitability

A static membership overview may be possible.

However, membership content commonly connects to:

- applications
- account creation
- member-only access
- forms
- approvals
- payments
- member directory logic
- private resources
- CMS/database workflows

### Implementation Risk

High for the current static-only stage.

### Decision

Do not select for 12AB.

Delay until association workflow requirements are intentionally planned.

---

## Candidate 7 — `/directory`

### Route Concept

```text
/directory
```

Possible page title:

```text
Doula Directory
```

### Source Alignment

A directory may eventually be relevant if the RDDA source documents support public doula discovery.

### Static Suitability

A directory is not a safe static route at this stage because it likely requires:

- database-backed entries
- CMS management
- profile content
- filtering
- search
- location logic
- membership status
- privacy rules
- claims verification
- dynamic rendering

### Implementation Risk

Very high.

### Decision

Do not select for 12AB.

Directory functionality should wait for a later CMS/Payload/Supabase phase.

---

## Candidate Comparison Summary

| Candidate | Static Safe | Source-Aligned | Risk Level | 12AB Decision |
|---|---:|---:|---:|---|
| `/families` | Yes | Yes | Low | Select |
| `/doulas` | Yes, with caution | Yes | Moderate | Defer |
| `/resources` | Possible | Likely | Moderate/High | Defer |
| `/contact` | Possible but risky | Likely | High | Defer |
| `/events` | Weak for static phase | Possible | High | Defer |
| `/membership` | Weak for static phase | Possible | High | Defer |
| `/directory` | No | Possible | Very High | Defer |

---

## Selected Next Static Route

12AB selects the next safe static public-facing route as:

```text
/families
```

Recommended page title:

```text
Support for Families
```

Recommended public navigation label:

```text
For Families
```

---

## Selection Rationale

`/families` is selected because it is the safest next public-facing static route after:

- `/`
- `/about`
- `/services`

The route is appropriate because it:

- extends the existing family-facing public information architecture
- naturally follows the homepage and services route
- remains static and informational
- avoids form behavior
- avoids intake workflows
- avoids directory logic
- avoids membership workflows
- avoids event listings
- avoids CMS-managed repeatable content
- avoids authentication
- avoids database logic
- avoids API logic
- avoids client behavior
- can reuse the current shared layout and card system
- does not require a new shared UI primitive
- does not require route-specific section components

This makes `/families` the strongest next route for the current static-first implementation stage.

---

## 12AB Route Planning Decision

12AB decides that the next route to plan is:

```text
/families
```

12AB does not implement this route.

The route should be implemented only in a later checkpoint after this planning decision is reviewed and committed.

Recommended next checkpoint:

```text
12AC — RDDA Families Page Static Route Implementation + Validation
```

---

# Source-Aligned Page Planning Outline For `/families`

## Future Route

```text
/families
```

## Future File

Likely implementation file for a later checkpoint:

```text
repo/src/app/families/page.tsx
```

## Future Page Title

```text
Support for Families
```

## Future Page Purpose

The `/families` page should explain how RDDA speaks to and supports families seeking information about doula care and community-connected support in Central Alberta.

The page should remain public-facing, static, and informational.

The page should not become:

- an intake page
- a referral form
- a booking page
- a service application
- a directory
- a login area
- a CMS-managed resource listing
- a dynamic search experience

---

## Proposed `/families` Page Structure

The future `/families` route should follow the established static route pattern used by `/about` and `/services`.

It should likely use:

```text
PageShell
PageContainer
SectionCard
```

The page can be structured as a direct `page.tsx` server component with static content.

No `"use client"` directive should be used.

No state or effects should be used.

No route-specific section components should be created.

---

## Proposed Sections

### Section 1 — Families Seeking Support

Purpose:

Introduce families to the page and explain that RDDA helps families understand doula support and community-connected care.

Content direction:

- welcoming family-facing introduction
- Central Alberta context
- public education tone
- plain language
- no intake language
- no form language
- no booking language
- no promise of matching or referral unless later source-supported and architecturally approved

Suggested heading:

```text
Families Seeking Support
```

Suggested content themes:

- families may be looking for information, support, or connection
- doula support can help families feel informed and supported
- RDDA’s public role includes education and community connection
- language should remain broad and non-clinical

---

### Section 2 — When Doula Support May Help

Purpose:

Explain the broad stages or circumstances where families may consider doula support.

Content direction:

- pregnancy
- birth
- postpartum
- loss
- transition points
- changing family needs
- emotional and practical support
- informed decision-making
- support across the lifecycle where source-supported

Suggested heading:

```text
When Doula Support May Help
```

Important wording caution:

Avoid turning this section into a medical or clinical claim.

Avoid promising outcomes.

Avoid implying regulated health services.

Keep the wording informational and supportive.

---

### Section 3 — What Families Can Expect From Doula Support

Purpose:

Describe general expectations around doula support in a public-facing, non-clinical way.

Content direction:

- emotional support
- practical support
- informational support
- respectful presence
- family-centred care
- support for informed choices
- connection to community resources where appropriate
- non-clinical support framing

Suggested heading:

```text
What Families Can Expect
```

Important wording caution:

Avoid claims that doulas replace medical professionals.

Avoid legal, medical, or therapeutic promises.

Avoid implying emergency, diagnostic, or treatment services.

---

### Section 4 — Choosing Support That Fits Your Family

Purpose:

Help families think about the kind of support they may need without adding directory search, matching, booking, or intake behavior.

Content direction:

- each family’s needs may be different
- families may consider stage of care, location, values, accessibility, and type of support needed
- families may benefit from asking questions and understanding scope
- keep this educational, not transactional

Suggested heading:

```text
Choosing Support That Fits Your Family
```

Important wording caution:

Do not create a “find a doula” workflow unless the route is intentionally connected to a future directory or referral system.

Do not add calls to submit personal information.

---

### Section 5 — RDDA's Role In The Community

Purpose:

Explain RDDA’s association-level role in supporting families, doulas, and community awareness.

Content direction:

- RDDA as community-connected association
- public education
- awareness of doula support
- support for families and doulas
- Central Alberta framing
- respectful, inclusive, accessible tone

Suggested heading:

```text
RDDA's Role In The Community
```

Important wording caution:

Avoid overstating RDDA’s operational role if not supported by the source documents.

Avoid implying that RDDA directly provides every listed service unless source-supported.

---

### Section 6 — A Supportive First Step

Purpose:

Close the page with a static, non-form, non-transactional family-facing message.

Content direction:

- families can begin by learning what kind of support may fit their needs
- keep the tone calm and helpful
- avoid “submit,” “apply,” “book,” or “register” wording
- avoid building a contact or referral workflow into this page
- preserve future flexibility for a later contact, resource, or directory route

Suggested heading:

```text
A Supportive First Step
```

---

## Proposed Page Tone

The future `/families` page should be:

- warm
- calm
- plain-language
- public-facing
- inclusive
- non-clinical
- non-transactional
- source-aligned
- concise
- consistent with the existing homepage, `/about`, and `/services` tone

The page should avoid:

- sales-heavy language
- unsupported claims
- medical promises
- legal promises
- crisis-service framing
- directory behavior
- intake workflow language
- wording that implies a form exists

---

## Proposed Technical Implementation Constraints For Future 12AC

The future `/families` implementation should likely be limited to:

```text
repo/src/app/families/page.tsx
```

The future implementation should reuse:

```text
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/PageContainer.tsx
repo/src/components/ui/SectionCard.tsx
```

The future implementation should not modify:

```text
repo/src/app/page.tsx
repo/src/app/about/page.tsx
repo/src/app/services/page.tsx
repo/src/components/ui/SectionCard.tsx
```

The future implementation should not create:

```text
repo/src/components/sections/families/
repo/src/components/families/
repo/src/app/families/components/
```

Unless a later checkpoint explicitly approves route-specific component extraction.

---

## Future `/families` Implementation Guardrails

The future implementation should not add:

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

The future implementation should remain a static server component route.

---

## Future Static Validation Checklist For `/families`

When `/families` is implemented later, the validation checkpoint should confirm:

- `/families` route exists
- homepage remains unchanged
- `/about` remains unchanged
- `/services` remains unchanged
- no new shared UI primitive was created
- no route-specific section components were created
- `PageShell` is reused
- `PageContainer` is reused
- `SectionCard` is reused
- no `"use client"` is present
- no `useState`
- no `useEffect`
- no form element
- no API route
- no CMS import
- no Payload import
- no Supabase import
- no database logic
- `npm run lint` passes
- `npm run build` passes

---

## Recommended Future 12AC File Scope

Recommended future checkpoint:

```text
12AC — RDDA Families Page Static Route Implementation + Validation
```

Recommended implementation file:

```text
repo/src/app/families/page.tsx
```

Recommended export file:

```text
exports/12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md
```

Recommended future commit message:

```text
Add RDDA families page static route
```

---

## Files Modified During 12AB

Only this documentation checkpoint file should be modified or created:

```text
exports/12AB_RDDA_Next_Static_Route_Selection_Source_Aligned_Page_Planning_Decision.md
```

No application source code should be modified.

---

## 12AB Decision Summary

12AB reviewed the current completed static public-facing route set:

- `/`
- `/about`
- `/services`

12AB reviewed source-supported next route candidates:

- `/families`
- `/doulas`
- `/resources`
- `/contact`
- `/events`
- `/membership`
- `/directory`

12AB selected:

```text
/families
```

The selected route is public-facing, source-aligned, informational, and safe for the current static-first implementation stage.

12AB created a source-aligned section outline for `/families`.

12AB does not implement `/families`.

---

## 12AB Completion Note

12AB completed a documentation-only next static route selection and source-aligned page planning decision.

The selected next static public-facing route is:

```text
/families
```

The recommended next checkpoint is:

```text
12AC — RDDA Families Page Static Route Implementation + Validation
```

12AB confirms that the following remain unchanged:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- shared UI primitive set
- application source code

12AB confirms that no prohibited implementation area was introduced:

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

12AB is complete when this checkpoint file is reviewed, committed, and pushed.

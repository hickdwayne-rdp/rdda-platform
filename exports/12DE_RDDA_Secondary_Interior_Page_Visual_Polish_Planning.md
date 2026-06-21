# 12DE — RDDA Secondary Interior Page Visual Polish Planning

## Status

Planning checkpoint for the next non-photo visual polish pass.

This step follows:

- 12DC — Doula profile photo implementation and validation
- 12DD — Doula photo source alignment review and next photo placement decision

The user selected:

```text
Option C — Continue non-photo polish on secondary pages
```

## Purpose

The purpose of 12DE is to plan a controlled static polish pass for the remaining supporting interior pages, without adding new photos or changing the validated static MVP architecture.

The goal is to bring the secondary pages closer to the visual quality now present on:

- `/`
- `/about`
- `/services`
- `/families`
- `/doulas`

while preserving static safety, accessibility, and source-aligned content boundaries.

## Pages in scope

The next implementation pass should focus on these secondary pages:

```text
/resources
/faq
/contact
/training
/partners
```

These pages are already live static routes and should remain static informational pages.

## Pages out of scope for this pass

The following pages should not be edited during the first secondary polish pass unless a later checkpoint specifically includes them:

```text
/birth
/postpartum
/fertility
/loss
/family-transitions
/end-of-life-grief
```

Those are service-area detail pages and should receive their own review/polish pass if needed.

## Static constraints

The implementation must not add:

- CMS behavior
- database access
- authentication
- forms
- API routes
- dynamic fetching
- search/filter state
- client components
- `use client`
- third-party booking or referral behavior
- interactive matching tools

The implementation should remain compatible with full static prerendering.

## Visual direction

The polish pass should use the already-established RDDA brand system:

- deep teal/green: `#3f5c58`
- muted sage/teal: `#819795`
- pale sage/grey: `#bbc7c4`
- warm grey: `#d9d8d6`
- charcoal: `#53565b`
- copper accent: `#ae7c58`

The pages should use the current shared visual language:

- warm off-white page background
- soft card surfaces
- subtle RDDA texture treatment
- clear hero/intro sections
- accessible contrast
- rounded cards
- restrained copper accents
- section-level hierarchy
- consistent link/CTA styling

## Page-by-page planning

### `/resources`

Recommended polish:

- Add a stronger intro/hero panel.
- Group resources into clearer categories.
- Improve scanability through card headings and short supporting text.
- Add a subtle orientation block explaining that the page is informational, not a crisis or clinical service.
- Keep links static and informational.

Avoid:

- crisis-response language
- clinical advice language
- emergency support claims
- referral promises

### `/faq`

Recommended polish:

- Keep the FAQ easy to scan.
- Use grouped sections or a clear visual rhythm between questions.
- Avoid accordion/client-side behavior for now.
- Add a gentle intro explaining the FAQ is a starting point for general information.

Avoid:

- interactive FAQ accordions requiring state
- overpromising exact service availability
- clinical/legal advice framing

### `/contact`

Recommended polish:

- Strengthen the contact information hierarchy.
- Add clear static contact cards.
- Make it visually clear that there is no on-page form yet.
- Keep contact language neutral and informational.

Avoid:

- adding a form
- adding API handling
- implying urgent response or emergency intake
- adding booking automation

### `/training`

Recommended polish:

- Improve card structure for training/information pathways.
- Use a clear audience-focused layout.
- Keep training language static and informational.
- Avoid suggesting enrollment, registration, payment, certification, or credentialing features unless source-confirmed.

Avoid:

- forms
- course checkout
- active registration tools
- unsupported credentialing claims

### `/partners`

Recommended polish:

- Improve visual framing for community partnership information.
- Use grouped cards for types of partners or collaboration areas.
- Keep wording broad and non-transactional unless source content supports specifics.

Avoid:

- sponsorship/payment workflows
- partnership application forms
- unsupported organizational claims

## Accessibility requirements

The polish pass must preserve:

- semantic headings
- readable text contrast
- visible focus states
- keyboard-safe links
- responsive layout
- no content hidden behind interaction
- no text embedded in images

## Image policy for this pass

No new photos should be added during this pass.

Photo placement should remain deferred until a dedicated approved-photo placement checkpoint unless the user provides specific approved assets for these pages.

The only exception would be existing brand/logo assets already committed under `repo/public/brand`, but the preferred approach is CSS/structure polish only.

## Validation requirements for next implementation

The next implementation checkpoint should include:

```powershell
cd .\repo
npm run lint
npm run build
```

Expected build behavior:

- all app routes compile successfully
- all 19 current routes remain static
- no new dynamic/server behavior introduced

## Recommended next checkpoint

Proceed to:

```text
12DF — RDDA Secondary Interior Page Visual Polish Implementation + Validation
```

## Decision

Proceed with a CSS/layout/content-structure polish pass for:

```text
/resources
/faq
/contact
/training
/partners
```

Do not add new photos or background image assets in this pass.

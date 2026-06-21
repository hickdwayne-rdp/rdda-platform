# 12DH — RDDA Lifecycle Support Page Visual Polish Planning

## Checkpoint purpose

This checkpoint plans the next visual polish pass for the lifecycle and support-area pages that were created earlier as static informational routes.

The purpose is to bring these pages into closer visual alignment with the now-polished homepage, primary interior pages, secondary pages, and RDDA brand system while preserving the existing static-content boundaries.

## Pages in scope

The lifecycle/support page polish pass will cover:

- `/birth`
- `/postpartum`
- `/fertility`
- `/loss`
- `/family-transitions`
- `/end-of-life-grief`

These pages are already part of the public static route set and are linked from the homepage service-area cards.

## Pages out of scope

This checkpoint does not plan changes to:

- `/`
- `/about`
- `/services`
- `/families`
- `/doulas`
- `/resources`
- `/faq`
- `/contact`
- `/training`
- `/partners`

Those page groups have already received their own polish passes or reviews.

## Implementation intent for next checkpoint

The next implementation checkpoint should apply a consistent static visual system to the lifecycle/support pages, including:

- branded hero/preamble treatments
- clearer section hierarchy
- consistent card spacing and grouping
- stronger internal navigation cues back to `/services`, `/families`, `/doulas`, and `/contact` where appropriate
- gentle brand color accents using the RDDA palette
- sensitive tone handling for grief, loss, fertility, transitions, and end-of-life content

The work should improve presentation without materially changing the factual/source-aligned page content.

## Static boundaries

The next implementation must not introduce:

- CMS
- database
- authentication
- API routes
- forms
- booking workflows
- search/filter behavior
- client components
- React state/effects
- directory matching
- real-time availability
- payment workflows
- registration workflows

All lifecycle/support pages must remain static prerendered routes.

## Image and photo boundary

This pass should not add new photography unless explicitly approved before implementation.

The current recommendation is to keep the lifecycle/support page polish non-photo for now because:

- some subjects are sensitive and require careful photo selection
- inappropriate imagery could imply clinical, emergency, counselling, hospice, funeral, spiritual, legal, or individualized support services
- the site already has a CSS texture layer and doula page portraits
- approved general site imagery has not yet been supplied for these specific lifecycle pages

Future photo additions should be handled in a separate photo placement checkpoint after approved assets are available.

## Sensitivity rules by page

### `/birth`

Visual treatment should be warm and confident, but should not imply medical delivery care, clinical care, diagnosis, treatment, or regulated health services.

Suitable polish direction:

- soft warm accent panels
- clear informational cards
- subtle links to related support areas
- calm, non-clinical language emphasis

### `/postpartum`

Visual treatment should feel supportive and practical without implying clinical postpartum care, mental health treatment, lactation consulting, nursing, or emergency support.

Suitable polish direction:

- organized practical-support cards
- gentle supportive tone
- clear distinction between informational support and medical/clinical needs

### `/fertility`

Visual treatment should be calm, respectful, and non-promissory.

Suitable polish direction:

- neutral language and soft visual pacing
- emphasis on emotional and informational support
- no outcome guarantees
- no medical fertility-treatment implication

### `/loss`

Visual treatment should be restrained, gentle, and highly readable.

Suitable polish direction:

- low-contrast decorative elements
- quiet page rhythm
- no dramatic imagery
- no crisis-service implication
- no clinical grief counselling implication

### `/family-transitions`

Visual treatment should be steady and practical.

Suitable polish direction:

- cards grouped by transition scenarios
- careful non-legal and non-mediation framing
- supportive but not advisory/legal language

### `/end-of-life-grief`

Visual treatment should be calm, dignified, and non-clinical.

Suitable polish direction:

- gentle, spacious layout
- muted accents
- no hospice, palliative, MAID, funeral, spiritual-care, estate, counselling, or clinical implication

## Accessibility requirements

The implementation should preserve or improve:

- readable contrast
- semantic headings
- keyboard-accessible links
- static anchor behavior only if used
- clear link labels
- reduced visual noise on sensitive pages
- no text placed over complex backgrounds

Decorative visual treatments must not reduce readability.

## Source-alignment requirements

The lifecycle/support polish must remain aligned to the established RDDA static content pattern:

- informational association-style pages
- no service promises beyond the current page language
- no claims of clinical, legal, counselling, hospice, or emergency service provision
- no forms or calls for direct booking
- no unapproved photo representation

## Recommended next checkpoint

Proceed to:

**12DI — RDDA Lifecycle Support Page Visual Polish Implementation + Validation**

Expected implementation scope:

- update `/birth`
- update `/postpartum`
- update `/fertility`
- update `/loss`
- update `/family-transitions`
- update `/end-of-life-grief`
- add implementation validation export
- run local lint/build validation after user pulls

## Planned validation commands for next implementation

After 12DI is implemented, validate locally with:

```powershell
git pull
git status --short
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

The expected build result should still show all 19 routes prerendered as static content.

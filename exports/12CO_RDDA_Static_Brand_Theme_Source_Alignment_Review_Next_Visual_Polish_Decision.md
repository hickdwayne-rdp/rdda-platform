# 12CO — RDDA Static Brand Theme Source Alignment Review + Next Visual Polish Decision

## Status

Complete.

This checkpoint reviews the completed static brand theme implementation from 12CN and records the next production decision for RDDA visual polish.

## Current repository state reviewed

Latest implementation checkpoint:

- `12CN — RDDA Static Brand Theme Implementation + Validation`
- Latest implementation commit reviewed: `fbae842 Add RDDA static brand theme implementation validation`
- Brand asset commit already present in history: `ed88a0c Add RDDA brand assets`

Brand assets now available under:

- `repo/public/brand/rdda-main-logo.jpg`
- `repo/public/brand/rdda-alt-logo-social.png`
- `repo/public/brand/rdda-brand-board.png`
- `repo/public/brand/rdda-victoriana-brand-board.jpg`
- `repo/public/brand/README.md`

## Files reviewed

### Global theme

- `repo/src/app/globals.css`

Observed brand palette variables:

- `--background: #f4f2ef`
- `--foreground: #53565b`
- `--primary: #3f5c58`
- `--primary-hover: #2f4945`
- `--primary-soft: #819795`
- `--secondary: #ae7c58`
- `--secondary-hover: #8f6245`
- `--border: #bbc7c4`
- `--card: #fbfaf8`
- `--card-muted: #d9d8d6`
- `--surface: #ffffff`
- `--focus-ring: #ae7c58`

The global body background now uses brand-aligned pale neutral and sage/grey tones instead of the earlier plain scaffold treatment.

### Header

- `repo/src/components/layout/SiteHeader.tsx`

Observed implementation:

- Uses `next/image`.
- Uses `/brand/rdda-alt-logo-social.png` as the header logo mark.
- Keeps navigation static.
- Keeps all existing top-level public route links.
- Uses brand-aligned rounded logo treatment, border, hover, and focus states.

### Footer

- `repo/src/components/layout/SiteFooter.tsx`

Observed implementation:

- Uses `next/image`.
- Uses `/brand/rdda-alt-logo-social.png` as the footer logo mark.
- Uses deep RDDA teal/green footer background through `var(--primary)`.
- Keeps static footer navigation and public-information disclaimer.
- Maintains strong contrast through white text and visible focus states.

### Homepage hero

- `repo/src/components/sections/HomeHeroSection.tsx`

Observed implementation:

- Uses `next/image`.
- Uses `/brand/rdda-main-logo.jpg` as the main brand visual in the hero.
- Uses brand-aligned primary, secondary, border, card, and surface variables.
- Maintains existing static homepage copy and anchor links.
- Adds branded circular logo treatment and soft abstract background accents.

## Validation evidence from local user run

User ran:

- `npm run lint`
- `npm run build`

Validation result:

- Lint passed.
- Production build passed.
- All 19 app routes were prerendered as static content.
- Working tree was clean after validation.

Static route output remained:

- `/`
- `/_not-found`
- `/about`
- `/birth`
- `/contact`
- `/doulas`
- `/end-of-life-grief`
- `/families`
- `/family-transitions`
- `/faq`
- `/fertility`
- `/loss`
- `/partners`
- `/postpartum`
- `/resources`
- `/services`
- `/training`

## Local browser review result

User reported that the 12CN branded implementation “looks good.”

This confirms visual acceptance for the first RDDA brand foundation pass.

## Source alignment review

The implementation is aligned with the RDDA brand board direction available in the project conversation:

- Muted teal/grey and deep teal/green tones are used as primary brand anchors.
- Warm copper/brown is used as the secondary/accent colour.
- Pale sage/grey and warm neutral tones are used for borders, backgrounds, and card surfaces.
- Brand assets are now used in the shared header, footer, and homepage hero.
- The visual language is calmer, warmer, and more association-specific than the previous scaffold.

The implementation remains within static MVP constraints:

- No CMS.
- No database.
- No auth.
- No forms.
- No API routes.
- No client state.
- No dynamic route logic.
- No new service claims.
- No individualized clinical, counselling, legal, crisis, referral, booking, or specialist-service claims.

## Accessibility and static safety notes

Positive findings:

- Header and footer image usage includes descriptive `alt` text.
- Navigation remains semantic.
- Focus-ring variables remain present.
- Brand colours are applied through centralized variables.
- Footer contrast appears intentionally strong with white text on deep teal.

Items to continue watching during future polish:

- Avoid overusing low-contrast pale sage/grey text.
- Keep all text-based information readable without relying on image-only content.
- Keep logo imagery decorative/supportive where copy already provides route purpose.
- Preserve static route prerendering after each visual enhancement.

## Decision

The 12CN static brand theme implementation is accepted as the new RDDA visual foundation.

The project should now move from global brand foundation into page-level polish.

## Recommended next checkpoint

Proceed to:

**12CP — RDDA Homepage Visual Polish Planning**

Recommended scope:

- Refine the homepage service area cards using RDDA brand colours.
- Add subtle brand texture/shape treatments without adding dynamic behavior.
- Improve spacing and visual hierarchy on homepage sections.
- Keep all homepage links and copy source-aligned.
- Avoid large visual changes to service-area routes until the homepage polish pattern is approved.

## Not in next scope

Do not yet:

- Add CMS features.
- Add forms or booking workflows.
- Add dynamic animation/state.
- Rewrite service-area route content.
- Add unverified service claims.
- Add unlicensed clinical/counselling/legal/support promises.

## Completion statement

12CO completes the source alignment review for the RDDA static brand theme foundation and authorizes a focused homepage visual polish planning step next.

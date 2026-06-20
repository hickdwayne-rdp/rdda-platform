# 12CL — RDDA Brand Asset Inventory + Visual Identity Planning

## Checkpoint purpose

This checkpoint opens the next phase of the RDDA project after the static MVP launch sequence:

**Brand + visual identity integration.**

The static MVP is live and validated, but the current presentation is intentionally plain. The goal of this checkpoint is to inventory what branding information is currently visible in the repository, identify where visual identity should be integrated, and define a safe implementation sequence before any design code changes are made.

## Current project state

The static MVP launch phase is complete.

Latest launch-related checkpoint:

- `12CK — RDDA Live Vercel Production Validation + Launch Completion Decision`

Current production URL:

- `https://rdda-platform.vercel.app`

Current implementation status:

- Static public routes are complete.
- Header and footer are centralized through shared layout components.
- Route exposure is complete through header, footer, homepage service cards, and `/services` route hub.
- Static MVP has passed local lint/build validation.
- Static MVP has passed manual browser QA.
- Vercel deployment is live.

## Brand asset search performed

A repository search was performed for likely asset and branding terms:

- `logo`
- `brand`
- `branding`
- `.png`
- `.svg`
- `.jpg`
- `.webp`
- `asset`
- `image`
- `public`

Result:

- No obvious logo/image/brand asset files were found through GitHub code search.
- No obvious indexed `public` asset inventory appeared in the search result.

This does **not** prove that no assets exist locally. It only means that obvious brand files were not located through the available indexed GitHub search at this checkpoint.

## Current visual identity entry points

### Global style tokens

Current global styling is centralized in:

- `repo/src/app/globals.css`

Observed existing CSS variables:

- `--background`
- `--foreground`
- `--muted-foreground`
- `--primary`
- `--primary-hover`
- `--border`
- `--card`
- `--focus-ring`

Current color system is warm and neutral, but generic. It provides a useful technical foundation for branding because the site already uses CSS variables throughout shared UI and layout components.

### Header

Current header is centralized in:

- `repo/src/components/layout/SiteHeader.tsx`

Current state:

- Text-only identity: `Red Deer Doula Association`
- Text-only subline: `Central Alberta doula support`
- No logo or visual brand mark yet.
- Static `next/link` navigation.
- Accessible primary navigation label is present.

### Footer

Current footer is centralized in:

- `repo/src/components/layout/SiteFooter.tsx`

Current state:

- Text-only identity: `Red Deer Doula Association`
- Compact public links.
- Static boundary language.
- No logo, mark, visual pattern, or richer brand treatment yet.
- Accessible footer navigation label is present.

### Shared UI card system

Current shared card primitive:

- `repo/src/components/ui/SectionCard.tsx`

The card system is intentionally simple. It can be visually enhanced later through class usage, token changes, or carefully planned primitive updates, but any shared primitive update should be treated cautiously because it affects many pages.

## Current visual limitations

The site is functional and safe but visually plain.

Current limitations:

- No visible RDDA logo.
- No brand imagery.
- No distinctive hero treatment.
- Minimal color expression.
- Generic card surfaces.
- Generic header/footer presentation.
- Limited warmth/personality beyond copy.
- No visual cue that the site belongs to a doula association beyond text.

## Brand asset requirements before implementation

Before visual implementation begins, one of the following should happen:

### Option A — locate existing brand assets locally

If branding files already exist on the user machine, identify their current local path and copy them into the app asset directory.

Recommended destination:

- `repo/public/brand/`

Suggested filenames after normalization:

- `rdda-logo.svg`
- `rdda-logo.png`
- `rdda-mark.svg`
- `rdda-mark.png`
- `rdda-colour-reference.png`
- `rdda-brand-reference.pdf` if there is a brand guide

### Option B — add brand assets from source files

If assets are not currently in the repo, gather the logo and brand files from their original source and add them to:

- `repo/public/brand/`

Preferred formats:

- SVG for logo/mark when available.
- PNG/WebP for raster images.
- Avoid embedding large original design files unless needed.

### Option C — proceed with brand-inspired styling only

If no official assets are available yet, the next implementation can still improve personality by:

- refining the color palette,
- adding gradients and softer section backgrounds,
- improving hero layout,
- polishing cards,
- improving button/link treatment,
- adding doula/community warmth through layout and hierarchy.

However, official logo integration should wait until the asset files are available.

## Recommended visual identity direction

The RDDA site should feel:

- warm,
- calm,
- supportive,
- grounded,
- community-facing,
- professional but not clinical,
- regional to Red Deer / Central Alberta,
- safe for families and doulas,
- more human and welcoming than the current MVP.

Recommended design direction:

- warm cream background base,
- earthy rose/clay primary accents,
- soft sage or muted green secondary accent if brand-aligned,
- rounded cards with gentle depth,
- subtle large-radius background shapes,
- stronger hero hierarchy,
- logo/wordmark in header once available,
- more intentional footer identity block,
- refined service-area cards,
- consistent call-to-action styles.

## Design boundaries that must remain intact

The visual identity phase must not introduce:

- booking functionality,
- intake forms,
- referral forms,
- CMS/Payload,
- Supabase/database,
- authentication,
- client-side interactivity,
- testimonials or claims not sourced,
- clinical/medical claims,
- counselling or therapy claims,
- emergency/crisis support claims,
- hospice/palliative/funeral/estate service claims,
- legal/mediation/custody claims.

Branding should improve presentation only. It should not change the approved content boundaries unless separately planned and reviewed.

## Proposed visual identity implementation sequence

### 12CM — Brand Asset Placement + Static Logo Integration Planning

Purpose:

- Confirm where brand files are located.
- Decide final file names.
- Decide logo/mark usage in header and footer.
- Plan `next/image` or plain SVG/image usage.

No code changes unless assets are already present and clearly approved.

### 12CN — Brand Asset Placement + Header/Footer Logo Implementation

Purpose:

- Add brand files to `repo/public/brand/` if available.
- Integrate logo/mark into `SiteHeader` and `SiteFooter`.
- Keep static navigation unchanged.
- Preserve accessibility with `alt` text or accessible text labels.

Validation:

- `npm run lint`
- `npm run build`
- visual check of header/footer desktop and narrow widths.

### 12CO — Global Brand Tokens + Visual System Planning

Purpose:

- Plan official or brand-inspired color tokens.
- Decide background treatments, card surface style, border/radius, focus ring, and button/link styles.
- Confirm no accessibility contrast risks.

### 12CP — Global Brand Tokens + Shared Visual Polish Implementation

Purpose:

- Update `globals.css` tokens.
- Add safe global background treatments.
- Adjust shared layout/card visual personality.
- Avoid route content rewrites.

Validation:

- `npm run lint`
- `npm run build`
- browser visual QA.

### 12CQ — Homepage Hero + Service Area Visual Polish Planning

Purpose:

- Plan hero visual improvements.
- Plan homepage service-card presentation.
- Decide if brand imagery/patterns appear on homepage.

### 12CR — Homepage Hero + Service Area Visual Polish Implementation

Purpose:

- Improve first impression and homepage identity.
- Use approved assets/tokens only.
- Keep static behavior.

Validation:

- `npm run lint`
- `npm run build`
- browser visual QA.

## Immediate next decision

The next checkpoint should be:

**12CM — RDDA Brand Asset Placement + Static Logo Integration Planning**

Before implementation, the user should confirm whether branding files exist locally and where they are located.

If the existing brand assets are available, they should be copied into:

- `repo/public/brand/`

If they are not available, proceed with brand-inspired visual-system planning first, and defer logo integration.

## Status

12CL is a planning checkpoint only.

No code changes were made.

The static MVP remains live and production-safe.

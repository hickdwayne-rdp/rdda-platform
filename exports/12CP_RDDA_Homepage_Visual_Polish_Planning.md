# 12CP — RDDA Homepage Visual Polish Planning

## Status

Planning checkpoint created after the successful 12CN static brand theme implementation and 12CO source alignment review.

The RDDA brand foundation is now present in the app:

- RDDA brand assets are stored in `repo/public/brand/`.
- RDDA palette variables are applied through `repo/src/app/globals.css`.
- Shared header uses the RDDA logo mark.
- Shared footer uses the RDDA logo mark and brand-colour treatment.
- Homepage hero uses the RDDA main logo and a stronger branded visual treatment.
- Local lint and production build passed after implementation.
- User visually reviewed the brand foundation locally and confirmed it looks good.

## Purpose of this checkpoint

12CP defines the next static-safe homepage polish pass before code changes are made.

The goal is to move beyond the first global brand pass and make the homepage feel more complete, intentional, warm, and aligned with the RDDA brand board while preserving the validated static MVP boundaries.

This checkpoint does not implement code changes.

## Source inputs

### Existing implementation state

The homepage currently contains these sections in frozen order:

1. Hero
2. Service Areas
3. Who RDDA Supports
4. Approach

The homepage service-area cards already link to the six static service-area routes:

- `/birth`
- `/postpartum`
- `/fertility`
- `/loss`
- `/family-transitions`
- `/end-of-life-grief`

### Brand-board source direction

The uploaded RDDA brand board identifies the visual direction as:

- muted teal / grey green
- pale sage grey
- warm light grey
- charcoal grey
- deep green / teal
- warm brown / copper accent

The brand board also identifies font direction:

- Futura
- Just Signature
- Quicksand

Because project font availability and licensing are not yet validated in the app, the current implementation should continue to avoid bundling unlicensed font files. A later typography-specific checkpoint may use safe web/font alternatives or confirmed licensed assets.

## Homepage polish goals

The next homepage polish pass should make the page feel more like a finished RDDA landing page without introducing dynamic behaviour.

### Primary goals

- Strengthen the first impression below the brand foundation.
- Add more visual rhythm between homepage sections.
- Use RDDA palette accents in a restrained way.
- Improve card hierarchy and polish without changing the underlying content strategy.
- Preserve accessible contrast and focus states.
- Keep the homepage statically prerendered.

### What should remain unchanged

- No CMS.
- No database.
- No authentication.
- No forms.
- No API routes.
- No client state.
- No effects.
- No `use client`.
- No booking or referral workflow.
- No unsupported medical, clinical, legal, counselling, crisis, hospice, palliative, funeral, estate, or specialized-service claims.
- No changes to public route slugs.
- No removal of existing route links.

## Planned visual polish areas

### 1. Homepage hero refinement

The hero was already branded in 12CN. The next pass should refine rather than rebuild it.

Planned adjustments:

- Confirm logo sizing and responsive spacing.
- Add subtle visual layering using RDDA sage / light grey tones.
- Strengthen the relationship between the hero logo, heading, body copy, and call-to-action links.
- Avoid overwhelming the main logo with competing decoration.
- Keep hero copy unchanged unless a wording issue is discovered.

### 2. Service Areas section polish

The service-area card grid is the most important navigation surface on the homepage after the hero.

Planned adjustments:

- Add stronger visual distinction between the six service-area cards.
- Use RDDA brand accents subtly, such as top borders, labels, icon-like text treatments, or muted background blocks.
- Preserve all route links exactly.
- Avoid introducing image dependency into every card unless a later asset set supports it.
- Keep copy source-aligned and static-safe.

### 3. Who RDDA Supports section polish

This section can carry more warmth and community feel.

Planned adjustments:

- Improve section spacing and card visual hierarchy.
- Use pale sage / warm grey backgrounds for contrast.
- Ensure text remains readable and accessible.
- Do not introduce claims about individual eligibility, intake, referral, or professional assessment.

### 4. Approach section polish

This section should feel grounded, calm, and practical.

Planned adjustments:

- Use the deep green / teal colour as a grounding accent.
- Improve card or list structure if present.
- Keep the tone informational and association-focused.
- Avoid implying clinical, counselling, emergency, or specialized support.

### 5. Shared section-card treatment review

If the homepage still feels plain after section-level changes, a careful review of common card styling may be needed.

Potential adjustment:

- Refine `SectionCard` styling if it is globally safe and does not harm other routes.

Restriction:

- Avoid broad shared-component redesign if it creates too much risk across all static routes. Homepage-specific class composition is preferred unless a shared improvement is clearly safe.

## Asset usage plan

Available brand assets now in repo:

- `repo/public/brand/rdda-main-logo.jpg`
- `repo/public/brand/rdda-alt-logo-social.png`
- `repo/public/brand/rdda-brand-board.png`
- `repo/public/brand/rdda-victoriana-brand-board.jpg`

Recommended homepage usage:

- Continue using `rdda-main-logo.jpg` as the primary homepage brand mark.
- Use `rdda-alt-logo-social.png` sparingly as a secondary decorative or footer/header mark.
- Treat the brand-board images as reference assets, not normal page imagery.

Do not place the brand-board images into the public homepage UI unless there is a deliberate reason to show a brand reference board to visitors.

## Accessibility requirements

The implementation checkpoint following this plan must preserve:

- readable contrast on branded backgrounds
- visible keyboard focus states
- semantic headings
- usable links
- responsive layout
- no text embedded only in images for essential information
- static prerendering

If a logo is used through `next/image`, it must include appropriate `alt` text or be marked decorative only if text nearby already provides the accessible name.

## Proposed implementation checkpoint

Next checkpoint:

**12CQ — RDDA Homepage Visual Polish Implementation + Validation**

Expected likely files:

- `repo/src/components/sections/HomeHeroSection.tsx`
- homepage section components currently used by `repo/src/app/page.tsx`
- possibly `repo/src/app/globals.css` only for safe reusable polish tokens
- `exports/12CQ_RDDA_Homepage_Visual_Polish_Implementation_Validation.md`

Expected validation:

- `npm run lint`
- `npm run build`
- local browser review of `/`
- quick mobile-width visual check

## Decision

Proceed to 12CQ after this planning checkpoint is synced.

12CQ should polish the homepage only. Broader page-level polish for service-area routes should come after homepage polish is visually accepted.

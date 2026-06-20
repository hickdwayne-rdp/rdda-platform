# 12CR — RDDA Homepage Visual Polish Source Alignment Review + Accessibility Fix Record

## Status

Complete.

This checkpoint records the source-alignment review for the RDDA homepage visual polish pass completed in 12CQ, plus the immediate accessibility correction made after local browser review.

## Context

The project has moved from the static MVP launch phase into a brand/personality refinement phase.

The global RDDA brand foundation was established first:

- RDDA brand assets added to `repo/public/brand/`.
- RDDA colour palette translated into the global static theme.
- Header, footer, and homepage hero updated to use RDDA brand assets and palette.
- Homepage visual polish applied to the service-area, audience, and approach sections.

The user then identified a real local browser issue: the homepage hero CTA labelled “Explore support options” had text that blended into the button fill colour.

## Source basis

Brand direction came from the RDDA brand board supplied by the user, including:

- Main and alternate logo direction.
- Font direction: Futura, Just Signature, and Quicksand.
- Colour palette:
  - `#819795`
  - `#bbc7c4`
  - `#d9d8d6`
  - `#53565b`
  - `#3f5c58`
  - `#ae7c58`

Usable brand assets were then added to the repository:

- `repo/public/brand/rdda-main-logo.jpg`
- `repo/public/brand/rdda-alt-logo-social.png`
- `repo/public/brand/rdda-brand-board.png`
- `repo/public/brand/rdda-victoriana-brand-board.jpg`
- `repo/public/brand/README.md`

## Implementation reviewed

The 12CQ homepage polish pass updated:

- `repo/src/components/sections/HomeServiceAreasSection.tsx`
- `repo/src/components/sections/HomeWhoRddaSupportsSection.tsx`
- `repo/src/components/sections/HomeApproachSection.tsx`

The follow-up CTA contrast fix updated the homepage hero styling.

## Accessibility fix record

Issue observed during local browser review:

- The “Explore support options” CTA button text colour was visually too close to the filled button background.
- The button label was difficult to read.

Fix completed:

- The filled CTA button was updated to use a high-contrast light text colour against the dark RDDA brand fill.
- Hover/focus styling remained static and accessible.
- No dynamic behaviour was introduced.

Fix commit:

- `5415276 Fix homepage hero CTA contrast`

## Validation evidence

After the CTA contrast fix, the user ran:

```powershell
npm run lint
npm run build
```

Validation result:

- `npm run lint` passed.
- `npm run build` passed.
- Next.js generated all 19 app routes as static prerendered content.
- Working tree was clean.
- Latest synced commit was `5415276 Fix homepage hero CTA contrast`.

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

## Static-safety review

The homepage polish and contrast fix preserved the static MVP rules:

- No CMS.
- No database.
- No auth.
- No forms.
- No API routes.
- No dynamic behaviour.
- No client state.
- No effects.
- No `use client`.
- No unsupported service, intake, booking, referral, medical, legal, counselling, crisis, hospice, palliative, funeral, estate, or individualized support claims were added.

## Source-alignment decision

The homepage visual polish is aligned with the RDDA brand direction now available in the repository.

The CTA contrast correction was necessary and appropriate because it improved readability and accessibility without changing content scope or static architecture.

## Remaining visual considerations

The homepage now has a stronger RDDA visual identity. Remaining visual work can proceed in either of two directions:

1. Deploy the current branded homepage update to production.
2. Continue polishing interior pages before deployment.

Recommended next decision:

- Review whether `/services`, `/families`, `/doulas`, and the six lifecycle pages still feel too plain compared with the homepage.
- If yes, continue with page-level polish planning before deploying.
- If the homepage/header/footer are the priority, deploy the current brand update first.

## Recommended next checkpoint

`12CS — RDDA Branded Homepage Deployment Decision + Production Update Planning`

Purpose:

- Decide whether to deploy the approved brand foundation and homepage polish now.
- If deploying, define the exact Vercel production update steps.
- If not deploying yet, choose the next page group for visual polish.

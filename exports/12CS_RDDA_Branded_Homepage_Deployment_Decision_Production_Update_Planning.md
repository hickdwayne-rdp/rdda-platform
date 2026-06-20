# 12CS — RDDA Branded Homepage Deployment Decision + Production Update Planning

## Status

Planning checkpoint complete.

This checkpoint records the deployment decision after the RDDA brand foundation and homepage visual polish work.

## Current validated state

The project has completed the static MVP launch sequence and has now completed the first branded visual pass.

Recent completed checkpoints:

- 12CN — RDDA Static Brand Theme Implementation + Validation
- 12CO — RDDA Static Brand Theme Source Alignment Review + Next Visual Polish Decision
- 12CP — RDDA Homepage Visual Polish Planning
- 12CQ — RDDA Homepage Visual Polish Implementation + Validation
- 12CR — RDDA Homepage Visual Polish Source Alignment Review + Accessibility Fix Record

## Current latest implementation state

Latest implementation / fix commit before this planning checkpoint:

```text
5415276 Fix homepage hero CTA contrast
```

Latest review checkpoint before this planning checkpoint:

```text
97bd12f Add RDDA homepage visual polish source alignment review
```

## Validation already completed

The user ran local validation after homepage polish and the CTA contrast fix.

Validation results:

- `npm run lint` passed.
- `npm run build` passed.
- All 19 app routes prerendered as static content.
- Working tree was clean after validation.
- The CTA contrast issue in the homepage hero was identified by user review and fixed.

Static route output remained:

```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /birth
├ ○ /contact
├ ○ /doulas
├ ○ /end-of-life-grief
├ ○ /families
├ ○ /family-transitions
├ ○ /faq
├ ○ /fertility
├ ○ /loss
├ ○ /partners
├ ○ /postpartum
├ ○ /resources
├ ○ /services
└ ○ /training

○  (Static)  prerendered as static content
```

## Branding state

The current deployed production site is behind the local/GitHub branded homepage work unless redeployed.

The repository now contains RDDA brand assets in:

```text
repo/public/brand/
```

Known assets include:

- `rdda-main-logo.jpg`
- `rdda-alt-logo-social.png`
- `rdda-brand-board.png`
- `rdda-victoriana-brand-board.jpg`
- `README.md`

The brand board palette and visual direction have been translated into the global theme, header, footer, and homepage treatment.

## Deployment decision

The current branded homepage pass is suitable to deploy now.

Reasoning:

- The homepage now reflects RDDA brand direction more clearly than the earlier plain MVP scaffold.
- The global header/footer already carry RDDA visual identity.
- The homepage hero, service areas, audience section, and approach section have been visually polished.
- The known contrast issue was fixed and revalidated.
- The site remains static-safe and production-build clean.

## Recommended deployment path

Deployment should be performed from the app directory:

```powershell
cd C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
vercel --prod
```

After deployment, validate:

- Production build succeeds.
- Alias updates to `https://rdda-platform.vercel.app`.
- Homepage loads with branded hero, readable CTA, polished service cards, polished audience section, and polished approach section.
- Header and footer remain visually consistent.
- Core links still work.

## Production validation URLs

Existing project URLs from prior production deployment:

```text
Alias: https://rdda-platform.vercel.app
Initial production URL: https://rdda-platform-caxfvf7ih-hickdwayne-2611s-projects.vercel.app
Vercel project: hickdwayne-2611s-projects/rdda-platform
```

The production URL may change after the next `vercel --prod`; the alias should remain the stable public URL.

## Constraints preserved

The deployment update remains within the approved static MVP constraints:

- No CMS.
- No database.
- No auth.
- No forms.
- No API routes.
- No dynamic behaviour.
- No state/effects.
- No `use client`.
- No route-specific backend assumptions.

## Next checkpoint

Recommended next checkpoint:

```text
12CT — RDDA Branded Homepage Production Deployment + Validation
```

12CT should record:

- Vercel production deployment command output.
- Production URL.
- Alias URL.
- Any Vercel inspect URL.
- Post-deploy homepage visual validation.
- Final decision on whether to proceed to interior-page visual polish next.

# 12CT — RDDA Branded Homepage Production Deployment + Validation

## Checkpoint status

Complete.

This checkpoint records the successful production deployment of the RDDA branded homepage polish pass after local lint and production build validation.

## Deployment context

Repository:

```text
hickdwayne-rdp/rdda-platform
```

Local app directory used for validation and deployment:

```text
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

Deployment target:

```text
Vercel production
```

Production alias:

```text
https://rdda-platform.vercel.app
```

Deployment URL:

```text
https://rdda-platform-aih2gt5v7-hickdwayne-2611s-projects.vercel.app
```

Vercel inspect URL:

```text
https://vercel.com/hickdwayne-2611s-projects/rdda-platform/4gKnXqUTaexNnHzpanqxaWYYFMr4
```

## Pre-deployment validation

The following commands were run before deployment:

```powershell
npm run lint
npm run build
```

Result:

```text
npm run lint passed.
npm run build passed.
```

The production build completed successfully using:

```text
Next.js 16.2.7 (Turbopack)
```

Build result:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages using 15 workers (19/19)
✓ Finalizing page optimization
```

## Static route validation

The production build confirmed all current public app routes remain static.

Static routes generated:

```text
/
/_not-found
/about
/birth
/contact
/doulas
/end-of-life-grief
/families
/family-transitions
/faq
/fertility
/loss
/partners
/postpartum
/resources
/services
/training
```

Build classification:

```text
○  (Static)  prerendered as static content
```

## Deployment command

The following command was run from the app directory:

```powershell
vercel --prod
```

Vercel CLI result:

```text
Vercel CLI 54.6.1 (Node.js 22.22.3)
✓ Ready in 36s
```

## Production deployment result

The deployment succeeded.

Vercel returned:

```text
Inspect     https://vercel.com/hickdwayne-2611s-projects/rdda-platform/4gKnXqUTaexNnHzpanqxaWYYFMr4
Production  https://rdda-platform-aih2gt5v7-hickdwayne-2611s-projects.vercel.app
Aliased     https://rdda-platform.vercel.app
```

## Scope deployed

This production deployment includes the branded homepage polish and related accessibility correction completed in the immediately preceding checkpoints:

- RDDA brand theme colors
- Header logo placement
- Branded footer treatment
- Homepage hero brand styling
- Homepage service-area card polish
- Homepage audience section polish
- Homepage approach section polish
- CTA contrast correction for the homepage hero button

## Static MVP boundary review

This deployment did not introduce:

- CMS integration
- Database dependency
- Authentication
- Forms
- API routes
- Dynamic route behavior
- Client-side state
- Client-side effects
- Route-specific backend logic

The deployed site remains a static informational MVP.

## Accessibility record

The visual polish pass included a reported and corrected CTA contrast issue on the homepage hero button.

Issue:

```text
The “Explore support options” button text color matched or blended with the fill color and was not readable.
```

Correction:

```text
The filled CTA button was updated to use high-contrast light text against the dark brand fill.
```

Validation after correction:

```text
npm run lint passed.
npm run build passed.
All 19 routes remained static.
```

## Decision

The branded homepage polish is production-deployed.

The site is ready for live browser review at:

```text
https://rdda-platform.vercel.app
```

## Recommended next checkpoint

Proceed to:

```text
12CU — RDDA Live Branded Homepage Production Review + Next Interior Page Polish Decision
```

Purpose:

- Review the live production homepage after deployment
- Confirm the CTA contrast fix is visible in production
- Confirm header/footer brand treatment appears correctly
- Decide whether to polish `/services`, `/about`, or another interior route next

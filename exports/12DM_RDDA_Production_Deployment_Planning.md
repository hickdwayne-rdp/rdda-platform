# 12DM — RDDA Production Deployment Planning

## Purpose

This checkpoint plans the production deployment sequence for the RDDA static website after completion of the visual polish and full-site QA readiness work.

The goal of 12DM is not to change website code. The goal is to define the deployment procedure, validation commands, and post-deploy review steps before publishing the current static site to production.

## Current production-readiness state

The current `main` branch contains the full static RDDA MVP site with completed visual polish passes for:

- Global shell, navigation, and footer
- Homepage and primary interior pages
- Doula listing page with static profile photos
- Secondary interior pages
- Lifecycle/support-area pages
- Full-site visual QA planning and deployment-readiness decision

The most recent readiness checkpoint is:

```text
12DL — RDDA Full-Site Visual QA Results + Deployment Readiness Decision
```

Latest known readiness basis:

- Working tree was clean after user sync.
- `main` matched `origin/main`.
- Lint passed after the postpartum apostrophe fix.
- Build passed.
- All 19 app routes generated as static content.
- No dynamic features were introduced.
- No additional photos were added during lifecycle visual polish.

## Deployment target

Primary deployment platform:

```text
Vercel
```

Known project:

```text
rdda-platform
```

Known production alias:

```text
https://rdda-platform.vercel.app
```

The custom domain configuration is not part of this checkpoint unless a later checkpoint explicitly addresses DNS/domain setup.

## Deployment rules

The deployment should only proceed after local validation confirms:

1. Git working tree is clean.
2. Local branch is up to date with `origin/main`.
3. Lint passes.
4. Build passes.
5. Static route output includes all expected app routes.
6. No new source-control changes appear after validation.

## Final pre-deployment validation commands

Run from the repository root:

```powershell
git pull
git status --short
git log --oneline -5
```

Then run the application validation from the Next.js app folder:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
```

Expected result:

- `git pull` reports already up to date, or fast-forwards cleanly.
- `git status --short` returns no output.
- `npm run lint` completes without errors.
- `npm run build` completes successfully.
- Build output shows the full static route set.

Expected static route set:

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

## Production deployment command

After validation passes, deploy from the app folder:

```powershell
cd .\repo
vercel --prod
```

If Vercel asks for confirmation, confirm the existing project rather than creating a new one.

Expected project:

```text
rdda-platform
```

After the command completes, capture the production deployment URL printed by Vercel.

Then return to the repo root:

```powershell
cd ..
git status --short
```

## Post-deploy smoke test

After deployment, check the production URL in a browser.

Minimum routes to open manually:

```text
/
/about
/services
/families
/doulas
/resources
/faq
/contact
/birth
/postpartum
/fertility
/loss
/family-transitions
/end-of-life-grief
/training
/partners
```

Post-deploy items to verify:

- Header navigation loads.
- Footer links load.
- Homepage service-area links work.
- Doula photos load on `/doulas`.
- Brand colours and page spacing look consistent.
- No route returns a 404 unexpectedly.
- Lifecycle pages retain careful informational language.
- No forms, booking flows, account flows, search, filtering, or dynamic behaviour appear.

## Content-risk checks during deployment review

Pay special attention to sensitive pages:

```text
/loss
/family-transitions
/end-of-life-grief
```

Confirm they remain informational and do not imply:

- Therapy
- Counselling
- Medical care
- Legal advice
- Mediation
- Custody or parenting-plan services
- Hospice or palliative-care services
- MAID guidance
- Funeral planning
- Estate planning
- Individualized intervention or case management

## Deployment documentation checkpoint

After deployment and production smoke testing, the next checkpoint should record:

- Production deployment command used
- Deployment URL
- Whether lint passed immediately before deploy
- Whether build passed immediately before deploy
- Whether all 19 routes remained static
- Production smoke-test result
- Any post-deploy fixes required

## Decision

The next checkpoint should be:

```text
12DN — RDDA Production Deployment + Post-Deploy Validation
```

12DN should only be created after the user runs the final validation and production deployment steps, then provides the deploy output and any visual/smoke-test observations.

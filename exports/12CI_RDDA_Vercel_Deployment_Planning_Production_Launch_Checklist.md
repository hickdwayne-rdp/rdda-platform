# 12CI — RDDA Vercel Deployment Planning + Production Launch Checklist

## Checkpoint status

Planning checkpoint complete.

This checkpoint records the deployment plan for the completed RDDA static MVP. No app code, route files, layout files, shared components, package configuration, or styling files are changed by this checkpoint.

Latest verified milestone before this checkpoint:

- `12CH — RDDA Final Local Browser QA Results + Deployment Readiness Decision`
- Commit: `a16654b Add RDDA final local browser QA deployment readiness decision`
- User confirmed local browser QA looked good.
- Working tree was clean after sync.
- `main` matched `origin/main`.

## Current production-readiness position

The RDDA static MVP is ready for Vercel deployment planning.

Readiness basis:

- Static route set is complete.
- Header and footer are present through shared layout.
- Homepage service-area cards expose the service-area routes.
- `/services` exposes the service-area route hub.
- Footer and header provide compact global navigation.
- Final content-boundary/accessibility review passed.
- Production-readiness checklist passed.
- Manual browser QA was completed by the user with no reported visual, layout, or link defects.
- Latest validated build kept all app routes static.

## Repository and directory structure

Repository root:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
```

Next.js app root:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

Important rule:

- Git commands are run from `rdda-platform`.
- npm / Next.js / Vercel app commands are run from `rdda-platform\repo`.

## Git sync commands before deployment

Run from:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
```

Commands:

```powershell
git pull
git status --short
git log --oneline -5
```

Expected result:

- Pull is already up to date or fast-forwards cleanly.
- `git status --short` prints nothing.
- HEAD is the latest deployment-planning or later deployment checkpoint.

## Final local validation commands before Vercel deployment

Run from:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

Commands:

```powershell
npm run lint
npm run build
```

Expected result:

- ESLint passes.
- Next.js build compiles successfully.
- Static generation completes.
- Route table shows all known public routes as static.

Expected static route set:

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

Expected build marker:

```text
○  (Static)  prerendered as static content
```

## Vercel project setup plan

The deployment should point Vercel at the Next.js app folder, not the repository root.

Recommended Vercel settings:

| Setting | Value |
|---|---|
| Git repository | `hickdwayne-rdp/rdda-platform` |
| Production branch | `main` |
| Root directory | `repo` |
| Framework preset | Next.js |
| Install command | default or `npm install` |
| Build command | default or `npm run build` |
| Output directory | default Next.js output |
| Environment variables | none required for static MVP |

## Static MVP deployment constraints

Do not add deployment-time dependencies for this MVP unless a specific Vercel error requires it.

The static MVP does not require:

- CMS connection
- Payload setup
- Supabase setup
- database URL
- auth provider
- API route configuration
- form handling provider
- email provider
- booking system
- environment variables
- server actions
- dynamic rendering configuration

## Recommended deployment sequence

1. Confirm local `main` is synced and clean from the repository root.
2. Run `npm run lint` and `npm run build` from `repo`.
3. In Vercel, import or configure the GitHub project.
4. Set the Vercel root directory to `repo`.
5. Deploy from `main`.
6. Wait for Vercel build to complete.
7. Open the Vercel preview/production URL.
8. Perform post-deploy browser QA.
9. Record the deployed URL and build result in the next checkpoint.

## Post-deploy browser QA checklist

After deployment, verify these pages on the Vercel URL:

```text
/
/about
/services
/families
/doulas
/training
/resources
/contact
/partners
/faq
/birth
/postpartum
/fertility
/loss
/family-transitions
/end-of-life-grief
```

Check:

- Page loads without a Vercel/Next error.
- Header appears.
- Footer appears.
- Header links work.
- Footer links work.
- Homepage service-area cards link correctly.
- `/services` route-hub cards link correctly.
- Pages remain readable on desktop.
- Pages remain readable on a narrow/mobile-width browser.
- No obvious spacing, overlap, or broken layout appears.
- Boundary wording remains informational and appropriate.

## Deployment risk notes

### Root directory risk

The most likely deployment setup mistake is pointing Vercel at the repository root instead of the app root.

Correct Vercel root directory:

```text
repo
```

### Environment variable risk

The static MVP should not require environment variables. If Vercel asks for environment variables, that likely means the wrong root, framework, or build settings are being used, or an unrelated future integration was introduced.

### OneDrive local risk

Local OneDrive file-locking issues do not affect Vercel deployment, but they may affect local `.next` cleanup. If local build cleanup fails with file-lock errors, close dev servers/editors or remove `.next` and rerun.

## Production launch decision

Decision: proceed to Vercel deployment planning and deployment execution.

This checkpoint does not itself confirm that the site has been deployed. It confirms that the static MVP is ready to attempt deployment using the documented settings above.

## Next checkpoint

Recommended next checkpoint:

`12CJ — RDDA Vercel Deployment Execution + Post-Deploy Validation`

Purpose:

- capture the actual Vercel deployment result,
- record the deployed URL,
- verify post-deploy route access,
- confirm whether production launch is complete or whether a deployment setting requires correction.

# 12CJ — RDDA Vercel Deployment Execution + Post-Deploy Validation

## Status

Completed.

This checkpoint records the first production deployment of the RDDA static MVP to Vercel and defines the immediate post-deploy validation record.

## Deployment context

Deployment was run from the Next.js app directory:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

Command used:

```powershell
vercel --prod
```

Vercel CLI / runtime context reported by user:

```text
Vercel CLI 54.6.1 (Node.js 22.22.3)
```

## Vercel setup selections recorded

The deployment was set up under:

```text
hickdwayne-2611's projects
```

Project setup selections:

```text
Link to existing project? no
Name? rdda-platform
Customize settings? no
Do you want to change additional project settings? no
```

Vercel detected the app correctly:

```text
Detected Next.js (Build Command: next build, Output Directory: Next.js default)
```

This aligns with the static MVP deployment plan because:

- the deploy was launched from the app root (`repo/`);
- the project is a Next.js app;
- no custom build command was required;
- no custom output directory was required;
- no environment variables are required for the current static MVP;
- the static MVP does not rely on CMS, database, auth, forms, API routes, or server-only integrations.

## Deployment result

Vercel linked the project:

```text
Linked hickdwayne-2611s-projects/rdda-platform
```

Vercel inspect URL:

```text
https://vercel.com/hickdwayne-2611s-projects/rdda-platform/2cu1YKGHH7b1JBN5gNofBMbnpaS5
```

Production deployment URL:

```text
https://rdda-platform-caxfvf7ih-hickdwayne-2611s-projects.vercel.app
```

Aliased production URL:

```text
https://rdda-platform.vercel.app
```

Completion status:

```text
Ready in 44s
```

## Deployment validation status

Deployment execution passed.

At this checkpoint, the deployment was successfully created and assigned a production alias. The next required action is browser-based production validation against the live Vercel URL.

Primary validation URL:

```text
https://rdda-platform.vercel.app
```

Validation should confirm:

- the homepage loads successfully;
- global header appears on live production pages;
- global footer appears on live production pages;
- core header links work;
- footer links work;
- homepage service-area links work;
- `/services` lifecycle route-hub links work;
- all static routes load on Vercel;
- boundary language remains visible and appropriate;
- no unexpected 404s appear for intended public routes;
- narrow-screen layout remains acceptable;
- the deployment does not expose any CMS, database, auth, form, API, or dynamic behavior.

## Routes to validate on production

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

The Next.js internal not-found route remains framework-managed and is not a public navigation target.

## Production readiness decision

The RDDA static MVP has been deployed successfully to Vercel.

The project should now move from deployment execution to live production browser validation.

## Next checkpoint

12CK — RDDA Live Vercel Production Validation + Launch Completion Decision

The next checkpoint should record the user’s live Vercel browser validation results and decide whether the static MVP launch is complete or whether any production fixes are required.

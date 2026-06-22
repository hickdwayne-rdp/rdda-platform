# 12CL — RDDA Vercel / Payload Production Execution Runbook — No Secrets

## Checkpoint status

Status: Ready for operator execution; production approval still pending.

This checkpoint adds a no-secrets production execution runbook for the RDDA Payload CMS deployment. It does not claim that production has passed. It exists to guide the live Vercel / Payload smoke test that must happen before the project can be marked launch-approved.

## Scope

This checkpoint covers:

- Vercel production environment variable setup order.
- Payload production admin access check.
- Production database/session confirmation.
- Media upload workflow confirmation.
- Cloudflare R2 upload confirmation when enabled.
- Temporary doula profile creation workflow.
- Temporary event creation workflow.
- Public route stability checks.
- Evidence capture requirements.
- Rollback and cleanup steps.

This checkpoint does not include:

- Real secrets.
- R2 access keys.
- Admin passwords.
- Production database URLs.
- Private production media URLs.
- Application code changes.
- Schema changes.
- CMS collection changes.
- Public route changes.

## Current known baseline before production execution

The local baseline from the previous checkpoints remains valid:

- `npm run lint` passes locally.
- `npm run build` passes locally.
- Next.js production build generates `20/20` static pages.
- `/admin/[[...segments]]` remains dynamic.
- `/api/[...slug]` remains dynamic.
- `/doulas` remains static.
- `/events` remains static.
- Public routes remain static.
- R2 storage adapter is installed and wired.
- R2 remains off unless explicitly enabled with `PAYLOAD_STORAGE_DRIVER=r2` and all required R2 variables.

## Required production environment variable groups

Do not paste real values into this file or any repository file.

### Core app variables

Confirm these are present in Vercel Production environment variables:

- `PAYLOAD_SECRET`
- Database connection variable used by the deployed Payload setup
- Any required public site URL / server URL variables used by the deployment

Validation result:

- [ ] Present in Vercel Production
- [ ] Not exposed in repository
- [ ] Not exposed in client-visible code
- [ ] Production deployment redeployed after changes

Notes:

```text
Pending production operator entry.
```

### Storage driver variable

R2 should only be enabled intentionally.

Expected local/default value:

```text
PAYLOAD_STORAGE_DRIVER=local
```

Expected production R2 value when R2 is being tested:

```text
PAYLOAD_STORAGE_DRIVER=r2
```

Validation result:

- [ ] Confirmed current production storage driver value
- [ ] Confirmed whether this test is local-storage mode or R2 mode
- [ ] Confirmed deployment redeployed after setting storage variables

Notes:

```text
Pending production operator entry.
```

### R2 variables when R2 is enabled

Required only when `PAYLOAD_STORAGE_DRIVER=r2`:

- `R2_BUCKET`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_ENDPOINT`

Optional / deployment-dependent:

- `R2_PUBLIC_URL`
- `R2_REGION`

Validation result:

- [ ] R2 bucket exists
- [ ] R2 access key exists
- [ ] R2 secret key exists
- [ ] R2 endpoint matches the account/bucket setup
- [ ] R2 permissions allow upload/read as required
- [ ] Variables added only to Vercel environment, not repo files
- [ ] Production redeployed after variables were changed

Notes:

```text
Pending production operator entry.
```

## Production execution order

### Step 1 — Confirm production deployment is current

Open Vercel and confirm the current production deployment is built from the latest intended GitHub commit.

Expected commit at time of this checkpoint:

```text
386caae Add production CMS smoke test finalization template
```

If 12CL has already been pulled/deployed, the deployed commit should be this checkpoint's commit or newer.

Validation result:

- [ ] Production deployment found
- [ ] Production deployment is current
- [ ] Deployment build completed successfully
- [ ] No failed build logs

Evidence to capture:

```text
Deployment URL:
Deployment commit:
Deployment time:
Build status:
Operator:
Date/time:
```

### Step 2 — Open production `/admin`

Open:

```text
https://<production-domain>/admin
```

Expected result:

- Payload admin page loads.
- No blank screen.
- No server error.
- No missing environment variable error shown to the public.
- No leaked secret values in error output.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Production admin URL tested:
Observed result:
Errors, if any:
Date/time:
```

### Step 3 — Validate admin authentication

Attempt login using the intended production admin account.

Expected result:

- Login works.
- Admin dashboard loads.
- Collections are visible according to the account permissions.
- Session persists through at least one page refresh.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Login successful:
Dashboard visible:
Collections visible:
Refresh/session result:
Errors, if any:
Date/time:
```

### Step 4 — Validate collection visibility

Confirm the Payload admin shows the expected CMS collections:

- Users
- Media
- Doula Profiles
- Profile Change Requests
- Event Requests
- Events
- Training Modules
- Training Progress

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Collections visible:
Unexpected missing collections:
Unexpected extra collections:
Errors, if any:
Date/time:
```

### Step 5 — Upload temporary media

Upload a temporary low-risk test image to Media.

Use a clearly named temporary file such as:

```text
rdda-production-smoke-test-media.jpg
```

Expected result:

- Upload completes.
- Media document is created.
- Admin preview or media metadata loads.
- No credential or bucket details are exposed in the admin UI beyond normal URL behavior.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Media file name:
Upload completed:
Media document visible:
Preview loads:
Media URL host pattern, if safe to record:
Errors, if any:
Date/time:
```

### Step 6 — Validate R2 object existence when R2 is enabled

Only perform this step when `PAYLOAD_STORAGE_DRIVER=r2` is active.

Expected result:

- Uploaded object appears in the configured R2 bucket.
- Object path/name matches the media upload.
- Object persists after refresh.
- Object remains available after a production redeploy.

Do not record private signed URLs, access keys, secret values, or sensitive bucket credentials in this export.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked
- [ ] Not applicable — R2 not enabled

Evidence:

```text
R2 enabled:
Bucket checked:
Object found:
Object path pattern:
Persistence after refresh:
Persistence after redeploy:
Errors, if any:
Date/time:
```

### Step 7 — Create temporary doula profile

Create a temporary doula profile entry with safe test content only.

Recommended test values:

```text
Name: RDDA Production Smoke Test Doula
Slug: rdda-production-smoke-test-doula
Bio: Temporary production smoke test profile. Delete after validation.
Active Status: active
Published Status: published
```

Expected result:

- Doula profile saves successfully.
- Required fields validate correctly.
- Optional media relation can be attached if appropriate.
- Published/active filters behave as expected.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Profile created:
Slug:
Published status:
Active status:
Media relation attached:
Errors, if any:
Date/time:
```

### Step 8 — Check public `/doulas`

Open:

```text
https://<production-domain>/doulas
```

Expected result:

- Route loads successfully.
- Route remains public and stable.
- No admin-only errors are exposed.
- Static fallback-safe behavior remains intact.
- If production CMS content is intentionally consumed by the route, the temporary doula appears only if that is expected under the current implementation.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
/doulas loads:
Temporary profile visible or not visible:
Expected behavior confirmed:
Errors, if any:
Date/time:
```

### Step 9 — Create temporary event

Create a temporary event entry with safe test content only.

Recommended test values:

```text
Title: RDDA Production Smoke Test Event
Slug: rdda-production-smoke-test-event
Event Date: Future test date
Description: Temporary production smoke test event. Delete after validation.
Status: published
```

Expected result:

- Event saves successfully.
- Required fields validate correctly.
- Published status behaves as expected.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Event created:
Slug:
Event date:
Status:
Errors, if any:
Date/time:
```

### Step 10 — Check public `/events`

Open:

```text
https://<production-domain>/events
```

Expected result:

- Route loads successfully.
- Route remains public and stable.
- No admin-only errors are exposed.
- Static fallback-safe behavior remains intact.
- If production CMS content is intentionally consumed by the route, the temporary event appears only if that is expected under the current implementation.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
/events loads:
Temporary event visible or not visible:
Expected behavior confirmed:
Errors, if any:
Date/time:
```

### Step 11 — Redeploy persistence check

Trigger or wait for a fresh production redeploy after the test entries exist.

Expected result:

- `/admin` still loads.
- Admin login still works.
- Media entry still exists.
- R2 object still exists when R2 is enabled.
- Temporary doula profile still exists.
- Temporary event still exists.
- Public routes still load.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Redeploy commit:
Redeploy status:
Admin still loads:
Media still exists:
R2 object still exists, if applicable:
Doula profile still exists:
Event still exists:
Public routes still load:
Errors, if any:
Date/time:
```

### Step 12 — Cleanup temporary content

After validation, delete or unpublish temporary content:

- Temporary media test file.
- Temporary doula profile.
- Temporary event.

Expected result:

- Temporary content is removed or unpublished.
- Public pages still load.
- No test content remains visible to public users unless intentionally retained for staging.

Validation result:

- [ ] Passed
- [ ] Failed
- [ ] Blocked

Evidence:

```text
Media cleaned up:
Doula profile cleaned up:
Event cleaned up:
Public routes checked after cleanup:
Errors, if any:
Date/time:
```

## Launch decision rules

### Ready for launch

Use only when all required live production checks pass:

- Production deployment is current.
- `/admin` loads.
- Admin login works.
- Collections are visible.
- Media upload works.
- R2 works if enabled.
- Doula profile create/read workflow works.
- Event create/read workflow works.
- Public `/doulas` loads.
- Public `/events` loads.
- Redeploy persistence passes.
- Temporary content cleanup is complete.
- No secrets are exposed.

### Ready with follow-up

Use only when production works for launch but minor non-blocking follow-up remains.

Examples:

- R2 is not enabled yet, but local/default storage is intentionally accepted for the immediate deployment.
- Public content appears fallback-safe but CMS-driven publish behavior needs a later polish pass.
- Admin UX needs later content-manager training, but core workflows pass.

### Not ready

Use when any blocking production check fails:

- `/admin` does not load.
- Login fails.
- Required collections are missing.
- Media upload fails.
- R2 is enabled but upload/read fails.
- Public `/doulas` or `/events` fails.
- Secrets appear in logs or UI.
- Data does not persist after redeploy.

## Rollback path

If R2 causes production issues:

1. Change `PAYLOAD_STORAGE_DRIVER` back to `local` in Vercel Production.
2. Remove or leave unused R2 variables in Vercel depending on security preference.
3. Redeploy production.
4. Confirm `/admin` loads.
5. Confirm Media upload behavior in local/default mode.
6. Record the rollback result in the next validation export.

If admin itself is failing:

1. Review Vercel build logs and runtime logs.
2. Confirm required Payload variables are present.
3. Confirm database connectivity.
4. Confirm no secrets were pasted into repo files.
5. Revert only the deployment/environment change that caused the failure.
6. Record the exact failure and correction in the next validation export.

## 12CL conclusion

12CL is a production execution runbook only.

The project remains locally validated, but production approval is still pending until the operator completes the live Vercel / Payload smoke test and records the results.

Recommended next checkpoint after operator testing:

```text
12CM — Production Smoke Test Evidence Capture and Final Launch Decision
```

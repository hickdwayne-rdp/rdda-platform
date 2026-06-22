# 12CM — RDDA Production Smoke Test Evidence Capture and Final Launch Decision

## Checkpoint status

**Checkpoint:** 12CM  
**Title:** Production Smoke Test Evidence Capture and Final Launch Decision  
**Status:** Pending live production evidence  
**Type:** Validation worksheet / launch decision record  
**Scope:** Documentation only  
**Secrets included:** No  
**Application code changed:** No

This checkpoint exists to capture the actual production smoke test results from the deployed Vercel/Payload environment before any final launch decision is recorded.

This document does **not** approve launch by itself. Launch approval requires completed production evidence for `/admin`, authentication, media uploads, R2 storage when enabled, first content entry creation, public route stability, redeploy persistence, and cleanup.

---

## Source checkpoints

This checkpoint follows:

- `12CH` — Cloudflare R2 production credential setup and upload validation checklist.
- `12CI` — Payload production admin smoke test and first content entry validation checklist.
- `12CJ` — Production CMS validation results and launch readiness decision framework.
- `12CK` — Production CMS smoke test results finalization template.
- `12CL` — Vercel/Payload production execution runbook, no secrets.

---

## Known local baseline before production testing

The repository has already passed local validation through 12CL:

- `npm run lint` passed.
- `npm run build` passed.
- Next.js production build completed successfully.
- `20/20` static pages generated.
- `/admin/[[...segments]]` remains dynamic.
- `/api/[...slug]` remains dynamic.
- `/doulas` remains static.
- `/events` remains static.
- Public marketing/service routes remain static.

This local baseline is a prerequisite only. It does not prove production CMS readiness.

---

## Production environment under test

Complete this section during the live production smoke test.

| Field | Value |
| --- | --- |
| Production URL | Pending |
| Vercel project | Pending |
| Deployment ID / production deployment reference | Pending |
| Commit deployed | Pending |
| Test date | Pending |
| Tester | Pending |
| Payload admin URL | Pending |
| Storage mode during test | Pending: `local` or `r2` |
| Database/provider used in production | Pending |

---

## Required production environment variables

Do not paste secret values into this file. Record only whether each value exists in Vercel production.

| Variable | Required for | Present in production? | Notes |
| --- | --- | --- | --- |
| `DATABASE_URI` or equivalent database connection | Payload production persistence | Pending | Do not paste value. |
| `PAYLOAD_SECRET` | Payload auth/security | Pending | Do not paste value. |
| `NEXT_PUBLIC_SERVER_URL` or equivalent public server URL | Payload/Next production URL alignment | Pending | Do not paste private values. |
| `PAYLOAD_STORAGE_DRIVER` | Storage selection | Pending | Expected `local` or `r2`. |
| `R2_BUCKET` | R2 mode only | Pending / N/A | Do not paste value. |
| `R2_ACCESS_KEY_ID` | R2 mode only | Pending / N/A | Do not paste value. |
| `R2_SECRET_ACCESS_KEY` | R2 mode only | Pending / N/A | Do not paste value. |
| `R2_ENDPOINT` | R2 mode only | Pending / N/A | Do not paste value. |
| `R2_PUBLIC_URL` | Optional public media URL | Pending / N/A | Do not paste private values. |
| `R2_REGION` | R2 mode only | Pending / N/A | Usually `auto`. |

Pass condition:

- Required variables for the selected production mode exist in Vercel production.
- No secret values are exposed in logs, GitHub, screenshots, exports, or chat.

---

## Production deployment validation

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| Production deployment exists for latest intended commit | Deployment is live and points to intended commit | Pending | Pending |
| Public homepage loads | `/` returns live page without server error | Pending | Pending |
| Public `/doulas` loads | Static route loads without CMS failure | Pending | Pending |
| Public `/events` loads | Static route loads without CMS failure | Pending | Pending |
| Public service routes load | Core public routes remain accessible | Pending | Pending |
| No obvious production error overlay | No Next.js runtime error visible | Pending | Pending |

Evidence to capture:

- Production deployment reference or Vercel deployment URL.
- Commit SHA deployed.
- Screenshots may be stored privately, but do not include secrets.

---

## Payload admin access test

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| Open `/admin` | Payload admin page loads | Pending | Pending |
| Login screen appears | Admin login UI loads correctly | Pending | Pending |
| Login succeeds | Authorized admin user can log in | Pending | Pending |
| Dashboard loads | Payload dashboard opens after login | Pending | Pending |
| Session survives refresh | Refreshing admin keeps user logged in or returns controlled login state | Pending | Pending |
| Logout works | User can log out safely | Pending | Pending |

Pass condition:

- `/admin` is reachable in production.
- Authorized login works.
- Dashboard loads without server error.
- Session behavior is stable.

Fail condition:

- `/admin` 404s, 500s, redirects incorrectly, or cannot authenticate.
- Payload secret/session errors appear.
- Database connection errors prevent dashboard access.

---

## Payload collection visibility test

Confirm the expected collections are visible to the appropriate admin user.

| Collection | Expected visibility | Actual result | Status |
| --- | --- | --- | --- |
| Users | Visible to admin | Pending | Pending |
| Media | Visible to admin | Pending | Pending |
| Doula Profiles | Visible to admin | Pending | Pending |
| Profile Change Requests | Visible to admin | Pending | Pending |
| Event Requests | Visible to admin | Pending | Pending |
| Events | Visible to admin | Pending | Pending |
| Training Modules | Visible to admin | Pending | Pending |
| Training Progress | Visible to admin | Pending | Pending |

Pass condition:

- Expected collections appear in the admin UI.
- Admin access controls do not block required management tasks.

---

## Media upload smoke test

Use a temporary, non-sensitive test image only.

Recommended filename pattern:

```text
12CM-test-media-rdda-placeholder.jpg
```

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| Open Media collection | Media list loads | Pending | Pending |
| Upload temporary image | Upload succeeds | Pending | Pending |
| Media record created | Record appears in Payload media list | Pending | Pending |
| Media URL available | URL or file reference is visible | Pending | Pending |
| Uploaded image loads | Image opens without error | Pending | Pending |
| Delete temporary media | Test media removed after validation | Pending | Pending |

Pass condition:

- Upload succeeds.
- Media record persists.
- File can be accessed as expected.
- Temporary file can be deleted.

Fail condition:

- Upload fails.
- File record saves but binary does not exist.
- File cannot be loaded.
- Delete fails.

---

## R2-backed upload validation, only if R2 mode is enabled

Run this section only when production has:

```text
PAYLOAD_STORAGE_DRIVER=r2
```

and all required R2 variables are set.

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| R2 mode enabled | `PAYLOAD_STORAGE_DRIVER` is `r2` in Vercel production | Pending / N/A | Pending / N/A |
| Upload completes | Payload upload succeeds | Pending / N/A | Pending / N/A |
| Object appears in R2 bucket | File exists in expected R2 bucket/path | Pending / N/A | Pending / N/A |
| Public/media URL resolves | Media URL loads according to configured access model | Pending / N/A | Pending / N/A |
| Redeploy does not remove file | Uploaded file remains after redeploy | Pending / N/A | Pending / N/A |
| Delete cleanup works | Test object removed after cleanup | Pending / N/A | Pending / N/A |

Pass condition:

- Payload upload creates both a CMS media record and a matching R2 object.
- Media still works after redeploy.
- Test object can be removed.

Fail condition:

- Payload reports upload success but no R2 object exists.
- R2 object exists but public/media URL fails unexpectedly.
- Upload only works before redeploy.
- Credentials or permissions fail.

Notes:

- Do not paste R2 access keys into this file.
- Do not paste private signed URLs into this file.
- Do not include bucket credentials in screenshots.

---

## Temporary doula profile creation test

Create a temporary test profile only. Do not use a real member profile unless explicitly approved by RDDA.

Recommended values:

| Field | Test value |
| --- | --- |
| Name | `12CM Test Doula Profile` |
| Slug | `12cm-test-doula-profile` |
| Bio | `Temporary smoke-test profile for production CMS validation. Remove after testing.` |
| Active status | Active, if required for public visibility test |
| Published status | Published, if required for public visibility test |
| Profile image | Temporary media image from media upload test, if image field is required or being validated |

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| Open Doula Profiles collection | Collection loads | Pending | Pending |
| Create temporary profile | Record saves successfully | Pending | Pending |
| Required fields validate correctly | No unexpected validation errors | Pending | Pending |
| Image can be attached if applicable | Media relation saves | Pending / N/A | Pending / N/A |
| Profile appears in admin list | Saved profile appears | Pending | Pending |
| Public `/doulas` remains stable | Public route loads without error | Pending | Pending |
| Public profile visibility behaves as expected | Test profile appears or remains hidden according to current integration behavior | Pending | Pending |
| Delete or unpublish temporary profile | Test profile removed or hidden after validation | Pending | Pending |

Pass condition:

- Admin can create, save, view, and clean up a temporary doula profile.
- Public `/doulas` does not break.
- Published/active filters behave as expected.

Fail condition:

- Required fields do not match admin UI expectations.
- Save fails.
- Public `/doulas` breaks when CMS content exists.
- Temporary profile cannot be cleaned up.

---

## Temporary event creation test

Create a temporary test event only.

Recommended values:

| Field | Test value |
| --- | --- |
| Title | `12CM Test Event` |
| Slug | `12cm-test-event` |
| Event date | A future test date |
| Description | `Temporary smoke-test event for production CMS validation. Remove after testing.` |
| Status | Published, if required for public visibility test |

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| Open Events collection | Collection loads | Pending | Pending |
| Create temporary event | Record saves successfully | Pending | Pending |
| Required fields validate correctly | No unexpected validation errors | Pending | Pending |
| Event appears in admin list | Saved event appears | Pending | Pending |
| Public `/events` remains stable | Public route loads without error | Pending | Pending |
| Public event visibility behaves as expected | Test event appears or remains hidden according to current integration behavior | Pending | Pending |
| Delete or unpublish temporary event | Test event removed or hidden after validation | Pending | Pending |

Pass condition:

- Admin can create, save, view, and clean up a temporary event.
- Public `/events` does not break.
- Event status/filter behavior works as expected.

Fail condition:

- Save fails.
- Public `/events` breaks when CMS content exists.
- Temporary event cannot be cleaned up.

---

## Public route stability after CMS content exists

After temporary doula/event records are created, test the public site.

| Route | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| `/` | Loads normally | Pending | Pending |
| `/doulas` | Loads without server error | Pending | Pending |
| `/events` | Loads without server error | Pending | Pending |
| `/services` | Loads normally | Pending | Pending |
| `/contact` | Loads normally | Pending | Pending |

Pass condition:

- Public pages remain stable after CMS records exist.
- Fallback behavior still works if records are hidden, draft, unavailable, or CMS query fails gracefully.

---

## Redeploy persistence validation

This test confirms production persistence, especially for media and database-backed content.

| Test | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| Trigger production redeploy | Vercel redeploy succeeds | Pending | Pending |
| Admin still loads after redeploy | `/admin` remains accessible | Pending | Pending |
| CMS records persist | Temporary doula/event still visible in admin | Pending | Pending |
| Media persists | Temporary media still visible and loadable | Pending | Pending |
| R2 object persists if enabled | Uploaded object remains in R2 | Pending / N/A | Pending / N/A |
| Public routes still load | `/doulas` and `/events` still stable | Pending | Pending |

Pass condition:

- Data and uploaded media survive redeploy.
- Public and admin routes remain functional.

Fail condition:

- Uploaded media disappears after redeploy.
- CMS records disappear unexpectedly.
- Admin stops loading after redeploy.

---

## Cleanup validation

Before launch approval, remove temporary test content or clearly unpublish it.

| Item | Cleanup action | Actual result | Status |
| --- | --- | --- | --- |
| Temporary media | Delete from Payload media collection and R2 if applicable | Pending | Pending |
| Temporary doula profile | Delete or unpublish | Pending | Pending |
| Temporary event | Delete or unpublish | Pending | Pending |
| Public `/doulas` after cleanup | Route still loads normally | Pending | Pending |
| Public `/events` after cleanup | Route still loads normally | Pending | Pending |

Pass condition:

- Temporary test content is removed or safely unpublished.
- Public routes remain stable after cleanup.

---

## Security and privacy validation

| Check | Expected result | Actual result | Status |
| --- | --- | --- | --- |
| No secrets in GitHub | No credential values committed | Pending | Pending |
| No secrets in exports | Export files contain placeholders/status only | Pending | Pending |
| No secrets in screenshots | Screenshots exclude keys/tokens/private URLs | Pending | Pending |
| Admin access restricted | Unauthorized users cannot access admin dashboard | Pending | Pending |
| Test content is clearly temporary | No confusion with real RDDA content | Pending | Pending |
| R2 keys are least-privilege if used | Keys limited to required bucket/actions where possible | Pending / N/A | Pending / N/A |

---

## Final launch decision

Choose one only after completing live production testing.

### Option A — Approved for CMS launch

Use only if every required production test passes.

Criteria:

- Production deployment is live on intended commit.
- `/admin` loads.
- Admin login works.
- Expected Payload collections are available.
- Media upload works.
- R2-backed uploads work if R2 mode is enabled.
- Temporary doula profile can be created, validated, viewed, and cleaned up.
- Temporary event can be created, validated, viewed, and cleaned up.
- Public `/doulas` and `/events` remain stable.
- Redeploy persistence passes.
- No secrets are exposed.

Decision:

```text
Pending — do not mark approved until evidence is complete.
```

### Option B — Ready with follow-up

Use only if production is usable but a non-blocking follow-up exists.

Examples:

- Admin works, content saves, and public routes are stable, but R2 public URL polish is needed.
- CMS works with local storage temporarily, and R2 activation is intentionally deferred.
- Minor admin wording or documentation cleanup remains.

Decision:

```text
Pending — do not mark ready with follow-up until evidence is complete.
```

### Option C — Not ready

Use if any launch-blocking failure occurs.

Examples:

- `/admin` fails in production.
- Admin login fails.
- Database connection fails.
- Media upload fails.
- R2 upload fails when R2 is required for launch.
- Public `/doulas` or `/events` breaks when CMS records exist.
- CMS records or media do not persist after redeploy.
- Secrets are exposed.

Decision:

```text
Pending — no failure recorded yet because live production evidence has not been entered.
```

---

## Launch blockers

Record any blockers found during production testing.

| Blocker | Severity | Evidence | Owner | Resolution status |
| --- | --- | --- | --- | --- |
| Pending | Pending | Pending | Pending | Pending |

---

## Follow-up items

Record non-blocking follow-ups here.

| Follow-up | Priority | Notes | Status |
| --- | --- | --- | --- |
| Pending | Pending | Pending | Pending |

---

## Rollback path

If production CMS validation fails:

1. Keep the latest code deployed only if public routes remain stable.
2. If R2 is the failure point, set production storage back to local mode or remove `PAYLOAD_STORAGE_DRIVER=r2`.
3. Redeploy production.
4. Confirm `/doulas`, `/events`, and core public routes still load.
5. Do not approve CMS launch until the failed production test is corrected and repeated.

If admin or database validation fails:

1. Do not enter real RDDA content.
2. Preserve error evidence without exposing secrets.
3. Check Vercel environment variables.
4. Check database connectivity.
5. Redeploy after correction.
6. Repeat 12CL/12CM production testing.

---

## 12CM completion criteria

This checkpoint is complete only when:

- All live production result fields are filled.
- Temporary content cleanup is recorded.
- A final launch decision is selected.
- Any blockers/follow-ups are recorded.
- No secrets are included.

Current completion state:

```text
Pending live production smoke-test evidence.
```

---

## Next checkpoint recommendation

If production smoke testing passes:

```text
12CN — RDDA Payload CMS Launch Approval and Post-Launch Monitoring Plan
```

If production smoke testing fails:

```text
12CN — RDDA Production CMS Smoke Test Failure Remediation Plan
```

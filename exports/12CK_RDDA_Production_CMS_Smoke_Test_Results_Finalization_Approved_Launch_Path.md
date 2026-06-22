# 12CK — RDDA Production CMS Smoke Test Results Finalization and Approved Launch Path

## Checkpoint status

**Status:** Pending production evidence  
**Checkpoint type:** Validation results finalization template  
**Application code changed:** No  
**Secrets added:** No  
**Production approval granted:** No — approval requires completed production smoke-test evidence

This checkpoint creates the finalization structure for the production Payload CMS smoke test and launch-path decision. It does not claim that production is approved yet. The approval decision must be filled in only after the live Vercel/Payload admin tests from 12CI and the readiness framework from 12CJ have been completed.

---

## Source baseline

This checkpoint continues from:

- **12CH** — Cloudflare R2 production credential setup and upload validation checklist.
- **12CI** — Payload production admin smoke test and first content entry validation checklist.
- **12CJ** — Production CMS validation results and launch readiness decision framework.

Known local baseline before production evidence:

- `npm run lint` passed locally.
- `npm run build` passed locally.
- Next.js generated `20/20` static pages.
- `/admin/[[...segments]]` remained dynamic.
- `/api/[...slug]` remained dynamic.
- `/doulas` remained static.
- `/events` remained static.
- Public static routes remained prerendered.

---

## Current production decision

**Decision:** Pending  
**Reason:** Production `/admin`, login/session, media upload, R2-backed upload, first doula entry, first event entry, and public route checks have not yet been recorded in this checkpoint.

Use one of these final decision labels after testing:

- **Approved for launch** — all required production checks pass, temporary test content is cleaned up or safely unpublished, and no blocking issues remain.
- **Approved with follow-up** — production is usable, but non-blocking follow-up work is documented.
- **Not approved** — one or more blocking production checks fail.
- **Deferred** — production validation could not be completed due to missing access, credentials, deployment, domain, or admin account readiness.

---

## Production smoke-test evidence log

Fill this table after completing the live production checks.

| Area | Required evidence | Result | Notes |
| --- | --- | --- | --- |
| Production deployment | Latest main commit is deployed on Vercel | Pending | Confirm deployed commit SHA before testing. |
| `/admin` route | Production admin route loads | Pending | Record whether login screen appears. |
| Admin login | Authorized admin user can log in | Pending | Do not record password or private session details. |
| Payload dashboard | Collections are visible after login | Pending | Confirm expected collections appear. |
| Media collection | Test image/file can be uploaded | Pending | Use non-sensitive temporary media only. |
| R2 storage enabled | Upload lands in R2 when `PAYLOAD_STORAGE_DRIVER=r2` | Pending | Only validate if real R2 credentials are configured in Vercel. |
| R2 storage disabled fallback | App remains stable when R2 is not enabled | Pending | R2 is optional and off unless configured. |
| Doula profile entry | Temporary doula profile can be created | Pending | Use test content only. |
| Doula public route | `/doulas` remains stable after CMS entry | Pending | Confirm no build/static regression. |
| Event entry | Temporary event can be created | Pending | Use test content only. |
| Events public route | `/events` remains stable after CMS entry | Pending | Confirm no runtime errors. |
| Redeploy persistence | Uploaded media and CMS entries persist after redeploy | Pending | Required before final approval. |
| Cleanup | Test entries/media are unpublished, deleted, or clearly marked | Pending | Avoid leaving fake content live. |
| Secrets safety | No secrets appear in repo, logs, screenshots, or exports | Pending | Required before final approval. |

---

## Required production test sequence

1. Confirm Vercel production is deployed from the expected main-branch commit.
2. Open the production site root and confirm the public website loads.
3. Open production `/admin`.
4. Confirm the Payload admin login screen loads.
5. Log in with an authorized admin account.
6. Confirm the Payload dashboard loads.
7. Confirm the expected collections are visible:
   - Users
   - Media
   - Doula Profiles
   - Profile Change Requests
   - Event Requests
   - Events
   - Training Modules
   - Training Progress
8. Upload one temporary, non-sensitive media item.
9. If R2 is enabled, confirm the uploaded object exists in the configured R2 bucket.
10. Create one temporary doula profile using a clearly test-only name and slug.
11. Confirm the public `/doulas` route still loads successfully.
12. Create one temporary event using a clearly test-only name and slug.
13. Confirm the public `/events` route still loads successfully.
14. Trigger or wait for one production redeploy.
15. Confirm CMS entries and uploaded media persist after redeploy.
16. Clean up temporary test entries and test media, or unpublish them if deletion is not desired.
17. Record the final launch decision in this export or a follow-up finalization export.

---

## Minimum evidence required for launch approval

The CMS launch path can be approved only when all of the following are true:

- Production deployment is confirmed on the expected commit.
- Production `/admin` loads.
- Admin login succeeds.
- Payload dashboard loads.
- Expected collections are visible.
- Media upload succeeds.
- R2 upload succeeds if R2 is enabled.
- App remains stable if R2 is not enabled.
- Temporary doula profile creation succeeds.
- Temporary event creation succeeds.
- Public `/doulas` loads after CMS entry creation.
- Public `/events` loads after CMS entry creation.
- Entries/media persist after redeploy.
- Temporary content is cleaned up or unpublished.
- No secrets are committed, logged, exported, or exposed publicly.
- No blocking production errors remain.

---

## Blocking failure conditions

Do not approve launch if any of these occur:

- Production build fails.
- Production `/admin` does not load.
- Admin login fails for a valid authorized account.
- Payload dashboard crashes.
- Required collections are missing.
- Media upload fails.
- R2 is enabled but uploaded files do not reach the configured R2 bucket.
- Public `/doulas` or `/events` fails after CMS entries are added.
- CMS entries or uploaded media disappear after redeploy.
- Secrets appear in the repository, browser output, logs, screenshots, exports, or shared notes.
- Temporary test content cannot be removed, hidden, or unpublished.

---

## Approved launch path when evidence passes

When all required evidence passes, use this launch path:

1. Set final decision to **Approved for launch**.
2. Record the production deployment URL and deployed commit SHA.
3. Record the smoke-test date and tester name.
4. Record the result of `/admin`, login, media upload, doula entry, event entry, public routes, redeploy persistence, and cleanup.
5. Keep R2 credential values out of the export.
6. Keep admin passwords and private session details out of the export.
7. Confirm temporary content has been deleted or unpublished.
8. Confirm no code changes are required for launch.
9. Proceed to client/admin training, content-entry workflow, or production content migration.

---

## Approved-with-follow-up path

Use **Approved with follow-up** only if the site is production-usable and remaining issues are non-blocking.

Examples of non-blocking follow-up items:

- Improve admin instructions.
- Add editorial naming conventions.
- Refine image size guidance.
- Add content QA checklist.
- Add future CMS fields after launch.
- Add future training module polish.

Examples that are not non-blocking:

- Broken `/admin`.
- Failed admin login.
- Failed upload storage.
- Missing required collections.
- Public route failures.
- Persistence failures after redeploy.
- Any exposed secret.

---

## Rollback path

If production validation fails:

1. Do not approve launch.
2. Record the failing step and visible error message without secrets.
3. If R2-specific, set `PAYLOAD_STORAGE_DRIVER=local` or remove the R2-only production variables from Vercel.
4. Redeploy from the latest known stable commit.
5. Re-run the 12CI smoke-test checklist.
6. Create a follow-up implementation checkpoint only if code changes are required.

---

## Security notes

- Do not commit real R2 credentials.
- Do not commit admin credentials.
- Do not paste production secret values into exports.
- Do not include private media URLs if the bucket is private.
- Do not include screenshots containing tokens, cookies, session IDs, environment variables, or user passwords.
- Use temporary, non-sensitive test content only.

---

## 12CK conclusion

12CK establishes the final production CMS launch-decision structure, but the approval itself remains pending until live production smoke-test results are recorded.

The project remains locally validated and structurally ready for production testing, but not yet formally launch-approved from this checkpoint alone.

# 12CN — RDDA Payload CMS Conditional Launch Approval and Post-Launch Monitoring Plan

## Checkpoint status

**Status:** Conditional / pending live production evidence  
**Repository:** `hickdwayne-rdp/rdda-platform`  
**App folder:** `repo/`  
**Created after:** `12CM — Production Smoke Test Evidence Capture and Final Launch Decision`  

This checkpoint defines the launch approval rules and post-launch monitoring plan for the RDDA Payload CMS production rollout.

It does **not** assert that production launch is approved yet.

Launch approval becomes valid only after the 12CM evidence worksheet is completed with passing live production smoke-test results.

---

## Guardrails

No secrets are included in this file.

This checkpoint does not add, change, or expose:

- Payload admin passwords
- Payload secret values
- Database URLs
- Cloudflare R2 access keys
- Cloudflare R2 secret keys
- R2 bucket-private URLs
- Vercel project secrets
- Production admin session values

This checkpoint is documentation-only and does not change application runtime behavior.

---

## Current known local baseline

The repo-side baseline before production approval is:

- `npm run lint` passes locally.
- `npm run build` passes locally.
- `next build` generates `20/20` static pages.
- `/admin/[[...segments]]` remains dynamic.
- `/api/[...slug]` remains dynamic.
- `/doulas` remains static.
- `/events` remains static.
- Public site routes remain statically prerendered.

This baseline supports production testing, but does not replace production testing.

---

## Required evidence before approval

Production launch approval requires all required fields in the 12CM evidence worksheet to be completed with passing results.

Required evidence includes:

1. Production deployment identified.
2. Required Vercel environment variables confirmed present without exposing values.
3. Production `/admin` loads successfully.
4. Payload admin login works.
5. Admin session persists through basic navigation.
6. Expected collections are visible.
7. Media upload succeeds.
8. If `PAYLOAD_STORAGE_DRIVER=r2`, uploaded media appears in the expected Cloudflare R2 bucket/path.
9. Temporary doula profile can be created.
10. Temporary event can be created.
11. Public `/doulas` remains stable.
12. Public `/events` remains stable.
13. Redeploy does not break admin access or uploaded media references.
14. Temporary test content is cleaned up or clearly marked as temporary/unpublished.
15. No secrets are exposed in logs, public pages, generated files, screenshots, or committed artifacts.

---

## Conditional launch decision

Use this decision table after 12CM is completed.

| Condition | Launch decision |
|---|---|
| All required production smoke tests pass | Launch may be approved |
| Admin works but media upload fails | Not approved; remediate storage/upload issue |
| Media uploads locally but not to R2 when R2 is enabled | Not approved for R2-backed production |
| Doula/event entries create but public routes fail | Not approved; remediate public integration |
| Public routes work but `/admin` fails | Not approved; remediate Payload/Vercel runtime |
| Any secret appears in logs or public output | Not approved; rotate affected secret and remediate exposure |
| Temporary test content cannot be cleaned up | Not approved until content state is resolved |

---

## Approval language

Use this only after 12CM is filled with passing production evidence:

> Production CMS launch is approved for RDDA Payload CMS because the production deployment has passed admin access, login/session, collection visibility, media upload, R2-backed upload validation where enabled, test doula profile creation, test event creation, public `/doulas` and `/events` stability, redeploy persistence, cleanup, and no-secret-exposure checks.

Do not use that approval language before the live evidence exists.

---

## Not-approved language

Use this if any required production smoke-test item fails:

> Production CMS launch is not approved yet. The failed or incomplete production smoke-test item must be remediated and re-tested before RDDA relies on Payload CMS for production content operations.

---

## Ready-with-follow-up language

Use this only for non-blocking issues that do not affect admin access, storage, public page stability, security, or content integrity:

> Production CMS launch is conditionally ready with follow-up. The core production smoke tests passed, and the remaining items are non-blocking documentation, training, or operational follow-ups.

Blocking issues include:

- Failed login
- Failed media upload
- Failed R2 validation when R2 is enabled
- Broken `/doulas`
- Broken `/events`
- Public secret exposure
- Failed production build/deploy
- Inability to remove or unpublish test content

---

## Post-launch monitoring plan

After production launch is approved, monitor the following areas.

### First 24 hours

Check:

- `/admin` loads.
- Admin user can log in.
- Media library loads.
- Existing uploaded media URLs still resolve.
- `/doulas` loads.
- `/events` loads.
- No production error spikes appear in Vercel logs.
- No storage errors appear during admin uploads.
- No private values appear in logs.

### First 7 days

Check:

- At least one real content edit can be saved.
- At least one real media upload can be saved.
- Public pages remain stable after content updates.
- Editors understand which fields are publish-facing.
- Draft/unpublished/test content is not accidentally visible.
- R2 bucket growth looks expected.
- No unexpected storage paths appear.

### First 30 days

Check:

- CMS workflow is understandable for RDDA users.
- Content-editing friction points are documented.
- Training/admin permissions are reviewed.
- Backup/export strategy is reviewed.
- Media naming conventions are reviewed.
- Event and doula publishing workflows are reviewed.

---

## Rollback plan

If production issues appear after launch:

1. Do not commit secrets.
2. Capture the failing route, action, timestamp, and deployment ID.
3. If R2 upload behavior is the issue, temporarily set storage back to local/fallback behavior only if safe and intentional.
4. If public routes fail, confirm fallback behavior and recent content changes.
5. If admin fails, check Vercel deployment logs and Payload environment variables.
6. If secrets are exposed, rotate affected credentials immediately.
7. Re-run the 12CM evidence worksheet after remediation.

---

## Documentation handoff

Relevant exports leading into this checkpoint:

- `12CH_RDDA_Cloudflare_R2_Production_Credential_Setup_Upload_Validation_Checklist.md`
- `12CI_RDDA_Payload_Production_Admin_Smoke_Test_First_Content_Entry_Validation.md`
- `12CJ_RDDA_Production_CMS_Validation_Results_Launch_Readiness_Decision.md`
- `12CK_RDDA_Production_CMS_Smoke_Test_Results_Finalization_Approved_Launch_Path.md`
- `12CL_RDDA_Vercel_Payload_Production_Execution_Runbook_No_Secrets.md`
- `12CM_RDDA_Production_Smoke_Test_Evidence_Capture_Final_Launch_Decision.md`

---

## Final checkpoint conclusion

12CN defines the conditional launch approval rules and monitoring plan for RDDA Payload CMS.

The project is not launch-approved by this document alone.

Approval requires completed live production smoke-test evidence from 12CM.

Once production evidence is complete, this checkpoint can be used to classify the launch as:

- Approved
- Ready with follow-up
- Not approved / remediation required

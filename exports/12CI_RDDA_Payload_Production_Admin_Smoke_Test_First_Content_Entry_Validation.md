# 12CI — RDDA Payload Production Admin Smoke Test and First Content Entry Validation

**Project:** RDDA Platform  
**Checkpoint:** 12CI  
**Status:** Checklist/export only — no production data or secrets implemented  
**Date:** 2026-06-21  

---

## 1. Purpose

This checkpoint defines the production Payload admin smoke test and first content entry validation workflow for the RDDA CMS.

This is intentionally a documentation and validation checkpoint only.

No application code is changed in this checkpoint.

No real secrets, R2 credentials, admin passwords, client-sensitive media, or private production values are included in this repository.

---

## 2. Starting Point

The previous checkpoint, 12CH, created the Cloudflare R2 production credential setup and upload validation checklist.

12CI assumes the app can already build cleanly and that the current route behavior remains:

```text
/admin/[[...segments]]  Dynamic
/api/[...slug]          Dynamic
/doulas                 Static
/events                 Static
```

The current Payload configuration includes these collections:

```text
users
media
doulaProfiles
profileChangeRequests
eventRequests
events
trainingModules
trainingProgress
```

The first production smoke test should validate only a small, controlled subset:

```text
media
doulaProfiles
events
```

---

## 3. Files Changed In This Checkpoint

```text
exports/12CI_RDDA_Payload_Production_Admin_Smoke_Test_First_Content_Entry_Validation.md
```

No application code was changed.

---

## 4. Production Preconditions

Before running the live smoke test, confirm:

```text
[ ] The latest main branch has been deployed to Vercel production.
[ ] Production deployment completes without build errors.
[ ] DATABASE_URL is configured in production.
[ ] PAYLOAD_SECRET is configured in production.
[ ] At least one authorized admin or site manager user account exists.
[ ] The admin user can access the production /admin route.
[ ] R2 variables are configured only if live R2 media validation is being performed.
[ ] No secrets are stored in GitHub, env.example, checkpoint exports, or chat.
```

If R2 is not enabled yet, complete the admin and database smoke test without treating durable production media validation as complete.

---

## 5. Production Admin Access Smoke Test

Checklist:

```text
[ ] Open the production site root URL.
[ ] Confirm the public homepage loads.
[ ] Open /admin.
[ ] Confirm the Payload admin login page loads.
[ ] Log in using an authorized admin or site manager account.
[ ] Confirm the admin dashboard loads.
[ ] Confirm the Media collection is visible.
[ ] Confirm the Doula Profiles collection is visible.
[ ] Confirm the Events collection is visible.
[ ] Confirm no server error appears in the admin UI.
[ ] Confirm no secret values appear in the browser page source or client console.
```

Expected result:

```text
/admin is reachable and authenticated users can access the Payload dashboard.
```

Failure response:

```text
Do not change collection code first.
Check production DATABASE_URL, PAYLOAD_SECRET, deployment status, and admin user setup.
```

---

## 6. First Media Upload Smoke Test

Use a small, non-sensitive test image.

Suggested test media:

```text
Filename: rdda-test-image.jpg or rdda-test-image.png
Size: under 1 MB
Content: non-private placeholder image only
```

Checklist:

```text
[ ] Open /admin.
[ ] Open the Media collection.
[ ] Create a new Media item or upload through an upload field.
[ ] Upload the small non-sensitive test image.
[ ] Save the media record.
[ ] Confirm the upload succeeds.
[ ] Open the saved media record.
[ ] Confirm the file preview or media URL appears.
[ ] Open the media URL in a separate browser tab.
[ ] Confirm the image loads.
```

If R2 is enabled:

```text
[ ] Confirm the media URL uses the configured R2 public URL or custom media domain.
[ ] Confirm the file appears in the expected Cloudflare R2 bucket.
[ ] Confirm the file remains available after a production redeploy.
```

If R2 is not enabled:

```text
[ ] Mark durable media persistence as incomplete.
[ ] Do not treat local or ephemeral upload success as final production storage validation.
```

---

## 7. First Doula Profile Content Entry Smoke Test

Create a deliberately temporary test profile. Do not use a real doula profile unless the RDDA team has approved the content.

Recommended test profile values:

```text
name: RDDA Test Doula
businessName: RDDA Test Profile
slug: rdda-test-doula
bio: Temporary test profile for Payload production validation. Remove after validation.
email: leave blank or use an approved internal test email only
website: leave blank unless an approved internal test URL is available
activeStatus: active
publishedStatus: draft first, then published only for public-route validation
featuredStatus: false
adminNotes: Temporary test profile created for 12CI validation. Remove after smoke test.
```

Recommended optional values:

```text
serviceAreas:
- Red Deer

servicesOffered:
- Birth doula support

careCategories:
- Birth

languages:
- English
```

Checklist:

```text
[ ] Open /admin.
[ ] Open Doula Profiles.
[ ] Create a new Doula Profile.
[ ] Enter the required fields: name, slug, bio, activeStatus, publishedStatus.
[ ] Attach the previously uploaded test image as the headshot if media upload is being validated.
[ ] Save as draft first.
[ ] Confirm the record saves without an error.
[ ] Reopen the saved record.
[ ] Confirm the saved fields persist.
[ ] Confirm internal adminNotes are not intended for public display.
```

Public visibility validation:

```text
[ ] While publishedStatus is draft, confirm the public /doulas page still loads.
[ ] Confirm draft-only test content is not expected to appear publicly.
[ ] Change publishedStatus to published only if temporary public validation is approved.
[ ] Confirm activeStatus remains active.
[ ] Save the profile.
[ ] Open /doulas.
[ ] Confirm the page loads successfully.
[ ] Confirm the published active test profile appears only if the public integration is currently using live CMS data.
[ ] If fallback content appears instead, confirm the page still loads safely and document that public CMS data is not yet being consumed in production.
```

Cleanup checklist:

```text
[ ] Return the test profile to draft or archived after validation.
[ ] Delete the test profile only if deletion is approved.
[ ] Avoid leaving fake public doula content published on production.
```

---

## 8. First Event Content Entry Smoke Test

Create a deliberately temporary test event. Do not use a real public event unless the RDDA team has approved the content.

Recommended test event values:

```text
title: RDDA Test Event
slug: rdda-test-event
eventDate: use a near-future test date
description: Temporary test event for Payload production validation. Remove after validation.
startTime: 10:00 AM
endTime: 11:00 AM
location: Online / Test Location
host: RDDA Test
cost: Free
registrationLink: leave blank unless an approved test URL is available
status: draft first, then published only for public-route validation
featuredStatus: false
adminNotes: Temporary test event created for 12CI validation. Remove after smoke test.
```

Checklist:

```text
[ ] Open /admin.
[ ] Open Events.
[ ] Create a new Event.
[ ] Enter required fields: title, slug, eventDate, description, status.
[ ] Attach the previously uploaded test image if event image upload is being validated.
[ ] Save as draft first.
[ ] Confirm the record saves without an error.
[ ] Reopen the saved record.
[ ] Confirm the saved fields persist.
```

Public visibility validation:

```text
[ ] While status is draft, confirm /events still loads.
[ ] Confirm draft-only test content is not expected to appear publicly.
[ ] Change status to published only if temporary public validation is approved.
[ ] Save the event.
[ ] Open /events.
[ ] Confirm the page loads successfully.
[ ] Confirm the published test event appears only if the public integration is currently using live CMS data.
[ ] If fallback content appears instead, confirm the page still loads safely and document that public CMS data is not yet being consumed in production.
```

Cleanup checklist:

```text
[ ] Return the test event to draft, archived, or cancelled after validation.
[ ] Delete the test event only if deletion is approved.
[ ] Avoid leaving fake public event content published on production.
```

---

## 9. Public Route Safety Validation

After admin entry testing, confirm public routes still load and do not expose private values.

Checklist:

```text
[ ] Open /.
[ ] Open /doulas.
[ ] Open /events.
[ ] Open /services.
[ ] Open /contact.
[ ] Confirm each public route loads without a server error.
[ ] Confirm public routes do not expose PAYLOAD_SECRET.
[ ] Confirm public routes do not expose DATABASE_URL.
[ ] Confirm public routes do not expose R2_ACCESS_KEY_ID.
[ ] Confirm public routes do not expose R2_SECRET_ACCESS_KEY.
[ ] Confirm fallback-safe behavior remains acceptable if CMS data is unavailable.
```

Expected result:

```text
Public pages remain stable, fallback-safe, and free of secret values.
```

---

## 10. Redeploy Persistence Validation

This step validates that created CMS content and uploaded media survive a production redeploy.

Checklist:

```text
[ ] Record the test doula profile title and slug in private validation notes.
[ ] Record the test event title and slug in private validation notes.
[ ] Record the test media filename and public URL in private validation notes.
[ ] Trigger a fresh Vercel production redeploy.
[ ] Reopen /admin after redeploy.
[ ] Confirm the doula profile still exists.
[ ] Confirm the event still exists.
[ ] Confirm the media record still exists.
[ ] Confirm the media URL still loads.
[ ] Confirm /doulas still loads.
[ ] Confirm /events still loads.
```

Expected result:

```text
Database-backed content survives redeploy.
R2-backed media survives redeploy if R2 is enabled.
```

If media disappears after redeploy:

```text
Treat production media storage as incomplete.
Return to 12CH R2 validation before publishing real profile media.
```

---

## 11. Validation Result Log Template

Use this template in private project notes, not with secrets included.

```text
12CI Production Smoke Test Result
Date:
Production URL:
Tester:
Deployment commit:

Admin login:
[ ] Pass
[ ] Fail
Notes:

Media upload:
[ ] Pass
[ ] Fail
[ ] Not tested
Storage mode:
[ ] R2
[ ] Local / not durable
Notes:

Doula profile create/save:
[ ] Pass
[ ] Fail
Notes:

Event create/save:
[ ] Pass
[ ] Fail
Notes:

Public /doulas:
[ ] Pass
[ ] Fail
Notes:

Public /events:
[ ] Pass
[ ] Fail
Notes:

Redeploy persistence:
[ ] Pass
[ ] Fail
[ ] Not tested
Notes:

Cleanup completed:
[ ] Yes
[ ] No
Notes:
```

---

## 12. Failure Checks

If /admin fails:

```text
[ ] Confirm production deployment succeeded.
[ ] Confirm DATABASE_URL is present and valid.
[ ] Confirm PAYLOAD_SECRET is present and stable.
[ ] Confirm the admin user exists.
[ ] Confirm the production URL is correct.
[ ] Confirm /api/[...slug] is available.
```

If content cannot be saved:

```text
[ ] Confirm the logged-in user has admin or site manager permissions.
[ ] Confirm required fields are filled.
[ ] Confirm slugs are unique.
[ ] Confirm database connection is healthy.
[ ] Confirm deployment logs do not show Payload or database errors.
```

If media upload fails:

```text
[ ] Confirm whether PAYLOAD_STORAGE_DRIVER is local or r2.
[ ] If r2, return to the 12CH R2 credential checklist.
[ ] Confirm the file is small and non-sensitive.
[ ] Confirm the file type is supported.
[ ] Confirm Vercel was redeployed after storage variable changes.
```

If public pages fail:

```text
[ ] Confirm /doulas and /events still load locally from the latest main branch.
[ ] Confirm production deployment uses the latest main branch.
[ ] Confirm fallback behavior still protects public routes when CMS data is unavailable.
[ ] Confirm no secret values were added to client-side environment variables.
```

---

## 13. Rollback and Cleanup

Preferred cleanup after successful validation:

```text
[ ] Set test doula profile to draft or archived.
[ ] Set test event to draft, archived, or cancelled.
[ ] Remove test media only if it is safe and approved.
[ ] Keep a private note that 12CI was validated.
```

Rollback if production admin testing creates issues:

```text
[ ] Do not publish additional real CMS content.
[ ] Set test records to draft or archived where possible.
[ ] If R2 upload is the issue, set PAYLOAD_STORAGE_DRIVER back to local and redeploy.
[ ] If database/admin access is the issue, review production DATABASE_URL, PAYLOAD_SECRET, and admin user setup.
[ ] Confirm public static routes still load.
```

---

## 14. Security Rules

Hard rules for this checkpoint:

```text
[x] Do not commit real production secrets.
[x] Do not paste admin passwords into chat.
[x] Do not upload private client or member images for testing.
[x] Do not leave fake public content published longer than needed.
[x] Do not expose secret values as NEXT_PUBLIC variables.
[x] Do not document private production URLs, keys, or credentials in markdown exports.
[x] Do not run destructive delete tests against real production media or real RDDA content.
```

---

## 15. Local Validation Commands

Recommended commands after pulling this checkpoint:

```powershell
cd C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
git status --short --untracked-files=all
git pull
git log --oneline -5
```

Recommended app validation commands:

```powershell
cd C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
npm run lint
Remove-Item .\.next -Recurse -Force
npm run build
```

Expected build route behavior:

```text
/admin/[[...segments]]  Dynamic
/api/[...slug]          Dynamic
/doulas                 Static
/events                 Static
```

---

## 16. Completion Criteria

12CI is complete when:

```text
[x] A production admin access smoke test checklist exists.
[x] A first media upload checklist exists.
[x] A first doula profile entry checklist exists.
[x] A first event entry checklist exists.
[x] Public route safety validation is documented.
[x] Redeploy persistence validation is documented.
[x] Rollback and cleanup steps are documented.
[x] No application code was changed.
[x] No real secrets were implemented.
```

Live production validation remains incomplete until the checklist is run against the deployed production environment.

---

## 17. Recommended Next Checkpoint

Recommended next checkpoint after this checklist:

```text
12CJ — Production CMS validation results capture and launch readiness decision
```

That checkpoint should record pass/fail outcomes after the production smoke test is actually performed.
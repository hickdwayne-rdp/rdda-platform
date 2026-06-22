# 12CH — RDDA Cloudflare R2 Production Credential Setup and Upload Validation Checklist

**Project:** RDDA Platform  
**Checkpoint:** 12CH  
**Status:** Checklist/export only — no secrets implemented  
**Date:** 2026-06-21  

---

## 1. Purpose

This checkpoint defines the production credential setup and upload validation checklist for the RDDA Payload CMS Cloudflare R2 storage path.

This is intentionally a documentation and validation checkpoint only.

No real secrets, access keys, bucket names, endpoint URLs, or production credentials are included in this repository.

---

## 2. Starting Point

The previous checkpoint, 12CG, added and validated the environment-gated Cloudflare R2 / S3-compatible Payload storage adapter.

The adapter is designed to remain inactive unless the required production R2 environment variables are configured.

R2 storage only activates when the following are present:

```text
PAYLOAD_STORAGE_DRIVER=r2
R2_BUCKET is set
R2_ACCESS_KEY_ID is set
R2_SECRET_ACCESS_KEY is set
R2_ENDPOINT is set
```

The current environment template already includes the R2 placeholders but does not contain real values.

---

## 3. Files Changed In This Checkpoint

```text
exports/12CH_RDDA_Cloudflare_R2_Production_Credential_Setup_Upload_Validation_Checklist.md
```

No application code was changed.

---

## 4. Required Production Inputs

Before live R2 validation can happen, the following real production values must be created outside the repository:

```text
PAYLOAD_STORAGE_DRIVER=r2
R2_BUCKET=<real Cloudflare R2 bucket name>
R2_ACCESS_KEY_ID=<real R2 access key id>
R2_SECRET_ACCESS_KEY=<real R2 secret access key>
R2_ENDPOINT=<real R2 S3 API endpoint>
R2_PUBLIC_URL=<real public media URL or custom domain>
R2_REGION=auto
```

Important:

```text
Real values must be added only to the deployment environment, such as Vercel Environment Variables.
Real values must not be committed to GitHub.
Real values must not be copied into env.example.
Real values must not be pasted into checkpoint exports.
```

---

## 5. Cloudflare R2 Setup Checklist

### 5.1 Create or confirm the R2 bucket

Checklist:

```text
[ ] Log in to Cloudflare.
[ ] Open R2 Object Storage.
[ ] Create or confirm the production media bucket.
[ ] Use a clear bucket name for RDDA production media.
[ ] Record the bucket name in a private password manager or secure deployment notes.
[ ] Do not commit the bucket name unless the team intentionally decides it is non-sensitive.
```

Recommended bucket naming pattern:

```text
rdda-production-media
```

Do not treat the example name above as a required value.

### 5.2 Create R2 API credentials

Checklist:

```text
[ ] Open Cloudflare R2 API Tokens / Manage R2 API Tokens.
[ ] Create an access key scoped only to the RDDA media bucket where possible.
[ ] Grant only the permissions required for Payload media upload, read, update, and delete behavior.
[ ] Copy the access key id once.
[ ] Copy the secret access key once.
[ ] Store both in a secure password manager.
[ ] Do not send the secret key through chat or email.
[ ] Do not commit either key to GitHub.
```

### 5.3 Confirm the R2 endpoint

Checklist:

```text
[ ] Copy the account-specific R2 S3 API endpoint from Cloudflare.
[ ] Confirm it uses the expected Cloudflare R2 endpoint format.
[ ] Store the endpoint privately with the other deployment values.
[ ] Do not add the real endpoint to env.example unless intentionally treated as non-sensitive.
```

Expected endpoint pattern:

```text
https://<account-id>.r2.cloudflarestorage.com
```

### 5.4 Configure public media access

Checklist:

```text
[ ] Decide whether public media will use a Cloudflare R2 public development URL or a custom domain.
[ ] Prefer a custom domain for production if available.
[ ] Confirm that uploaded media can be publicly loaded by browser URL.
[ ] Store the public URL as R2_PUBLIC_URL in the deployment environment.
```

Possible public URL examples:

```text
https://media.reddeerdoulaassociation.ca
https://pub-<cloudflare-public-id>.r2.dev
```

Do not commit the real value unless intentionally approved.

---

## 6. Vercel Environment Variable Checklist

Add these variables in Vercel Project Settings > Environment Variables.

Checklist:

```text
[ ] Add PAYLOAD_STORAGE_DRIVER with value r2.
[ ] Add R2_BUCKET with the real bucket name.
[ ] Add R2_ACCESS_KEY_ID with the real access key id.
[ ] Add R2_SECRET_ACCESS_KEY with the real secret access key.
[ ] Add R2_ENDPOINT with the real R2 S3 API endpoint.
[ ] Add R2_PUBLIC_URL with the real public media URL or custom domain.
[ ] Add R2_REGION with value auto.
[ ] Scope the variables to Production.
[ ] Add Preview scope only if live upload testing is intended on preview deployments.
[ ] Do not expose secret values as NEXT_PUBLIC variables.
```

Required production values:

```text
PAYLOAD_STORAGE_DRIVER=r2
R2_BUCKET=<private production value>
R2_ACCESS_KEY_ID=<private production value>
R2_SECRET_ACCESS_KEY=<private production value>
R2_ENDPOINT=<private production value>
R2_PUBLIC_URL=<private production value>
R2_REGION=auto
```

---

## 7. Deployment Checklist

After production environment variables are configured:

```text
[ ] Trigger a fresh Vercel production deployment.
[ ] Confirm deployment completes successfully.
[ ] Confirm the public site loads.
[ ] Confirm /admin loads.
[ ] Confirm /api remains available for Payload.
[ ] Confirm no R2 secret values appear in build logs.
[ ] Confirm no R2 secret values appear in browser source or client-side JavaScript.
```

Recommended local repo commands before pulling the checklist update:

```powershell
cd C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
git status --short --untracked-files=all
git pull
```

Recommended app validation commands after pull:

```powershell
cd C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
npm run lint
Remove-Item .\.next -Recurse -Force
npm run build
```

---

## 8. Payload Admin Upload Validation Checklist

Use a small, non-sensitive test image first.

Checklist:

```text
[ ] Open the production /admin route.
[ ] Log in as an authorized Payload admin user.
[ ] Open the Media collection.
[ ] Upload a small test image.
[ ] Confirm the upload succeeds without an admin error.
[ ] Open the uploaded media record.
[ ] Confirm the media URL points to the configured R2 public URL or custom media domain.
[ ] Open the media URL in a separate browser tab.
[ ] Confirm the image loads publicly.
[ ] Refresh the admin page.
[ ] Confirm the uploaded media record still appears.
+```
+
+Suggested test file:
+
+```text
+small JPG or PNG image
+under 1 MB
+no private or client-sensitive content
+```
+
+---
+
+## 9. Persistence Validation Checklist
+
+R2 is being used correctly only if media survives redeploys.
+
+Checklist:
+
+```text
+[ ] Upload a test image through /admin.
+[ ] Record the media record title and public URL in private validation notes.
+[ ] Trigger a fresh Vercel production redeploy.
+[ ] Reopen /admin after redeploy.
+[ ] Confirm the media record still exists.
+[ ] Open the public media URL again.
+[ ] Confirm the uploaded image still loads.
+[ ] Confirm the image was not dependent on Vercel's ephemeral filesystem.
+```
+
+---
+
+## 10. Public Route Validation Checklist
+
+After successful upload validation, confirm that public static routes remain safe.
+
+Checklist:
+
+```text
+[ ] Confirm / loads.
+[ ] Confirm /doulas loads.
+[ ] Confirm /events loads.
+[ ] Confirm /contact loads.
+[ ] Confirm /admin loads dynamically.
+[ ] Confirm /api loads dynamically.
+[ ] Confirm public pages do not expose secret R2 values.
+[ ] Confirm public pages continue to use fallback behavior where CMS data is unavailable.
+```
+
+Expected route behavior from the previous validation remains:
+
+```text
+/events                 Static
+/doulas                 Static
+/admin/[[...segments]]  Dynamic
+/api/[...slug]          Dynamic
+```
+
+---
+
+## 11. Failure Checks
+
+If upload fails, check these items before changing code:
+
+```text
+[ ] PAYLOAD_STORAGE_DRIVER is exactly r2.
+[ ] R2_BUCKET exactly matches the Cloudflare bucket name.
+[ ] R2_ACCESS_KEY_ID is present in the production environment.
+[ ] R2_SECRET_ACCESS_KEY is present in the production environment.
+[ ] R2_ENDPOINT uses the correct account-specific R2 S3 endpoint.
+[ ] R2_REGION is set to auto.
+[ ] R2_PUBLIC_URL is reachable from a browser.
+[ ] The R2 token has bucket permissions for the selected bucket.
+[ ] The Vercel deployment was rebuilt after the variables were added.
+[ ] The upload test is being run against the production deployment with the variables configured.
+```
+
+Do not paste real secret values into troubleshooting notes.
+
+---
+
+## 12. Rollback Checklist
+
+If R2 activation causes production upload issues, rollback should not require code changes.
+
+Preferred rollback:
+
+```text
+[ ] In Vercel, change PAYLOAD_STORAGE_DRIVER from r2 to local.
+[ ] Redeploy production.
+[ ] Confirm /admin loads.
+[ ] Confirm public routes still load.
+[ ] Leave R2 variables stored but inactive, or remove them if no longer needed.
+```
+
+Alternative rollback:
+
+```text
+[ ] Remove PAYLOAD_STORAGE_DRIVER from the production deployment environment.
+[ ] Redeploy production.
+[ ] Confirm the storage helper returns to local-safe behavior.
+```
+
+Important:
+
+```text
+This rollback is expected to disable durable R2 uploads.
+It is only a temporary safety measure if production upload validation fails.
+```
+
+---
+
+## 13. Security Rules
+
+Hard rules for this checkpoint:
+
+```text
+[x] Do not implement real secrets.
+[x] Do not commit production credentials.
+[x] Do not add secrets to env.example.
+[x] Do not add secrets to markdown exports.
+[x] Do not expose secret values through NEXT_PUBLIC variables.
+[x] Do not paste access keys into chat.
+[x] Do not run destructive storage tests against production media.
+```
+
+Recommended production practice:
+
+```text
+Use least-privilege R2 credentials.
+Rotate credentials if they are exposed.
+Keep production credentials in Vercel and a secure password manager only.
+Use a non-sensitive test image for first validation.
+```
+
+---
+
+## 14. Completion Criteria
+
+12CH is complete when:
+
+```text
+[x] A production credential setup checklist exists.
+[x] A Vercel environment variable checklist exists.
+[x] A Payload admin upload validation checklist exists.
+[x] A persistence-after-redeploy validation checklist exists.
+[x] A rollback checklist exists.
+[x] No real secrets were implemented.
+[x] No application code was changed.
+```
+
+Live R2 activation remains incomplete until real credentials are configured outside GitHub and upload validation is performed in production.
+
+---
+
+## 15. Recommended Next Checkpoint
+
+Recommended next checkpoint after this checklist:
+
+```text
+12CI — Payload production admin smoke test and first content entry validation
+```
+
+That checkpoint should only proceed after production environment variables and deployment access are available.
+
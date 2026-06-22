# 12CG — RDDA Payload Cloudflare R2 Storage Adapter Implementation Validation

**Project:** RDDA Platform  
**Checkpoint:** 12CG  
**Status:** Implemented and locally validated  
**Date:** 2026-06-21  

---

## 1. Purpose

This checkpoint implemented the first durable media storage path for the RDDA Payload CMS build.

The selected storage direction was:

```text
Cloudflare R2 / S3-compatible storage
```

The implementation was designed to remain safe for local development and build validation.

---

## 2. Implementation Summary

This checkpoint added Payload's S3-compatible storage adapter package and introduced an environment-gated R2 storage plugin.

R2 storage only activates when:

```text
PAYLOAD_STORAGE_DRIVER=r2
R2_BUCKET is set
R2_ACCESS_KEY_ID is set
R2_SECRET_ACCESS_KEY is set
R2_ENDPOINT is set
```

If those variables are not present, the storage plugin returns an empty plugin list and local builds continue using the default local-safe behavior.

---

## 3. Files Changed

```text
repo/package.json
repo/package-lock.json
repo/payload.config.ts
repo/env.example
repo/src/payload/storage/r2Storage.ts
exports/12CG_RDDA_Payload_R2_Storage_Adapter_Implementation_Validation.md
```

---

## 4. Dependency Added

Installed:

```text
@payloadcms/storage-s3@3.85.1
```

This matches the existing Payload package version family in the project.

---

## 5. Storage Helper Added

A new helper was added at:

```text
repo/src/payload/storage/r2Storage.ts
```

The helper exports:

```text
getStoragePlugins
```

The helper checks for required R2 environment variables before enabling storage.

If R2 is not configured, it returns:

```text
[]
```

This keeps local validation and non-R2 deployments safe.

---

## 6. Payload Config Integration

`payload.config.ts` was updated to import:

```text
getStoragePlugins
```

and include:

```text
plugins: getStoragePlugins()
```

This allows the Payload storage adapter to be enabled through environment variables without changing application code.

---

## 7. Environment Template Update

`repo/env.example` was updated with R2-related placeholders:

```text
R2_BUCKET
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_ENDPOINT
R2_PUBLIC_URL
R2_REGION
PAYLOAD_STORAGE_DRIVER
```

No real credentials were added.

---

## 8. Local Validation Commands

Commands were run from:

```text
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

### Git status

```powershell
git status --short --untracked-files=all
```

Confirmed changed files:

```text
M env.example
M package-lock.json
M package.json
M payload.config.ts
?? src/payload/storage/r2Storage.ts
```

### Lint

```powershell
npm run lint
```

Result:

```text
Passed
```

### Build

```powershell
Remove-Item .\.next -Recurse -Force
npm run build
```

Result:

```text
Passed
```

The successful build confirmed public routes remain static and Payload admin/API routes remain dynamic.

---

## 9. Route Validation

The build confirmed:

```text
/events                 Static
/doulas                 Static
/admin/[[...segments]]  Dynamic
/api/[...slug]          Dynamic
```

---

## 10. NPM Audit Note

After installing the storage package, npm reported dependency vulnerabilities.

This checkpoint intentionally did not run:

```text
npm audit fix --force
```

Reason:

```text
npm audit fix --force can introduce breaking package upgrades and should not be run during a focused storage adapter checkpoint without a separate dependency review.
```

A later dependency audit checkpoint may review and address audit findings safely.

---

## 11. Production Activation Requirements

To activate R2 in production, configure Vercel environment variables:

```text
PAYLOAD_STORAGE_DRIVER=r2
R2_BUCKET=<real bucket name>
R2_ACCESS_KEY_ID=<real access key>
R2_SECRET_ACCESS_KEY=<real secret key>
R2_ENDPOINT=<real R2 endpoint>
R2_PUBLIC_URL=<public media URL or custom domain>
R2_REGION=auto
```

Real values must not be committed.

---

## 12. Remaining Future Work

This checkpoint does not verify live R2 uploads because no real R2 credentials were added.

Future work should include:

```text
create Cloudflare R2 bucket
configure access keys
configure public media URL or custom domain
add production variables in Vercel
deploy with PAYLOAD_STORAGE_DRIVER=r2
upload test media in /admin
confirm uploaded media survives redeploys
confirm public image URLs work
```

---

## 13. Recommended Next Checkpoint

Recommended next checkpoint:

```text
12CH — Cloudflare R2 production credential setup and upload validation checklist
```

This should remain a checklist/validation checkpoint unless real credentials are available.

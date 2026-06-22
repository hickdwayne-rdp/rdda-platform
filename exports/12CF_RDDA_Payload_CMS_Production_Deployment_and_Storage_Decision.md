# 12CF — RDDA Payload CMS Production Deployment Setup Checklist and Storage Decision

**Project:** RDDA Platform  
**Checkpoint:** 12CF  
**Status:** Production deployment and storage decision record  
**Date:** 2026-06-21  

---

## 1. Purpose

This checkpoint documents the production deployment setup path for the RDDA Payload CMS implementation.

This checkpoint is a **decision, readiness, and launch-planning checkpoint**. It does not provision live services, add real secrets, connect a real database, implement payments, or enable production media uploads yet.

The goal is to make the production path clear before moving from a local/static-safe CMS implementation into a live CMS deployment.

---

## 2. Current CMS Implementation State

The RDDA platform now includes the following completed CMS-related checkpoints:

```text
12CA — Payload CMS foundation
12CB — Doula profile workflow
12CC — Event and training collections
12CD Phase 1 — Public doula CMS integration with fallback
12CD Phase 2 — Public events CMS integration with fallback
12CD Phase 3 — Events navigation exposure
12CE — Production readiness environment template and hardening notes
```

The current CMS implementation includes:

```text
Payload CMS foundation
Payload admin route
Payload API route
Users collection
Media collection
DoulaProfiles collection
ProfileChangeRequests collection
EventRequests collection
Events collection
TrainingModules collection
TrainingProgress collection
Public doula CMS integration with static fallback
Public events CMS integration with empty-safe fallback
Events navigation exposure
Production environment template
```

Current dynamic CMS routes:

```text
/admin/[[...segments]]
/api/[...slug]
```

Current public CMS-backed routes:

```text
/doulas
/events
```

---

## 3. Current Production Readiness Position

The app can build locally and keep public pages stable before CMS production setup.

Current public behavior:

```text
/doulas can fall back to static doula content when approved CMS profiles are unavailable.
/events can show a safe empty state when approved CMS event records are unavailable.
```

This is intentional. It allows the public website to remain usable while CMS infrastructure is being configured.

---

## 4. Production Database Decision

### Recommended database type

Use a managed Postgres database.

Payload is already configured with the Postgres adapter, so production should use a proper hosted Postgres provider rather than local storage or SQLite-style development storage.

### Acceptable providers

Recommended options:

```text
Neon
Supabase
Railway
Render
Vercel-compatible Postgres provider
```

### Required database characteristics

The selected provider should provide:

```text
DATABASE_URL
SSL support
automatic backups or snapshot support
reasonable launch-tier pricing
easy environment variable integration with Vercel
clear upgrade path if traffic grows
```

### Required environment variable

```text
DATABASE_URL
```

This value must be added in Vercel environment variables and must not be committed to Git.

---

## 5. Production Database Setup Checklist

Before production CMS use:

```text
Create managed Postgres database.
Copy the production DATABASE_URL.
Add DATABASE_URL to Vercel environment variables.
Confirm SSL requirements from the provider.
Run production deployment.
Confirm Payload can connect.
Open /admin.
Create first admin user.
Confirm /api responds.
Confirm CMS collection routes are reachable.
```

---

## 6. Production Media Storage Decision

### Problem

Local file storage is not safe for production media uploads.

Uploads such as:

```text
doula headshots
doula logos
event images
training files
future documents
```

must not depend on local server storage because serverless deployments and redeployments may not preserve local uploaded files.

### Preferred storage path

Preferred production storage decision:

```text
Cloudflare R2 using an S3-compatible Payload storage adapter path
```

Reasoning:

```text
R2 is S3-compatible.
R2 is portable.
R2 can be used with a custom public media URL.
R2 is generally cost-effective for small organizations.
An S3-compatible path keeps the project less locked into one deployment provider.
```

### Alternate storage path

Acceptable alternate production storage decision:

```text
Vercel Blob using Payload's Vercel Blob storage adapter path
```

Reasoning:

```text
Vercel Blob may be simpler if the whole project stays inside Vercel.
It may be easier to configure for a Vercel-only deployment.
It is less portable than an S3-compatible storage approach.
```

### Storage implementation status

Storage adapter implementation is **not completed in 12CF**.

12CF documents the decision and environment requirements only.

A later checkpoint should implement the storage adapter after the provider is selected and credentials are available.

---

## 7. Cloudflare R2 Environment Variables

If Cloudflare R2 is selected, production will need placeholders such as:

```text
R2_BUCKET
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_ENDPOINT
R2_PUBLIC_URL
PAYLOAD_STORAGE_DRIVER=r2
```

### Meaning

```text
R2_BUCKET             Bucket name
R2_ACCESS_KEY_ID      R2/S3-compatible access key
R2_SECRET_ACCESS_KEY  R2/S3-compatible secret key
R2_ENDPOINT           R2 S3 API endpoint used for uploads
R2_PUBLIC_URL         Public media URL or custom media domain
PAYLOAD_STORAGE_DRIVER Storage mode selector
```

No real values should be committed.

---

## 8. Vercel Blob Environment Variables

If Vercel Blob is selected instead, production will need:

```text
BLOB_READ_WRITE_TOKEN
PAYLOAD_STORAGE_DRIVER=vercel-blob
```

No real values should be committed.

---

## 9. Required Core Production Environment Variables

Production requires:

```text
PAYLOAD_SECRET
DATABASE_URL
NEXT_PUBLIC_SITE_URL
PAYLOAD_PUBLIC_SERVER_URL
```

### PAYLOAD_SECRET

Required for Payload CMS encryption, auth, and admin sessions.

Production value should be a long random secret.

### DATABASE_URL

Required for the Payload Postgres adapter.

### NEXT_PUBLIC_SITE_URL

Used by public CMS fetch helpers and media URL normalization.

Example:

```text
https://your-production-domain.ca
```

### PAYLOAD_PUBLIC_SERVER_URL

Used when public fetch helpers need a known API origin.

For same-origin production deployments, this can usually match `NEXT_PUBLIC_SITE_URL`.

---

## 10. Environment Template Status

The committed template should remain at:

```text
repo/env.example
```

This avoids the previous issue where `.env.example` was ignored by Git.

The committed template should include placeholders only.

No real production credentials should ever be committed.

---

## 11. Vercel Deployment Setup Checklist

Before a production CMS launch:

```text
Confirm Vercel project is connected to the GitHub repo.
Confirm root directory is set correctly for the Next app.
Confirm install command uses npm install.
Confirm build command uses npm run build.
Confirm output is handled by Next/Vercel defaults.
Add PAYLOAD_SECRET.
Add DATABASE_URL.
Add NEXT_PUBLIC_SITE_URL.
Add PAYLOAD_PUBLIC_SERVER_URL if needed.
Add storage variables if storage adapter is implemented.
Redeploy after environment variables are saved.
Confirm /admin loads.
Confirm /api loads.
Confirm public pages still load.
```

Because the app lives under:

```text
repo/
```

Vercel configuration must account for that app directory.

---

## 12. First Admin User Setup

After production deployment and database connection:

```text
Open /admin.
Create first admin user.
Store login information securely.
Confirm admin can access collections.
Confirm non-admin users do not have admin-level permissions.
Create test doula user if needed.
Create test site manager user if needed.
```

The first admin should not be a shared account.

---

## 13. CMS Seed Content Strategy

Initial production CMS content should be entered in this order:

```text
Media placeholders if storage is ready
DoulaProfiles
Events
TrainingModules
ProfileChangeRequests test item
EventRequests test item
TrainingProgress test item
```

Recommended public seed priority:

```text
approved published doula profiles
approved published events
```

The public site should be checked after each seed group.

---

## 14. Public Display Validation

After seed content exists:

```text
Visit /doulas.
Confirm approved/published doulas appear.
Confirm inactive or draft profiles do not appear.
Confirm rejected or pending changes do not appear.
Visit /events.
Confirm published events appear.
Confirm draft, pending, rejected, archived, or cancelled events do not appear.
Confirm fallback behavior still works if CMS returns no approved records.
```

---

## 15. Approval Workflow Validation

Before letting real doulas use the portal:

```text
Create a doula profile.
Assign profile ownership.
Log in or act as a doula user.
Submit a profile change request.
Confirm request is pending, not automatically public.
Approve request as site manager/admin.
Confirm approved content appears publicly only after review.
Submit an event request.
Confirm event request is pending, not automatically public.
Approve or create public event from approved request.
Confirm public event appears only when published.
```

---

## 16. Training Workflow Validation

Before relying on online training:

```text
Create a training module.
Publish the module.
Assign or expose module to a doula user.
Record training progress.
Mark module complete.
Confirm TrainingProgress records connect to the correct user and module.
Confirm incomplete progress does not falsely show as complete.
```

Certificate generation, automated reminders, and paid training access remain future scope unless separately implemented.

---

## 17. Production Do-Not-Launch Conditions

Do not treat the CMS as production-ready for real users until:

```text
DATABASE_URL is configured.
PAYLOAD_SECRET is configured.
First admin login is confirmed.
Admin access rules are reviewed.
Public access rules are reviewed.
Media storage adapter is implemented if uploads will be used.
Uploaded media survives deployments.
Backup/recovery approach is documented.
At least one production deploy has been validated.
Public /doulas and /events behavior is verified.
```

---

## 18. Security Rules

The repository must not include:

```text
real database URLs
real Payload secrets
real R2 keys
real S3 keys
real Vercel Blob tokens
real email provider tokens
real payment provider secrets
real private user credentials
```

The repository may include:

```text
env.example
placeholder variable names
deployment checklists
non-secret configuration notes
validation exports
```

---

## 19. Backup and Recovery Notes

The production database provider should support backups or snapshots.

Before launch, confirm:

```text
backup frequency
restore method
who has access
how long backups are retained
whether deleted CMS content can be recovered
```

For media storage, confirm:

```text
bucket access policy
public read behavior
upload permissions
delete behavior
backup or lifecycle policy
custom domain if used
```

---

## 20. Cost and Budget Notes

The CMS production cost may include:

```text
Vercel hosting
managed Postgres
media storage
domain/DNS
email provider in future
payment processor in future
```

The project should avoid adding paid services until the free or low-cost launch path is confirmed.

---

## 21. Recommended Provider Decision

Recommended initial production direction:

```text
Hosting: Vercel
Database: managed Postgres, preferably Neon or Supabase
Media storage: Cloudflare R2 via S3-compatible adapter
Fallback media option: Vercel Blob
```

This gives RDDA a practical, scalable path while keeping costs controlled.

---

## 22. Implementation Not Included in 12CF

12CF does not implement:

```text
storage adapter code
live R2 bucket
live Vercel Blob setup
live database
seed script
first admin account
email sending
payment processing
doula registration fee payments
event ticketing
training certificates
calendar feeds
```

---

## 23. Recommended Next Checkpoints

Recommended next checkpoints:

```text
12CG — Add Payload storage adapter implementation
12CH — Production database connection validation
12CI — CMS seed content plan
12CJ — Admin onboarding and approval workflow test
12CK — Production launch checklist
```

Recommended immediate next step:

```text
12CG — Add Payload storage adapter implementation
```

This should only proceed after choosing either:

```text
Cloudflare R2
Vercel Blob
```

---

## 24. 12CF Completion Criteria

12CF is complete when:

```text
repo/env.example includes production database and storage placeholders.
exports/12CF_RDDA_Payload_CMS_Production_Deployment_and_Storage_Decision.md is committed.
npm run lint passes.
npm run build passes.
Public routes remain static.
Admin/API routes remain dynamic.
Working tree is clean after commit.
```

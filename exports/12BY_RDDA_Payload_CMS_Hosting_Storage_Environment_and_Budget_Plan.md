# 12BY — RDDA Payload CMS Hosting, Storage, Environment, and Budget Plan

**Project:** RDDA Platform  
**Repository:** `hickdwayne-rdp/rdda-platform`  
**Document type:** Payload CMS hosting / storage / environment / budget planning  
**Status:** Planning checkpoint  
**Date:** 2026-06-21  
**Previous checkpoints:**  
- `12BT — RDDA Static to Payload CMS Transition Decision`
- `12BU — RDDA Payload CMS Scope and Non-Scope`
- `12BV — RDDA Payload CMS Roles and Permissions Matrix`
- `12BW — RDDA Payload CMS Collections and Data Model`
- `12BX — RDDA Payload CMS Approval Workflow Specification`

---

## 1. Purpose

This document defines the hosting, database, file storage, environment variable, deployment, backup, and budget plan for the RDDA Payload CMS portal.

The goal is to keep the first Payload CMS build realistic, low-cost, and aligned with the RDDA requirements already documented in 12BT through 12BX.

This document does not implement code. It defines the infrastructure assumptions that future implementation steps should follow.

---

## 2. Confirmed Project Constraints

The RDDA Payload CMS portal is being planned for:

```text
20 doulas now
up to approximately 30 doulas later
1–3 admins/site managers
1–5 events per month
small training library at first
possible training growth later
$0–$20/month preferred budget
```

The first build must support:

```text
login
roles
profile change requests
event requests
media uploads
approval workflow
training content
training completion/expiry tracking
admin-only history
```

The first build must not include:

```text
live payments
ticket sales
event RSVPs
full LMS
certificates
quizzes
SCORM
complex analytics
multi-association SaaS behaviour
```

Registration fee payments are documented as future scope only.

---

## 3. Payload Production Requirements

Payload CMS can run in a Next.js app, but production use requires more than the public static site currently uses.

Payload production deployment requires planning for:

```text
hosting
database
permanent file storage
environment variables
secret keys
secure cookies
access control testing
email provider if email notifications are enabled
```

Payload documentation confirms that Payload can be deployed anywhere Next.js can run, including Vercel, Netlify, DigitalOcean, AWS, and others. It also notes that most Payload projects need a database, file storage, an email provider, and a CDN.

Source reference:
- https://payloadcms.com/docs/production/deployment

---

## 4. Critical Infrastructure Change

The previous static RDDA site could be deployed without a database or persistent upload storage.

The Payload CMS portal cannot.

The new required services are:

```text
1. Next.js hosting
2. Postgres database
3. Permanent file/media storage
4. Secret/environment variable management
5. Optional email service
```

The public site may still keep many pages static or mostly static, but the following areas become CMS-driven:

```text
doulas
profile change requests
media/photo approvals
events
training
notifications
audit history
future payment records
```

---

## 5. Recommended Hosting Approach

### Recommended first choice

```text
Vercel Hobby/Free for initial deployment
```

Vercel is recommended because:

```text
the RDDA site is already a Next.js project
GitHub deployment is straightforward
preview deployments are useful
environment variables can be managed in the dashboard
Hobby/free tier may be enough for early RDDA use
```

Vercel's current pricing page lists Hobby as free forever and Pro as $20/month plus additional usage. This matches the RDDA preference to stay in the $0–$20/month range.

Source reference:
- https://vercel.com/pricing

### Vercel guardrail

The project should begin on Vercel Hobby/free if allowed by usage and project type, but must avoid hidden cost growth by:

```text
setting spend limits where available
monitoring bandwidth and function usage
avoiding unnecessary dynamic rendering
avoiding large public video hosting
using external file storage correctly
optimizing uploaded images
```

### Alternative hosting options

| Provider | Status | Notes |
|---|---|---|
| Vercel | Recommended first | Best fit for existing Next.js workflow |
| Netlify | Possible | Also supports Next.js, but less aligned with current workflow |
| DigitalOcean App Platform | Possible but caution | Payload warns some app hosts may use ephemeral filesystems |
| DigitalOcean Droplet | Possible later | More control, more server management |
| Cloudflare Workers/Pages | Possible later | More advanced integration path |
| Traditional VPS | Possible later | More maintenance responsibility |

### Anti-drift rule

Do not move away from Vercel unless there is a documented reason such as cost, deployment failure, serverless limitations, or Payload compatibility issue.

---

## 6. Recommended Database Approach

### Recommended first choice

```text
Neon Postgres
```

Reasons:

```text
Postgres works with Payload
Neon has a free plan suitable for prototypes and side projects
small RDDA user/content volume should fit early limits
easy connection through DATABASE_URL
scales later if the project outgrows free tier
```

Neon's current plan documentation lists a Free plan at $0/month. It also lists 0.5 GB storage per project, 100 CU-hours/project, 5 GB monthly public network transfer, and scale-to-zero after 5 minutes.

Source reference:
- https://neon.com/docs/introduction/plans

### Secondary database option

```text
Supabase Postgres
```

Supabase is also a strong candidate because it provides Postgres, storage, auth, and other backend services. However, since Payload will provide the CMS/auth layer, Supabase's extra platform features may be less necessary for the first RDDA Payload build.

Supabase may still be attractive if RDDA wants database and file storage from one vendor.

Source reference:
- https://supabase.com/pricing

### Database recommendation

Use this order unless implementation testing shows a blocker:

```text
1. Neon Postgres
2. Supabase Postgres
3. Other managed Postgres
```

### Database anti-drift rule

Do not use SQLite, local-only database storage, or browser/local storage for production Payload CMS data.

---

## 7. Recommended File and Media Storage Approach

### Why external storage is required

Payload documentation warns that some cloud app hosts use ephemeral filesystems, meaning uploaded files can disappear after restarts or shutdowns. Payload recommends persistent filesystem storage or third-party file storage such as S3-compatible storage, UploadThing, Vercel Blob, or similar.

Source reference:
- https://payloadcms.com/docs/production/deployment

### Recommended first choice

```text
Cloudflare R2
```

Reasons:

```text
low cost
generous free tier
S3-compatible pattern
good fit for images/files
separate from app hosting
does not rely on server filesystem
scales better than storing files in the repo
```

Cloudflare R2 pricing documentation currently lists a free tier with 10 GB-month storage, 1 million Class A operations, 10 million Class B operations, and free egress for Standard storage. It also lists Standard storage at $0.015/GB-month after free-tier usage.

Source reference:
- https://developers.cloudflare.com/r2/pricing/

### Secondary file storage option

```text
Vercel Blob
```

Vercel Blob is convenient if the app remains on Vercel. Vercel documentation describes Blob as storage for avatars, screenshots, cover images, videos, and files normally stored in systems like S3. Vercel's pricing page currently lists 1 GB/month included for Blob storage on the free tier, with usage-based pricing after included amounts.

Source references:
- https://vercel.com/docs/vercel-blob
- https://vercel.com/pricing

### Other possible options

| Provider | Status | Notes |
|---|---|---|
| Cloudflare R2 | Recommended first | Best low-cost storage fit |
| Vercel Blob | Good second option | Simplest if staying fully in Vercel ecosystem |
| Supabase Storage | Possible | Convenient if using Supabase Postgres |
| UploadThing | Possible | Payload has an official adapter |
| AWS S3 | Possible | Reliable but more account/billing complexity |

### File storage anti-drift rule

Do not store production uploads only inside:

```text
repo/public
local filesystem
temporary server filesystem
.next folder
GitHub repository
```

Public assets that are part of the designed site may stay in the repo, but doula uploads, profile images, event images, training files, and archived media must use permanent storage.

---

## 8. Recommended First-Build Infrastructure Stack

The recommended starting stack is:

```text
Hosting: Vercel Hobby/free
Database: Neon Postgres free
File storage: Cloudflare R2 free/low-cost
CMS: Payload CMS inside existing Next.js project
Email: none at first or Resend free tier later
Payments: future scope only
```

This stack best fits:

```text
$0–$20/month budget
small user base
approval workflow
media uploads
future scaling path
existing Next.js repo
```

---

## 9. Budget Plan

### Target budget

```text
$0–$20/month
```

### Expected early cost

The early deployment may be close to:

```text
$0/month to low single digits
```

depending on actual usage and provider terms.

### Expected cost risks

| Risk | Why it matters |
|---|---|
| Media storage growth | Training PDFs, images, logos, archives |
| Blob/image transformation usage | Image optimization can create usage costs |
| Function execution | Admin/API routes and dynamic content |
| Database size | Audit logs, media metadata, profile history |
| Email volume | If email notifications are added |
| Accidental public video hosting | Videos are larger and can create bandwidth/storage cost |

### Budget guardrails

1. Do not host large videos directly in Payload storage during the first build.
2. Prefer external video links for training videos.
3. Compress/resize uploaded images.
4. Limit max upload size.
5. Store PDFs reasonably, but avoid unnecessary duplicates.
6. Keep audit logs useful but not excessively verbose.
7. Use in-app notifications first; add email later only if needed.
8. Do not add payment processing until separately scoped.
9. Monitor provider usage monthly after launch.
10. Avoid paid add-ons unless approved.

---

## 10. Recommended Environment Variables

The first Payload CMS implementation will likely require environment variables similar to:

```text
DATABASE_URL
PAYLOAD_SECRET
NEXT_PUBLIC_SITE_URL
PAYLOAD_PUBLIC_SERVER_URL
BLOB_READ_WRITE_TOKEN or storage-provider equivalent
R2_ACCOUNT_ID
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_BUCKET
R2_PUBLIC_URL or CDN URL
```

Future optional variables:

```text
RESEND_API_KEY
EMAIL_FROM_ADDRESS
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```

Payment variables are future scope only and should not be added during the first build unless a later scope document approves payment implementation.

### Secret rules

Secrets must not be committed to GitHub.

Do not place real production secrets in:

```text
source files
export documents
README examples with real values
screenshots
commits
public issues
chat logs
```

Use placeholders in documentation:

```text
DATABASE_URL=postgres://...
PAYLOAD_SECRET=replace-with-secure-secret
```

---

## 11. Local Development Plan

Local development should support:

```text
npm install
npm run dev
npm run lint
npm run build
```

Payload development will also require:

```text
database connection
local or cloud storage configuration
admin user creation
environment file
```

Recommended local environment file:

```text
repo/.env.local
```

or whatever file Payload/Next.js implementation requires.

### Local database options

Recommended:

```text
Neon development database branch
```

Alternative:

```text
local Postgres using Docker
```

Because the project is currently being developed on Windows with OneDrive file-lock behaviour already observed, using a managed cloud development database may be simpler than adding Docker complexity immediately.

### Local media options

For early development, local upload storage may be acceptable only before production deployment.

Before production, uploaded media must use permanent external storage.

---

## 12. Deployment Plan

Recommended deployment flow:

```text
GitHub main branch
↓
Vercel deployment
↓
Vercel environment variables
↓
Neon Postgres database
↓
Cloudflare R2 media storage
```

### Deployment validation checklist

Before accepting deployment:

```text
npm run lint passes
npm run build passes
Payload admin route loads
admin user can log in
database connection works
media upload works
uploaded media persists after redeploy
public pages do not expose private content
public pages only show approved content
role permissions match 12BV
workflows match 12BX
```

---

## 13. Backup and Recovery Expectations

The first build should have basic backup expectations even if no paid backup plan is used immediately.

### Database

At minimum:

```text
know how to export the database
know how to restore the database
avoid irreversible destructive changes
avoid hard deletes where history matters
```

Neon's free tier has limited restore capability. If RDDA becomes dependent on the portal for production operations, database backup and restore should be revisited.

### Media

Media storage must preserve:

```text
approved public images
old archived profile images
logos
event images
training files
proof files if used
```

The implementation should avoid hard deletion of media unless there is a documented privacy, safety, legal, or administrative reason.

### Repo

The GitHub repository remains the source of truth for:

```text
code
configuration templates
planning documents
validation documents
implementation history
```

The GitHub repository is not the source of truth for uploaded doula media or CMS content once Payload is live.

---

## 14. Security Guardrails

Before production use:

```text
PAYLOAD_SECRET must be long and secure
production cookies must be secure
access control must be tested
admin accounts must be limited
doula accounts must only access their own records
public registration must remain disabled
pending/rejected/private content must not be public
file uploads must be restricted by type and size
payment card data must never be stored
```

Payload documentation specifically emphasizes using a strong secret and thoroughly testing access-control functions before production deployment.

Source reference:
- https://payloadcms.com/docs/production/deployment

---

## 15. File Upload Guardrails

Recommended file limits for first build:

```text
headshots: image only, max 5 MB
logos: image only, max 5 MB
event images: image only, max 5 MB
training PDFs: PDF only, max 25 MB
training proof files: PDF/image only, max 10 MB
```

Recommended image processing:

```text
resize large images
optimize public images
store alt text
preserve original or approved display version as needed
do not expose rejected uploads publicly
```

Recommended blocked file types:

```text
executables
scripts
unknown archives
unsafe file types
```

---

## 16. Email Notification Plan

### First build

Email is optional in the first build.

The first build may rely on:

```text
admin dashboard review queues
in-app notifications
manual review process
```

### Later enhancement

If email is needed, use a low-cost provider such as:

```text
Resend
Postmark
SendGrid
```

Recommended future email types:

```text
profile request submitted
profile request approved/rejected
event request submitted
event approved/rejected
training expiring soon
training expired
```

### Anti-drift rule

Do not block the first Payload implementation on email delivery.

---

## 17. Payment Infrastructure Plan

Payment processing remains future scope only.

Future payment module may require:

```text
Stripe account
Stripe Checkout
Stripe webhook route
PaymentRecords collection
MembershipFees collection
RegistrationRenewals collection
receipt links
paid/unpaid status
```

Permanent payment rule:

```text
RDDA must never store credit card numbers in Payload, GitHub, or the database.
```

Payment implementation must not be added until a future documented implementation checkpoint approves it.

---

## 18. Infrastructure Decision Summary

Recommended first-build infrastructure:

| Area | Decision |
|---|---|
| Hosting | Vercel Hobby/free |
| Database | Neon Postgres |
| File storage | Cloudflare R2 |
| CMS | Payload CMS |
| Auth | Payload auth |
| Email | In-app notifications first; email later |
| Payments | Future scope only |
| Videos | External links, not hosted files |
| Backups | Basic export/restore awareness first; revisit before heavy production reliance |

---

## 19. Rejected First-Build Infrastructure Choices

Do not use these during the first build:

```text
local-only production database
GitHub as media storage
repo/public for doula-uploaded production media
server filesystem-only uploads on ephemeral hosting
custom credit card forms
full LMS hosting stack
self-managed VPS unless required
paid enterprise CMS services
large direct video hosting
```

---

## 20. Drift Controls

Future implementation must follow these controls:

1. Do not introduce infrastructure that breaks the $0–$20/month budget without documenting approval.
2. Do not store production uploads on an ephemeral filesystem.
3. Do not store user-uploaded production files in GitHub.
4. Do not implement payments during the first Payload build.
5. Do not require email before core in-app workflows work.
6. Do not add large video hosting to Payload storage in the first build.
7. Do not expose secrets in code, commits, exports, or logs.
8. Do not bypass access-control testing before production.
9. Do not choose a database provider without a clear `DATABASE_URL` deployment path.
10. Do not change hosting/database/storage providers without a documented reason.

---

## 21. Recommended Next Checkpoint

After this document is committed, the next planning checkpoint should be:

```text
12BZ — RDDA Payload CMS Implementation Roadmap and Checkpoints
```

That document should define:

```text
exact build order
implementation slices
validation requirements
commit rules
lint/build requirements
fallback plan
first admin login milestone
first profile workflow milestone
first public CMS-driven content milestone
```

---

## 22. Completion Statement

This document establishes the hosting, storage, environment, and budget plan for the RDDA Payload CMS portal.

It should be treated as the source of truth for infrastructure planning unless replaced by a later documented decision.


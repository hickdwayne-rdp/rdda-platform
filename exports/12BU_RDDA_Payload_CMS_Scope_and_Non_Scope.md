# 12BU — RDDA Payload CMS Scope and Non-Scope

## Document Purpose

This document defines the approved scope and non-scope for the RDDA Payload CMS portal build.

It follows and depends on:

- `12BT_RDDA_Static_to_Payload_CMS_Transition_Decision.md`

12BT established the formal transition from the completed static public-site reconstruction phase into the Payload CMS portal and dynamic-content phase. 12BU narrows that transition into a controlled build scope so the project does not drift into unnecessary features, cost, complexity, or architectural changes.

This document is intended to act as a scope contract for all future Payload CMS implementation steps.

---

## Current Project State

The RDDA platform has completed a substantial static public-site build. The existing documentation and route implementation work remain valid as the public-facing baseline.

The project is now entering a new phase:

```text
Phase 2 — Payload CMS Portal and Dynamic Content System
```

The Payload CMS phase is approved because RDDA now requires features that cannot be handled safely or realistically by static pages alone, including:

- authenticated doula access,
- profile change requests,
- event submissions,
- training materials,
- training completion and expiry tracking,
- media uploads,
- approval workflows,
- admin-only historical records,
- public display of approved CMS-managed content.

---

## Selected Platform

The selected CMS platform is:

```text
Payload CMS
```

The selected architectural direction is:

```text
Existing RDDA Next.js website + Payload CMS admin portal + database + external file/media storage
```

Payload CMS is selected because it supports:

- Next.js-compatible implementation,
- TypeScript-oriented development,
- admin panel,
- authentication,
- role-based access control,
- collections,
- media uploads,
- approval workflows,
- custom data models,
- future expansion without requiring an immediate full custom portal.

---

## Scale Assumptions

The Payload CMS portal is being designed for the following expected scale:

| Area | Current / Expected Scale |
|---|---:|
| Doulas now | 20 |
| Doulas later | 30 |
| Admins / site managers | 1–3 |
| Events per month | 1–5 |
| Training content | Small at launch, expandable later |
| Budget target | $0–$20/month |

This scale supports a small-to-medium association portal. It does not require a large enterprise CMS, full SaaS platform, full LMS, or complex event-ticketing system.

---

## Budget Constraint

The approved budget target is:

```text
$0–$20/month
```

All implementation decisions must respect this budget unless a future architecture decision explicitly changes it.

The project should prioritize:

- free or low-cost hosting tiers,
- low-cost database options,
- low-cost external file storage,
- minimal infrastructure complexity,
- no paid CMS subscription unless later approved,
- no paid LMS/event/payment tools unless later approved.

Any feature that would likely increase monthly cost beyond the approved range must be documented as out of scope or deferred.

---

## Approved In-Scope Features

The following features are approved for the Payload CMS phase.

### 1. Authenticated User Login

The portal may include login access for approved users.

Approved user groups:

- doula,
- site manager,
- admin/developer,
- board member,
- trainer.

Authentication is approved only for legitimate RDDA portal users. Public self-registration is not approved at this stage.

---

### 2. Role-Based Permissions

Payload CMS must support role-based access control.

Approved roles:

```text
admin
siteManager
doula
boardMember
trainer
public
```

High-level permission intent:

| Role | Intended Access |
|---|---|
| Admin | Full system access |
| Site manager | Review, approve, reject, request revisions, manage approved content |
| Doula | View own account/profile and submit requests affecting own profile/events |
| Board member | View selected records and possibly approve selected items if later configured |
| Trainer | Add/update training content and view relevant training records |
| Public | View approved public content only |

Detailed permissions will be defined in a separate roles and permissions matrix.

---

### 3. Doula Profile Management

The CMS may store and manage approved public doula profile content.

Approved doula profile fields include:

- name,
- business name,
- bio,
- headshot,
- logo,
- phone,
- email,
- website,
- service areas,
- services offered,
- care categories:
  - birth,
  - postpartum,
  - fertility,
  - loss,
  - end-of-life,
- certifications,
- years of experience,
- languages,
- pricing,
- availability,
- social links,
- featured status,
- active/inactive status.

Public pages must only display profiles that are approved and active.

---

### 4. Profile Change Requests

Doulas may submit requests to modify their own public profile information.

Approved workflow:

```text
Doula submits profile change request
↓
Site manager receives notification / sees pending request
↓
Site manager reviews request
↓
Site manager approves, rejects, or requests revision
↓
Approved change updates the public-facing doula profile
↓
Prior version remains preserved for admin history
```

Direct doula editing of live public profile data is not approved for the first build.

---

### 5. Event Requests

Doulas may submit requests to add events to the RDDA site.

Approved event fields:

- title,
- date,
- time,
- location,
- description,
- host,
- cost,
- registration link,
- image,
- approved/published status.

Approved workflow:

```text
Doula submits event request
↓
Site manager reviews
↓
Site manager approves, rejects, or requests revision
↓
Approved event appears on public events page
```

The first build is for event listing only, not event registration or ticket sales.

---

### 6. Training Content

The CMS may include basic training content.

Approved training content types:

- PDF uploads,
- video links,
- external links,
- internal notes or descriptions,
- renewal/expiry information.

Approved training management features:

- trainer/admin adds training content,
- doula views assigned or available training,
- doula marks training complete,
- system stores completion date,
- system stores expiry/renewal date,
- admin/site manager/trainer can review training status.

The first training build must remain simple. It is not a full LMS.

---

### 7. Training Completion and Expiry Tracking

The portal may track:

- which doula completed which training,
- completion date,
- expiry date,
- renewal status,
- optional proof file,
- admin notes.

Approved status examples:

```text
notStarted
complete
expiringSoon
expired
renewed
```

Automated reminders may be considered later, but are not required for the first implementation unless explicitly approved.

---

### 8. Media Uploads

Doulas may upload media as part of requests.

Approved media types:

- headshots,
- business logos,
- event images,
- training proof files,
- PDFs or related training files.

Media uploads must be subject to admin/site manager approval before public display.

Uploaded public images should be optimized/resized where practical.

---

### 9. Admin-Only Media and Version Archive

Old images, prior profile data, and rejected/past submissions should be preserved in an admin-only area when practical.

This is approved for:

- accountability,
- content history,
- moderation history,
- recovery from accidental changes,
- future reference.

Public users and doulas should not have unrestricted access to archived historical records.

---

### 10. Approved Public Content Integration

The public RDDA site may be updated to read approved CMS content for selected areas.

Approved CMS-driven public areas:

- doula directory / doula profiles,
- events page,
- selected training-related public content if needed,
- selected media connected to approved profiles/events.

The public site must not display pending, rejected, inactive, draft, or admin-only content.

---

## Approved Technical Scope

The following technical work is in scope.

### Payload CMS Foundation

- install Payload CMS,
- configure Payload with the existing Next.js project,
- create Payload admin route,
- configure environment variables,
- connect to a database,
- configure media storage,
- create initial admin user path,
- confirm local development works,
- confirm lint/build validation.

---

### Database

A database is approved and required.

Preferred low-cost options:

- Neon Postgres,
- Supabase Postgres,
- another low-cost Postgres-compatible option if documented.

The selected database must fit the expected association scale and budget.

---

### File Storage

External file storage is approved and required for production media.

Reason:

```text
User-uploaded media should not rely on temporary deployment filesystem storage.
```

Potential low-cost options:

- Supabase Storage,
- UploadThing,
- Cloudflare R2,
- Vercel Blob,
- another documented low-cost object/file storage option.

The specific choice should be made in the hosting/storage/environment planning document.

---

### Email Notifications

Basic email notifications are approved, if they can be implemented within budget.

Approved notification examples:

- site manager notified of pending profile change request,
- site manager notified of pending event request,
- doula notified of approval,
- doula notified of rejection,
- doula notified that revision was requested.

Email notifications should not block the first CMS foundation build. They may be added after core workflows exist.

---

## Approved Future-Scope Items

The following items are recognized as legitimate future RDDA portal features, but they are not approved for the first Payload CMS build unless a later scope update or architecture decision explicitly moves them into active implementation.

### 1. Doula Registration Fee Payments

A future payment module may allow doulas to pay RDDA registration or membership fees through the portal.

Preferred future direction:

```text
Doula logs in
↓
Doula selects registration or membership fee payment
↓
Doula is redirected to a third-party checkout provider
↓
Payment provider processes payment securely
↓
Payload records paid/unpaid status and receipt link
↓
Admin/site manager can view payment status
```

The preferred future provider is likely Stripe Checkout or another hosted payment provider. RDDA should not store credit card numbers directly in Payload, the website database, or the application code.

Potential future payment records may include:

- doula account,
- fee year,
- amount,
- payment status,
- payment provider session ID,
- payment provider transaction ID,
- paid date,
- receipt URL,
- renewal due date,
- admin notes.

Payment work must remain separate from the first CMS foundation build because it introduces additional testing, security, bookkeeping, receipt, refund, and compliance considerations.

---

## Explicitly Out of Scope for First Payload Build

The following are not approved for the first Payload CMS build.

### 1. Payments for First Build

Out of scope for the first Payload CMS build:

- paid memberships,
- doula registration fee checkout,
- payment processing,
- event payments,
- training payments,
- invoices,
- Stripe integration,
- refund handling,
- accounting integrations,
- online store features.

Reason:

```text
Payments are a valid future phase, but they increase complexity, security review, testing, bookkeeping, receipt/refund handling, and potential cost.
```

Payments should not be implemented until the core portal is stable and a separate payment module scope has been approved.

---

### 2. Event Registration and Ticketing

Out of scope:

- event RSVPs,
- attendee management,
- ticket sales,
- capacity limits,
- waitlists,
- event check-in,
- automatic attendance tracking,
- recurring event engines.

Approved first-stage event scope is listing approved events only.

---

### 3. Full LMS Features

Out of scope:

- quizzes,
- exams,
- certificates,
- SCORM packages,
- course sequencing,
- graded assignments,
- formal transcripts,
- paid course enrollment,
- complex learner analytics.

Approved first-stage training scope is simple content plus completion/expiry tracking.

---

### 4. Public Self-Registration

Out of scope:

- anyone creating a public account,
- public doula signup without admin approval,
- public member registration,
- automated membership onboarding.

Approved first-stage user creation should be controlled by admin/site manager.

---

### 5. Multi-Association SaaS Platform

Out of scope:

- supporting multiple doula associations,
- tenant management,
- subscription tiers,
- SaaS billing,
- white-label association portals.

This build is for RDDA only.

---

### 6. Public Messaging or Chat

Out of scope:

- doula-to-client messaging,
- internal chat,
- contact inbox inside the portal,
- live chat,
- discussion forums.

---

### 7. Complex Analytics

Out of scope:

- custom dashboards beyond basic admin review,
- conversion tracking dashboards,
- advanced reports,
- member engagement analytics,
- event performance analytics.

Basic status lists and admin views are acceptable.

---

### 8. Mobile App

Out of scope:

- iOS app,
- Android app,
- React Native app,
- push notifications.

The portal should be web-based.

---

### 9. Unapproved CMS Migration of Every Page

Out of scope:

- converting every public page to CMS immediately,
- replacing completed static pages without need,
- rewriting stable static content for no functional reason.

Only approved CMS-driven areas should become dynamic during the first Payload phase.

---

## First-Build Priority Order

The first Payload build should follow this priority order:

```text
1. Payload CMS foundation
2. Database connection
3. Media storage decision/configuration
4. Admin user/auth setup
5. Roles foundation
6. Media collection
7. DoulaProfiles collection
8. ProfileChangeRequests collection
9. Profile approval workflow
10. EventRequests and Events collections
11. TrainingModules and TrainingProgress collections
12. Public-site integration for approved content
```

This order protects the build from becoming too large too quickly.

---

## Minimum Viable Payload Portal

The minimum useful version of the Payload portal is:

```text
/admin loads
admin can log in
roles exist
media uploads are configured
DoulaProfiles collection exists
ProfileChangeRequests collection exists
doula can submit a profile change request
site manager/admin can approve or reject it
approved profile data can be used by the public site
```

Events and training may follow after the profile workflow is proven.

---

## Public-Site Guardrails

The public RDDA website must continue to prioritize:

- clear public information,
- professional tone,
- accessibility,
- source-aligned content,
- approved content only,
- stable navigation,
- no accidental exposure of pending or private data.

No public page should display:

- pending profile change requests,
- rejected requests,
- draft data,
- inactive profiles,
- archived media,
- admin notes,
- private training records,
- private user information.

---

## Admin and Privacy Guardrails

The CMS will contain information that should not be public.

Protected information may include:

- admin notes,
- rejection reasons,
- previous profile versions,
- archived images,
- training completion records,
- inactive profile details,
- internal workflow status,
- user account details.

All implementation work must assume that private/admin fields require explicit access control.

---

## Anti-Drift Rules

Every future Payload-related task must check against this document.

A change should proceed only if it is:

```text
in scope,
consistent with 12BT,
consistent with the budget constraint,
consistent with approval-first publishing,
consistent with role-based access control,
small enough to validate cleanly.
```

If a requested change is not listed here, it must be handled as one of:

```text
out of scope,
future phase,
requires a new architecture decision,
requires explicit scope update.
```

---

## Documentation Still Required After 12BU

The following documents should be created after this one:

```text
12BV — RDDA Payload CMS Roles and Permissions Matrix
12BW — RDDA Payload CMS Collections and Data Model
12BX — RDDA Payload CMS Approval Workflow Specification
12BY — RDDA Payload CMS Hosting Storage Environment and Budget Plan
12BZ — RDDA Payload CMS Implementation Roadmap and Checkpoints
```

These documents should be completed before the first major Payload implementation step.

---

## Validation Requirements for Future Implementation

Each future implementation task should follow the established RDDA validation pattern:

```text
git pull
git status --short
make one controlled change
npm run lint
npm run build
git status --short
git add targeted files
git commit with clear message
git push
create export validation document where appropriate
```

Payload implementation may introduce additional validation steps, such as:

- confirming `/admin` loads,
- confirming database connection,
- confirming media upload behavior,
- confirming role access behavior,
- confirming public pages do not expose private records.

---

## Final Scope Decision

The approved first Payload CMS scope is:

```text
A controlled RDDA admin/doula portal that supports login, roles, doula profile change requests, event requests, simple training content, completion/expiry tracking, media uploads, approval workflows, admin-only history, and approved public content integration.
```

The approved first Payload CMS scope is not:

```text
A payment platform, event ticketing system, full LMS, public registration system, multi-association SaaS product, mobile app, chat system, or total rewrite of the completed public website.
```

Doula registration fee payments are documented as future scope only and require a later payment-module scope decision before implementation.

This document should be treated as the scope control reference for the Payload CMS phase.


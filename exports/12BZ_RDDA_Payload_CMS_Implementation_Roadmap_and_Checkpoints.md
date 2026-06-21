# 12BZ — RDDA Payload CMS Implementation Roadmap and Checkpoints

**Project:** RDDA Platform  
**Repository:** `hickdwayne-rdp/rdda-platform`  
**Document type:** Payload CMS implementation roadmap / checkpoint plan  
**Status:** Final planning checkpoint before implementation  
**Date:** 2026-06-21  
**Previous checkpoints:**  
- `12BT — RDDA Static to Payload CMS Transition Decision`
- `12BU — RDDA Payload CMS Scope and Non-Scope`
- `12BV — RDDA Payload CMS Roles and Permissions Matrix`
- `12BW — RDDA Payload CMS Collections and Data Model`
- `12BX — RDDA Payload CMS Approval Workflow Specification`
- `12BY — RDDA Payload CMS Hosting, Storage, Environment, and Budget Plan`

---

## 1. Purpose

This document defines the implementation roadmap for adding Payload CMS to the RDDA platform.

It is the final planning checkpoint before code implementation begins.

The goal is to move from planning to implementation without losing the controls established in 12BT through 12BY.

This roadmap defines:

- the build order
- implementation bundles
- validation rules
- commit checkpoints
- rollback points
- what must be proven at each stage
- what must not be added during the first CMS build

---

## 2. Project Direction Locked by Prior Documents

The previous planning documents establish the following:

```text
12BT: RDDA is moving from static-only to Payload CMS-backed dynamic content.
12BU: First-build scope and non-scope are defined.
12BV: Roles and permissions are defined.
12BW: Collections and data model are defined.
12BX: Approval workflows are defined.
12BY: Hosting, storage, environment, and budget plan are defined.
```

Implementation must follow these documents unless a later architecture decision explicitly changes them.

---

## 3. Implementation Strategy

The build should use a bundled but controlled approach.

Instead of one tiny commit per field or one massive all-at-once integration, use meaningful implementation bundles.

Recommended approach:

```text
12CA — Payload CMS Foundation Bundle
12CB — Core Doula Profile Bundle
12CC — Event and Training Bundle
12CD — Public CMS Integration Bundle
12CE — Production Readiness and Hardening Bundle
```

This speeds up the build while preserving checkpoint discipline.

---

## 4. Global Build Rules

Every implementation bundle must follow these rules:

1. Start from a clean working tree.
2. Pull latest `main` before starting.
3. Keep the change focused on the current checkpoint.
4. Do not introduce out-of-scope features.
5. Do not add payment processing during the first CMS build.
6. Do not add ticketing, RSVPs, quizzes, certificates, or full LMS behaviour.
7. Do not expose pending/rejected/admin-only content publicly.
8. Do not store secrets in GitHub.
9. Do not store uploaded production media in the repo.
10. Run lint and build before commit where possible.
11. Commit only after successful validation or clearly document why validation could not complete.
12. Create an export validation document for each implementation checkpoint.

---

## 5. Standard Pre-Implementation Commands

Before each implementation bundle, run:

```powershell
git pull
git status --short
git log --oneline -5
```

Expected result:

```text
working tree clean
local main aligned with origin/main
latest checkpoint visible in git log
```

If the working tree is not clean, stop and resolve before making changes.

---

## 6. Standard Validation Commands

After each implementation bundle, run from the repo/app workspace as appropriate:

```powershell
npm run lint
npm run build
```

If the project app lives inside `repo/`, use:

```powershell
cd .\repo
npm run lint
npm run build
```

If build artifacts cause OneDrive file-lock issues, use the established cleanup pattern:

```powershell
Remove-Item .\.next -Recurse -Force
npm run build
```

Only use cleanup when necessary.

---

## 7. Standard Commit Pattern

Each implementation bundle should end with:

```powershell
git status --short --untracked-files=all
git add "<changed files>"
git commit -m "<checkpoint message>"
git push
git status --short
git log --oneline -5
```

Commit messages should follow the checkpoint purpose.

Examples:

```text
Add Payload CMS foundation
Add Payload CMS doula profile workflow
Add Payload CMS events and training models
Connect public pages to approved Payload content
Add Payload CMS production readiness review
```

---

## 8. Export Validation Documents

Each implementation bundle should create a validation export document.

Recommended filenames:

```text
exports/12CA_RDDA_Payload_CMS_Foundation_Implementation_Validation.md
exports/12CB_RDDA_Payload_CMS_Doula_Profile_Workflow_Implementation_Validation.md
exports/12CC_RDDA_Payload_CMS_Events_Training_Implementation_Validation.md
exports/12CD_RDDA_Public_CMS_Content_Integration_Validation.md
exports/12CE_RDDA_Payload_CMS_Production_Readiness_Review.md
```

Each validation document should include:

```text
checkpoint purpose
files changed
features implemented
features intentionally not implemented
commands run
lint result
build result
known issues
next recommended checkpoint
```

---

## 9. Roadmap Overview

Recommended first implementation sequence:

```text
12CA — Payload CMS Foundation Bundle
12CB — Core Doula Profile Bundle
12CC — Event and Training Bundle
12CD — Public CMS Integration Bundle
12CE — Production Readiness and Hardening Bundle
```

After 12CE, future modules may be separately planned, such as:

```text
12CF+ — Email notification enhancement
12CG+ — Registration fee payment module
12CH+ — Advanced training renewal reminders
12CI+ — Board member approval expansion
```

Payment remains future scope and must not be included in 12CA through 12CE.

---

## 10. 12CA — Payload CMS Foundation Bundle

### Purpose

Install and configure the minimum Payload CMS foundation.

### Scope

12CA should include:

```text
Payload dependencies
Payload configuration
admin route
Users collection
Media collection
basic role field
environment example/template
local development notes
foundation validation export
```

### Target outcome

At the end of 12CA:

```text
/admin route exists
Payload config exists
Users collection exists
Media collection exists
basic auth model exists
project still lints/builds or known blockers are documented
```

### Collections included

```text
Users
Media
```

### Do not include in 12CA

```text
DoulaProfiles
ProfileChangeRequests
Events
TrainingModules
TrainingProgress
payments
Stripe
email sending
public CMS page migration
```

### Validation checklist

```text
npm install completed if dependencies changed
Payload config compiles
Users collection compiles
Media collection compiles
environment template does not contain real secrets
npm run lint attempted
npm run build attempted
validation export created
```

### Commit message

```text
Add Payload CMS foundation
```

### Rollback point

If Payload install or admin route causes major project instability, revert 12CA before adding any business collections.

---

## 11. 12CB — Core Doula Profile Bundle

### Purpose

Add the core doula profile and profile change request system.

### Scope

12CB should include:

```text
DoulaProfiles collection
ProfileChangeRequests collection
role-based access helpers
profile request statuses
basic approval fields
media relationships for headshot/logo
admin-only notes fields
validation export
```

### Target outcome

At the end of 12CB:

```text
approved public profile data has a defined collection
doula-submitted changes have a separate request collection
doulas cannot directly publish live profile edits
siteManager/admin approval fields exist
media approval relationships exist
```

### Collections included

```text
DoulaProfiles
ProfileChangeRequests
```

### Access expectations

```text
admin: full access
siteManager: review and approval access
doula: own linked profile/request access only
public: published active profiles only
```

### Do not include in 12CB

```text
event workflows
training workflows
payment processing
automatic emails
full public page migration unless needed for compile safety
```

### Validation checklist

```text
collections compile
access rules compile
profile request statuses align with 12BX
public/private field intent matches 12BW
npm run lint attempted
npm run build attempted
validation export created
```

### Commit message

```text
Add Payload CMS doula profile workflow
```

---

## 12. 12CC — Event and Training Bundle

### Purpose

Add event request, approved event, training module, and training progress models.

### Scope

12CC should include:

```text
EventRequests collection
Events collection
TrainingModules collection
TrainingProgress collection
status fields
relationships to Users and Media
basic access controls
validation export
```

### Target outcome

At the end of 12CC:

```text
event requests are separate from approved public events
training content can be created by trainer/admin
training completion and expiry can be tracked
no RSVP/ticketing/payment features exist
```

### Collections included

```text
EventRequests
Events
TrainingModules
TrainingProgress
```

### Do not include in 12CC

```text
Stripe
event ticketing
RSVPs
quizzes
certificates
SCORM
public training catalog
```

### Validation checklist

```text
event request workflow fields match 12BX
events public fields match 12BW
training module/progress fields match 12BW
access controls align with 12BV
npm run lint attempted
npm run build attempted
validation export created
```

### Commit message

```text
Add Payload CMS events and training models
```

---

## 13. 12CD — Public CMS Integration Bundle

### Purpose

Connect approved CMS content to public RDDA pages.

### Scope

12CD should include selected public CMS integration for:

```text
approved active doula profiles
approved published events
approved public media attached to published content
```

### Likely public routes affected

```text
/doulas
/find-a-doula or future directory route
/events if route exists or is added
```

The exact route list must respect the current route structure and current RDDA public website documentation.

### Target outcome

At the end of 12CD:

```text
public pages read only approved/published CMS content
pending requests do not appear publicly
rejected requests do not appear publicly
admin-only fields do not appear publicly
static content remains stable where CMS migration is not needed
```

### Do not include in 12CD

```text
public display of training progress
public display of admin notes
public display of user accounts
public display of audit logs
public display of pending media
payments
event RSVPs/ticketing
```

### Validation checklist

```text
public pages render safely
only approved content is queried/displayed
fallback states exist for empty CMS content
npm run lint attempted
npm run build attempted
validation export created
```

### Commit message

```text
Connect public pages to approved Payload content
```

---

## 14. 12CE — Production Readiness and Hardening Bundle

### Purpose

Review the Payload CMS system before relying on it for production content workflows.

### Scope

12CE should include:

```text
access control review
public/private data exposure review
environment variable review
media persistence review
build/deployment review
known issue list
production readiness validation export
```

### Target outcome

At the end of 12CE:

```text
roles are tested against 12BV
collections are checked against 12BW
workflows are checked against 12BX
hosting/storage/env plan is checked against 12BY
public pages do not leak private data
implementation is ready for initial admin/doula testing
```

### Do not include in 12CE

```text
new major features
payments
ticketing
full LMS features
unplanned role expansion
```

### Validation checklist

```text
admin login confirmed
doula role restriction confirmed
siteManager/admin review access confirmed
media approval behaviour checked
public content filtering checked
npm run lint passes
npm run build passes
validation export created
```

### Commit message

```text
Add Payload CMS production readiness review
```

---

## 15. Optional 12CF — Email Notification Enhancement

### Purpose

Add email delivery after in-app notification workflows are stable.

### Status

Future optional enhancement.

### Possible provider

```text
Resend
```

### Scope

```text
profile request submitted emails
profile approved/rejected emails
event submitted/approved/rejected emails
training expiry emails
```

### Guardrail

Email must not be required for the first CMS workflows to function.

---

## 16. Optional 12CG — Registration Fee Payment Module

### Purpose

Allow doulas to pay RDDA registration or membership fees.

### Status

Future scope only.

### Likely provider

```text
Stripe Checkout
```

### Possible collections

```text
MembershipFees
PaymentRecords
RegistrationRenewals
```

### Guardrails

```text
do not store credit card numbers
do not build custom card forms
do not implement before separate payment planning
do not include in 12CA through 12CE
```

---

## 17. Optional 12CH — Advanced Training Renewal Enhancement

### Purpose

Improve training expiry and renewal management after basic training tracking is stable.

### Possible scope

```text
90/60/30 day renewal reminders
dashboard filters for expired training
trainer review queue
renewal reports
```

### Guardrail

Do not turn the first build into a full LMS.

---

## 18. Required First Success Milestone

The first major success milestone is 12CA.

12CA is successful when:

```text
Payload is installed
Payload config exists
/admin route exists
Users collection exists
Media collection exists
project compiles or blockers are clearly documented
no real secrets are committed
validation export exists
```

Do not proceed to 12CB until 12CA is stable or the blocker is documented and accepted.

---

## 19. Minimum Viable Portal Milestone

The minimum viable portal is reached when:

```text
admin can log in
doula can log in
doula can submit a profile change request
site manager/admin can review request
approved request can update public profile data
pending/rejected content remains private
public page displays approved active profiles only
```

This likely occurs across 12CA, 12CB, and 12CD.

---

## 20. Implementation Stop Conditions

Stop and review if any of the following occur:

```text
Payload install conflicts heavily with current Next.js version
npm run build fails with unclear framework errors
auth routes expose public/private conflict
database provider cannot connect locally
media upload cannot persist outside local filesystem
role access cannot be enforced cleanly
public page accidentally exposes private records
monthly cost appears likely to exceed $20/month
implementation requires payment/ticketing/LMS features to continue
```

A stop condition should create a short review/export document before proceeding.

---

## 21. Known Project Environment Considerations

The RDDA project has already observed:

```text
Windows 11 development environment
OneDrive path
occasional OneDrive file-lock issues
Next.js/Turbopack build artifacts
.git object deletion prompts during some git operations
EPERM unlink issues in .next during some builds
```

Implementation should continue using the known workaround where appropriate:

```powershell
Remove-Item .\.next -Recurse -Force
npm run build
```

Do not use the workaround unless necessary.

---

## 22. Public Website Preservation Rules

The existing public website remains valuable and should not be unnecessarily rewritten.

During Payload integration:

```text
keep existing layout system where possible
preserve existing PageShell/PageContainer/SectionCard patterns where appropriate
do not redesign public pages unless required
do not replace stable static pages that do not need CMS data
do not remove completed route documentation
do not break navigation exposure already completed
```

CMS integration should be surgical:

```text
dynamic where needed
static where still appropriate
approved content only
```

---

## 23. Data Migration Considerations

The existing doula/profile scrape and public website content should be treated as baseline seed content.

Before importing real profiles:

```text
confirm field mapping
confirm image ownership/usage
confirm public contact fields
confirm service categories
confirm active/inactive status
confirm featured status
```

Initial data import may be manual or scripted later.

Do not import questionable/private data into public fields.

---

## 24. Environment Setup Before 12CA

Before or during 12CA, prepare for:

```text
Payload secret
database URL
local env file
storage provider decision
admin user creation path
```

Do not commit real secrets.

Example placeholder only:

```text
DATABASE_URL=postgres://user:password@host/database
PAYLOAD_SECRET=replace-with-long-secure-secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 25. First-Build Non-Scope Reminder

The following remain out of scope through 12CE:

```text
payments
Stripe
registration fee checkout
event RSVPs
ticketing
waitlists
quizzes
certificates
SCORM
mobile app
public self-registration
multi-association SaaS features
complex analytics
```

Future scope must be separately planned and approved.

---

## 26. Documentation Continuity Rule

Every future implementation response should reference the active checkpoint.

Example:

```text
We are now at 12CA — Payload CMS Foundation Implementation.
```

Each completed checkpoint should end by identifying the next checkpoint.

This keeps the project sequence clear.

---

## 27. Recommended Immediate Next Step

After this document is committed, proceed to:

```text
12CA — RDDA Payload CMS Foundation Implementation
```

12CA should begin with:

```powershell
git pull
git status --short
git log --oneline -5
```

Then implementation should inspect the current app structure before installing or modifying Payload-related files.

---

## 28. Completion Statement

This document completes the initial Payload CMS planning package.

With 12BT through 12BZ committed, the RDDA project has enough documentation to begin implementation without drifting.

The next checkpoint should be code implementation:

```text
12CA — RDDA Payload CMS Foundation Implementation
```


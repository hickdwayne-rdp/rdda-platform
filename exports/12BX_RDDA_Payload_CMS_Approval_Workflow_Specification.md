# 12BX — RDDA Payload CMS Approval Workflow Specification

**Project:** RDDA Platform  
**Repository:** `hickdwayne-rdp/rdda-platform`  
**Document type:** Payload CMS workflow specification  
**Status:** Planning checkpoint  
**Date:** 2026-06-21  
**Previous checkpoints:**  
- `12BT — RDDA Static to Payload CMS Transition Decision`
- `12BU — RDDA Payload CMS Scope and Non-Scope`
- `12BV — RDDA Payload CMS Roles and Permissions Matrix`
- `12BW — RDDA Payload CMS Collections and Data Model`

---

## 1. Purpose

This document defines the approval workflows for the RDDA Payload CMS portal.

Its purpose is to prevent workflow drift before implementation begins.

The portal must support controlled, approval-based changes for:

- doula profile updates
- profile photos and logos
- event submissions
- event images
- training module completion
- training expiry and renewal tracking
- notifications
- audit history

This document does not implement code. It defines the expected behaviour future implementation must follow.

---

## 2. Workflow Principles

All workflows must follow these principles:

1. Public content must only come from approved and published records.
2. A doula may submit changes but may not directly publish public-facing changes.
3. Site managers and admins are the primary approval authorities.
4. Board member approval is optional/future-configurable and must not be assumed unless enabled.
5. Trainer permissions are limited to training-related content and completion review.
6. Pending, rejected, archived, and admin-only content must not appear publicly.
7. Every important workflow action should create an audit event.
8. In-app notifications should be supported before email is required.
9. Email notifications may be added later but must not be required for the first functional CMS build.
10. Rejected or revision-requested submissions should include reviewer notes.
11. Hard deletion should be avoided when historical accountability is required.
12. Payment workflows are future scope only.

---

## 3. Role Summary for Workflows

The workflow model depends on the roles defined in 12BV.

| Role | Workflow function |
|---|---|
| Admin | Full authority across all workflows |
| Site manager | Main reviewer/approver for profiles, events, and media |
| Doula | Submits own profile changes, event requests, media, and training completion |
| Board member | View/review role only unless approval is later enabled |
| Trainer | Creates training modules and reviews training completion where assigned |
| Public | Can only view approved public content |

---

## 4. Standard Status Language

To avoid drift, status values should remain consistent across workflows where possible.

### Request statuses

Use for `ProfileChangeRequests` and `EventRequests`:

```text
draft
pendingReview
revisionRequested
approved
rejected
applied
cancelled
```

### Public content statuses

Use for approved public records such as `DoulaProfiles` and `Events`:

```text
draft
published
archived
hidden
```

### Media statuses

Use for uploaded media:

```text
pending
approved
rejected
archived
```

### Training progress statuses

Use for `TrainingProgress`:

```text
notStarted
inProgress
submitted
complete
expiringSoon
expired
waived
```

### Notification statuses

Use for `Notifications`:

```text
unread
read
archived
```

---

## 5. Workflow: Doula Profile Change Request

### Purpose

Allows a doula to request updates to their public profile without directly changing live public content.

### Collections involved

```text
Users
DoulaProfiles
ProfileChangeRequests
Media
Notifications
AuditLog
```

### Primary workflow

```text
Doula logs in
↓
Doula opens own profile request form
↓
Doula edits requested fields
↓
Doula optionally uploads new headshot/logo
↓
Request is saved as draft or submitted
↓
Submitted request becomes pendingReview
↓
Site manager/admin reviews
↓
Reviewer chooses approve, reject, or request revision
↓
If approved, changes are applied to DoulaProfiles
↓
Old values/images remain preserved in history/archive
↓
Public site updates from approved DoulaProfiles only
```

### Step-by-step behaviour

| Step | Actor | Status before | Action | Status after |
|---|---|---|---|---|
| 1 | Doula | none | Create profile change request | draft |
| 2 | Doula | draft | Submit for review | pendingReview |
| 3 | Site manager/admin | pendingReview | Review request | pendingReview |
| 4A | Site manager/admin | pendingReview | Approve | approved |
| 4B | Site manager/admin | pendingReview | Reject with reason | rejected |
| 4C | Site manager/admin | pendingReview | Request revision with notes | revisionRequested |
| 5A | System/admin workflow | approved | Apply approved changes to live profile | applied |
| 5B | Doula | revisionRequested | Edit and resubmit | pendingReview |
| 5C | Doula/site manager/admin | draft/revisionRequested | Cancel | cancelled |

### Approval requirements

Before approval, reviewer should confirm:

- requested name/business name is appropriate
- bio content is suitable for public display
- services and categories match RDDA structure
- phone/email/website/social links are intended for public display
- pricing and availability wording is acceptable
- image/logo is appropriate and usable
- no private/admin-only notes are being exposed
- no unsupported categories are being introduced

### Public update rule

Only after approval may the system update `DoulaProfiles`.

`ProfileChangeRequests` must never be the direct public data source.

### Revision request rule

If a request needs changes, the reviewer should use `revisionRequested`, not `rejected`, unless the submission is unsuitable or should not proceed.

### Rejection rule

Rejected requests should include a clear internal reason. Whether that reason is visible to the doula may be decided during implementation, but the reason should be stored.

### Audit events

Create audit entries for:

```text
profileChangeDraftCreated
profileChangeSubmitted
profileChangeRevisionRequested
profileChangeApproved
profileChangeRejected
profileChangeApplied
profileChangeCancelled
```

### Notifications

Recommended notifications:

| Trigger | Recipient |
|---|---|
| Request submitted | siteManager/admin |
| Revision requested | doula |
| Request approved | doula |
| Request rejected | doula |
| Approved changes applied | siteManager/admin and doula |

---

## 6. Workflow: Profile Image and Logo Approval

### Purpose

Ensures uploaded doula headshots and logos are approved before public display.

### Collections involved

```text
Media
ProfileChangeRequests
DoulaProfiles
Notifications
AuditLog
```

### Primary workflow

```text
Doula uploads image/logo inside a profile change request
↓
Media approvalStatus = pending
↓
ProfileChangeRequest status = pendingReview
↓
Site manager/admin reviews image
↓
Image is approved, rejected, or revision requested
↓
Approved image may be attached to public DoulaProfile
↓
Old image/logo is preserved as archived/admin-only media
```

### Media approval rules

| Action | Actor | Result |
|---|---|---|
| Upload image/logo | Doula | `approvalStatus = pending` |
| Approve image/logo | Site manager/admin | `approvalStatus = approved` |
| Reject image/logo | Site manager/admin | `approvalStatus = rejected` |
| Replace previous public image | System/admin workflow | Old media becomes `archived` or admin-only |
| Public display | Public site | Approved public media only |

### Image review checklist

Reviewer should confirm:

- image belongs to the doula/business
- image is appropriate for RDDA public use
- image quality is acceptable
- image is not misleading
- image does not expose private information
- alt text is present or can be added
- old public image is preserved before replacement

### Public display rule

Uploaded media must not become public solely because it was uploaded.

Public display requires:

```text
approvalStatus = approved
publicVisibility = public
connected to published public content
```

### Audit events

```text
mediaUploaded
mediaApproved
mediaRejected
mediaArchived
profileImageReplaced
profileLogoReplaced
```

### Notifications

| Trigger | Recipient |
|---|---|
| Image uploaded for approval | siteManager/admin |
| Image approved | doula |
| Image rejected | doula |
| Image archived/replaced | siteManager/admin |

---

## 7. Workflow: Event Request Approval

### Purpose

Allows doulas or authorized users to submit event listings for review before publication.

### Collections involved

```text
EventRequests
Events
Media
Users
Notifications
AuditLog
```

### Primary workflow

```text
Doula logs in
↓
Doula creates event request
↓
Request is saved as draft or submitted
↓
Submitted request becomes pendingReview
↓
Site manager/admin reviews
↓
Reviewer approves, rejects, or requests revision
↓
If approved, an Events record is created or updated
↓
Public event page reads from published Events only
```

### Step-by-step behaviour

| Step | Actor | Status before | Action | Status after |
|---|---|---|---|---|
| 1 | Doula/siteManager/admin | none | Create event request | draft |
| 2 | Submitter | draft | Submit for review | pendingReview |
| 3 | Site manager/admin | pendingReview | Review | pendingReview |
| 4A | Site manager/admin | pendingReview | Approve | approved |
| 4B | Site manager/admin | pendingReview | Reject with reason | rejected |
| 4C | Site manager/admin | pendingReview | Request revision | revisionRequested |
| 5A | System/admin workflow | approved | Create/update public Events record | published |
| 5B | Submitter | revisionRequested | Edit and resubmit | pendingReview |
| 5C | Submitter/site manager/admin | draft/revisionRequested | Cancel | cancelled |

### Event approval checklist

Reviewer should confirm:

- title is clear
- date and time are correct
- location is clear
- description is suitable for public display
- host is identified
- cost is clear
- registration link is valid if provided
- image is approved if used
- event aligns with RDDA public-site scope
- event does not require ticketing/payment handling through RDDA in first build

### Public event rule

Public event pages must read from `Events`, not directly from `EventRequests`.

### First-build limitation

No first-build support for:

```text
RSVPs
ticket sales
payment processing
waitlists
attendance tracking
calendar subscriptions
automatic reminders
```

### Audit events

```text
eventRequestDraftCreated
eventRequestSubmitted
eventRevisionRequested
eventRequestApproved
eventRequestRejected
eventPublished
eventCancelled
eventArchived
```

### Notifications

| Trigger | Recipient |
|---|---|
| Event submitted | siteManager/admin |
| Event approved | submitter |
| Event rejected | submitter |
| Revision requested | submitter |
| Event published | submitter and siteManager/admin |

---

## 8. Workflow: Event Image Approval

### Purpose

Ensures event images are reviewed before publication.

### Rule

Event images follow the same general media approval rules as profile images.

An uploaded event image must remain non-public until:

```text
approvalStatus = approved
publicVisibility = public
connected Events record is published
```

### Audit events

```text
eventImageUploaded
eventImageApproved
eventImageRejected
eventImagePublished
```

---

## 9. Workflow: Training Module Creation

### Purpose

Allows trainers and admins to create training content for doulas.

### Collections involved

```text
TrainingModules
Media
Users
Notifications
AuditLog
```

### Primary workflow

```text
Trainer/admin creates training module
↓
Adds title, description, PDF/video/link
↓
Defines whether renewal is required
↓
Defines renewal period if applicable
↓
Sets activeStatus
↓
Assigned doulas can access active modules
```

### Step-by-step behaviour

| Step | Actor | Action |
|---|---|---|
| 1 | Trainer/admin | Create training module |
| 2 | Trainer/admin | Add content and requirements |
| 3 | Trainer/admin | Attach file/link/video |
| 4 | Trainer/admin | Set renewal requirement |
| 5 | Trainer/admin | Activate module |
| 6 | Doula | Views assigned active module |

### Access rule

Training modules are not public website content.

They should be visible only to authenticated users with appropriate access.

### First-build limitation

No first-build support for:

```text
quizzes
certificates
SCORM
course sequencing
paid courses
public course catalog
automatic grading
```

### Audit events

```text
trainingModuleCreated
trainingModuleUpdated
trainingModuleActivated
trainingModuleArchived
trainingFileUploaded
```

### Notifications

| Trigger | Recipient |
|---|---|
| New required training assigned | assigned doula(s) |
| Training module updated | assigned doula(s), trainer/admin |
| Training archived | trainer/admin |

---

## 10. Workflow: Training Completion and Expiry

### Purpose

Tracks whether doulas have completed required training and whether renewal is due.

### Collections involved

```text
TrainingModules
TrainingProgress
Users
Media
Notifications
AuditLog
```

### Primary workflow

```text
Doula opens assigned training
↓
Doula reviews PDF/video/link
↓
Doula marks training complete or submits proof if required
↓
TrainingProgress becomes submitted or complete
↓
Trainer/admin may confirm completion if required
↓
System calculates expiry if renewal applies
↓
Notifications can be generated before expiry
```

### Step-by-step behaviour

| Step | Actor | Status before | Action | Status after |
|---|---|---|---|---|
| 1 | System/admin | none | Assign or create progress record | notStarted |
| 2 | Doula | notStarted | Starts training | inProgress |
| 3A | Doula | inProgress | Marks complete | complete or submitted |
| 3B | Doula | inProgress | Uploads proof | submitted |
| 4 | Trainer/admin | submitted | Confirms completion | complete |
| 5 | System/admin | complete | Calculates expiry | complete with expiresAt |
| 6 | System/admin | complete | Expiry window reached | expiringSoon |
| 7 | System/admin | expiringSoon | Expiry date passed | expired |
| 8 | Admin/trainer | any | Waives requirement | waived |

### Expiry logic

If renewal is required:

```text
expiresAt = completedAt + renewalPeriodMonths
```

Recommended warning windows:

```text
90 days before expiry
60 days before expiry
30 days before expiry
on expiry date
```

The exact warning window may be finalized during implementation.

### Public display rule

Training records are private.

The public website should not show:

```text
training completion
expiry status
proof files
trainer notes
waivers
```

unless RDDA later documents a public credential display decision.

### Audit events

```text
trainingStarted
trainingSubmitted
trainingProofUploaded
trainingCompleted
trainingCompletionConfirmed
trainingExpiringSoon
trainingExpired
trainingWaived
```

### Notifications

| Trigger | Recipient |
|---|---|
| Training assigned | doula |
| Completion submitted | trainer/admin |
| Completion confirmed | doula |
| Training expiring soon | doula, trainer/admin |
| Training expired | doula, trainer/admin |
| Training waived | doula, trainer/admin |

---

## 11. Workflow: Notifications

### Purpose

Supports in-app workflow messages and future email notification integration.

### Collections involved

```text
Notifications
Users
```

### First-build expectation

The first build may use in-app notifications only.

Email notifications should be optional and can be added after core workflows are stable.

### Notification lifecycle

```text
notification created
↓
recipient sees unread notification
↓
recipient marks notification read
↓
notification remains in history or is archived
```

### Read rules

| Actor | Permission |
|---|---|
| Recipient | Can read own notifications |
| Admin | Can read all |
| Site manager | Can read workflow-related notifications if needed |
| Public | No access |

### Notification creation triggers

Notifications should be created for:

```text
profile request submitted
profile request approved
profile request rejected
profile revision requested
event request submitted
event approved
event rejected
event revision requested
media approved
media rejected
training assigned
training expiring soon
training expired
```

### Anti-drift rule

Do not require email delivery for first-build workflow correctness.

---

## 12. Workflow: Audit History

### Purpose

Preserves accountability for meaningful administrative, approval, and workflow actions.

### Collections involved

```text
AuditLog
Users
```

### Audit lifecycle

```text
important action occurs
↓
AuditLog record is created
↓
admin/site manager can review history
↓
record is preserved
```

### Required audit properties

Each audit record should identify:

```text
what happened
who did it
which collection was affected
which record was affected
when it happened
summary of the action
optional metadata
```

### Required audit triggers

Audit events should be created for:

```text
user role changed
profile request submitted
profile request approved
profile request rejected
profile changes applied
media uploaded
media approved
media rejected
media archived
event request submitted
event request approved
event published
event rejected
training module created
training completion confirmed
training expired
future payment recorded
```

### Anti-drift rule

Audit history is not public content and must not be exposed on public routes.

---

## 13. Workflow: Admin-Only Media and Version History

### Purpose

Preserves historical profile images, logos, and important previous versions.

### Required behaviour

When a public profile image/logo is replaced:

```text
current public media remains preserved
↓
new media is approved
↓
DoulaProfile is updated to use new media
↓
old media becomes archived/adminOnly
↓
audit entry records the replacement
```

### Admin-only history may include:

```text
old profile headshots
old business logos
rejected image uploads
previous approved profile values
review notes
approval dates
approver identity
```

### Anti-drift rule

Hard-deleting old public images should be avoided unless there is a documented privacy, legal, or safety reason.

---

## 14. Workflow: Future Payment Module

### Purpose

Payment processing is future scope only.

12BU and 12BW capture registration fee payments as a future module, but the first CMS build must not include live payment processing.

### Future payment workflow concept

```text
Doula logs in
↓
Doula sees registration fee due
↓
Doula clicks pay
↓
Stripe Checkout or equivalent handles payment
↓
Payment confirmation returns to RDDA system
↓
Payload records payment status
↓
Admin can view paid/unpaid status
```

### First-build restrictions

Do not implement during first build:

```text
Stripe checkout
payment forms
credit card collection
refund tools
invoice generation
accounting integration
automatic payment reminders
```

### Permanent rule

RDDA Payload CMS must never store credit card numbers.

---

## 15. Cross-Workflow Notification Table

| Trigger | Recipient | Required first build? |
|---|---|---:|
| Profile request submitted | Site manager/admin | Yes |
| Profile request approved | Doula | Yes |
| Profile request rejected | Doula | Yes |
| Profile revision requested | Doula | Yes |
| Event request submitted | Site manager/admin | Yes |
| Event approved | Submitter | Yes |
| Event rejected | Submitter | Yes |
| Event revision requested | Submitter | Yes |
| Media uploaded | Site manager/admin | Yes |
| Media approved/rejected | Uploader | Yes |
| Training assigned | Doula | Maybe |
| Training submitted | Trainer/admin | Maybe |
| Training expiring soon | Doula/admin | Later acceptable |
| Payment due | Doula | Future only |
| Payment received | Doula/admin | Future only |

---

## 16. Cross-Workflow Audit Table

| Action | Audit required? |
|---|---:|
| User role changed | Yes |
| Profile request submitted | Yes |
| Profile request approved | Yes |
| Profile request rejected | Yes |
| Profile revision requested | Yes |
| Profile applied to public record | Yes |
| Media uploaded | Yes |
| Media approved | Yes |
| Media rejected | Yes |
| Media archived | Yes |
| Event request submitted | Yes |
| Event request approved | Yes |
| Event published | Yes |
| Event rejected | Yes |
| Training module created | Yes |
| Training module archived | Yes |
| Training completion confirmed | Yes |
| Training expired | Yes |
| Future payment recorded | Yes, future only |

---

## 17. Public Site Safety Rules

Public pages may display only:

```text
published active DoulaProfiles
published visible Events
approved public Media
```

Public pages must not display:

```text
ProfileChangeRequests
EventRequests
pending media
rejected media
admin notes
audit logs
notifications
user account records
training records
payment placeholders
archived-only content
```

---

## 18. First-Build Workflow Priorities

Recommended implementation priority:

```text
1. User login and roles
2. Media upload with approval status
3. DoulaProfiles public/private separation
4. ProfileChangeRequests approval workflow
5. EventRequests approval workflow
6. Events publication workflow
7. TrainingModules
8. TrainingProgress
9. Notifications
10. AuditLog
```

Minimum viable workflow:

```text
1. Admin can log in
2. Doula can log in
3. Doula can submit profile change request
4. Site manager/admin can approve or reject
5. Approved profile updates public DoulaProfiles
6. Pending/rejected content remains private
```

---

## 19. Open Implementation Questions

The following should be answered during implementation planning:

1. Should site managers manually click “apply approved changes,” or should approval automatically apply them?
2. Should rejected reasons always be visible to doulas, or can some notes remain internal only?
3. Should board members only view requests, or can some approve if configured?
4. Should email notifications be implemented in the first build or after in-app notifications work?
5. Should training completion be self-attested or always trainer/admin confirmed?
6. What should the default training expiry warning window be?
7. Should old profile text versions be stored using Payload versions, a separate archive record, or both?
8. Should event publication happen immediately on approval or allow a scheduled publish date?
9. Should media approval be independent or bundled into profile/event approval?
10. Should public profile changes be reviewed side-by-side against current profile values?

---

## 20. Drift Controls

Future implementation must follow these controls:

1. Do not let profile requests directly become public content.
2. Do not let event requests directly become public content.
3. Do not let uploaded media become public without approval.
4. Do not expose training progress publicly.
5. Do not expose audit logs publicly.
6. Do not expose notifications publicly.
7. Do not implement payments during the first CMS build.
8. Do not add ticketing, RSVPs, or full LMS behaviour during the first CMS build.
9. Do not bypass the roles and permissions defined in 12BV.
10. Do not add workflow statuses without documenting them.
11. Do not add new workflow branches without updating this document.
12. Do not remove admin history unless a documented reason exists.

---

## 21. Recommended Next Checkpoint

After this document is committed, the next planning checkpoint should be:

```text
12BY — RDDA Payload CMS Hosting, Storage, Environment, and Budget Plan
```

That document should define:

```text
database provider
file storage provider
hosting assumptions
environment variables
local development needs
deployment constraints
budget guardrails
backup considerations
```

---

## 22. Completion Statement

This document establishes the approval workflow specification for the RDDA Payload CMS portal.

It should be treated as the source of truth for profile, event, media, training, notification, and audit workflow behaviour unless superseded by a later documented decision.


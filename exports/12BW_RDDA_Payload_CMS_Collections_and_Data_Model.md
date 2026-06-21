# 12BW — RDDA Payload CMS Collections and Data Model

**Project:** RDDA Platform  
**Repository:** `hickdwayne-rdp/rdda-platform`  
**Document type:** Payload CMS data model / collection schema planning  
**Status:** Planning checkpoint  
**Date:** 2026-06-21  
**Previous checkpoints:**  
- `12BT — RDDA Static to Payload CMS Transition Decision`
- `12BU — RDDA Payload CMS Scope and Non-Scope`
- `12BV — RDDA Payload CMS Roles and Permissions Matrix`

---

## 1. Purpose

This document defines the initial Payload CMS collections and data relationships for the RDDA portal.

The purpose of this checkpoint is to prevent data-model drift before implementation begins.

The RDDA project is moving from a static-only public website to a Payload CMS-backed system for:

- doula login
- doula profile management requests
- site manager review and approval
- event submissions
- approved public events
- training modules
- training completion and renewal tracking
- media uploads and admin-only media history
- audit/history tracking
- future registration fee payment tracking

This document does not implement code. It defines the intended collection structure that future implementation steps should follow.

---

## 2. Guiding Rules

The data model must follow these rules:

1. Public pages may only display approved/published content.
2. Doulas may submit changes but may not directly publish live profile changes.
3. Site managers and admins control approval, rejection, revision requests, and publishing.
4. Old profile images, logos, and important historical records must be preserved in admin-only history.
5. Training content starts simple: PDFs, videos, links, completion status, and expiry tracking.
6. Payment processing is future scope only, but the data model may reserve clean space for future payment records.
7. The first build must stay compatible with the $0–$20/month hosting target.
8. No first-build feature should require a full LMS, ticketing platform, payment processor, or multi-association SaaS system.
9. Collection names and fields should be stable, readable, and simple enough to maintain.
10. Any future change to this model must be documented before implementation.

---

## 3. Initial Collection List

The initial Payload CMS collection set should be:

```text
Users
DoulaProfiles
ProfileChangeRequests
EventRequests
Events
TrainingModules
TrainingProgress
Media
AuditLog
Notifications
```

Future-scope collection placeholders:

```text
MembershipFees
PaymentRecords
RegistrationRenewals
```

These future payment-related collections should not be implemented in the first CMS foundation build unless RDDA formally changes the scope.

---

## 4. Collection: Users

### Purpose

Stores authenticated portal users.

This collection controls login, user identity, and role-based permissions.

### Primary roles

```text
admin
siteManager
doula
boardMember
trainer
```

Public users are not stored here unless a future public registration feature is approved.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| email | email | Yes | No | Used for login |
| password | auth/password | Yes | No | Managed by Payload auth |
| firstName | text | Yes | No | Admin-visible |
| lastName | text | Yes | No | Admin-visible |
| role | select | Yes | No | `admin`, `siteManager`, `doula`, `boardMember`, `trainer` |
| activeStatus | select | Yes | No | `active`, `inactive`, `suspended` |
| relatedDoulaProfile | relationship | No | No | Links doula user to one DoulaProfile |
| lastLoginAt | datetime | No | No | Optional tracking |
| notes | textarea | No | No | Admin-only notes |

### Access rules

| Action | Rule |
|---|---|
| Create | Admin only |
| Read | Admin and siteManager; user can read limited own account |
| Update | Admin; user can update limited own basic info if allowed |
| Delete | Admin only |
| Public read | No |

### Anti-drift rule

Doulas must not be able to create their own public account without admin/site manager involvement during the first build.

---

## 5. Collection: DoulaProfiles

### Purpose

Stores the approved public doula profile information.

This is the collection the public website reads from.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| name | text | Yes | Yes | Public display name |
| businessName | text | No | Yes | Business/practice name |
| slug | text | Yes | Yes | URL-safe identifier |
| bio | richText/textarea | Yes | Yes | Public bio |
| headshot | upload relationship | No | Yes | Approved image only |
| logo | upload relationship | No | Yes | Approved logo only |
| phone | text | No | Yes/Maybe | Public only if approved |
| email | email | No | Yes/Maybe | Public only if approved |
| website | text | No | Yes | External website |
| serviceAreas | array/select | No | Yes | Red Deer, Central Alberta, etc. |
| servicesOffered | array/select | No | Yes | Birth, postpartum, etc. |
| careCategories | array/select | No | Yes | Birth, postpartum, fertility, loss, end-of-life/grief, family transitions |
| certifications | array/text | No | Yes | Certification list |
| yearsExperience | number/text | No | Yes | Could be text if flexible wording needed |
| languages | array/text | No | Yes | Spoken/service languages |
| pricing | textarea | No | Yes/Maybe | Optional public pricing |
| availability | textarea/select | No | Yes/Maybe | Optional public availability |
| socialLinks | group/array | No | Yes | Facebook, Instagram, LinkedIn, etc. |
| featuredStatus | checkbox/select | Yes | Yes | Controls featured display |
| activeStatus | select | Yes | Yes | `active`, `inactive`, `hidden` |
| publishedStatus | select | Yes | Yes | `draft`, `published`, `archived` |
| ownerUser | relationship | No | No | Related doula user |
| lastApprovedAt | datetime | No | No | Admin history |
| lastApprovedBy | relationship | No | No | User who approved latest public version |
| adminNotes | textarea | No | No | Admin-only |

### Recommended select values

#### `careCategories`

```text
birth
postpartum
fertility
loss
familyTransitions
endOfLifeGrief
```

#### `activeStatus`

```text
active
inactive
hidden
```

#### `publishedStatus`

```text
draft
published
archived
```

### Access rules

| Action | Rule |
|---|---|
| Public read | Published and active profiles only |
| Doula read | Own linked profile |
| Doula update | No direct live update; must use ProfileChangeRequests |
| Site manager update | Yes |
| Admin update | Yes |
| Delete | Admin only, preferably avoid hard delete |

### Anti-drift rule

`DoulaProfiles` stores approved live content. It should not be used as the doula submission form.

---

## 6. Collection: ProfileChangeRequests

### Purpose

Stores proposed profile edits submitted by doulas.

This collection protects the public site by separating requested changes from approved live profile data.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| requestingUser | relationship | Yes | No | Doula user |
| relatedProfile | relationship | Yes | No | Existing DoulaProfile |
| requestedChanges | group/json | Yes | No | Proposed profile edits |
| requestedHeadshot | upload relationship | No | No | Pending approval |
| requestedLogo | upload relationship | No | No | Pending approval |
| status | select | Yes | No | Workflow state |
| submittedAt | datetime | Yes | No | Submission date |
| reviewedBy | relationship | No | No | Site manager/admin |
| reviewedAt | datetime | No | No | Review date |
| reviewerNotes | textarea | No | No | Notes visible to reviewer/admin |
| doulaMessage | textarea | No | No | Optional message from doula |
| rejectionReason | textarea | No | No | Required if rejected |
| revisionRequestNotes | textarea | No | No | Required if revision requested |
| approvedAt | datetime | No | No | Approval date |
| appliedToProfileAt | datetime | No | No | When live profile was updated |

### Recommended status values

```text
draft
pendingReview
revisionRequested
approved
rejected
applied
cancelled
```

### Access rules

| Action | Rule |
|---|---|
| Create | Doula for own profile; siteManager/admin |
| Read | Requesting doula for own requests; siteManager/admin |
| Update | Doula may edit draft/revision-requested only; siteManager/admin may review |
| Approve/reject | SiteManager/admin only |
| Delete | Admin only |
| Public read | No |

### Anti-drift rule

Approval must be explicit. A submitted request must not automatically update `DoulaProfiles`.

---

## 7. Collection: EventRequests

### Purpose

Stores event submissions from doulas or authorized users before approval.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| submittedBy | relationship | Yes | No | User submitting request |
| title | text | Yes | No | Proposed event title |
| date | date | Yes | No | Event date |
| startTime | text/datetime | No | No | Flexible if time wording varies |
| endTime | text/datetime | No | No | Optional |
| location | text | No | No | Physical or online |
| description | richText/textarea | Yes | No | Proposed event description |
| host | text/relationship | No | No | Host name or profile |
| cost | text | No | No | Free, paid, donation, etc. |
| registrationLink | text | No | No | External registration link |
| image | upload relationship | No | No | Pending event image |
| status | select | Yes | No | Workflow state |
| submittedAt | datetime | Yes | No | Submission timestamp |
| reviewedBy | relationship | No | No | Site manager/admin |
| reviewedAt | datetime | No | No | Review timestamp |
| reviewerNotes | textarea | No | No | Admin/site manager notes |
| rejectionReason | textarea | No | No | If rejected |
| revisionRequestNotes | textarea | No | No | If revision requested |
| approvedEvent | relationship | No | No | Links to created Events record |

### Recommended status values

```text
draft
pendingReview
revisionRequested
approved
rejected
published
cancelled
```

### Access rules

| Action | Rule |
|---|---|
| Create | Doula, siteManager, admin |
| Read | Submitter for own requests; siteManager/admin; boardMember if allowed |
| Update | Submitter while draft/revision-requested; siteManager/admin |
| Approve/reject | SiteManager/admin; boardMember only if later enabled |
| Delete | Admin only |
| Public read | No |

### Anti-drift rule

`EventRequests` are not public events. Public event pages must read from `Events`, not directly from pending requests.

---

## 8. Collection: Events

### Purpose

Stores approved public event records.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| title | text | Yes | Yes | Public title |
| slug | text | Yes | Yes | URL-safe identifier |
| date | date | Yes | Yes | Event date |
| startTime | text/datetime | No | Yes | Public display |
| endTime | text/datetime | No | Yes | Optional |
| location | text | No | Yes | Public location/online |
| description | richText/textarea | Yes | Yes | Public description |
| host | text/relationship | No | Yes | Host display |
| cost | text | No | Yes | Free/paid/etc. |
| registrationLink | text | No | Yes | External registration |
| image | upload relationship | No | Yes | Approved event image |
| eventStatus | select | Yes | Yes | `scheduled`, `cancelled`, `completed`, `hidden` |
| publishedStatus | select | Yes | Yes | `draft`, `published`, `archived` |
| sourceRequest | relationship | No | No | Related EventRequest |
| approvedBy | relationship | No | No | Approving user |
| approvedAt | datetime | No | No | Approval date |
| adminNotes | textarea | No | No | Admin-only notes |

### Access rules

| Action | Rule |
|---|---|
| Public read | Published, scheduled/visible events only |
| Create | SiteManager/admin |
| Update | SiteManager/admin |
| Delete | Admin only, preferably avoid hard delete |
| Doula direct publish | No |

### Anti-drift rule

No RSVP, ticketing, or payment handling in first-build `Events`.

---

## 9. Collection: TrainingModules

### Purpose

Stores training materials and renewal requirements.

Training starts as simple content: PDFs, videos, links, and renewal timelines.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| title | text | Yes | No | Training title |
| slug | text | Yes | No | Internal identifier |
| description | richText/textarea | No | No | Training details |
| contentType | select | Yes | No | PDF, video, link, mixed |
| file | upload relationship | No | No | PDF/document |
| videoUrl | text | No | No | External video link |
| externalLink | text | No | No | External resource |
| requiredFor | array/select | No | No | Which roles/users require it |
| renewalRequired | checkbox | Yes | No | Whether expiry applies |
| renewalPeriodMonths | number | No | No | Example: 12, 24 |
| activeStatus | select | Yes | No | `active`, `inactive`, `archived` |
| createdBy | relationship | No | No | Trainer/admin |
| adminNotes | textarea | No | No | Admin/trainer notes |

### Access rules

| Action | Rule |
|---|---|
| Create | Trainer/admin |
| Read | Assigned doulas, trainer, siteManager/admin |
| Update | Trainer/admin |
| Delete | Admin only |
| Public read | No |

### Anti-drift rule

No quizzes, certificates, SCORM, payment-gated training, or full LMS behavior in the first build.

---

## 10. Collection: TrainingProgress

### Purpose

Tracks doula completion and expiry status for training modules.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| doulaUser | relationship | Yes | No | User completing training |
| relatedProfile | relationship | No | No | Optional linked DoulaProfile |
| trainingModule | relationship | Yes | No | Related TrainingModule |
| status | select | Yes | No | Progress/expiry status |
| completedAt | datetime | No | No | Completion date |
| expiresAt | datetime | No | No | Renewal due/expiry date |
| proofFile | upload relationship | No | No | Optional uploaded proof |
| confirmedBy | relationship | No | No | Trainer/admin confirmation |
| confirmedAt | datetime | No | No | Confirmation timestamp |
| notes | textarea | No | No | Admin/trainer notes |

### Recommended status values

```text
notStarted
inProgress
submitted
complete
expiringSoon
expired
waived
```

### Access rules

| Action | Rule |
|---|---|
| Doula read | Own training progress |
| Doula update | Own completion/proof submission if allowed |
| Trainer read | Assigned/managed training records |
| Trainer update | Completion confirmation if allowed |
| Site manager/admin | Full read/update |
| Public read | No |

### Anti-drift rule

Training status should not be publicly displayed unless RDDA later makes a documented decision to show public credentials or verification.

---

## 11. Collection: Media

### Purpose

Stores uploaded files, images, logos, training files, and archived media.

Payload may use a standard upload collection, but the RDDA implementation must still respect approval and admin-only history rules.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| file | upload/file | Yes | Conditional | Managed by Payload upload |
| altText | text | No | Public when image public | Accessibility |
| uploadedBy | relationship | No | No | User who uploaded |
| relatedDoulaProfile | relationship | No | No | Optional |
| relatedRequest | relationship | No | No | ProfileChangeRequest/EventRequest |
| mediaType | select | Yes | No | headshot, logo, eventImage, trainingFile, archive, general |
| approvalStatus | select | Yes | No | pending, approved, rejected, archived |
| publicVisibility | select | Yes | No | public, authenticatedOnly, adminOnly |
| archivedFrom | relationship/text | No | No | Prior use/history |
| adminNotes | textarea | No | No | Admin-only notes |

### Recommended status values

#### `approvalStatus`

```text
pending
approved
rejected
archived
```

#### `publicVisibility`

```text
public
authenticatedOnly
adminOnly
```

### Access rules

| Action | Rule |
|---|---|
| Doula upload | Yes, but pending approval |
| Public read | Approved and public only |
| Admin-only archive | Admin/siteManager only |
| Training files | Authenticated assigned users only |
| Delete | Admin only, avoid hard delete when archive is required |

### Image handling requirements

The implementation should support:

```text
image resizing/optimization
alt text
approved-only public display
old image preservation
admin-only image history
```

### Anti-drift rule

No uploaded media should become public solely because it was uploaded.

---

## 12. Collection: AuditLog

### Purpose

Stores significant administrative and workflow actions.

This helps preserve accountability for profile changes, approvals, rejections, training confirmations, and future payments.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| actionType | select/text | Yes | No | Example: profileApproved |
| actorUser | relationship | No | No | User who performed action |
| targetCollection | text | Yes | No | Affected collection |
| targetRecordId | text | Yes | No | Affected record |
| summary | textarea | Yes | No | Human-readable summary |
| createdAt | datetime | Yes | No | Timestamp |
| metadata | json | No | No | Optional details |

### Example action types

```text
profileChangeSubmitted
profileChangeApproved
profileChangeRejected
profileRevisionRequested
eventRequestSubmitted
eventApproved
eventRejected
trainingCompleted
trainingExpired
mediaUploaded
mediaApproved
mediaArchived
userRoleChanged
futurePaymentRecorded
```

### Access rules

| Action | Rule |
|---|---|
| Create | System/admin workflows |
| Read | Admin; possibly siteManager |
| Update | No ordinary editing |
| Delete | Admin only, strongly discouraged |
| Public read | No |

### Anti-drift rule

Audit logs should not be used as a substitute for actual workflow records. They are supporting history only.

---

## 13. Collection: Notifications

### Purpose

Stores notification records for review queues and user-facing messages.

This is useful even if email sending is added later.

### Required fields

| Field | Type | Required | Public | Notes |
|---|---|---:|---:|---|
| recipientUser | relationship | Yes | No | User receiving notification |
| notificationType | select/text | Yes | No | Example: profileRequestPending |
| title | text | Yes | No | Short message title |
| message | textarea | Yes | No | Notification body |
| relatedCollection | text | No | No | Optional |
| relatedRecordId | text | No | No | Optional |
| readStatus | select | Yes | No | unread/read |
| createdAt | datetime | Yes | No | Created timestamp |
| readAt | datetime | No | No | Read timestamp |

### Example notification types

```text
profileRequestSubmitted
profileRequestApproved
profileRequestRejected
profileRevisionRequested
eventRequestSubmitted
eventApproved
eventRejected
trainingExpiringSoon
trainingExpired
```

### Access rules

| Action | Rule |
|---|---|
| Create | System/admin workflows |
| Read | Recipient user; admin |
| Update | Recipient may mark own as read |
| Delete | Admin only |
| Public read | No |

### Anti-drift rule

Email delivery is optional. The first build may use in-app notifications only.

---

## 14. Future Collection Placeholder: MembershipFees

### Purpose

Future-scope only.

Defines fee types such as annual registration fee, renewal fee, late fee, or other RDDA-approved dues.

### Possible future fields

| Field | Type | Notes |
|---|---|---|
| title | text | Example: Annual Doula Registration Fee |
| amount | number | Fee amount |
| currency | select | CAD |
| feeYear | text/number | Year or billing period |
| activeStatus | select | Active/inactive |
| description | textarea | Fee explanation |
| dueDate | date | Optional due date |

### First-build rule

Do not implement during the first Payload CMS build.

---

## 15. Future Collection Placeholder: PaymentRecords

### Purpose

Future-scope only.

Stores payment status and receipt references for doula registration fees.

Credit card data must never be stored in Payload.

### Possible future fields

| Field | Type | Notes |
|---|---|---|
| doulaUser | relationship | Paying doula |
| relatedProfile | relationship | Optional profile link |
| membershipFee | relationship | Fee being paid |
| amount | number | Amount paid |
| currency | select | CAD |
| paymentStatus | select | unpaid, pending, paid, failed, refunded |
| provider | select | Stripe or future provider |
| providerCheckoutSessionId | text | Stripe checkout session ID |
| providerPaymentIntentId | text | Stripe payment intent ID |
| receiptUrl | text | Provider receipt URL |
| paidAt | datetime | Payment date |
| adminNotes | textarea | Admin-only |

### First-build rule

Payments are documented future scope only. No Stripe integration in first implementation unless a later scope decision changes this.

---

## 16. Future Collection Placeholder: RegistrationRenewals

### Purpose

Future-scope only.

Tracks annual registration cycles and renewal state.

### Possible future fields

| Field | Type | Notes |
|---|---|---|
| doulaUser | relationship | User |
| relatedProfile | relationship | Profile |
| renewalYear | text/number | Year |
| renewalStatus | select | due, pending, complete, overdue, waived |
| dueDate | date | Renewal due date |
| completedAt | datetime | Completion timestamp |
| paymentRecord | relationship | Future link to PaymentRecords |
| adminNotes | textarea | Admin-only |

### First-build rule

Do not implement during the first Payload CMS build.

---

## 17. Relationship Summary

Recommended relationships:

```text
Users
  └─ relatedDoulaProfile → DoulaProfiles

DoulaProfiles
  ├─ ownerUser → Users
  ├─ headshot → Media
  └─ logo → Media

ProfileChangeRequests
  ├─ requestingUser → Users
  ├─ relatedProfile → DoulaProfiles
  ├─ requestedHeadshot → Media
  └─ requestedLogo → Media

EventRequests
  ├─ submittedBy → Users
  ├─ image → Media
  └─ approvedEvent → Events

Events
  ├─ sourceRequest → EventRequests
  └─ image → Media

TrainingModules
  ├─ file → Media
  └─ createdBy → Users

TrainingProgress
  ├─ doulaUser → Users
  ├─ relatedProfile → DoulaProfiles
  ├─ trainingModule → TrainingModules
  └─ proofFile → Media

Media
  ├─ uploadedBy → Users
  ├─ relatedDoulaProfile → DoulaProfiles
  └─ relatedRequest → ProfileChangeRequests/EventRequests

Notifications
  └─ recipientUser → Users

AuditLog
  └─ actorUser → Users
```

---

## 18. Public Website Data Rules

The public website may read only:

```text
published, active DoulaProfiles
published, visible Events
approved public Media connected to published content
```

The public website must not expose:

```text
user accounts
profile change requests
event requests
training progress
training files unless explicitly public later
audit logs
notifications
payment placeholders
admin notes
rejected requests
pending media
archived-only media
```

---

## 19. First-Build Minimum Viable Data Model

The first implementation does not need every collection fully functional on day one.

The recommended first-build sequence is:

```text
1. Users
2. Media
3. DoulaProfiles
4. ProfileChangeRequests
5. EventRequests
6. Events
7. TrainingModules
8. TrainingProgress
9. Notifications
10. AuditLog
```

If the foundation build needs to be smaller, the absolute minimum is:

```text
Users
Media
DoulaProfiles
ProfileChangeRequests
```

---

## 20. Open Implementation Questions

These questions should be answered during implementation planning, not while randomly coding:

1. Which database provider will be used first: Neon Postgres or Supabase Postgres?
2. Which file storage provider will be used first: Supabase Storage, UploadThing, Cloudflare R2, or Vercel Blob?
3. Should `requestedChanges` be stored as a structured group, JSON object, or field-by-field draft copy?
4. Should public doula profile pages have individual slugs?
5. Should board members only view requests, or should some board members approve?
6. Should email notifications be included in the first build, or should first build use admin dashboard/in-app notifications only?
7. Should training expiry warnings appear 30, 60, or 90 days before expiry?
8. Should old profile versions be stored in Payload versions, a separate archive collection, or both?

---

## 21. Drift Controls

Future implementation must follow these controls:

1. Do not add new collections without documenting the reason.
2. Do not let doulas directly publish profile changes.
3. Do not expose pending/rejected/private content publicly.
4. Do not add payment processing during the first build.
5. Do not add event RSVP or ticketing during the first build.
6. Do not add full LMS features during the first build.
7. Do not store payment card data at any point.
8. Do not hard-delete records where admin history is required.
9. Do not bypass the roles and permissions defined in 12BV.
10. Do not change the static-to-CMS boundary defined in 12BT without a new decision record.

---

## 22. Recommended Next Checkpoint

After this document is committed, the next planning checkpoint should be:

```text
12BX — RDDA Payload CMS Approval Workflow Specification
```

That document should define the step-by-step workflow behavior for:

```text
profile change requests
event requests
media approvals
training completion and expiry
notifications
audit history
```

---

## 23. Completion Statement

This document establishes the initial Payload CMS data model for the RDDA portal.

It should be treated as the source of truth for collection planning unless replaced by a later documented architecture decision.


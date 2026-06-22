# 12CB — RDDA Payload CMS Doula Profile Workflow Implementation Validation

**Project:** RDDA Platform  
**Checkpoint:** 12CB — Payload CMS Core Doula Profile Bundle  
**Status:** Implemented and locally validated  
**Date:** 2026-06-21  

---

## 1. Purpose

This checkpoint implemented the core Payload CMS doula profile workflow foundation for the RDDA platform.

12CB builds directly on:

- 12CA — Payload CMS Foundation Implementation
- 12BW — Payload CMS Collections and Data Model
- 12BX — Payload CMS Approval Workflow Specification
- 12BZ — Payload CMS Implementation Roadmap and Checkpoints

The goal of this checkpoint was to introduce the first real doula-facing CMS collections without yet migrating the public website pages to CMS-driven content.

---

## 2. Implemented Scope

This checkpoint added:

- `DoulaProfiles` collection
- `ProfileChangeRequests` collection
- Payload config registration for both new collections
- role-based read/create/update/delete access rules
- public read restriction for only active and published doula profiles
- doula self-read access for owned profiles
- doula profile change request submission structure
- site manager/admin review status fields
- headshot/logo media relationships
- requested headshot/logo media relationships
- profile approval metadata fields

---

## 3. Files Added

```text
repo/src/payload/collections/DoulaProfiles.ts
repo/src/payload/collections/ProfileChangeRequests.ts
exports/12CB_RDDA_Payload_CMS_Doula_Profile_Workflow_Implementation_Validation.md
```

---

## 4. Files Modified

```text
repo/payload.config.ts
```

---

## 5. Payload Collections Added

### DoulaProfiles

The `DoulaProfiles` collection includes the core public/member profile fields needed for the future RDDA doula directory.

Fields include:

```text
name
businessName
slug
bio
headshot
logo
phone
email
website
serviceAreas
servicesOffered
careCategories
certifications
yearsExperience
languages
pricing
availability
socialLinks
featuredStatus
activeStatus
publishedStatus
ownerUser
lastApprovedAt
lastApprovedBy
adminNotes
```

### ProfileChangeRequests

The `ProfileChangeRequests` collection provides the structure for doulas to request edits to their own profile without directly publishing those edits.

Fields include:

```text
requestTitle
requestingUser
relatedProfile
requestedChanges
requestedHeadshot
requestedLogo
status
submittedAt
reviewedBy
reviewedAt
reviewerNotes
doulaMessage
rejectionReason
revisionRequestNotes
approvedAt
appliedToProfileAt
```

---

## 6. Access Control Summary

### DoulaProfiles

Public visitors may only read profiles where:

```text
publishedStatus = published
activeStatus = active
```

Admin, site manager, and board member users may read all doula profiles.

Doula users may read only their own profile through the `ownerUser` relationship.

Admin and site manager users may create and update profiles.

Only admin users may delete profiles.

### ProfileChangeRequests

Admin, site manager, and doula users may create profile change requests.

Admin, site manager, and board member users may read all profile change requests.

Doula users may read their own requests only.

Admin and site manager users may update all profile change requests.

Doula users may update only their own requests while the request is still editable:

```text
draft
revisionRequested
```

Only admin users may delete profile change requests.

---

## 7. Workflow Statuses Added

Profile change request statuses:

```text
draft
pendingReview
revisionRequested
approved
rejected
applied
cancelled
```

Doula profile publication statuses:

```text
draft
published
archived
```

Doula profile active statuses:

```text
active
inactive
hidden
```

---

## 8. Media Relationships Added

The profile workflow now connects to the existing `Media` collection from 12CA.

Doula profile fields:

```text
headshot
logo
```

Profile change request fields:

```text
requestedHeadshot
requestedLogo
```

This allows doulas to request new images while keeping approved public media separate from pending/requested media.

---

## 9. Payload Config Registration

The root Payload config was updated to register the new collections:

```text
DoulaProfiles
ProfileChangeRequests
```

The collection list now includes:

```text
Users
Media
DoulaProfiles
ProfileChangeRequests
```

---

## 10. Intentional Non-Scope

This checkpoint did not implement:

```text
automatic application of approved profile changes
email notifications
dashboard UI customization
event requests
events
training modules
training progress
payments
Stripe
public CMS-driven doula directory page
public profile detail pages
production database connection
production media storage
audit logging
```

These items remain assigned to later checkpoints.

---

## 11. Validation Commands Run

Commands were run from:

```text
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo
```

### Git status before validation

```powershell
git status --short --untracked-files=all
```

Confirmed changed files:

```text
M payload.config.ts
?? src/payload/collections/DoulaProfiles.ts
?? src/payload/collections/ProfileChangeRequests.ts
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
npm run build
```

Result:

```text
Passed
```

The successful build confirmed:

```text
/admin/[[...segments]]   Dynamic
/api/[...slug]           Dynamic
```

Existing public website routes remained static.

---

## 12. Build Notes

Initial build attempts surfaced Payload `Where` typing issues in the access control filters.

These were resolved by:

- changing user ID handling from `string` to `string | number`
- extracting own-request access filters into typed Payload `Where` helper functions
- avoiding inline access filter objects that TypeScript inferred with incompatible optional properties

After those corrections, lint and build passed.

---

## 13. Implementation Result

12CB successfully added the core doula profile workflow collections to Payload CMS.

The RDDA platform now has the foundational CMS data structures for:

- approved public doula profiles
- admin/site manager managed profile publishing
- doula-owned profile relationships
- doula-submitted profile change requests
- review statuses for approval/rejection/revision workflow

The public website has not yet been migrated to consume CMS data, which remains intentional at this stage.

---

## 14. Next Recommended Checkpoint

Proceed to:

```text
12CC — RDDA Payload CMS Event and Training Bundle
```

12CC should add:

```text
EventRequests
Events
TrainingModules
TrainingProgress
basic trainer/admin access controls
event approval statuses
training completion tracking fields
```

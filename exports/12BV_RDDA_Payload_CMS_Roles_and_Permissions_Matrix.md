# 12BV — RDDA Payload CMS Roles and Permissions Matrix

## Document Status

**Project:** RDDA Platform  
**Track:** Payload CMS Portal / Dynamic System  
**Document:** 12BV — Roles and Permissions Matrix  
**Date:** June 21, 2026  
**Status:** Planning / Permission Contract  
**Depends on:**  
- 12BT — RDDA Static to Payload CMS Transition Decision  
- 12BU — RDDA Payload CMS Scope and Non-Scope  

---

## 1. Purpose

This document defines the role and permission model for the RDDA Payload CMS portal.

The purpose of this document is to prevent permission drift during implementation.

All future Payload CMS implementation work must follow this matrix unless a later documented architecture decision explicitly changes it.

This document controls:

- who can log in;
- what each role can see;
- what each role can create;
- what each role can edit;
- what each role can approve;
- what each role can reject;
- what each role can publish;
- what each role can archive;
- what each role can access in admin-only history.

---

## 2. Relationship to Existing Project Documentation

This document belongs to the new Payload CMS documentation track.

The current documentation model is:

```text
12BT — Static-to-Payload CMS transition decision
12BU — Payload CMS scope and non-scope
12BV — Payload CMS roles and permissions matrix
```

The prior static-site documentation remains valid for public website baseline content and design.

This document controls the authenticated CMS/admin side of the platform.

---

## 3. Core Permission Principle

The central permission rule for RDDA is:

```text
Doulas may submit content and change requests.
Site managers and admins decide what becomes public.
Public users only see approved/published content.
```

No doula-submitted profile change, image, event, or public-facing content should go live automatically without review.

---

## 4. Approved Roles

The first Payload CMS build will support the following roles:

```text
admin
siteManager
doula
boardMember
trainer
public
```

These roles may be expanded in a future documented phase, but no additional roles should be added during the first CMS build unless required by a documented implementation blocker.

---

## 5. Role Definitions

### 5.1 Admin

The `admin` role is the highest-privilege role.

Admin users may:

- manage all CMS collections;
- manage users;
- assign roles;
- approve, reject, publish, archive, and delete content;
- access admin-only history;
- manage CMS configuration;
- troubleshoot data;
- perform developer-level corrections.

Admin users should be limited to trusted technical or executive RDDA operators.

---

### 5.2 Site Manager

The `siteManager` role is the primary operational approval role.

Site managers may:

- review doula profile change requests;
- approve or reject doula profile changes;
- request revisions;
- review event requests;
- approve or reject events;
- approve or reject uploaded profile images/logos;
- view training completion status;
- view audit history relevant to site content;
- manage public-facing approved content.

Site managers should not need full developer/admin access.

---

### 5.3 Doula

The `doula` role is for RDDA members who need to manage their own profile and submit content.

Doulas may:

- log in;
- view their own profile;
- submit requested changes to their own profile;
- upload images or logos as part of a request;
- submit event requests;
- view the status of their own submitted requests;
- view assigned training modules;
- mark their own training as complete;
- view their own training renewal/expiry status.

Doulas may not directly publish public content.

Doulas may not edit another doula's profile, request, training record, or media.

---

### 5.4 Board Member

The `boardMember` role is a limited oversight role.

Board members may:

- view selected CMS records;
- view pending requests if RDDA chooses to allow board oversight;
- optionally participate in approvals if later confirmed by RDDA governance;
- view reports or summaries.

Board members should not have broad editing or publishing rights by default.

For the first build, board member approval should be treated as optional and disabled unless explicitly enabled later.

---

### 5.5 Trainer

The `trainer` role is for users responsible for training content.

Trainers may:

- create training modules;
- edit training modules;
- upload training files, links, videos, or reference materials;
- view completion status where appropriate;
- update training module expiry/renewal requirements if authorized.

Trainers should not automatically have profile approval, event approval, or general admin rights.

---

### 5.6 Public

The `public` role represents unauthenticated website visitors.

Public visitors may:

- view approved/published public website pages;
- view active approved doula profiles;
- view approved published events;
- view public training/resource content if intentionally published.

Public visitors may not:

- access the CMS admin panel;
- submit profile changes;
- submit events;
- view pending content;
- view archived media;
- view training completion records;
- view private doula contact or admin-only fields.

---

## 6. Collection-Level Permission Matrix

Legend:

```text
Y = allowed
N = not allowed
Own = allowed only for records connected to the logged-in user
View = read-only access
Optional = permitted only if later enabled by governance
Admin = admin-only
```

| Collection / Area | Public | Doula | Trainer | Board Member | Site Manager | Admin |
|---|---:|---:|---:|---:|---:|---:|
| Users | N | Own limited | N | N | View limited | Y |
| DoulaProfiles | Approved only | Own view | N | View | Y | Y |
| ProfileChangeRequests | N | Own create/view | N | Optional view | Y | Y |
| Media | Approved public only | Own request media | Training media | Optional view | Y | Y |
| EventRequests | N | Own create/view | N | Optional view | Y | Y |
| Events | Approved only | View | View | View | Y | Y |
| TrainingModules | Public only if published | View assigned | Y | View | View/Y | Y |
| TrainingProgress | N | Own | View assigned/related | Optional view | View | Y |
| AuditLog | N | Own limited status only | N | Optional view | View | Y |
| Notifications | N | Own | Own/related | Optional | Y | Y |
| Future Payments | N | Own payment status | N | Optional reports | View/manage | Y |

---

## 7. Action-Level Permission Matrix

| Action | Public | Doula | Trainer | Board Member | Site Manager | Admin |
|---|---:|---:|---:|---:|---:|---:|
| Log in | N | Y | Y | Y | Y | Y |
| Access admin dashboard | N | Limited portal only | Limited training area | Limited view | Y | Y |
| Create user | N | N | N | N | N | Y |
| Assign/change role | N | N | N | N | N | Y |
| View own profile | N | Y | N | N | Y | Y |
| Submit profile change | N | Own | N | N | Y | Y |
| Directly edit live profile | N | N | N | N | Y | Y |
| Approve profile change | N | N | N | Optional | Y | Y |
| Reject profile change | N | N | N | Optional | Y | Y |
| Request profile revision | N | N | N | Optional | Y | Y |
| Upload profile photo/logo | N | Own request only | N | N | Y | Y |
| Publish photo/logo | N | N | N | Optional | Y | Y |
| Archive old media | N | N | N | N | Y | Y |
| Submit event request | N | Y | N | Optional | Y | Y |
| Approve event | N | N | N | Optional | Y | Y |
| Publish event | N | N | N | Optional | Y | Y |
| Create training module | N | N | Y | N | Optional | Y |
| Edit training module | N | N | Y | N | Optional | Y |
| Mark training complete | N | Own | N | N | N | Y |
| View training completion | N | Own | Related | Optional | Y | Y |
| Manage expiry/renewal status | N | N | Y/Optional | N | Y | Y |
| View audit history | N | Own status only | N | Optional | Y | Y |
| Delete records | N | N | N | N | Limited/avoid | Y |

---

## 8. Public Visibility Rules

Public website content must follow these rules:

```text
Only approved/published content may be public.
Only active doula profiles may be public.
Only approved events may be public.
Training records and completion records are private.
Pending, rejected, draft, archived, or revision-requested records are private.
Admin notes are never public.
Audit history is never public.
```

---

## 9. Doula Profile Permission Rules

### 9.1 Doula Can

A doula may:

- view their own approved profile;
- view their own pending requested changes;
- submit a new profile change request;
- submit replacement images or logos for approval;
- view whether a request is pending, approved, rejected, or revision requested.

### 9.2 Doula Cannot

A doula may not:

- directly publish profile changes;
- directly edit live approved profile data;
- view or edit another doula's profile draft;
- approve their own request;
- delete profile history;
- delete archived media;
- access admin notes.

---

## 10. Profile Change Request Workflow Permissions

| Workflow Step | Doula | Site Manager | Admin |
|---|---:|---:|---:|
| Create request | Y | Y | Y |
| View own request | Y | Y | Y |
| View all requests | N | Y | Y |
| Edit pending request before review | Own only if allowed | Y | Y |
| Approve request | N | Y | Y |
| Reject request | N | Y | Y |
| Request revision | N | Y | Y |
| Apply approved change to live profile | N | Y | Y |
| Preserve old version | Automatic | Y | Y |
| Delete request | N | Avoid | Y |

---

## 11. Event Request Permission Rules

Doulas may submit event requests.

Event requests must include:

- title;
- date;
- time;
- location;
- description;
- host;
- cost;
- registration link;
- image;
- approved/published status.

A doula-submitted event must not appear on the public site until approved by a site manager or admin.

---

## 12. Event Workflow Permissions

| Workflow Step | Doula | Site Manager | Admin |
|---|---:|---:|---:|
| Submit event request | Y | Y | Y |
| View own event request | Y | Y | Y |
| View all event requests | N | Y | Y |
| Edit pending request | Own only if allowed | Y | Y |
| Approve event | N | Y | Y |
| Reject event | N | Y | Y |
| Publish event | N | Y | Y |
| Archive old event | N | Y | Y |
| Delete event | N | Avoid | Y |

---

## 13. Training Permission Rules

Training in the first CMS build is limited to:

- PDFs;
- videos;
- links;
- simple completion tracking;
- expiry/renewal dates.

Training does not include first-build LMS features such as:

- quizzes;
- certificates;
- paid courses;
- SCORM;
- grading;
- ticketing;
- live class registration.

---

## 14. Training Workflow Permissions

| Workflow Step | Doula | Trainer | Site Manager | Admin |
|---|---:|---:|---:|---:|
| View assigned training | Y | Y | Y | Y |
| Create training module | N | Y | Optional | Y |
| Edit training module | N | Y | Optional | Y |
| Upload training PDF/video/link | N | Y | Optional | Y |
| Mark own training complete | Y | N | N | Y |
| View own completion | Y | N | Y | Y |
| View all completion records | N | Related/Optional | Y | Y |
| Set expiry rules | N | Y/Optional | Y | Y |
| Override completion | N | N | Y | Y |

---

## 15. Media Permission Rules

Media includes:

- doula headshots;
- doula logos;
- event images;
- training PDFs;
- training videos or linked resources;
- archived historical images.

### 15.1 Doula Media

Doulas may upload media only as part of a request workflow.

Doula-uploaded media must remain pending until approved.

### 15.2 Admin-Only Media Archive

Old images, replaced images, rejected uploads, and historical files should be preserved where practical in an admin-only section.

Public users and doulas should not be able to browse the complete media archive.

### 15.3 Media Optimization

Images should be resized/optimized before or during publication wherever practical.

---

## 16. Audit and History Permissions

Audit/history records should preserve:

- who submitted a request;
- when it was submitted;
- what changed;
- who reviewed it;
- when it was reviewed;
- whether it was approved, rejected, or revision requested;
- reviewer notes where appropriate;
- prior media where practical.

Audit records are primarily for admin and site manager visibility.

Doulas may see basic status information about their own requests but should not see internal admin notes unless intentionally shared.

---

## 17. Notification Permissions

Notifications may eventually include:

- site manager notification of pending profile change;
- site manager notification of pending event request;
- doula notification of approval;
- doula notification of rejection;
- doula notification of revision request;
- training expiry reminder;
- future payment/registration renewal reminder.

Notifications are allowed in scope only where they support approved CMS workflows.

Complex marketing automation is not part of first-build scope.

---

## 18. Future Payment Module Permission Placeholder

12BU places doula registration fee payments in future scope.

This document reserves permission expectations for that future module, but payment processing is not part of the first Payload CMS build.

Future payment permissions should likely follow this model:

| Payment Area | Doula | Site Manager | Admin | Board Member |
|---|---:|---:|---:|---:|
| View own fee status | Y | Y | Y | Optional |
| Start checkout | Y | N | Y | N |
| View all payment records | N | Y | Y | Optional |
| Issue manual adjustment | N | N | Y | N |
| Export payment report | N | Y | Y | Optional |
| Process refunds | N | Avoid | Y | N |

Payment implementation must use a third-party payment processor such as Stripe Checkout or equivalent.

RDDA should not store raw credit card data in Payload or in the RDDA database.

---

## 19. Deletion Policy

The first CMS build should avoid routine deletion of important records.

Preferred record lifecycle:

```text
draft
pending
approved
published
archived
rejected
revisionRequested
```

Deletion should be admin-only and used sparingly.

When possible, records should be archived instead of deleted.

This protects history and reduces accidental data loss.

---

## 20. Security Guardrails

The following security guardrails apply to all implementation tasks:

```text
Never allow public access to admin routes.
Never allow doulas to access another doula's private records.
Never allow unapproved content to appear publicly.
Never expose admin-only notes publicly.
Never store raw payment card data.
Never rely on frontend-only permissions for protected data.
All protected permissions must be enforced server-side.
```

---

## 21. First-Build Permission Priorities

The first CMS implementation should prioritize permissions in this order:

```text
1. Admin user creation and secure login
2. Role field on user records
3. Doula own-record restrictions
4. Site manager approval permissions
5. Public approved-only read permissions
6. Media approval restrictions
7. Training content and completion restrictions
8. Audit/history visibility
9. Future payment placeholders only
```

---

## 22. Explicit Anti-Drift Rules

The following items must not be introduced during the first CMS build without a new documented decision:

```text
public self-registration
direct doula publishing
payments/checkout
full LMS features
event ticketing
RSVP management
private messaging
multi-association tenant system
complex analytics
automated accounting integrations
```

Payments are documented as future scope only.

---

## 23. Implementation Validation Rules

Each implementation task that affects permissions must validate:

```text
A doula cannot access another doula's records.
A doula cannot publish public content.
A doula cannot approve their own requests.
Pending profile changes are not public.
Pending event requests are not public.
Archived media is not public.
Public users cannot access CMS/admin data.
Site manager can approve/reject relevant requests.
Admin can override/manage all records.
```

These should become manual or automated test cases as the CMS build matures.

---

## 24. Documentation Continuity

Future documents should reference this matrix when defining collections and workflows.

Expected next documents:

```text
12BW — RDDA Payload CMS Collections and Data Model
12BX — RDDA Payload CMS Approval Workflow Specification
12BY — RDDA Payload CMS Hosting, Storage, Environment, and Budget Plan
12BZ — RDDA Payload CMS Implementation Roadmap and Checkpoints
```

---

## 25. Final Decision

The approved RDDA Payload CMS role model is:

```text
admin
siteManager
doula
boardMember
trainer
public
```

The approved permission principle is:

```text
Doulas submit.
Site managers approve.
Admins control.
Public users see only approved published content.
```

This matrix should be treated as the permission contract for the first Payload CMS implementation phase.

Any deviation must be documented before implementation.

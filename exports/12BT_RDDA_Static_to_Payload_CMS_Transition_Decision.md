# 12BT — RDDA Static Website Documentation to Payload CMS Transition Decision

## Status

Approved planning document for the next RDDA production implementation phase.

## Purpose

This document formally connects the completed RDDA static website implementation work to the new Payload CMS portal direction. It prevents project drift by defining what remains valid from the static-site phase, what is now superseded, and where Payload CMS becomes the new source of truth.

The intent is not to discard the static-route documentation. The intent is to preserve it as the public-site baseline while creating a controlled path toward authenticated CMS-backed workflows for doulas, events, training, media, and approvals.

---

## Project Phase Context

The RDDA project now has two major implementation phases.

### Phase 1 — Static Public Website Reconstruction

Phase 1 rebuilt the public RDDA website as static Next.js routes using source-aligned content, presentational components, and route-by-route validation.

Completed Phase 1 work includes, but is not limited to:

- Static public routes
- Source alignment reviews
- Static route planning documents
- Static route implementation validation documents
- Navigation exposure planning and review
- Lint and build validation checkpoints
- Public content and layout baselines

The Phase 1 static route work remains valid and should not be rewritten unless a later CMS integration task specifically requires it.

### Phase 2 — Payload CMS Portal and Dynamic Content System

Phase 2 introduces Payload CMS as the selected CMS/admin platform for authenticated RDDA workflows.

Phase 2 allows selected dynamic capabilities that were intentionally excluded during Phase 1, including:

- Authentication
- User roles
- Database-backed content
- Admin panel
- Media uploads
- Profile change requests
- Event request submissions
- Training content management
- Training completion and expiry tracking
- Approval workflows
- Admin-only historical/archive visibility

---

## Decision

RDDA will move forward with Payload CMS as the CMS/admin platform for the next implementation phase.

The existing Next.js website remains the public frontend. Payload CMS becomes the backend/admin layer for approved dynamic content and protected workflows.

The public site should only display approved and published content. Doulas may submit requests, but they should not directly publish live public content without review.

---

## Superseded Static-Only Rule

During Phase 1, the project followed a strict static-only rule:

> No CMS, database, auth, forms, API, dynamic behavior, protected routes, client-side state/effects, or route-specific dynamic backend behavior.

That rule remains valid for completed static public-route work unless a task belongs to the Payload CMS implementation track.

For Phase 2, the static-only rule is intentionally superseded for the approved Payload CMS scope.

The following capabilities are now allowed when they are part of the documented Payload CMS implementation plan:

- CMS integration
- Database connection
- Authentication
- Protected admin routes
- Role-based access control
- Media uploads
- Email notifications
- Dynamic data fetching for approved public content
- Approval workflows
- Admin-only archive/history views

This supersession is limited. It does not mean every page should become dynamic or that unrelated features may be added without documentation.

---

## Current Documentation Relationship

The existing RDDA documentation remains important and continues to serve as the public-site baseline.

| Existing documentation type | New role in Phase 2 |
|---|---|
| Source alignment reviews | Baseline for public content accuracy and tone |
| Static route planning docs | Reference for current route purpose, section order, and layout intent |
| Static implementation validation docs | Proof of completed route work and validation history |
| Navigation exposure docs | Reference for existing public navigation behavior |
| Build/lint validation docs | Validation pattern to continue using during CMS work |
| Scraped doula/profile materials | Input source for initial CMS seed data |

The Payload CMS documents created after this transition decision will control backend structure, roles, workflows, and dynamic content behavior.

---

## Source of Truth Going Forward

The project now has two related but distinct sources of truth.

### Public Website Source of Truth

For static public pages and public presentation, the existing route planning, source alignment, and validation documents remain the baseline.

Examples:

- Homepage content and layout
- About page content
- Services overview
- Static informational service pages
- Contact and FAQ presentation
- Public navigation structure

### Payload CMS Source of Truth

For dynamic data and protected workflows, Payload CMS will become the source of truth.

Examples:

- Doula profile records
- Doula profile change requests
- Event submissions
- Approved public events
- Training modules
- Training completion records
- Media uploads
- Archived profile images/logos
- Approval status and review history
- User roles and permissions

---

## Approved Payload CMS Scope

The approved Phase 2 Payload CMS scope includes the following areas.

### User Roles

- Admin/developer
- Site manager
- Doula
- Board member
- Trainer
- Public visitor

### Doula Profile Management

Doulas may log in and submit requested changes to their own profiles.

Profile fields may include:

- Name
- Business name
- Bio
- Headshot
- Logo
- Phone
- Email
- Website
- Service areas
- Services offered
- Birth / postpartum / fertility / loss / end-of-life categories
- Certifications
- Years of experience
- Languages
- Pricing
- Availability
- Social links
- Featured status
- Active/inactive status

Profile changes require approval before public publication.

### Event Request Management

Doulas may submit event requests containing:

- Title
- Date
- Time
- Location
- Description
- Host
- Cost
- Registration link
- Image
- Approved/published status

Events require approval before appearing on the public site.

### Training Management

The training area may include:

- Admin/trainer-uploaded PDFs
- Videos
- Links
- Doula completion tracking
- Expiry dates
- Renewal tracking

A full LMS is not part of the initial approved scope.

### Media Management

Doulas may upload profile-related images, including headshots and logos.

Images require approval before publication.

Old images should be preserved in an admin-only archive/history area.

Images should be resized and optimized for public display.

---

## Current Scale Assumptions

The Payload CMS implementation is sized for a small-to-medium association portal.

Current assumptions:

- Approximately 20 doulas now
- Approximately 30 doulas later
- Approximately 1 to 3 admins or site managers
- Approximately 1 to 5 events per month
- Small training library at launch, with room for future growth
- Low-cost hosting preference
- Target operating budget of approximately $0 to $20 per month where practical

These assumptions support the decision to use Payload CMS rather than a full custom SaaS platform or full LMS.

---

## Non-Scope for Initial Payload CMS Phase

The following are not part of the initial Payload CMS implementation unless later approved in a separate planning document:

- Payments
- Ticket sales
- Paid event registration
- Event RSVP management
- Waitlists
- Full LMS functionality
- Quizzes
- Certificates
- SCORM course support
- Mobile app
- Doula-to-doula messaging
- Public self-registration
- Multi-association SaaS support
- Complex analytics dashboards
- Automated marketing funnels

These items may be reconsidered later, but they should not enter the build by drift.

---

## Anti-Drift Rules

Every future RDDA task should identify which track it belongs to.

### Track A — Public Website Static/Content Track

Use this track for:

- Static copy edits
- Static page layout updates
- Public route cleanup
- Navigation refinements
- Source-alignment corrections
- Non-CMS public presentation updates

Track A should continue to respect the original static-route discipline unless a specific integration task requires otherwise.

### Track B — Payload CMS Portal/Dynamic System Track

Use this track for:

- Payload installation
- CMS configuration
- Database setup
- Auth setup
- Role permissions
- Admin routes
- Doula profile records
- Profile change requests
- Event submissions
- Training records
- Media upload handling
- Approval workflows
- Public rendering of approved CMS content

Track B may use CMS/database/auth/dynamic behavior when documented and validated.

### Mixed Track Tasks

Some tasks may touch both tracks.

Examples:

- Replacing the public `/doulas` route with approved CMS-sourced doula profiles
- Adding a public events page powered by approved CMS events
- Connecting public training information to approved CMS-managed content

Mixed track tasks must clearly state both:

1. the public route affected, and
2. the Payload CMS collection/workflow supplying the data.

---

## Required Future Documentation

This transition decision should be followed by a structured Payload CMS documentation set.

Recommended next documents:

1. `12BU_RDDA_Payload_CMS_Scope_and_Non_Scope.md`
2. `12BV_RDDA_Payload_CMS_Roles_and_Permissions_Matrix.md`
3. `12BW_RDDA_Payload_CMS_Collections_and_Data_Model.md`
4. `12BX_RDDA_Payload_CMS_Approval_Workflows.md`
5. `12BY_RDDA_Payload_CMS_Hosting_Storage_Environment_and_Budget_Plan.md`
6. `12BZ_RDDA_Payload_CMS_Implementation_Roadmap_and_Checkpoints.md`

No Payload implementation should proceed without enough documentation to confirm scope, roles, collections, workflows, and validation rules.

---

## Implementation Checkpoint Rules

The existing RDDA implementation discipline should continue.

Each implementation step should follow this pattern where practical:

1. Confirm current branch and working tree status.
2. Keep changes small and isolated.
3. Avoid unrelated refactors.
4. Validate with lint.
5. Validate with build.
6. Document the implementation or validation result.
7. Commit only after validation passes.
8. Keep the public site stable while adding CMS capability.

For the existing local environment, continue to account for known OneDrive and Windows file-lock issues during Git and Next.js build operations.

---

## Guardrails for Public Content

The public website should never display unapproved doula-submitted content.

Public rendering rules:

- Public doula profiles must be active and approved.
- Public event listings must be approved and published.
- Public training content must be explicitly marked public or approved for public display.
- Pending requests must remain private to authorized users.
- Rejected requests must remain private to authorized users.
- Archived media must remain admin-only unless restored and approved.

---

## Guardrails for Doula Access

Doulas should only be able to manage their own submitted information unless a later documented role change allows otherwise.

Default doula permissions:

- View own account
- View own profile data
- Submit profile change requests for own profile
- Upload profile-related media for approval
- Submit event requests
- View own training completion status
- Mark assigned training complete if allowed by workflow

Default doula restrictions:

- No direct public publishing
- No editing another doula's profile
- No approving requests
- No accessing admin-only media archive
- No managing global settings
- No managing user roles

---

## Guardrails for Site Manager Access

Site managers are responsible for operational review and publishing control.

Default site manager permissions may include:

- Review profile change requests
- Approve, reject, or request revisions
- Review event submissions
- Approve or reject event submissions
- Review uploaded media
- Manage public profile visibility
- View relevant audit/history records

Site managers should not automatically receive full developer/admin privileges unless explicitly assigned.

---

## Guardrails for Admin/Developer Access

Admins/developers may manage the whole system, including:

- CMS configuration
- User roles
- Collections
- Database-backed content
- Media settings
- Hosting/environment configuration
- Emergency corrections

Admin/developer access should be limited to trusted users because it can affect the entire site.

---

## Conclusion

The RDDA project is not abandoning its existing static documentation. The existing documents remain the baseline for the public website and completed route work.

This document formally opens the next phase: Payload CMS-backed authenticated workflows for profile requests, event requests, training, media, approvals, and admin management.

Going forward, all work should clearly identify whether it belongs to the public static/content track, the Payload CMS portal/dynamic system track, or a documented mixed integration task.

This transition decision is the bridge between the completed static website implementation and the new CMS-backed RDDA portal direction.

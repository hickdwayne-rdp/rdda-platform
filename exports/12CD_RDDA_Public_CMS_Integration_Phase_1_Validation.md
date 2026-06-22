# 12CD — RDDA Public CMS Integration Phase 1 Validation

**Project:** RDDA Platform  
**Checkpoint:** 12CD — Public CMS Integration Bundle, Phase 1  
**Status:** Implemented and locally validated  
**Date:** 2026-06-21  

---

## 1. Purpose

This checkpoint began connecting approved Payload CMS content to the public RDDA website while preserving safe local builds before production database seeding.

The first public integration target was:

```text
/doulas
```

The intent was to make the page CMS-ready without making the local build dependent on a live production Payload database.

---

## 2. Implemented Scope

This checkpoint added:

- public doula profile helper
- Payload REST fetch helper for approved/published doula profiles
- static fallback roster preservation
- `/doulas` page update to use CMS data when available
- safe fallback behavior when CMS environment variables or database are unavailable
- public copy updates removing the previous static-only/no-CMS language
- local lint validation
- local build validation

---

## 3. Files Added

```text
repo/src/lib/payload/publicDoulas.ts
exports/12CD_RDDA_Public_CMS_Integration_Phase_1_Validation.md
```

---

## 4. Files Modified

```text
repo/src/app/doulas/page.tsx
```

---

## 5. Public CMS Helper Added

A new helper was added:

```text
repo/src/lib/payload/publicDoulas.ts
```

The helper exports:

```text
PublicDoulaProfile
getPublishedDoulaProfiles
```

The helper attempts to fetch published and active doula profiles from Payload using the public REST route:

```text
/api/doulaProfiles
```

The query filters for:

```text
publishedStatus = published
activeStatus = active
```

The helper also requests:

```text
depth = 1
limit = 100
sort = -featuredStatus,name
```

---

## 6. Safe Fallback Behavior

The helper returns an empty array when:

```text
PAYLOAD_PUBLIC_SERVER_URL is not set
NEXT_PUBLIC_SITE_URL is not set
the Payload request fails
the response is not OK
Payload is unavailable
database-backed content is unavailable
```

This preserves local development and build stability before production database configuration.

The `/doulas` page then uses:

```text
CMS doulas when available
static fallback roster when CMS doulas are unavailable
```

---

## 7. /doulas Page Updated

The `/doulas` page was updated to:

- become an async server component
- call `getPublishedDoulaProfiles`
- use CMS profile data when available
- preserve the existing static doula photos as fallback
- show CMS-specific copy when CMS data is present
- show fallback-specific copy when static data is being used
- keep existing PageShell, PageContainer, SectionCard, and styling patterns
- continue rendering the approved roster safely without production CMS data

---

## 8. Intentional Non-Scope

This checkpoint did not implement:

```text
public profile detail pages
public CMS-driven event listings
public CMS-driven training pages
booking requests
contact forms
member login UI
dashboard UI
production database configuration
production media storage
database seeding
automatic profile approval application
email notifications
```

These items remain assigned to later checkpoints.

---

## 9. Validation Commands Run

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
M src/app/doulas/page.tsx
?? src/lib/payload/publicDoulas.ts
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

An initial build attempt was blocked by the known OneDrive/Next.js `.next` file-lock issue.

The `.next` directory was removed:

```powershell
Remove-Item .\.next -Recurse -Force
```

The build was rerun:

```powershell
npm run build
```

Result:

```text
Passed
```

The successful build confirmed:

```text
/doulas                 Static
/admin/[[...segments]]  Dynamic
/api/[...slug]          Dynamic
```

Existing public website routes remained static.

---

## 10. Build Notes

During implementation, TypeScript identified that the CMS profile type and static fallback roster type needed to be unified.

This was resolved by typing the static fallback roster as:

```text
PublicDoulaProfile[]
```

A malformed PowerShell replacement temporarily inserted literal backtick-n text into the import statement.

This was corrected by replacing literal:

```text
`n
```

with real newlines.

After those corrections, lint and build passed.

---

## 11. Implementation Result

12CD Phase 1 successfully introduced CMS-ready public doula profile loading while preserving the existing static fallback roster.

The public `/doulas` page now has the correct transitional behavior:

```text
Use approved/published CMS profiles when available.
Use the existing static roster when CMS data is not yet available.
Do not expose draft, pending, rejected, inactive, or hidden profiles.
Do not require a production database for local validation.
```

---

## 12. Next Recommended Checkpoint

Proceed to a follow-up 12CD phase or 12CE depending on deployment priority.

Recommended next development options:

```text
12CD Phase 2 — seed/preview CMS doula profile data
12CD Phase 3 — public event listing integration
12CE — production readiness and hardening
```

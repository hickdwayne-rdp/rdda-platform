# 12CE — RDDA Production Readiness and Hardening Notes

## Purpose

This checkpoint prepares the RDDA Payload CMS build for production setup without adding secrets, payment processing, or production database credentials to the repository.

This is a hardening checkpoint, not a feature build.

---

## Committed Environment Template

A committed environment template was added at:

```text
repo/env.example
```

The earlier `.env.example` approach was avoided because `.env.example` is ignored by the existing Git rules.

The template is intended to be copied locally to:

```text
repo/.env.local
```

Production values should be added in:

```text
Vercel Project Settings > Environment Variables
```

No real secrets should be committed to the repository.

---

## Required Production Variables

The production deployment will need:

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

The selected production database provider must provide a Postgres connection string.

Potential providers include:

```text
Neon
Supabase
Railway
Render
Vercel-compatible Postgres provider
```

### NEXT_PUBLIC_SITE_URL

Used by public CMS fetch helpers and media URL normalization.

Example local value:

```text
http://localhost:3000
```

Example production value:

```text
https://your-production-domain.ca
```

### PAYLOAD_PUBLIC_SERVER_URL

Used when the Payload API should be fetched from a known public server URL.

For same-origin deployments, this can usually match `NEXT_PUBLIC_SITE_URL`.

---

## Payload CMS Runtime Requirements

Payload currently requires:

```text
Postgres database connection through DATABASE_URL
Payload secret through PAYLOAD_SECRET
Admin route available at /admin
API route available at /api
```

The current implementation keeps:

```text
/admin/[[...segments]]  Dynamic
/api/[...slug]          Dynamic
```

Public site routes remain static where possible.

---

## Public CMS Integration Requirements

The public `/doulas` and `/events` pages can safely build without CMS data.

When production CMS content exists, public helpers will use:

```text
/api/doulaProfiles
/api/events
```

Only approved/published public records should appear.

---

## Public Route Safety

Current public fallback behavior is intentional:

```text
/doulas uses static doula fallback content when approved CMS profiles are unavailable.
/events shows an empty public state when approved CMS event records are unavailable.
```

This keeps the public website build-safe before production CMS data is seeded.

---

## Production Non-Scope

This checkpoint does not add:

```text
real secrets
production database provisioning
blob/media storage adapter
payments
email sending
CMS seed data
event RSVP/ticketing
doula registration payments
training certificate automation
calendar feed export
```

These remain later implementation checkpoints.

---

## Deployment Checklist

Before production launch:

1. Add `PAYLOAD_SECRET` in Vercel.
2. Add `DATABASE_URL` in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel.
4. Add `PAYLOAD_PUBLIC_SERVER_URL` in Vercel if needed.
5. Confirm `/admin` loads.
6. Create the first CMS admin user.
7. Confirm `/api` routes respond.
8. Seed or enter approved doula profiles.
9. Seed or enter approved events.
10. Confirm `/doulas` shows only approved public doula content.
11. Confirm `/events` shows only approved public event content.
12. Configure durable media storage before relying on uploaded production files.
13. Re-run lint and build after production settings are added.

---

## Validation Plan

The local validation for this checkpoint should confirm:

```text
npm run lint passes
npm run build passes
public routes remain static
/admin remains dynamic
/api remains dynamic
repo/env.example is committed
real secrets are not committed
```

---

## Next Recommended Checkpoint

After this checkpoint, proceed to:

```text
12CF — Payload CMS production deployment setup checklist and storage decision
```

That checkpoint should decide and document:

```text
database provider
media storage provider
Vercel environment variables
admin onboarding process
production seed strategy
backup and recovery approach
```

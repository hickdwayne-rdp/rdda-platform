# 12M — RDDA Who RDDA Supports Section Decision

## Purpose

This checkpoint records the source-alignment decision for implementing a static “Who RDDA Supports” homepage section.

## Decision

The “Who RDDA Supports” homepage section is source-supported and justified for implementation.

## Source-Alignment Claims Reviewed

### Claim 1 — RDDA supports families

Result: PASS

The RDDA source documents support that RDDA serves families through lifecycle support, including pregnancy, birth, postpartum, fertility, pregnancy loss, family transitions, grief, and end-of-life care.

### Claim 2 — RDDA supports or connects doulas and care workers

Result: PASS

The RDDA source documents support that RDDA connects families with doulas and supports a doula/member ecosystem through doula discovery, directory planning, membership systems, community connection, and shared visibility.

### Claim 3 — RDDA serves the broader community

Result: PASS

The RDDA source documents support that RDDA serves the broader community through public-facing support, resources, education, events, and connection pathways.

## Implementation Decision

Implementation is justified as one static homepage section.

Approved source files to change:

- repo/src/components/sections/HomeWhoRddaSupportsSection.tsx
- repo/src/app/page.tsx

## Implementation Constraints

The implementation must not add:

- routes
- navigation
- SiteHeader
- SiteFooter
- shared UI primitives
- CMS logic
- Payload logic
- Supabase logic
- database logic
- authentication
- forms
- API logic
- dynamic behavior
- state
- effects
- client component behavior
- "use client"

## Approved Conservative Copy Direction

The section may refer to:

- families seeking support
- doulas and care workers
- the wider community

The section must not imply that directory, membership, events, forms, CMS, resource libraries, or dynamic discovery features are currently live.

## 12M Result

Proceed with implementation of:

- HomeWhoRddaSupportsSection
- page.tsx homepage composition update

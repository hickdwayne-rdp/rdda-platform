# Red Deer Doula Association Platform

This repository contains the production implementation workspace for the Red Deer Doula Association website/platform.

## Repository Structure

- docs/ — approved RDDA planning, architecture, CMS, database, and implementation source documents.
- epo/ — Next.js application source code.
- exports/ — future generated exports, documentation outputs, and handoff files.

## Current Checkpoint

11A — RDDA Repository Documentation + Source Document Reference Checkpoint

Confirmed baseline status:

- Git initialized on branch main.
- Repository connected to origin/main.
- Working tree clean at checkpoint.
- Baseline homepage validated as static.
- 
pm run lint passed.
- 
pm run build passed.
- / route confirmed as prerendered static content.
- Required RDDA source documents are stored in docs/.
- Next.js application is contained in epo/.
- exports/ exists for future generated outputs.

Most recent source-code checkpoint before this documentation checkpoint:

- 8a3e920 Align RDDA baseline homepage metadata

## Implementation Rule

Planning and specification documents belong in docs/.

Application source code belongs in epo/.

Generated exports and handoff files belong in exports/.

Do not place planning documents inside epo/src.

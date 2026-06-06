# RDDA Platform Repository

This repository contains the production implementation foundation for the Red Deer Doula Association platform.

## Repository Structure

- docs/  
  Required RDDA planning, architecture, production, CMS, Payload/Supabase, and build-thread source documents.

- repo/  
  Next.js application source code.

- exports/  
  Future generated outputs, handoff documents, and exported artifacts.

## Current Checkpoint

11A — RDDA Repository Documentation + Source Document Reference Checkpoint

Confirmed foundation:

- Git repository initialized on main.
- Connected to origin/main.
- Working tree clean.
- Baseline homepage validated as static.
- npm run lint passed.
- npm run build passed.
- / route confirmed as prerendered static content.
- Required RDDA source documents are stored in docs/.
- Next.js application is stored in repo/.
- Generated outputs should be stored in exports/.
- Planning documents should not be placed inside repo/src/.

Most recent completed source-code commit before this checkpoint:

8a3e920 Align RDDA baseline homepage metadata

## Required Source Documents

The docs/ folder must contain:

1. 01_RDDA_Integrated_Master_Plan.docx
2. 02_RDDA_Final_Production_Sitemap_v2_Production_Architecture.docx
3. 03_RDDA_Master_Production_Specification.docx
4. 04_RDDA_Frontend_Component_System_Template_Architecture_MASTER_Parts_1_to_14.docx
5. 05_RDDA_CMS_Database_Production_Specification_Master_COMPLETE.docx
6. 06_RDDA_Supabase_Payload_Implementation_Specification_v1_0_MASTER.docx
7. 07_RDDA_Phase_9_Master.docx
8. 09_RDDA_Production_Codex_Build_Thread_Master_Phases_1_to_8.docx

## Implementation Rule

Before future production implementation steps, source documents in docs/ should be used as the controlling reference set.

Application source-code changes should be made inside repo/ only when required by the current implementation step.

Generated planning outputs, handoff notes, and checkpoint exports should be placed in exports/.

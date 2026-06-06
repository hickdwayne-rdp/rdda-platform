# 11B — RDDA Source Document Control Index + Implementation Reference Map

## Purpose

This file is the lightweight source document control index for the RDDA production implementation repository.

Its purpose is to prevent implementation drift by identifying the required RDDA source documents, the role each document plays, and which future implementation areas must be checked against each document before code changes are made.

This file is a repository reference/checkpoint document only. It does not replace the source documents in docs/.

---

## Repository Location Rules

The RDDA repository must maintain the following separation of concerns:

| Area | Required Location | Rule |
|---|---|---|
| Source planning and specification documents | docs/ | Required master documents must remain here. |
| Next.js application implementation | repo/ | Application source code, routes, styling, components, configuration, and future CMS/frontend implementation must remain here. |
| Generated outputs, checkpoints, exports, and reference maps | exports/ | Generated documentation, implementation checkpoints, and exported reference files must remain here. |

No planning documents should be placed inside repo/src.

No application source-code files should be placed inside docs/ or exports/.

---

## Required RDDA Source Documents

The following documents are the required source documents for implementation control.

| # | Source Document | Primary Role | Controls / Applies To |
|---|---|---|---|
| 1 | 01_RDDA_Integrated_Master_Plan.docx | Overall strategic and project direction. | Project scope, mission alignment, implementation priorities, governance direction, overall website purpose. |
| 2 | 02_RDDA_Final_Production_Sitemap_v2_Production_Architecture.docx | Production sitemap and route architecture. | Page structure, route hierarchy, navigation logic, public website architecture, future route creation. |
| 3 | 03_RDDA_Master_Production_Specification.docx | Master production requirements. | Content standards, production rules, user-facing requirements, accessibility expectations, page-level implementation guidance. |
| 4 | 04_RDDA_Frontend_Component_System_Template_Architecture_MASTER_Parts_1_to_14.docx | Frontend component and template architecture. | Reusable components, layout patterns, template structure, design consistency, future frontend implementation. |
| 5 | 05_RDDA_CMS_Database_Production_Specification_Master_COMPLETE.docx | CMS and database content model specification. | Payload CMS collections, content types, database relationships, structured content requirements. |
| 6 | 06_RDDA_Supabase_Payload_Implementation_Specification_v1_0_MASTER.docx | Supabase and Payload implementation specification. | Backend integration, CMS setup, Supabase configuration, authentication/storage/data implementation planning. |
| 7 | 07_RDDA_Phase_9_Master.docx | Repository and engineering execution planning. | Engineering workflow, implementation sequencing, validation expectations, build checkpoints. |
| 8 | 09_RDDA_Production_Codex_Build_Thread_Master_Phases_1_to_8.docx | Production build-thread history and execution baseline. | Build process continuity, completed planning phases, implementation guardrails, handoff context. |

---

## Implementation Reference Map

Future implementation work must reference the relevant source documents before changing code.

| Future Implementation Area | Required Source Documents to Check |
|---|---|
| New public page or route | Documents 1, 2, 3, 4 |
| Homepage changes | Documents 1, 2, 3, 4 |
| Navigation/header/footer | Documents 2, 3, 4 |
| Frontend component creation | Documents 3, 4 |
| Styling/design system changes | Documents 3, 4 |
| Accessibility review | Documents 3, 4 |
| Content additions or rewrites | Documents 1, 2, 3 |
| CMS collection creation | Documents 5, 6 |
| Payload CMS configuration | Documents 5, 6 |
| Supabase integration | Document 6 |
| Database schema or relationship planning | Documents 5, 6 |
| Authentication or protected admin workflows | Document 6 |
| Deployment or engineering workflow | Documents 7, 8 |
| Repository structure changes | Documents 7, 8 |
| Validation, lint, build, and checkpoint work | Documents 7, 8 |

---

## Required Reference Rule for Future Build Steps

Before any future implementation step changes code, the step must identify which source documents control the work.

Each implementation step should include:

1. The implementation area being changed.
2. The source documents checked.
3. The files expected to change.
4. Confirmation that the change belongs in repo/.
5. Confirmation that generated reference/checkpoint outputs belong in exports/.
6. Confirmation that source documents remain in docs/.
7. Validation commands to run after the change, normally: npm run lint and npm run build.
8. A clean git status confirmation after commit.

---

## Documentation / Export Rule

Generated planning, checkpoints, summaries, indexes, validation notes, and handoff files should be stored in exports/.

Required master planning and specification documents should remain in docs/.

Application implementation should remain in repo/.

---

## Current 11B Scope

This 11B checkpoint creates a source document control index and implementation reference map only.

No application source-code files should be modified.

Expected file created: exports/11B_RDDA_Source_Document_Control_Index.md

---

## 11B Completion Standard

11B is complete when:

- exports/11B_RDDA_Source_Document_Control_Index.md exists.
- No files inside repo/src were modified.
- No application implementation files were changed.
- The documentation file is committed.
- git status returns a clean working tree.

---

## Future Use

Before each future RDDA implementation step, this file should be checked to confirm which source documents control the work.

This file should be used together with future implementation checklists and checkpoint documents stored in exports/.

The purpose is to keep future development source-aligned, controlled, and easy to validate.

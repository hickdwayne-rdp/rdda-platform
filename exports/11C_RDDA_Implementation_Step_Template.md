# 11C — RDDA Implementation Step Template + Code Change Checklist

## Purpose

This document provides a repeatable implementation checklist for future Red Deer Doula Association production build steps.

It is intended to be used before, during, and after each implementation task to ensure that future changes remain:

- small
- controlled
- source-document-aligned
- easy to validate
- easy to commit
- separated correctly between documentation, application code, and generated outputs

---

## Repository Location Rules

The RDDA project repository is organized as follows:

```text
rdda-platform/
├── docs/
├── repo/
└── exports/
```

### docs/

The `docs/` folder contains required RDDA source documents.

Source documents must remain in `docs/`.

These files are treated as planning, scope, architecture, sitemap, CMS, database, implementation, and production authority documents.

### repo/

The `repo/` folder contains the Next.js application.

Application source code belongs only in `repo/`.

Future application code changes should normally occur inside:

```text
repo/src/
```

or other framework-controlled application folders inside `repo/`, depending on the implementation step.

### exports/

The `exports/` folder contains generated planning files, checkpoint notes, reference maps, indexes, implementation checklists, and other supporting documentation.

Generated planning, checkpoint, and reference files belong in `exports/`.

---

## Implementation Step Template

Use this section at the start of each future implementation step.

### Step Name

```text
[Example: 12A — RDDA Component Folder Scaffold]
```

### Implementation Area Being Changed

```text
[Example: frontend component structure, layout shell, navigation, CMS model, Supabase integration, Payload configuration, content templates, deployment configuration]
```

### Source Documents Checked Before Change

List the documents that control or inform the change.

```text
- docs/01_RDDA_Integrated_Master_Plan.docx
- docs/02_RDDA_Final_Production_Sitemap_v2_Production_Architecture.docx
- docs/03_RDDA_Master_Production_Specification.docx
- docs/04_RDDA_Frontend_Component_System_Template_Architecture_MASTER_Parts_1_to_14.docx
- docs/05_RDDA_CMS_Database_Production_Specification_Master_COMPLETE.docx
- docs/06_RDDA_Supabase_Payload_Implementation_Specification_v1_0_MASTER.docx
- docs/07_RDDA_Phase_9_Master.docx
- docs/09_RDDA_Production_Codex_Build_Thread_Master_Phases_1_to_8.docx
```

Not every implementation step requires every source document, but the controlling documents for the area being changed must be checked before code changes are made.

### Expected Files or Folders That May Change

```text
[Example:]
repo/src/app/page.tsx
repo/src/app/layout.tsx
repo/src/app/globals.css
repo/src/components/
repo/src/lib/
repo/src/types/
exports/[checkpoint-file].md
```

### Files or Folders That Must Not Change

```text
[Example:]
docs/ source documents should not be edited during implementation unless the task is specifically a documentation-source update.
repo/src/ should not be changed during documentation-only checkpoints.
Application source files should not be changed during checkpoint-only or reference-only steps.
```

---

## Pre-Change Checklist

Before making changes, complete the following:

- [ ] Confirm the active location is the parent repository:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform"
```

- [ ] Confirm Git branch and clean working tree:

```powershell
git status
```

- [ ] Confirm expected project folders exist:

```powershell
Test-Path .\docs
Test-Path .\repo
Test-Path .\exports
```

- [ ] Identify whether the step is:

```text
Documentation-only
Application-code change
Configuration change
Generated-output/checkpoint update
```

- [ ] Identify the implementation area being changed.

- [ ] Check the controlling RDDA source documents before making the change.

- [ ] Confirm the expected files or folders that may change.

- [ ] Confirm which files or folders must not change.

---

## Code-Change Checklist

Use this checklist only when the step includes application-code changes.

- [ ] Keep the change small and controlled.
- [ ] Change only the files needed for the current implementation step.
- [ ] Keep application source code inside `repo/`.
- [ ] Do not move source documents out of `docs/`.
- [ ] Do not place generated checkpoint files inside `repo/src/`.
- [ ] Do not mix unrelated changes into the same step.
- [ ] Do not add CMS, database, authentication, deployment, or dynamic functionality unless the current step specifically requires it.
- [ ] Confirm the code change follows the relevant RDDA source documents.
- [ ] Confirm public-facing language stays within the approved RDDA scope.
- [ ] Confirm no placeholder planning content is accidentally added to app source files.
- [ ] Confirm no temporary, backup, or local development files are intentionally committed.

---

## Documentation-Only Checklist

Use this checklist when the step is documentation-only.

- [ ] Do not modify application source-code files.
- [ ] Do not modify files inside `repo/src/`.
- [ ] Place generated checkpoint, planning, or reference files in `exports/`.
- [ ] Keep source documents in `docs/`.
- [ ] Confirm the documentation supports future implementation work.
- [ ] Confirm the documentation does not create conflicting implementation authority.
- [ ] Confirm the documentation references the existing RDDA source documents rather than replacing them.

---

## Validation Checklist

After changes are made, complete the following validation steps.

### Check Git Status

```powershell
git status
```

Confirm only expected files are modified or created.

### Check for Accidental Application Source Changes

For documentation-only checkpoints:

```powershell
git diff -- repo/src
```

Expected result:

```text
No output
```

### Check for Temporary Files

```powershell
Get-ChildItem . -Recurse -Force -Include *.tmp,*.bak,*.old,*.log,"~$*",".DS_Store","Thumbs.db"
```

Review results carefully.

Generated local development logs inside `.next` should normally not be committed.

### Run Lint When Application Code Changes

From the Next.js project folder:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo"
npm run lint
```

### Run Build When Application Code Changes

From the Next.js project folder:

```powershell
npm run build
```

Confirm the build passes.

When validating static pages, confirm relevant routes are prerendered as static content where expected.

### Return to Parent Repository

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform"
```

---

## Commit Checklist

Before committing:

- [ ] Confirm the changed files are expected.
- [ ] Confirm no unrelated files are included.
- [ ] Confirm no app source files changed during documentation-only checkpoints.
- [ ] Confirm lint passed if application code changed.
- [ ] Confirm build passed if application code changed.
- [ ] Confirm generated files are placed in `exports/`.
- [ ] Confirm source documents remain in `docs/`.
- [ ] Confirm application code remains in `repo/`.

Review changes:

```powershell
git status
git diff --stat
```

Stage the intended files only:

```powershell
git add exports/11C_RDDA_Implementation_Step_Template.md
```

Commit:

```powershell
git commit -m "Add RDDA implementation step template"
```

Confirm clean state:

```powershell
git status
```

Push if appropriate:

```powershell
git push
```

---

## Handoff / Completion Note Template

Use this format at the end of each implementation step.

```text
[STEP NAME] complete.

Completed:
- [summary of what was created, changed, or verified]

Files created or modified:
- [file path]

Validation completed:
- git status reviewed
- lint passed, if application code changed
- build passed, if application code changed
- confirmed no unexpected repo/src changes, if documentation-only
- confirmed generated files are in exports/
- confirmed source documents remain in docs/
- confirmed application code remains in repo/

Commit completed:
[commit hash] [commit message]

Current status:
- Working tree is clean
- Branch is up to date with origin/main, if pushed
- Ready for next implementation step
```

---

## Implementation Control Reminder

Future RDDA code changes should be small, controlled, and aligned with the required RDDA source documents.

Each implementation step should have a clear scope, known expected files, validation steps, and a clean handoff.

Documentation-only checkpoints must not modify application source files.

Application source files should not be modified unless the current step specifically authorizes source-code implementation.

Generated planning, reference, and checkpoint documents belong in `exports/`.

Source documents remain in `docs/`.

Application code belongs in `repo/`.

---

## 11C Completion Note

11C created a reusable implementation step template and code change checklist for future RDDA production build work.

This checklist is intended to be used before, during, and after future implementation steps to keep the project controlled, validated, source-document-aligned, and cleanly committed.

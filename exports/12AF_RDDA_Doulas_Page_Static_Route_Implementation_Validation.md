# 12AF — RDDA Doulas Page Static Route Implementation + Validation

## Status

12AF implements the `/doulas` static public-facing route only.

This checkpoint is prepared for local repo validation. Because the repo and PowerShell environment are local to Windows, validation results must be confirmed in PowerShell before committing.

---

## Scope

Implemented file:

- `repo/src/app/doulas/page.tsx`

Checkpoint file:

- `exports/12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md`

No other files should be committed for 12AF.

---

## Starting Repo State Commands

Run from:

```powershell
C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform
```

```powershell
git status --short
git log --oneline -5
```

Expected starting condition:

- branch `main`
- working tree clean
- latest commit includes `b36c0a1 Add RDDA doulas page static route planning`

---

## Required Source Review

Review the 12AE planning checkpoint:

```powershell
code ".\exports\12AE_RDDA_Doulas_Page_Static_Route_Planning_Source_Aligned_Section_Outline.md"
```

Review existing implementation patterns:

```powershell
code ".\repo\src\app\about\page.tsx"
code ".\repo\src\app\services\page.tsx"
code ".\repo\src\app\families\page.tsx"
code ".\repo\src\components\ui\SectionCard.tsx"
```

---

## Implementation Controls

12AF must not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `/families`
- `SectionCard`
- shared UI primitives

12AF must not add:

- CMS
- Payload
- Supabase
- database logic
- authentication
- forms
- API logic
- dynamic behavior
- state
- effects
- client component behavior
- `"use client"`

12AF must use existing:

- `PageShell`
- `PageContainer`
- `SectionCard`

---

## Create Route Directory

```powershell
New-Item -ItemType Directory -Force ".\repo\src\app\doulas" | Out-Null
```

---

## Implement `/doulas`

Create:

- `repo/src/app/doulas/page.tsx`

```powershell
@'
import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

export const metadata: Metadata = {
  title: "For Doulas | Red Deer Doula Association",
  description:
    "Information for doulas interested in connection, education, collaboration, and community support through the Red Deer Doula Association.",
};

export default function DoulasPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 sm:py-16">
          <section className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              For doulas
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Connection and community for doulas in Central Alberta.
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              The Red Deer Doula Association supports doulas by creating space for
              professional connection, shared learning, local collaboration, and
              community awareness around doula care.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Professional connection
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                RDDA offers a local point of connection for doulas who want to build
                relationships with peers, exchange knowledge, and stay connected to
                the broader birth and postpartum support community.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Education and shared learning
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                The association encourages continued learning, reflective practice,
                and access to information that helps doulas provide informed,
                compassionate, and respectful support.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Community awareness
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                RDDA helps increase public understanding of doula care and the role
                doulas can play for families across pregnancy, birth, postpartum,
                loss, and other reproductive experiences.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Collaborative practice
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                The doulas page remains informational only at this stage. Directory
                listings, applications, matching, booking, profiles, search, and
                account-based features are intentionally deferred.
              </p>
            </SectionCard>
          </section>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                A static foundation for future doula resources
              </h2>
              <p className="leading-7 text-muted-foreground">
                This route establishes a safe static foundation for doula-facing
                content while preserving the current production architecture. Future
                dynamic features can be planned separately when the project is ready
                for CMS, database, directory, or application workflows.
              </p>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
'@ | Set-Content -Path ".\repo\src\app\doulas\page.tsx" -Encoding UTF8
```

---

## Implementation Checks

Confirm only the intended route file is new before adding the checkpoint:

```powershell
git status --short --untracked-files=all
```

Expected at this stage:

```text
?? repo/src/app/doulas/page.tsx
```

Confirm no forbidden client behavior:

```powershell
Select-String -Path ".\repo\src\app\doulas\page.tsx" -Pattern 'use client','useState','useEffect','fetch\(','createClient','payload','supabase','form','input','button'
```

Expected result:

- no forbidden runtime/client/CMS/database/form logic
- note: `button` should not appear

Confirm only allowed shared primitives are used:

```powershell
Select-String -Path ".\repo\src\app\doulas\page.tsx" -Pattern 'PageShell','PageContainer','SectionCard'
```

---

## Validation Commands

Run from the app directory:

```powershell
cd ".\repo"
npm run lint
npm run build
cd ".."
```

Record local result here after running:

- `npm run lint`: pending local confirmation
- `npm run build`: pending local confirmation

---

## Create Checkpoint File Locally After Download

When this Markdown file is manually downloaded from ChatGPT, it will normally be saved in the standard Windows user Downloads folder, typically:

```text
C:\Users\<WindowsUser>\Downloads\
```

Copy the downloaded file into the repo `exports` folder:

```powershell
Copy-Item "$env:USERPROFILE\Downloads\12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md" ".\exports\12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md" -Force
```

Open it for review:

```powershell
code ".\exports\12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md"
```

---

## First 25 Lines Preview Command

```powershell
Get-Content ".\exports\12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md" -TotalCount 25
```

Expected preview:

```text
# 12AF — RDDA Doulas Page Static Route Implementation + Validation

## Status

12AF implements the `/doulas` static public-facing route only.

This checkpoint is prepared for local repo validation. Because the repo and PowerShell environment are local to Windows, validation results must be confirmed in PowerShell before committing.

---

## Scope

Implemented file:

- `repo/src/app/doulas/page.tsx`

Checkpoint file:

- `exports/12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md`

No other files should be committed for 12AF.
```

---

## Final Git Status Before Commit

```powershell
git status --short --untracked-files=all
```

Expected final status before commit:

```text
?? exports/12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md
?? repo/src/app/doulas/page.tsx
```

---

## Commit and Push

Add only the 12AF route and checkpoint file:

```powershell
git add ".\repo\src\app\doulas\page.tsx"
git add ".\exports\12AF_RDDA_Doulas_Page_Static_Route_Implementation_Validation.md"
```

Commit:

```powershell
git commit -m "Add RDDA doulas page static route"
```

Push:

```powershell
git push
```

Confirm final state:

```powershell
git status --short
git log --oneline -5
```

---

## 12AF Completion Criteria

12AF is complete when:

- `/doulas` route exists at `repo/src/app/doulas/page.tsx`
- route is a static server component
- route uses `PageShell`, `PageContainer`, and `SectionCard`
- route remains informational only
- no route-specific section components were created
- no new shared UI primitives were created
- no CMS, Payload, Supabase, database, authentication, form, API, dynamic, state, effect, or client behavior was added
- `npm run lint` passes locally
- `npm run build` passes locally
- checkpoint file is saved to `exports/`
- only the route file and checkpoint file are committed
- commit is pushed to `origin/main`

---

## Confidence Check

- Scope alignment confidence: 0.92
- Static route safety confidence: 0.90
- No forbidden feature confidence: 0.93
- Local validation confidence before running commands: 0.70
- Overall confidence after local lint/build pass: expected 0.90+

The main remaining uncertainty is exact styling/import compatibility with the current local route patterns. If lint or build fails, compare imports and wrapper structure against the existing `/about`, `/services`, and `/families` pages, then adjust `/doulas/page.tsx` only.

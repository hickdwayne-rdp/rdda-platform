# 12AC — RDDA Families Page Static Route Implementation + Validation

## Status

12AC implements the `/families` static public-facing route only.

The route follows the 12AB decision that selected `/families` as the next safe static public-facing page after:

1. `/`
2. `/about`
3. `/services`

---

## Implementation Scope

12AC is limited to one new application route file:

```text
repo/src/app/families/page.tsx
```

12AC also adds this checkpoint file:

```text
exports/12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md
```

No existing static route is modified.

---

## Files Created

### 1. Families static route

```text
repo/src/app/families/page.tsx
```

Purpose:

- create the `/families` public-facing static route
- align the page with the 12AB page selection decision
- keep the implementation static, informational, and source-aligned
- reuse the existing layout and UI primitives already approved in prior checkpoints

### 2. 12AC validation checkpoint

```text
exports/12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md
```

Purpose:

- document the route implementation
- confirm scope control
- validate that prohibited systems were not introduced
- preserve the next-project handoff trail

---

## Existing Components Used

The `/families` route uses only existing approved primitives:

```tsx
import PageContainer from "@/components/layout/PageContainer";
import PageShell from "@/components/layout/PageShell";
import SectionCard from "@/components/ui/SectionCard";
```

No shared UI primitive was changed.

---

## Page Structure

The `/families` page contains four static content areas:

1. Page heading and introductory paragraph
2. Three-card family support path section
3. Static explanation of what families can expect
4. Static helpful starting points list

The page is informational only.

It does not include:

- forms
- buttons requiring behavior
- state
- effects
- client-side logic
- CMS-driven data
- database access
- authentication
- API calls

---

## Static Content Alignment

The route content is intentionally broad and stable.

It references RDDA as a public-facing starting point for families seeking information about doula support in Central Alberta.

The implementation avoids over-specific claims about:

- membership directories
- provider availability
- clinical services
- medical advice
- booking workflows
- intake forms
- individual doula profiles
- dynamic service listings

This keeps the route safe for the current static implementation phase.

---

## Explicit Non-Modification Confirmation

12AC does not modify:

- frozen homepage
- homepage content
- homepage section order
- `/about`
- `/services`
- `SectionCard`
- shared UI primitives
- layout primitives
- global styles
- metadata
- CMS configuration
- database configuration
- authentication configuration

---

## Prohibited Systems Check

12AC does not add:

- CMS
- Payload
- Supabase
- database logic
- authentication
- forms
- API logic
- dynamic behavior
- React state
- React effects
- client component behavior
- `"use client"`

---

## Source File Content

Create this file:

```text
repo/src/app/families/page.tsx
```

With this content:

```tsx
import PageContainer from "@/components/layout/PageContainer";
import PageShell from "@/components/layout/PageShell";
import SectionCard from "@/components/ui/SectionCard";

const familySupportPaths = [
  {
    title: "Pregnancy and birth preparation",
    description:
      "Families can learn what doula support may look like before birth, including preparation, emotional support, practical planning, and informed decision-making.",
  },
  {
    title: "Postpartum and early parenting",
    description:
      "The page recognizes the transition after birth and points families toward care that can support recovery, adjustment, confidence, and connection.",
  },
  {
    title: "Finding the right local support",
    description:
      "Families are encouraged to consider their needs, values, location, and preferred support style when connecting with doula care in Central Alberta.",
  },
];

const familyGuidanceItems = [
  "Doula support is non-clinical and works alongside medical care, not in place of it.",
  "Families may benefit from asking about training, scope, availability, communication style, and service areas.",
  "Support needs can change across pregnancy, birth, postpartum, loss, adoption, surrogacy, and other family experiences.",
  "RDDA can serve as a public-facing starting point for learning about doula support in Central Alberta.",
];

export default function FamiliesPage() {
  return (
    <PageShell>
      <PageContainer>
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              For Families
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Doula support for families across Central Alberta
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              The Red Deer Doula Association helps families understand doula
              support and connect with community-based care across pregnancy,
              birth, postpartum, and other family transitions.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {familySupportPaths.map((item) => (
            <SectionCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </SectionCard>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionCard title="What families can expect">
            <p>
              Doula care can provide steady, respectful, and practical support
              during important family transitions. Each family&apos;s needs are
              different, and support may include education, comfort measures,
              planning conversations, emotional reassurance, and referrals to
              appropriate community resources.
            </p>
          </SectionCard>

          <SectionCard title="Helpful starting points">
            <ul className="space-y-3">
              {familyGuidanceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        </section>
      </PageContainer>
    </PageShell>
  );
}
```

---

## PowerShell Copy Commands

Run these from the repo parent directory:

```powershell
cd "C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform"
```

Create the route folder:

```powershell
New-Item -ItemType Directory -Force ".\repo\src\app\families"
```

Copy the downloaded route file into the app:

```powershell
Copy-Item ".\page.tsx" ".\repo\src\app\families\page.tsx" -Force
```

Create the exports folder if needed:

```powershell
New-Item -ItemType Directory -Force ".\exports"
```

Copy the downloaded checkpoint file into exports:

```powershell
Copy-Item ".\12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md" ".\exports\12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md" -Force
```

Open the files in VS Code:

```powershell
code ".\repo\src\app\families\page.tsx"
code ".\exports\12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md"
```

---

## First 25 Lines Preview Command

Preview the checkpoint file after copying it:

```powershell
Get-Content ".\exports\12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md" -TotalCount 25
```

Expected first 25 lines:

```text
# 12AC — RDDA Families Page Static Route Implementation + Validation

## Status

12AC implements the `/families` static public-facing route only.

The route follows the 12AB decision that selected `/families` as the next safe static public-facing page after:

1. `/`
2. `/about`
3. `/services`

---

## Implementation Scope

12AC is limited to one new application route file:

```text
repo/src/app/families/page.tsx
```

12AC also adds this checkpoint file:
```

---

## Validation Commands

Check the working tree:

```powershell
git status --short --untracked-files=all
```

Expected new files:

```text
?? exports/12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md
?? repo/src/app/families/page.tsx
```

Run lint:

```powershell
cd ".\repo"
npm run lint
```

Return to the repo parent:

```powershell
cd ".."
```

Run build:

```powershell
cd ".\repo"
npm run build
```

Return to the repo parent:

```powershell
cd ".."
```

Confirm no prohibited client directive was added:

```powershell
Select-String -Path ".\repo\src\app\families\page.tsx" -Pattern '"use client"'
```

Expected result:

```text
No output.
```

Confirm changed files:

```powershell
git status --short --untracked-files=all
```

---

## Git Commands

Stage only the 12AC files:

```powershell
git add ".\repo\src\app\families\page.tsx"
git add ".\exports\12AC_RDDA_Families_Page_Static_Route_Implementation_Validation.md"
```

Commit:

```powershell
git commit -m "Add RDDA families page static route"
```

Push:

```powershell
git push
```

Final confirmation:

```powershell
git status --short
git log --oneline -5
```

Expected final status:

```text
No output from git status --short.
```

---

## 12AC Completion Note

12AC adds the `/families` static public-facing route using the existing approved layout and UI primitives.

The implementation is intentionally static and informational.

No existing public-facing route was modified.

No prohibited dynamic, CMS, database, authentication, API, form, client, state, or effect logic was introduced.

Recommended next step:

12AD — RDDA Families Page Source Alignment Review + Next Static Route Decision

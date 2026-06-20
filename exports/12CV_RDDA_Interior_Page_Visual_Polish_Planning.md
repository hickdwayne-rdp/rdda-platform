# 12CV — RDDA Interior Page Visual Polish Planning

## Checkpoint purpose

This checkpoint defines the next visual-polish phase after the branded homepage production update.

The homepage has now received the first brand-aligned visual polish pass, including:

- RDDA palette application across the homepage sections.
- Homepage service-area card visual hierarchy.
- Homepage audience section polish.
- Homepage approach section polish.
- Hero call-to-action contrast correction.
- Service-area card warm accent correction for cards 3 and 6.
- Production deployment to the Vercel alias.

The next step is to bring the same brand consistency to the interior pages without changing the approved static content model.

## Current production baseline

Production alias:

```text
https://rdda-platform.vercel.app
```

Latest confirmed repository state before this planning checkpoint:

```text
49c8932 Add RDDA live branded homepage production review
0f5858f Fix homepage service card warm accent
545b51a Add RDDA branded homepage production deployment validation
be6b226 Add RDDA branded homepage deployment decision planning
97bd12f Add RDDA homepage visual polish source alignment review
```

## Static constraints remain unchanged

The next polish work must continue to preserve the RDDA static MVP constraints:

- No CMS.
- No database.
- No authentication.
- No forms.
- No API routes.
- No dynamic behaviour.
- No state or effects.
- No `use client`.
- No booking workflows.
- No referral intake workflows.
- No clinical, legal, therapy, emergency, or individualized-service claims.

Visual polish may improve spacing, hierarchy, colour use, card structure, dividers, badges, and calls to action, but it must not change the site into an interactive or service-processing application.

## Interior page polish priority

The next polish phase should begin with the highest-traffic / highest-navigation pages rather than every route at once.

Priority group 1:

1. `/services`
2. `/families`
3. `/doulas`
4. `/resources`
5. `/contact`
6. `/faq`

Rationale:

- These are exposed in the global header.
- These are primary decision-making routes for visitors.
- They shape the visitor impression after the homepage.
- They can establish repeatable interior-page patterns before applying polish to lifecycle detail pages.

Priority group 2, after the primary navigation pages:

1. `/birth`
2. `/postpartum`
3. `/fertility`
4. `/loss`
5. `/family-transitions`
6. `/end-of-life-grief`

Rationale:

- These are service-area detail pages linked from the homepage and services hub.
- They should benefit from patterns established in group 1.
- Their content is more sensitive, so visual polish should avoid making claims stronger than the text supports.

Priority group 3:

1. `/about`
2. `/training`
3. `/partners`

Rationale:

- These are important, but they are less urgent than the primary support/discovery paths.
- They should receive polish after the main visitor flow is consistent.

## Proposed next implementation scope

The next implementation checkpoint should be:

**12CW — RDDA Primary Interior Page Visual Polish Implementation + Validation**

Scope should include priority group 1 only:

- `/services`
- `/families`
- `/doulas`
- `/resources`
- `/contact`
- `/faq`

This keeps the change large enough to matter but small enough to validate safely.

## Visual pattern direction

The interior page polish should use a consistent pattern rather than unique designs for every page.

Recommended pattern:

1. Page-level opening section
   - Preserve existing heading and copy.
   - Add stronger visual hierarchy through spacing and brand-colour accents.
   - Avoid oversized decorative elements that compete with content.

2. Section cards
   - Use subtle brand borders.
   - Use pale sage or warm grey backgrounds sparingly.
   - Use deep teal for headings and copper for small accents.
   - Keep cards readable and not overly busy.

3. Calls to action
   - Keep text readable against fill colours.
   - Use high contrast for filled buttons.
   - Use clear focus-visible states.
   - Avoid introducing new conversion flows.

4. Internal links
   - Preserve existing static links.
   - Make route-hub links visually consistent with homepage service-area cards where appropriate.
   - Avoid adding links that imply unbuilt functionality.

5. Accessibility
   - Maintain semantic headings.
   - Maintain keyboard-focus visibility.
   - Avoid low-contrast combinations.
   - Avoid hiding content behind interactions.

## Brand alignment rules

The implementation should continue using the approved RDDA palette already represented in `globals.css`:

- Deep green/teal: `var(--primary)` / `#3f5c58`
- Muted teal/grey: `var(--primary-soft)` / `#819795`
- Pale sage/grey: `var(--border)` / `#bbc7c4`
- Light warm grey: `var(--card-muted)` / `#d9d8d6`
- Charcoal grey: `var(--foreground)` / `#53565b`
- Warm copper/brown: `var(--secondary)` / `#ae7c58`

The earlier warm-card bug came from using an undefined CSS variable. Future work must avoid introducing new colour variables unless they are deliberately added to `globals.css` first.

## Files likely to be touched next

Likely route files:

```text
repo/src/app/services/page.tsx
repo/src/app/families/page.tsx
repo/src/app/doulas/page.tsx
repo/src/app/resources/page.tsx
repo/src/app/contact/page.tsx
repo/src/app/faq/page.tsx
```

Potential shared components may be reviewed but should not be changed unless necessary:

```text
repo/src/components/layout/PageShell.tsx
repo/src/components/layout/PageContainer.tsx
repo/src/components/ui/SectionCard.tsx
```

The implementation should prefer route-level class polish over introducing new abstractions unless a repeated structure clearly justifies it.

## Explicit non-goals for the next implementation

Do not:

- Redesign the entire site at once.
- Add animations requiring client-side behaviour.
- Add forms or contact submission flows.
- Add booking or intake workflows.
- Add CMS placeholders.
- Add route-specific section components.
- Add unsupported service claims.
- Add new navigation routes.
- Change approved content hierarchy unless required for accessibility.

## Validation plan for 12CW

After implementation, validation should include:

```powershell
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

Expected build result should remain:

```text
○  (Static)  prerendered as static content
```

The route count should remain 19 static app routes.

## Manual browser QA plan

Manual review after 12CW should include:

- `/services`
- `/families`
- `/doulas`
- `/resources`
- `/contact`
- `/faq`

Check for:

- Consistent interior-page look and feel.
- Readable buttons and links.
- No missing accents from undefined CSS variables.
- No layout breaks on desktop.
- No route content that appears to offer unbuilt workflows.
- Header and footer consistency.

## Decision

Proceed to:

**12CW — RDDA Primary Interior Page Visual Polish Implementation + Validation**

This should polish the six primary interior routes exposed in the global navigation while preserving the static MVP boundaries and using the now-approved RDDA brand direction.

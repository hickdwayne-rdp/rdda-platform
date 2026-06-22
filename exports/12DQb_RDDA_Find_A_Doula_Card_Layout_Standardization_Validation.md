# 12DQb RDDA Find a Doula Card Layout Standardization Validation

## Purpose

This checkpoint documents the corrective layout pass applied after local review found that the Find a Doula profile cards were visually inconsistent.

The issue was not the profile data source. The issue was the presentation layer: card photos and profile details were being displayed in a mixed side-by-side layout that could produce uneven image sizing, uneven card rhythm, and inconsistent visual hierarchy across profiles with different biography lengths.

## User direction

The requested correction was:

> Keep current images, add profile information based on names.

Follow-up visual direction:

> Doula cards are messed up. Photo sizes should be uniform and data format should be standardized.

## Files changed

- `repo/src/app/doulas/DoulaDirectory.tsx`

## What changed

### 1. Uniform photo sizing

The directory cards now render every doula image in the same fixed top image area:

- full card width
- fixed `aspect-[4/3]`
- `object-cover`
- `object-center`
- consistent border separation between image and text

This preserves the current approved image files while standardizing how those images appear in the profile cards.

### 2. Standardized card structure

Each card now follows the same visual order:

1. photo
2. member status / doula since line
3. doula name
4. business or public listing text where available
5. service category tags
6. services offered
7. website / public listing line
8. profile biography section

This avoids cards having different formats depending on which profile fields are available.

### 3. Associate member handling

Associate member cards now use the same card shell as doula profile cards, but associate tags receive a subtly different warm accent treatment. This keeps Chelsea Clark and Shelby Story visually aligned with the directory while still making clear they are not full profile entries yet.

### 4. Search/filter behavior retained

The existing client-side directory search and filters remain unchanged in purpose:

- search by name
- search by service text
- search by business / website text
- search by category
- search by biography text
- filter by service category

Only the rendering structure was changed.

## Static/public route posture

The `/doulas` public route remains a static public page that imports an isolated client component for search and filtering.

The project also contains `/admin/[[...segments]]` and `/api/[...slug]` dynamic routes. Those routes are intentional for upcoming portal/CMS work and are not treated as a blocker for this doula card layout fix.

## Validation required locally

Run from `C:\Users\edmon\OneDrive\Documents\GitHub\rdda-platform\repo`:

```powershell
npm run lint
npm run build
npm run dev
```

Then review:

```text
http://localhost:3000/doulas
```

Visual checks:

- all photos use the same card photo size
- cards have a consistent data order
- search still filters results
- service filter buttons still work
- associate profiles do not visually break the grid
- mobile layout remains usable

## Next decision

After visual confirmation, proceed to:

**12DR — RDDA Find a Doula Directory Source Alignment Review + Portal Scope Decision**

That review should confirm whether the public directory is acceptable before moving deeper into portal/CMS planning.

# 12DR — RDDA Doula Directory Image Focal Position Implementation Validation

## Purpose

This checkpoint records the layout refinement requested after the first Find a Doula directory implementation. The directory cards already used a uniform photo frame, but some portraits risked having heads cropped by the default center crop.

The adjustment keeps the current approved image files and improves how portraits are displayed inside the existing card layout.

## Scope

Changed file:

- `repo/src/app/doulas/DoulaDirectory.tsx`

No image files were replaced, renamed, resized, or duplicated.

## Implementation

The `DoulaDirectoryProfile` type now supports an optional per-profile image focal position:

```ts
imagePosition?: string;
```

The card image rendering now uses:

```tsx
className="object-cover"
style={{ objectPosition: doula.imagePosition ?? "center top" }}
```

This means:

- every profile image still fills the same uniform card image area;
- default cropping is biased toward the top of the portrait, reducing the chance that heads are cut off;
- individual profiles can later be fine-tuned with values such as `"50% 20%"`, `"center 18%"`, or `"center top"` without changing the image file.

## Why this approach was chosen

Three possible approaches were considered:

1. `object-fit: contain` — avoids all cropping but creates uneven empty space and weaker visual consistency.
2. global `object-position: center top` — preserves the polished card grid while reducing top-of-head cropping.
3. per-profile focal positions — allows individual tuning when a particular portrait still needs adjustment.

The chosen implementation combines options 2 and 3.

## Expected result

The doula cards should now:

- keep uniform image dimensions;
- keep current approved photos;
- avoid aggressive center-cropping that cuts off heads;
- retain the same search and filter behavior;
- allow future photo-by-photo adjustments through the profile data object.

## Validation to run locally

From the repository root:

```powershell
cd .\repo
npm run lint
npm run build
npm run dev
```

Then inspect:

```text
http://localhost:3000/doulas
```

## Manual visual checks

Review the `/doulas` page and confirm:

- heads are not noticeably cut off in the profile photos;
- each card still uses the same image frame size;
- filters and search still work;
- the layout remains stable on desktop and mobile widths.

If any individual portrait still appears too high or too low, add an `imagePosition` override to that doula profile in `repo/src/app/doulas/page.tsx`.

## Next decision

If the image crop is acceptable, continue to:

**12DS — RDDA Find a Doula Directory Source Alignment Review + Portal Scope Decision**

This deferred source alignment review should verify the directory against the uploaded profile source and separate remaining public-directory issues from future portal/CMS work.

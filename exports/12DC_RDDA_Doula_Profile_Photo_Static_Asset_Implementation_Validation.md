# 12DC — RDDA Doula Profile Photo Static Asset Implementation + Validation

## Status

Complete.

This checkpoint implements the approved doula photo assets on the static `/doulas` page.

## Source context

Previous checkpoints established:

- `12DB` documented photo intake standards, consent expectations, placement planning, alt text rules, and static image usage boundaries.
- Approved doula profile photos were added to the repository under `repo/public/images/doulas/`.
- The user confirmed the files were committed and pushed in commit `099a184 Add RDDA doula profile photos`.

## Files changed

```text
repo/src/app/doulas/page.tsx
```

## Asset paths used

The `/doulas` page now references the committed static image assets from:

```text
/images/doulas/Alicia_England.jpg
/images/doulas/Alysa_Allan.jpg
/images/doulas/Amber_Cavers.jpg
/images/doulas/Amber_Thibault.jpg
/images/doulas/Andria_Sahli.jpg
/images/doulas/Ashlee_Godzic.jpg
/images/doulas/Callista_Bierkos.jpg
/images/doulas/Chelsea_Clark.jpg
/images/doulas/Christa_Duquette.jpeg
/images/doulas/Janelle_Allison.jpg
/images/doulas/Jessie_Alfano.jpeg
/images/doulas/Kaitlyn_Boese.jpg
/images/doulas/Kathleen_Howard_Bjornson.jpg
/images/doulas/Laura_Gauthier.jpg
/images/doulas/Lizzie_Cooper.jpeg
/images/doulas/Mindy_Pottruff.jpeg
/images/doulas/Miranda_Allarie.jpg
/images/doulas/Shelby_Story.jpg
/images/doulas/Stephanie_Griffith.jpg
```

## Implementation summary

The `/doulas` page now includes:

- A static `doulaPhotos` data array.
- A branded visual roster section.
- Static portrait cards using `next/image`.
- Accessible alt text in the format `Portrait of [Name]`.
- Doula names displayed under each portrait.
- A simple static label: `RDDA doula`.

The implementation intentionally does not add:

- Search.
- Filtering.
- Booking.
- Matching.
- Contact links.
- Individual bios.
- Full profile pages.
- CMS or database reads.
- Forms.
- Authentication.
- API routes.
- Client-side state or effects.

## Static route boundary

This remains a static informational route.

The implementation uses only:

- Static local assets from `public/images/doulas`.
- Static in-file data.
- Existing shared layout primitives.
- `next/image` for optimized static image display.

No dynamic directory logic was introduced.

## Content alignment

Existing page language was updated so the page no longer claims that no doula photos are shown.

The page now distinguishes between:

- A static visual roster of approved doula photos.
- Deferred future directory/profile functionality.

This keeps the content accurate while preserving the static MVP boundary.

## Validation to run locally

From the project root:

```powershell
git pull
git status --short
cd .\repo
npm run lint
npm run build
cd ..
git status --short
git log --oneline -5
```

## Expected build result

The build should continue to show all current app routes prerendered as static content.

Expected route inventory remains:

```text
/
/_not-found
/about
/birth
/contact
/doulas
/end-of-life-grief
/families
/family-transitions
/faq
/fertility
/loss
/partners
/postpartum
/resources
/services
/training
```

## Visual QA focus

After local build passes, visually inspect `/doulas` for:

- All 19 portraits rendering.
- No broken image paths.
- Portrait crops acceptable at desktop and mobile sizes.
- Text remains readable.
- Cards remain aligned.
- No unwanted horizontal scrolling.
- Static roster language remains clear and does not imply booking, matching, or full profile functionality.

## Next recommended checkpoint

`12DD — RDDA Doula Photo Source Alignment Review + Deployment Decision`

This should verify the photo implementation and decide whether to deploy the visual roster to production before adding additional imagery elsewhere on the site.

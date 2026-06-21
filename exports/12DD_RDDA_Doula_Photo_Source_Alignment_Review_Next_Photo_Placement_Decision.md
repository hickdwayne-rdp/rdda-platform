# 12DD — RDDA Doula Photo Source Alignment Review + Next Photo Placement Decision

## Status

12DD is complete.

This checkpoint reviews the doula photo implementation completed in 12DC and records the next production decision for additional photo placement across the RDDA static site.

## Prior checkpoint validated

12DC — RDDA Doula Profile Photo Static Asset Implementation + Validation

Latest validated implementation state provided by Dwayne:

```text
06e6e6c Add RDDA doula photo implementation validation
be735e1 Add RDDA doula photo gallery
099a184 Add RDDA doula profile photos
bc54946 Add RDDA photo asset intake planning
6e5479a Add RDDA static background texture source alignment review
```

Local validation completed by Dwayne:

```text
npm run lint
npm run build
```

Both commands completed successfully.

The production build confirmed all app routes remain statically prerendered:

```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /birth
├ ○ /contact
├ ○ /doulas
├ ○ /end-of-life-grief
├ ○ /families
├ ○ /family-transitions
├ ○ /faq
├ ○ /fertility
├ ○ /loss
├ ○ /partners
├ ○ /postpartum
├ ○ /resources
├ ○ /services
└ ○ /training

○  (Static)  prerendered as static content
```

Working tree was clean after validation.

## Assets reviewed

The following doula image assets were added to the repository and made available to the static app:

```text
repo/public/images/doulas/Alicia_England.jpg
repo/public/images/doulas/Alysa_Allan.jpg
repo/public/images/doulas/Amber_Cavers.jpg
repo/public/images/doulas/Amber_Thibault.jpg
repo/public/images/doulas/Andria_Sahli.jpg
repo/public/images/doulas/Ashlee_Godzic.jpg
repo/public/images/doulas/Callista_Bierkos.jpg
repo/public/images/doulas/Chelsea_Clark.jpg
repo/public/images/doulas/Christa_Duquette.jpeg
repo/public/images/doulas/Janelle_Allison.jpg
repo/public/images/doulas/Jessie_Alfano.jpeg
repo/public/images/doulas/Kaitlyn_Boese.jpg
repo/public/images/doulas/Kathleen_Howard_Bjornson.jpg
repo/public/images/doulas/Laura_Gauthier.jpg
repo/public/images/doulas/Lizzie_Cooper.jpeg
repo/public/images/doulas/Mindy_Pottruff.jpeg
repo/public/images/doulas/Miranda_Allarie.jpg
repo/public/images/doulas/Shelby_Story.jpg
repo/public/images/doulas/Stephanie_Griffith.jpg
```

The image folder is correctly placed inside:

```text
repo/public/images/doulas/
```

This path is appropriate for static `next/image` usage and for Vercel deployment.

## Source alignment review

### 1. Static architecture alignment

The implementation remains aligned with the static MVP architecture.

No CMS, database, API route, client component, state, effect, search, filter, booking flow, matching logic, or dynamic profile system was introduced.

The doula photos are served as static public assets.

### 2. Content boundary alignment

The doula photo section is a visual roster only.

It does not introduce:

- individual service claims
- medical credentials
- clinical qualifications
- booking availability
- personal contact routing
- ranking or recommendation language
- automated matching language
- profile filtering
- biographies requiring ongoing maintenance

This keeps the page within RDDA's static public information boundary.

### 3. Accessibility alignment

The implementation uses explicit portrait alt text for each doula image.

The correct alt-text pattern is:

```text
Portrait of [Name]
```

This is appropriate because the photos communicate the identity of the listed doula in the visual roster.

### 4. Visual system alignment

The photos are introduced inside the existing branded `/doulas` page structure rather than creating a disconnected photo wall.

The photo section should remain:

- warm
- organized
- consistent with the RDDA brand palette
- readable on desktop and mobile
- visually supportive rather than overwhelming

The implementation intentionally avoids using photos as text backgrounds.

### 5. Performance alignment

The implementation uses `next/image`, which is appropriate for local static images in the Next.js app.

The images are public assets and should be optimized by the Next build/Vercel runtime.

Future image additions should continue to use static paths and `next/image` unless there is a specific reason not to.

## Visual QA still required by human review

The automated validation confirms lint/build/static generation, but a human visual check is still required for:

- whether all 19 portraits display
- whether names match the correct portraits
- whether crop framing is acceptable
- whether any photo appears too dark, too bright, blurry, stretched, or awkwardly cropped
- whether the grid feels balanced on mobile and desktop

If any individual image crop is poor, the next fix should adjust object positioning or use a better cropped source image rather than changing the entire layout.

## Current photo placement decision

The `/doulas` page is the first correct place to use real person photos because those assets directly support the page content.

The next photo-related step should not automatically place photos across every page.

Additional photos should only be added when they are:

1. approved for public website use,
2. relevant to the page content,
3. not misleading about RDDA's scope,
4. not distracting from readability, and
5. not emotionally inappropriate for sensitive service areas.

## Recommended next decision

The next production step should be one of the following:

### Option A — Review and refine the `/doulas` photo layout

Use this if Dwayne finds cropping, spacing, ordering, or visual balance issues on `/doulas`.

This would become:

```text
12DE — RDDA Doula Photo Layout Refinement + Validation
```

### Option B — Add approved general site imagery

Use this only if approved non-doula photos are available for pages such as Home, About, Families, Services, Resources, Training, or Partners.

This would become:

```text
12DE — RDDA General Site Photo Placement Implementation + Validation
```

### Option C — Continue non-photo visual polish for secondary pages

Use this if no additional approved photos are ready.

This would become:

```text
12DE — RDDA Secondary Interior Page Visual Polish Planning
```

## Recommendation

Recommended next step:

```text
12DE — RDDA Doula Photo Layout Review Decision
```

The safest sequence is to visually review `/doulas` first, confirm the photo grid and crops are acceptable, then decide whether to add more photography elsewhere.

## Do not proceed yet with broad site-wide photography

Do not add photos to sensitive service pages until image choices are specifically approved.

The highest-risk pages for inappropriate image choice are:

- `/loss`
- `/end-of-life-grief`
- `/family-transitions`
- `/fertility`

These pages should use either carefully selected symbolic imagery or remain brand-texture based until approved assets are available.

## Conclusion

The doula photo implementation is aligned with the static MVP, RDDA visual direction, accessibility expectations, and current content boundaries.

The site should now pause broad photo expansion until the `/doulas` page is visually reviewed and additional approved general imagery is available.

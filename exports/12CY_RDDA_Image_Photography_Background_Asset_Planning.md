# 12CY — RDDA Image, Photography, and Background Asset Planning

## Checkpoint purpose

This checkpoint defines how imagery should be added to the RDDA static site after the homepage and primary interior pages have been polished.

The intent is to add visual warmth and brand depth without weakening accessibility, readability, performance, or the static MVP boundaries.

## Current production and implementation context

The site currently has:

- A validated branded homepage.
- A live production deployment of the branded homepage.
- A confirmed fix for service-area cards 3 and 6 so their numbered warm accent circles display correctly.
- Polished primary interior pages:
  - `/about`
  - `/services`
  - `/families`
  - `/doulas`
- Static build validation confirming 19 prerendered static routes.

The image/background phase should build on that structure rather than changing the content model or page architecture.

## Static boundaries that remain in force

The imagery phase must not introduce:

- CMS dependency.
- Database dependency.
- Auth.
- Forms.
- API routes.
- Client-side state/effects.
- Route-specific interactive behavior.
- Dynamic image fetching.
- Medical, clinical, therapy, crisis, hospice, legal, mediation, or emergency-service implications.

Imagery must remain static, locally stored, and referenced from `public/`.

## Current brand assets available

Tracked brand assets currently available in the repository:

- `repo/public/brand/rdda-main-logo.jpg`
- `repo/public/brand/rdda-alt-logo-social.png`
- `repo/public/brand/rdda-brand-board.png`
- `repo/public/brand/rdda-victoriana-brand-board.jpg`
- `repo/public/brand/README.md`

These are logo/brand board assets, not full page photography assets.

## Recommended image asset locations

Future image files should be added under a clear public path such as:

```text
repo/public/images/
```

Suggested subfolders:

```text
repo/public/images/backgrounds/
repo/public/images/page-accents/
repo/public/images/community/
```

If only a small number of assets are added, a flatter structure may be acceptable:

```text
repo/public/images/about-community.jpg
repo/public/images/families-support.jpg
repo/public/images/doulas-community.jpg
```

## Image types to prioritize

The strongest fit for RDDA is soft, human, community-oriented imagery that supports the brand without overclaiming services.

Recommended imagery types:

- Warm community imagery.
- Calm family-adjacent imagery.
- Neutral hands/support imagery.
- Soft interior or gathering-space imagery.
- Abstract textures that echo the brand board.
- Gentle prairie/Alberta landscape textures.
- Subtle floral, fabric, paper, or natural background textures.

## Image types to avoid

Avoid imagery that suggests RDDA is directly providing regulated professional services outside the static content boundaries.

Avoid:

- Clinical birth-room imagery.
- Medical equipment imagery.
- Hospital procedure imagery.
- Therapy/counselling imagery.
- Crisis-response imagery.
- Hospice bedside imagery.
- Funeral-service imagery.
- Legal/court/mediation imagery.
- Highly emotional infant-loss imagery.
- Overly literal grief imagery.
- Stock photos that look corporate, staged, or impersonal.

## Page-by-page imagery plan

### Homepage

Use imagery sparingly because the homepage already has a strong branded structure.

Recommended:

- One subtle background texture or soft brand panel.
- Avoid making the hero dependent on a photo.
- Keep CTA readability as the priority.

Implementation priority: low to medium.

### About page

Best fit for meaningful imagery.

Recommended:

- Community/association-oriented photo or abstract brand image.
- Visual accent near the mission/role overview.
- Soft background shape behind a panel rather than full-bleed photo.

Implementation priority: high.

### Services page

Should remain more navigational than photographic.

Recommended:

- Subtle background texture or route-hub visual accent.
- Avoid assigning one heavy image to every service card unless the visual system is carefully controlled.

Implementation priority: medium.

### Families page

Strong candidate for warm supportive imagery.

Recommended:

- Gentle family-support or community-care image.
- Non-clinical, non-medical visual tone.
- Avoid implying individualized intervention, treatment, or emergency support.

Implementation priority: high.

### Doulas page

Strong candidate for community/professional support imagery.

Recommended:

- Doula/community/network-oriented image.
- Warm professional visual tone.
- Avoid implying registration, credentialing, clinical endorsement, or direct matching functionality.

Implementation priority: high.

### Training page

Recommended:

- Learning/community workshop imagery or subtle educational texture.
- Avoid implying current registration flow, course checkout, certification issuance, or LMS functionality.

Implementation priority: medium.

### Resources page

Recommended:

- Subtle paper/library/guide texture.
- Avoid heavy photo use.
- Keep readability and scannability primary.

Implementation priority: medium.

### Contact page

Recommended:

- Light brand background texture only.
- Do not imply an active contact form unless one exists.

Implementation priority: low.

### Partners page

Recommended:

- Community/network/handshake-adjacent imagery, but not corporate stock cliché.
- Visual tone should be collaborative and calm.

Implementation priority: medium.

### FAQ page

Recommended:

- Minimal or no photography.
- Possible soft background pattern.

Implementation priority: low.

### Lifecycle/service pages

Routes:

- `/birth`
- `/postpartum`
- `/fertility`
- `/loss`
- `/family-transitions`
- `/end-of-life-grief`

These pages require the most care.

Recommended approach:

- Use abstract or environmental imagery rather than literal emotionally loaded images.
- Keep imagery soft and supportive.
- Avoid clinical, therapeutic, legal, hospice, or crisis implications.

Implementation priority: later phase after primary pages.

## Accessibility requirements

All image additions must maintain:

- Sufficient text contrast.
- No text placed directly over busy images without an opaque or highly readable overlay.
- Meaningful `alt` text for informative images.
- Empty `alt=""` only for purely decorative images.
- No image-only content.
- No dependency on images for understanding navigation or services.

## Performance requirements

Use:

- Static local assets.
- Reasonable image dimensions.
- Compressed JPG/WebP/PNG depending on image type.
- `next/image` only where appropriate and static-safe.
- CSS background textures only when decorative and low-impact.

Avoid:

- Large unoptimized full-resolution photos.
- Remote image dependencies.
- Heavy hero backgrounds that slow first impression.
- Multiple large photos per page in the first imagery phase.

## Recommended first implementation scope

The first image/background implementation should be modest and focused.

Recommended scope for 12CZ:

1. Add image asset folder structure under `repo/public/images/`.
2. Add one reusable soft visual pattern approach, likely using CSS background shapes or lightweight decorative panels.
3. Add carefully selected image/texture treatment to:
   - `/about`
   - `/families`
   - `/doulas`
4. Optionally add a subtle services-page background accent.
5. Do not alter lifecycle pages yet.

## Asset dependency before implementation

Before 12CZ implementation, actual image assets should be available in the repository or uploaded for packaging.

If no suitable photography is available yet, the next implementation should use only:

- existing logo/brand assets,
- CSS background shapes,
- subtle decorative panels,
- no external stock imagery.

## Recommended next checkpoint

Next checkpoint:

```text
12CZ — RDDA Static Image and Background Asset Implementation + Validation
```

However, this should only proceed once either:

1. suitable image assets are provided, or
2. the decision is made to implement non-photographic background treatment first.

## Current decision

Proceed to image/background implementation only after choosing the asset source.

Preferred decision path:

- If RDDA has real photos: prepare and add them first.
- If no real photos are ready: implement subtle brand textures and background panels only.

This avoids locking the site into poor stock imagery or emotionally mismatched visuals.

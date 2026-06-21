# 12DB — RDDA Photo Asset Intake + Static Image Placement Planning

## Status

Planning checkpoint only.

No approved public photo assets were provided for implementation at this checkpoint, so this document records the intake requirements, placement plan, naming conventions, accessibility rules, and next implementation decision for future static image work.

## Current repository state

Latest validated visual state before this planning checkpoint:

- Static public route set remains complete.
- Background texture pass is CSS-only.
- No real photography has been added to the site yet.
- Existing brand assets remain in `repo/public/brand/`.
- Current visual treatment relies on brand colours, gradients, card surfaces, and decorative texture.

## Reason for deferring photo implementation

Photo implementation should not proceed until approved assets are available because photography affects:

- brand trust;
- perceived services offered;
- privacy and consent;
- accessibility;
- page performance;
- emotional tone, especially on loss, grief, transition, and end-of-life pages.

Images should not be selected randomly, scraped from unrelated websites, or added as placeholders without approval.

## Approved photo intake requirements

Before adding photo assets, each image should have:

1. **Usage permission**  
   The association must have the right to use the image publicly on the website.

2. **Consent confirmation**  
   Any identifiable people in the image must have appropriate consent for website use.

3. **Context approval**  
   The image must match the page context without implying clinical, emergency, counselling, therapy, legal, custody, child-protection, hospice, palliative, funeral, or medical service delivery.

4. **Page assignment**  
   Each image should be assigned to a specific route or reusable visual category before implementation.

5. **Alt-text direction**  
   Each meaningful image needs short, accurate alt text. Decorative background-only images should use empty alt text or CSS background treatment where appropriate.

6. **Cropping direction**  
   Image focal points should be identified before cropping so faces, hands, logo marks, or important objects are not awkwardly cut off.

## Recommended folder structure

When approved photos are available, use a separate public photo directory:

```text
repo/public/images/
  rdda-community-support.jpg
  rdda-doula-support.jpg
  rdda-family-support.jpg
  rdda-learning-resources.jpg
  rdda-soft-background-01.jpg
```

If page-specific folders become necessary:

```text
repo/public/images/pages/
  about/
  services/
  families/
  doulas/
  resources/
```

For the first implementation pass, a flat `repo/public/images/` directory is likely sufficient.

## Naming convention

Use lowercase, hyphenated, descriptive filenames.

Preferred:

```text
rdda-family-support.jpg
rdda-community-support.jpg
rdda-doula-support.jpg
rdda-soft-background-sage.jpg
```

Avoid:

```text
IMG_1029.jpg
Final final image.png
photo (1).jpeg
stock-photo-happy-family.jpg
```

## File format guidance

Preferred formats:

- `.jpg` or `.jpeg` for photos;
- `.png` only where transparency is needed;
- `.webp` if already optimized and compatible with the static workflow.

Avoid very large unoptimized originals in the repository. Public images should be web-sized before commit.

## Recommended first photo placement map

### Homepage

Current status: visually polished with brand background and service cards.

Recommended photo use:

- optional soft community/support image in a branded visual panel;
- avoid making the homepage image-heavy;
- keep the homepage fast and readable.

Implementation priority: **medium**.

### `/about`

Best fit for the first approved public photo.

Recommended imagery:

- community-oriented;
- association identity;
- calm group/support tone;
- non-clinical and non-staged if possible.

Possible placement:

- hero-side image panel;
- mission/community section accent image.

Implementation priority: **high**.

### `/services`

Services should remain mostly text- and structure-led.

Recommended imagery:

- abstract support image;
- soft brand background panel;
- hands/community/environment details rather than literal clinical scenes.

Possible placement:

- small visual divider or feature panel.

Implementation priority: **medium-low**.

### `/families`

Good candidate for warm, family-centred imagery.

Recommended imagery:

- calm parent/family moment;
- no medical scene;
- no distressing imagery;
- avoid implying a specific family structure or clinical service.

Possible placement:

- supportive hero image panel;
- section accent near “what families can expect.”

Implementation priority: **high**.

### `/doulas`

Good candidate for professional/community imagery.

Recommended imagery:

- supportive professional tone;
- group/community/connection;
- avoid implying credentialing beyond what the content says.

Possible placement:

- hero-side image panel;
- professional community section accent.

Implementation priority: **high**.

### `/resources`

Recommended imagery:

- calm learning/resource visual;
- books, notebook, community board, support materials;
- avoid official-looking government or clinical resource imagery unless approved.

Implementation priority: **medium**.

### `/faq`

FAQ likely does not need a photo.

Recommended imagery:

- none, or very light decorative background only.

Implementation priority: **low**.

### `/contact`

Contact can remain text-led unless a general association/community visual is available.

Recommended imagery:

- simple brand accent or soft community photo;
- no form imagery, since the site does not currently include forms.

Implementation priority: **low-medium**.

## Sensitive page guidance

### `/loss`

Use extreme caution.

Recommended:

- abstract, calm, gentle imagery;
- soft light, nature, hands, textile, or subtle brand texture.

Avoid:

- hospital imagery;
- visible grief scenes;
- infant imagery used in a way that could feel exploitative or triggering;
- crisis or emergency implications.

### `/end-of-life-grief`

Use extreme caution.

Recommended:

- calm natural detail;
- soft abstract imagery;
- gentle community/support symbolism.

Avoid:

- hospice, hospital, funeral, deathbed, palliative, MAID, clergy, legal, or estate imagery.

### `/family-transitions`

Use neutral, non-legal, non-custody imagery.

Recommended:

- calm household/community imagery;
- abstract transitional visuals;
- supportive non-conflict tone.

Avoid:

- court, conflict, custody, legal paperwork, mediation, or child-protection implications.

## Accessibility rules

### Meaningful image alt text

Use short alt text that describes the visible subject and purpose.

Example:

```tsx
alt="A calm family support setting with warm natural light"
```

### Decorative image alt text

If an image is purely decorative and does not add information:

```tsx
alt=""
```

### CSS background images

If used decoratively, make sure no critical content is only communicated through the background image.

### Contrast

No text should be placed directly over busy photography unless a strong overlay and contrast check are applied.

Preferred pattern:

- text in a readable card or panel;
- image beside text;
- image behind only as very subtle decorative background.

## Performance rules

Future image implementation should:

- use Next.js `Image` where appropriate;
- set clear width/height or fill sizing;
- avoid layout shift;
- avoid adding oversized source files;
- keep images static from `/public`;
- avoid remote image dependencies for MVP stability.

## Static implementation boundaries

Future image work must not add:

- image upload forms;
- CMS integrations;
- database storage;
- image APIs;
- dynamic image fetching;
- user-generated galleries;
- external stock API calls;
- client-side image carousels.

## Recommended next implementation approach

Do not add photography until approved assets are supplied.

The next useful checkpoint can be either:

1. **Photo asset upload and inventory**  
   Add approved photo files into `repo/public/images/`, document names, dimensions, and intended page placement.

2. **Static image implementation**  
   Use already-approved images and place them on a limited number of primary pages.

3. **Continue non-photo visual refinement**  
   If photos are not ready, continue polishing secondary interior pages without adding real imagery.

## Recommended next checkpoint

Because approved photos are not yet available, the recommended next checkpoint is:

**12DC — RDDA Secondary Interior Page Visual Polish Planning**

This keeps progress moving without forcing premature photo selection.

If approved photo assets are provided before that checkpoint, then the next checkpoint can shift to:

**12DC — RDDA Photo Asset Inventory + Static Image Implementation Planning**

## Decision record

At this checkpoint:

- real photo implementation is deferred;
- no photos are added to code;
- no new image files are added;
- the project remains static-only;
- future image work requires approved photo assets and placement decisions first.

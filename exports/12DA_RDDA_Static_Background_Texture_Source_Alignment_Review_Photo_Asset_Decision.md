# 12DA — RDDA Static Background Texture Source Alignment Review + Photo Asset Decision

## Checkpoint purpose

This checkpoint records the source-alignment and production-readiness review for the RDDA static background texture pass completed in 12CZ.

12CZ intentionally implemented a non-photo background and texture layer first, before introducing actual photography. The purpose was to strengthen the RDDA visual identity across the site while preserving readability, accessibility, static rendering, and performance.

## Source state reviewed

The 12CZ implementation modified:

- `repo/src/app/globals.css`
- `repo/src/components/ui/SectionCard.tsx`
- `exports/12CZ_RDDA_Static_Background_Texture_Implementation_Validation.md`

The implementation added:

- a subtle global RDDA-branded page background texture;
- a soft shared `SectionCard` surface texture;
- CSS-only visual treatment;
- no new image files;
- no photography;
- no client-side behavior;
- no CMS, database, API route, form, auth layer, or dynamic rendering.

## Validation evidence provided by user

The user ran the following validation after syncing 12CZ locally:

```powershell
npm run lint
npm run build
```

The lint command completed successfully.

The build command completed successfully with Next.js 16.2.7 and confirmed that all app routes remained prerendered as static content.

The build output confirmed the static route set:

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

The working tree was clean after validation.

Latest local synced commit at the time of validation:

```text
2af5d2b Add RDDA static background texture implementation validation
```

## Source alignment review

### Brand alignment

The texture pass aligns with the RDDA brand direction because it uses the already-approved RDDA colour system rather than introducing unrelated visual assets.

The approach supports the visual identity established from the RDDA brand board:

- muted sage/teal direction;
- warm neutral page background;
- soft card surfaces;
- restrained copper/warm accents;
- calm, supportive, community-oriented presentation.

The implementation does not rely on literal photography to communicate care. This is appropriate at this stage because the site needs a stable visual foundation before final photo selection.

### Accessibility alignment

The texture pass remains acceptable because it is intentionally subtle and does not place dense image treatment behind key reading areas.

The validation priority remains:

- body text must stay readable;
- CTA buttons must remain high contrast;
- card surfaces must not become visually noisy;
- page background texture must not distract from content;
- focus states remain visible;
- navigation and link recognition remain clear.

The earlier homepage CTA contrast issue has already been fixed and validated separately.

### Static MVP alignment

The implementation remains within the static MVP scope.

It does not add:

- client components;
- state;
- effects;
- animation systems;
- image optimization complexity;
- external image calls;
- uploaded photo management;
- CMS fields;
- API routes;
- database records;
- user-generated content;
- booking or inquiry forms.

The texture pass is therefore compatible with the static deployment model.

### Performance alignment

Because the pass is CSS-only, it avoids extra image downloads and does not increase the asset-management burden.

This is the correct foundation before introducing photography, because it allows the site to remain polished even if final photo assets are not ready.

## Visual QA notes

The user should continue visual review across:

- homepage;
- `/about`;
- `/services`;
- `/families`;
- `/doulas`;
- lifecycle pages;
- resources, FAQ, contact, partners, and training pages.

Primary review question:

> Is the texture subtle enough that the site feels branded without feeling busy?

If the texture feels too visible, future adjustment should reduce opacity or simplify the layering rather than adding more decorative elements.

## Photo asset decision

The recommended next decision is **not** to add broad photo coverage immediately.

Instead, use a staged photo strategy:

1. Keep the CSS-only background texture as the base visual system.
2. Add real photography only when images are selected intentionally.
3. Start with the most appropriate and least sensitive pages.
4. Avoid placing emotionally sensitive or medically suggestive photos on pages dealing with loss, grief, fertility, or end-of-life support until clear image standards are approved.

## Recommended next photo priority

The safest next photo-asset pass should begin with:

### Primary candidate pages

- `/about` — community, association, belonging, values.
- `/families` — warm, non-clinical family support imagery.
- `/doulas` — professional, community, and relational support imagery.

### Lower-risk supporting placement

- Homepage — optional soft image panel or very restrained brand image placement if final photography is strong.

### Pages requiring extra caution

- `/loss`
- `/fertility`
- `/end-of-life-grief`
- `/family-transitions`

These pages should not use overly literal, emotionally intense, clinical, hospital-based, hospice-like, funeral-like, or crisis-implying imagery.

## Recommended image standards

Any future photography should follow these rules:

- Use warm, calm, inclusive imagery.
- Avoid medical or clinical scenes unless the association explicitly approves them.
- Avoid implying therapy, counselling, diagnosis, treatment, hospice, palliative care, emergency response, legal advice, mediation, or child-protection services.
- Avoid staged stock imagery that feels artificial or generic.
- Avoid text embedded inside images.
- Avoid background photos behind long readable text.
- Use images as supportive atmosphere, not as proof of service scope.
- Keep file sizes optimized.
- Use local static assets under `repo/public/...`.
- Use descriptive alt text for meaningful images.
- Use empty alt text only for purely decorative images.

## Implementation decision

12DA records the following decision:

- The CSS-only texture pass is validated and source-aligned.
- The site should not yet add random or broad stock photography.
- The next implementation should either:
  - prepare a controlled image asset structure and standards, or
  - add a limited first approved photo set if the user provides final image assets.

## Recommended next checkpoint

Proceed to:

**12DB — RDDA Photo Asset Intake + Static Image Placement Planning**

This checkpoint should decide:

- which specific image files are available;
- whether the photos are owned/licensed/approved;
- which pages receive images first;
- whether photos are meaningful or decorative;
- required alt text;
- file naming conventions;
- where assets live in `repo/public`;
- what implementation is safe for 12DC.

## Status

12DA complete.

The project remains static, source-aligned, and ready for the next controlled photo asset planning step.
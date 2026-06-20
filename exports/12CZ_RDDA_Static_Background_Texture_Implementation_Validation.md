# 12CZ — RDDA Static Background Texture Implementation + Validation

## Checkpoint purpose

This checkpoint implements the first non-photo background and texture pass for the RDDA static site.

The goal is to add visual warmth, depth, and brand continuity before introducing real photography. This follows the 12CY decision to proceed with soft RDDA-branded background textures and patterns first.

## Implementation summary

### Files changed

- `repo/src/app/globals.css`
- `repo/src/components/ui/SectionCard.tsx`

### Global background treatment

The global page background was updated from a simpler brand wash to a layered RDDA-branded texture treatment using CSS only.

The new background includes:

- a muted sage/grey wash from the upper-left area
- a subtle copper warmth from the upper-right area
- a soft teal/sage wash from the lower-right area
- a very light diagonal line texture
- the existing warm neutral page gradient foundation

This keeps the site visually branded without using photography, external image files, or heavy background assets.

### Shared card surface treatment

The shared `SectionCard` component now uses a subtle layered background instead of a flat card surface.

The new card surface includes:

- a soft sage radial highlight
- a warm off-white base
- a faint lower-card muted neutral wash
- the existing RDDA border colour

Because `SectionCard` is shared across public pages, this gives multiple interior routes a consistent branded texture treatment without creating one-off visual rules.

## Static-safety review

This checkpoint does not add:

- CMS behavior
- database behavior
- authentication
- forms
- API routes
- client-side state
- effects
- dynamic routing
- external image requests
- new photo assets
- new background image files

All changes remain CSS/static React markup only.

## Accessibility review

The texture pass was intentionally subtle.

Accessibility constraints preserved:

- Text remains on light card surfaces.
- Decorative texture is not used as meaningful content.
- No text is placed directly over photographic or high-contrast imagery.
- Existing focus-visible styling remains unchanged.
- Existing semantic section structure remains unchanged.

The final local validation still needs to be run after pull:

```powershell
cd .\repo
npm run lint
npm run build
```

Expected outcome:

- ESLint passes.
- Next build passes.
- All app routes remain static.
- No runtime behavior is introduced.

## Visual review checklist

After validation, visually check:

- Homepage
- About
- Services
- Families
- Doulas
- Resources
- FAQ
- Contact

Confirm that:

- background texture is subtle, not distracting
- card surfaces still read clearly
- the site feels more branded without feeling busy
- the texture treatment does not make pages harder to read
- existing content hierarchy remains intact

## Production decision

This checkpoint should not be deployed until local lint/build validation passes and the site is visually reviewed.

If accepted, the next likely checkpoint is:

**12DA — RDDA Static Background Texture Source Alignment Review + Production Deployment Decision**

That review should decide whether to deploy the texture pass immediately or continue into a real image/photo asset pass first.

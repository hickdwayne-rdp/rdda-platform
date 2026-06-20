# 12CM — RDDA Brand Board Translation + Static Theme Planning

## Status

Planning complete.

This checkpoint translates the uploaded RDDA brand board into a safe static theme implementation plan for the deployed Next.js MVP.

No production code is changed in this checkpoint.

## Source material reviewed

- Uploaded file: `RDDA_brand board.pdf`
- Existing global theme entry point: `repo/src/app/globals.css`
- Existing shared header: `repo/src/components/layout/SiteHeader.tsx`
- Existing root metadata/layout: `repo/src/app/layout.tsx`
- Prior project checkpoint: `12CL_RDDA_Brand_Asset_Inventory_Visual_Identity_Planning.md`

## Brand board findings

The uploaded brand board identifies the following RDDA visual identity elements:

### Fonts shown on brand board

- Futura
- Just Signature
- Quicksand

### Main palette shown on brand board

| Role candidate | Hex | RGB | Notes |
| --- | --- | --- | --- |
| Muted teal / grey | `#819795` | R129 G151 B149 | Good secondary/accent colour |
| Pale sage / grey | `#bbc7c4` | R187 G199 B196 | Good soft panel/background colour |
| Light warm grey | `#d9d8d6` | R217 G216 B214 | Good neutral border/background colour |
| Charcoal grey | `#53565b` | R83 G86 B91 | Good foreground/body text colour |
| Deep green / teal | `#3f5c58` | R63 G92 B88 | Strong primary/action colour |
| Warm brown / copper | `#ae7c58` | R174 G124 B88 | Warm accent/CTA/support colour |

### Logo notes

The brand board visually includes a main logo and alternate logo examples. However, the uploaded PDF is a reference board, not a clean deployable logo asset.

For production-quality logo implementation, separate image/vector files should still be placed under `repo/public/brand/`, preferably:

- `rdda-logo.svg`
- `rdda-logo.png`
- `rdda-wordmark.svg`
- `rdda-icon.png`

The static theme can proceed before logo-file placement, but header logo replacement should wait until a clean image/vector asset is available.

## Current site theme state

The current global CSS uses placeholder warm neutral colours:

```css
:root {
  --background: #fdfaf7;
  --foreground: #2f2a26;
  --muted-foreground: #6f675f;

  --primary: #8b5e4a;
  --primary-hover: #704838;

  --border: #e6ddd4;
  --card: #ffffff;

  --focus-ring: #b7836b;
}
```

This is functional and accessible enough for the MVP, but it is not yet aligned to the RDDA brand board.

## Static theme implementation plan

### 1. Replace placeholder colour variables with RDDA palette

Recommended first-pass mapping:

```css
:root {
  --background: #f7f6f4;
  --foreground: #53565b;
  --muted-foreground: #63706f;

  --primary: #3f5c58;
  --primary-hover: #334b48;

  --secondary: #819795;
  --secondary-soft: #bbc7c4;
  --accent: #ae7c58;
  --accent-soft: #ead8ca;

  --border: #d9d8d6;
  --card: #ffffff;
  --surface-soft: #eef1ef;

  --focus-ring: #ae7c58;
}
```

Rationale:

- `#3f5c58` provides a strong RDDA-aligned primary colour.
- `#53565b` is appropriate for body text and headings.
- `#bbc7c4` and `#d9d8d6` support gentle doula/community styling without becoming too decorative.
- `#ae7c58` adds warmth and personality for accents, focus states, and selected CTA treatments.

### 2. Keep static, centralized styling

The first implementation should only touch shared/static styling surfaces:

- `repo/src/app/globals.css`
- `repo/src/components/layout/SiteHeader.tsx`
- `repo/src/components/layout/SiteFooter.tsx`
- possibly homepage shared sections after global theme passes validation

Avoid page-by-page design rewrites in the first brand implementation.

### 3. Typography strategy

The brand board names Futura, Just Signature, and Quicksand.

Because font licensing and font file availability have not been confirmed, the first safe implementation should not add proprietary font files or import unverified external fonts.

Recommended initial approach:

- Use a clean geometric sans stack as a Futura/Quicksand-friendly fallback:
  - `"Trebuchet MS", "Segoe UI", Arial, sans-serif` or similar.
- Do not attempt to use Just Signature until a licensed webfont or image-based wordmark is available.
- If the final logo/wordmark already includes the script styling, avoid adding a separate script webfont.

### 4. Header visual personality

Current header is structurally safe and static. First brand pass should:

- Keep all existing navigation links.
- Apply a slightly more refined header surface using `--background`, `--border`, and `--surface-soft`.
- Use `--primary` and `--accent` sparingly for hover/focus states.
- Preserve accessible focus rings.
- Continue using text brand name until logo asset is available.

Possible first implementation:

- Brand link title: deep teal text.
- Subtitle: muted teal/grey.
- Navigation hover: pale sage background.
- Active-looking visual style should not be introduced unless route-aware logic is planned; keep static hover only.

### 5. Footer visual personality

Current footer is static and structurally safe. First brand pass should:

- Use pale sage / warm grey separation.
- Keep the existing public-information boundary language.
- Use the deep teal for section titles and warm brown for subtle accents.
- Avoid adding unsupported calls to action.

### 6. Card and surface treatment

Existing route content uses shared cards and static sections. First theme pass should improve perceived personality through variables rather than rewriting every page:

- Softer page background.
- White cards with brand-tinted border.
- Muted sage surface panels.
- Deep teal headings/actions.
- Warm brown accent for small labels, focus states, or supporting callouts.

### 7. Logo-file implementation remains a separate step

Because no clean logo asset was found in the repo during 12CL, and the PDF is not ideal for direct production logo extraction, the next asset step should be:

1. Place usable brand files in `repo/public/brand/`.
2. Verify names and dimensions.
3. Integrate with Next.js `Image` or plain `img` depending on asset format.
4. Keep alt text simple: `Red Deer Doula Association`.
5. Replace text-only header brand only after logo renders cleanly and accessibly.

## Recommended next production sequence

### 12CN — RDDA Static Brand Theme Implementation + Validation

Implement first-pass brand styling using the palette from the uploaded brand board:

- Update `globals.css` variables.
- Update global typography stack.
- Polish header and footer with brand palette.
- Avoid logo replacement until separate logo files exist.
- Run local validation:
  - `npm run lint`
  - `npm run build`

### 12CO — RDDA Static Brand Theme Source Alignment Review

Review whether the implemented colours and typography remain aligned with the brand board and static MVP constraints.

### 12CP — RDDA Logo Asset Placement Planning

Once the actual logo files are available, plan placement under:

```text
repo/public/brand/
```

### 12CQ — RDDA Static Logo Integration + Validation

Integrate the actual logo/wordmark into shared header/footer if usable assets are available.

## Decision

Proceed to a static brand-theme implementation before logo integration.

Reason:

- The brand board gives enough colour and typography guidance to make the site feel significantly more RDDA-aligned immediately.
- Clean logo files are still not present in the repo.
- Theme variables, header polish, footer polish, and typography can be improved safely without waiting for image assets.

## Next checkpoint

12CN — RDDA Static Brand Theme Implementation + Validation

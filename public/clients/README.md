# Client Logos

Drop client logo files in this folder to populate the "Trusted By Leading
Organisations" wall on the homepage.

## Requirements

- **Format:** PNG (transparent background) or SVG
- **Colour:** White or monochrome works best — the wall tints logos to a
  uniform grey and reveals full colour/white on hover. Plain coloured logos
  also work.
- **Size:** ~400px wide is plenty; they are displayed small.

## Current state: placeholders

This folder currently holds **placeholder SVGs** (plain white client name on a
transparent background). Replace each with the real logo.

Two ways to swap them in:

1. **Easiest:** save the real logo over the placeholder using the **same
   filename** (e.g. overwrite `fao.svg`). No code change needed.
2. If your real logos are PNGs, drop them in and update the matching `logo:`
   path in the `clients` array in `src/components/LogoStrip.tsx` (change
   `.svg` → `.png`).

## Expected filenames

The component (`src/components/LogoStrip.tsx`) looks for these exact names:

| Client            | Filename         |
| ----------------- | ---------------- |
| FAO               | `fao.svg`        |
| UNDP              | `undp.svg`       |
| UNICEF            | `unicef.svg`     |
| UN Women          | `un-women.svg`   |
| WFP               | `wfp.svg`        |
| Seed Co           | `seed-co.svg`    |
| ZHL Group         | `zhl.svg`        |
| ART Corporation   | `art.svg`        |
| TSL Limited       | `tsl.svg`        |
| AFC Holdings      | `afc.svg`        |
| Zamtel            | `zamtel.svg`     |
| Old Mutual        | `old-mutual.svg` |
| Econet Wireless   | `econet.svg`     |
| Delta Corporation | `delta.svg`      |
| Stanbic Bank      | `stanbic.svg`    |
| CBZ Bank          | `cbz.svg`        |

Any logo whose file is missing automatically falls back to showing the client
name as text, so the wall always looks complete. To add, remove, or reorder
clients, edit the `clients` array in `src/components/LogoStrip.tsx`.

# Implementation and design-fidelity notes

## Source reference
- Desktop artboard: **1920 × 7941 px**.
- `design-reference/dekstop-reference.png` is an untouched copy of the provided Photoshop export.
- The original `.psd` remains with the designer and is deliberately not duplicated in the smaller source-code package.
- Original selected-work cards use the six white placeholder images. Swap them independently from the project presentations.

## Homepage section coordinates at the 1920 px reference viewport
| Section | Start | End |
|---|---:|---:|
| Hero | 20 | 1088 |
| Expertise strip | 1088 | 1229 |
| About | 1229 | 2153 |
| Selected Work | 2153 | 4559 |
| Thinking | 4559 | 5149 |
| Services | 5149 | 6159 |
| Archive | 6159 | 7259 |
| Pre-footer separation | 7259 | 7414 |
| Contact footer | 7414 | 7941 |

The implementation reproduces these section coordinates in a 1920 px browser viewport. Actual glyph rasterization will depend on the availability/licensing of Neue Haas Grotesk Display Pro and the visitor's browser/OS.

## Navigation behavior
- Work → `/#work`
- About → `/#about`
- Expertise, More about collaborating, My approach → `/#expertise`
- Get in touch → `/#contact`
- Project covers and archive entries → dedicated `/projects/[slug]` pages
- Sandila Cinnamon → branded Coming Soon page until the presentation is supplied
- Email me and the displayed email address → `mailto:sehas.rw@gmail.com`

## Project artwork
- All case-study images are separate from cover images.
- The six original portrait project presentations are in `/public/cases/` in optimized WebP format.
- CCRE Lands was resized from 6000 × 11411 to **1800 × 3423** for a more efficient web delivery; the artwork was not cropped.
- Modify `lib/projects.ts` when project covers or presentations change.

## Responsive strategy
- Original layout is retained on large screens, scaled to the viewport.
- Tablet uses two-column work; smaller typographic scale and service cards.
- Mobile uses one-column work/service layout, adapted overlapping hero, compact navigation and vertically stacked section intros.

## QA status and limitations
- Browser screenshots were checked at 1920, 768, and 390 pixels; overflow also inspected at 320, 360, 430, 700, 701, 1024, 1100, 1440 px.
- Static HTML preview was visually reviewed in headless Chromium.
- Since the build environment has no external npm registry or font CDN access, the **Next.js production build and live CDN font delivery are not validated here**. Run `npm install && npm run build` on a normal internet-connected development machine.
- The screenshots generated for this package use a browser fallback font. The website CSS attempts the requested CDNFonts import for the actual deployment.
- Font license must be checked before publication. No proprietary font files are bundled.

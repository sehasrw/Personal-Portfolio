# Sehas W — Personal Portfolio

A responsive Next.js / React / TypeScript portfolio recreated from the supplied 1920 × 7941 Adobe Photoshop design. Tailwind CSS is configured; custom styles in `app/globals.css` are used for precise design matching.

## Run locally

Requirements: Node.js 20.9 or newer and internet access to install packages.

```bash
npm install
npm run dev
```

Open http://localhost:3000 . To create a production build: `npm run build && npm start`.

## Pages and content

- `/` — homepage, with all six original placeholder covers.
- `/projects/aevix`, `/projects/nineleven-labs`, `/projects/naturifresh`, `/projects/ccre-lands`, `/projects/pearl-isle-foods`, `/projects/hotel-ravo` — individual project presentations.
- `/projects/sandila-cinnamon` — intentional Coming Soon page (no image provided).

Project data are defined in `lib/projects.ts`. Replace the image paths in the `cover` fields to publish real cover images later. Each case-study image is stored separately in `public/cases` and can be replaced independently.

The supplied CCRE Lands 6000-pixel-wide file is downscaled to 1800 pixels and all long presentation images are WebP-optimized for web delivery. Original source files are not modified.

## Typography

The font loads with the requested CDNFonts CSS import. Verify the licensing and availability of the font for a commercial website before deployment. Browser/system fallback fonts may render differently.

## Deployment

Deploy to Vercel or any service supporting Next.js. Replace `https://example.com` in `app/layout.tsx` with your deployed domain before publishing.

## Preview

The `preview/` folder contains a standalone HTML preview for quick local review without installing dependencies. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

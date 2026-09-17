# FC3 MALL — Ciao City Center

A cinematic, editorial destination site built on the FC3 identity: black, white, and a single warm gold accent, with the gold square as the recurring interaction motif.

## Design system (built first)

- Palette: FC3 Black `#0A0A0A`, Pure White `#FFFFFF`, FC3 Gold `#D4A247` sampled from the logo. Gold stays an accent (~10% of surface), never body text.
- Type: Poppins for headlines (oversized, 80–180px desktop, tight tracking, uppercase), Montserrat for body and small editorial labels (`01 / DISCOVER`). Loaded via a font link in the root head.
- Grid: 12-column editorial grid with wide margins, generous whitespace, no card-everything layouts.
- Motifs derived only from the logo: gold square markers, hard-edged rectangular masks, cropped oversized FC3 letterforms behind sections, modular grid overlays. Sharp corners, no gradients or glass.
- Motion language: mask/clip-path reveals, line-by-line text reveal, image parallax and slow scale, horizontal scroll storytelling, gold-square page transitions, 600–1200ms with premium easing. Full `prefers-reduced-motion` fallback (content visible, motion disabled).
- Logo used as a white-on-dark asset plus a square favicon.

## Homepage journey

1. Preloader — black screen, gold square snaps into place, logo reveals, curtain wipe (~1.4s, once per session).
2. Hero — your uploaded film as a muted looping background (poster image on mobile), transparent overlay nav, `MORE THAN / A MALL.` with rotating lines (MEET. EAT. SHOP. PLAY.), parallax, gold-square scroll cue, gold square cursor on desktop.
3. Introduction — `WELCOME TO / CIAO CITY CENTER.` editorial statement with architectural imagery and scroll reveal.
4. Discover FC3 — SHOP / DINE / ENTERTAINMENT / EXPERIENCES as full-bleed cinematic panels in a horizontal scroll sequence on desktop, stacked vertical panels on mobile. Hover zooms the image, shifts the label, reveals the gold marker.
5. Signature transition — white background inverts to black as the gold square travels down and becomes the DINE section marker.
6. Dining — `COME / HUNGRY.` horizontal editorial gallery of restaurants with cuisine, floor, hours.
7. Entertainment — `STAY / LONGER.` type expands across the viewport, then reveals full-width media (cinema, kids, family, events).
8. What's Happening — `THIS WEEK / AT FC3`, large editorial event features with dates as graphic elements.
9. #FC3MOMENTS — editorial social wall, staggered lifestyle grid (no Instagram embed).
10. Visit — `SEE YOU / AT FC3.` address, hours, parking, contact, map link, architectural image.
11. Footer — oversized typographic footer, logo, SHOP / DINE / PLAY / VISIT, contact, social, and giant `CIAO CITY CENTER` lockup with gold accents.

## Navigation

Transparent over hero, condensing into a minimal solid bar on scroll. Links: DISCOVER, SHOP, DINE, PLAY, EVENTS, VISIT plus search. Full-screen cinematic menu with numbered oversized items (`01 SHOP` …) and imagery that changes with the hovered item. Mobile gets a sticky thumb-level quick bar: Stores, Food, Map, Events, Visit.

## Pages (all in this pass)

`/` · `/discover` · `/stores` · `/stores/[slug]` · `/dining` · `/dining/[slug]` · `/entertainment` · `/events` · `/events/[slug]` · `/offers` · `/map` · `/visit` · `/about` · `/contact`

- Stores directory: instant search, category filters (Fashion, Beauty, Dining, Cafés, Entertainment, Services, Kids, Lifestyle), animated filtering, editorial index rows rather than a product grid. Detail pages show floor, location, hours, category, directions.
- Dining and events mirror that structure with their own art direction.
- Mall map: custom SVG floor plan in the FC3 language — floor switcher, category and amenity toggles (parking, entrances, restrooms, elevators, restaurants), searchable store pins, selection highlighted in gold. Built as SVG, not a third-party map.

## Content

Curated placeholder content in typed TypeScript content files (`src/content/`): stores, restaurants, events, offers, amenities, opening hours, contact, homepage features — shaped so a CMS can replace the source later with no component changes. Imagery generated to a consistent cinematic grade: warm highlights, deep blacks, controlled saturation, real social moments plus people-free architecture.

## Technical notes

- The project runs on TanStack Start (React 19 + TypeScript + Tailwind v4), which is fixed here rather than Next.js; routing uses file-based routes under `src/routes/`, which gives the same clean URLs, SSR and per-page metadata.
- Motion: GSAP + ScrollTrigger for scroll choreography, Lenis for smooth scroll, both gated on reduced-motion. No heavy WebGL.
- Reusable components: `Preloader`, `Navigation`, `MegaMenu`, `Hero`, `EditorialSection`, `ImageReveal`, `SplitSection`, `HorizontalGallery`, `StoreDirectory`, `StoreCard`, `RestaurantFeature`, `EventFeature`, `InteractiveMap`, `Marquee`, `AnimatedButton`, `GoldCursor`, `Footer`.
- Video and logo served via CDN asset pointers; images responsive and lazy-loaded below the fold.
- SEO: per-route title/description/OG/Twitter, semantic heading hierarchy, JSON-LD (ShoppingCenter, Restaurant, Event), `robots.txt`, `sitemap.xml`, canonical URLs.
- Accessibility: WCAG AA contrast, keyboard-navigable menu/filters/map, visible focus states, ARIA on interactive controls, alt text, reduced-motion support.

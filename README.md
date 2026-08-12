# JEM — Minimal Jewellery

A premium, minimal jewellery e-commerce home page built with React (Vite) and Tailwind CSS.

## Design

- **Palette** — warm ivory base (`#FBF7F1`), ink (`#1F1A2B`), and a jewel-tone trio of emerald, ruby, and gold, echoing the gemstones themselves.
- **Type** — Fraunces (display serif) paired with Manrope (body/UI sans).
- **Signature element** — faceted, gem-cut clip-path shapes (`.facet-hero`, `.facet-card`, `.facet-badge`, `.facet-divider` in `src/index.css`) used across the hero image, logo mark, badges, and offer banner to echo a cut stone throughout the page.

## Structure

```
frontend/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── gem-favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js        # sample products, categories, reviews, brands
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Categories.jsx
        ├── Products.jsx
        ├── OfferBanner.jsx
        ├── Reviews.jsx
        ├── Brands.jsx
        └── Footer.jsx
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Notes

- Product imagery is pulled from Unsplash via URL for demo purposes — swap `src/data/content.js` for your real product catalog and images.
- Fully responsive from mobile (2-column grids) through desktop (4-column grids), with visible keyboard focus states and `prefers-reduced-motion` support.

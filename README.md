# BCSSK Website — Next.js + TypeScript

**Bhaurao Chavan Sahakari Sakhar Karkhana Ltd., Nanded**

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
bcssk/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # CSS variables, Google Fonts, animations
│
├── components/
│   ├── layout/
│   │   ├── TopStrip.tsx    # Top bar with lang toggle + links
│   │   ├── Header.tsx      # Sticky header with nav
│   │   ├── Ticker.tsx      # Scrolling news ticker
│   │   └── Footer.tsx      # Footer with contact + links
│   │
│   └── sections/
│       ├── Hero.tsx         # Hero + stats grid
│       ├── Tenders.tsx      # Filterable tender board (client component)
│       ├── Notices.tsx      # Notice board cards
│       ├── Projects.tsx     # Future projects grid
│       ├── Careers.tsx      # Job listings
│       └── About.tsx        # About + services + compliance
│
├── lib/
│   └── data.ts             # All site content (tenders, notices, jobs…)
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Key Design Decisions

- **Data in `lib/data.ts`** — edit content here, UI updates automatically
- **Types in `types/index.ts`** — `Tender`, `Notice`, `Project`, `Job` interfaces
- **CSS variables in `globals.css`** — change `--green`, `--amber`, `--cream` to retheme
- **`"use client"`** only where needed (TopStrip, Tenders filter) — rest are server components

## Next Steps

- [ ] Connect to a CMS (Sanity, Strapi) or database for dynamic tenders/notices
- [ ] Add `/tenders`, `/careers`, `/notices` dedicated pages via App Router
- [ ] Implement Marathi language toggle (i18n with `next-intl`)
- [ ] Add PDF upload for tender documents
- [ ] Deploy on Vercel (free tier works great for this)

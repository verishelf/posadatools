# POSADA TOOLS — Premium Power Tool E-Commerce

Professional-grade power tools storefront built with Next.js, TypeScript, and Tailwind CSS.

**Brand tagline:** BUILT FOR REAL WORK

## Quick Start

```bash
cd posada-tools
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Lucide React icons
- Zustand (cart persistence)
- Stripe-ready checkout foundation
- Server Components by default

## Project Structure

```
src/
  app/                  # App Router pages
  components/
    layout/             # Header, Footer
    products/           # ProductCard, ProductDetail
    forms/              # Newsletter
    ui/                 # Button and primitives
  lib/
    products.ts         # Demo catalog + helpers
    cart.ts             # Zustand cart store
    utils.ts
  types/
    product.ts
public/
  images/
```

## Features Implemented

### Working out of the box (demo mode)
- Full responsive homepage with industrial design system
- Navigation (desktop + mobile slide-out)
- Product catalog with 8 demo products
- Category pages (Power Tools, Batteries & Chargers, Accessories)
- Product detail pages with variants, quantity, stock checks
- Functional cart (add / remove / update quantity) with localStorage persistence
- Demo checkout (clearly labeled — no real charges)
- About, Contact, Shipping, Warranty, Privacy, Terms placeholder pages
- SEO metadata foundations

### Requires external credentials
- Real Stripe Checkout + webhooks
- Supabase inventory / admin / order persistence
- Image uploads
- Newsletter backend
- Protected `/admin` area

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values when ready:

```bash
cp .env.example .env.local
```

## Adding Real Products

1. Edit `src/lib/products.ts` or migrate the data model to Supabase.
2. Place product images in `public/images/products/`.
3. Update image paths in the product records.
4. Never invent torque ratings, certifications, or performance claims.

## Connecting Stripe

1. Create a Stripe account and get test keys.
2. Add keys to `.env.local`.
3. Implement `src/app/api/checkout/route.ts` to create Checkout Sessions server-side.
4. Validate product IDs, prices, quantities, and stock on the server before creating the session.
5. Set up the webhook endpoint and verify signatures.
6. Never treat a client-side redirect as proof of payment.

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Add environment variables in the Vercel dashboard. Set `NEXT_PUBLIC_SITE_URL` to your production domain.

## Design System

| Token       | Value     |
|-------------|-----------|
| Black       | `#080808` |
| Charcoal    | `#151515` |
| Metallic    | `#C5C7CA` |
| Red         | `#E10613` |
| Muted       | `#8A8D91` |

Display font: Oswald  
Body font: Inter

## Important Notes

- All product data is **demo / illustrative only**.
- No free shipping, warranty guarantees, or performance claims are advertised unless configured and accurate.
- Cart prices are snapshotted client-side for display; production checkout **must** re-validate on the server.
- The admin area at `/admin` is a scaffold only and is not secured until authentication is implemented.

## Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

---

POSADA TOOLS — Built for Real Work

# FinoTravels

FinoTravels is a travel information and booking-support website operated by TravelFirst LLC. It presents travel services, flight offers, company information, and customer support details.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS 4

Static route content is generated as HTML at build time. Client-side JavaScript is limited to interactive navigation and FAQ controls.

## Project Structure

```text
app/                 Next.js root layout and route resolver
assets/              Source assets
components/          Shared site components
data/                Shared site data
public/images/       Public image assets
site-pages/          Content components rendered by the App Router
utils/               Shared utilities
index.css            Global styles
```

## Requirements

- Node.js 20.9 or newer
- npm

## Getting Started

```bash
npm install
npm run dev
```

The development server prints its local URL, typically `http://localhost:3000`.

## Validation and Deployment

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Vercel detects Next.js automatically; no SPA rewrite configuration is needed. Connect the repository and deploy the production branch from the Vercel project.

## Contact Details

- Business: TravelFirst LLC
- Phone: +1 (855) 385-4015
- Email: contact@finotravels.com

The site currently provides a front-end travel inquiry experience and does not connect to a live flight booking or inventory API.

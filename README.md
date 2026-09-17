# FinoTravels

FinoTravels is a modern travel booking landing website built with React and Vite. It presents flight deals, vacation packages, hotel and cruise options, destination pages, and a contact-focused user journey for customers looking to plan and book their next trip.

## Overview

This project is a front-end travel website designed to help users:

- browse travel services such as flights, hotels, cruises, and car rentals
- view featured deals and destination information
- explore legal and policy pages for transparency
- contact the travel brand via phone or inquiry flow
- navigate a responsive single-page application experience

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript

## Features

- Responsive travel homepage with hero section and booking call-to-action
- Navigation for travel categories and deal pages
- Deal pages for domestic, international, first-class, business-class, and last-minute offers
- Destination and service pages
- About, contact, and policy/legal pages
- Mobile-friendly layout and sticky header navigation

## Project Structure

```bash
finotravels/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── utils/
├── README.md
└── vercel.json
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This starts the Vite development server. Open the local URL shown in the terminal (typically http://localhost:5173) to view the site.

### Production build

```bash
npm run build
```

This creates a production-ready build in the `dist` folder.

### Preview production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start dev server
npm run build    # build for production
npm run preview  # preview production build locally
npm run lint     # run lint checks
```

## Branding and Contact Details

The site is branded as FinoTravels and uses the following contact information from the app data:

- Phone: +1 (833) 411-0077
- Email: contact@finotravels.com

## Notes

- The app is mainly a front-end marketing and booking funnel, not a connected backend booking system.
- Routing is handled with React Router for multi-page navigation.
- The project is configured for deployment on Vercel, as shown by the included `vercel.json` file.

# WKU DSOC Website

Complete redesign of [wkudsoc.org](https://wkudsoc.org) — the official website for Western Kentucky University's **Disaster Science Operations Center**.

**Live:** [manmeet3591.github.io/wkudsoc-website](https://manmeet3591.github.io/wkudsoc-website/)

## Tech Stack

- **React 19** + TypeScript
- **Vite 8** (build tool)
- **Tailwind CSS v4** (CSS-first config)
- **Framer Motion** (scroll animations, page transitions, parallax)
- **React Router** (HashRouter for GitHub Pages)
- **Lucide React** (icons)
- Deployed on **GitHub Pages** via `gh-pages`

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Animated hero, stats bar, services preview, AI showcase, partners carousel, CTA |
| About | `/about` | Mission/vision, who we serve, goals, what makes DSOC unique |
| Team | `/team` | 8 team members across 3 categories with real photos |
| Partners | `/partners` | Category-filtered partner grid + consortium members |
| Services | `/services` | 6 service categories with detail cards |
| Media | `/media` | Featured article + news grid with category filters |
| Events | `/events` | Upcoming events timeline + past events grid |
| Research | `/research` | 3 Disaster AI tools (live Streamlit links), publications |
| Contact | `/contact` | Contact form + info cards + facility locations |

## Design

- **WKU brand colors**: Red (#C41230), charcoal (#1A1A1A), white
- Glassmorphism cards with backdrop blur
- Scroll-triggered animations (fadeInUp, stagger, parallax)
- Animated stat counters
- Page transitions via AnimatePresence
- Fully mobile-responsive (tested across all breakpoints)

## Content

Real content scraped from WordPress REST API at wkudsoc.org:
- Team data (names, titles, bios, headshots)
- Services (6 categories with descriptions and key points)
- Partners (20+ organizations across 5 categories)
- 45 images (team photos, partner logos, facility images, event photos)
- Contact info, facility addresses, Disaster AI tool URLs

## Development

```bash
npm install
npm run dev        # Start dev server at localhost:5173
npm run build      # Production build
npm run deploy     # Deploy to GitHub Pages
```

## Session Summary

Built in a single Claude Code session on April 13, 2026.

### What was built
- Complete website redesign from WordPress to modern React SPA
- 9 pages, 47 source files, ~4,200 lines of code
- 45 images downloaded from WordPress media library
- Full design system with WKU brand colors, glassmorphism, and Framer Motion animations

### Commits
1. `d82b7ac` - Initial WKU DSOC website - React + Vite + Tailwind + Framer Motion
2. `4a55ae2` - Update WKU brand colors, remove blog, add real images from WordPress, remove Luke/Carly from team
3. `59fc4b0` - Fix DSOC name (remove &), remove Home nav button, enlarge navbar logo
4. `4829401` - Make site fully mobile responsive - scale text, padding, grids, and layout for all screen sizes

### Iterative changes made per user feedback
- Swapped default blue accent to WKU Red (#C41230) + charcoal backgrounds
- Removed Luke Ferguson and Carly Crockett from team roster
- Removed Blog page entirely (kept news articles in Media)
- Downloaded 45 real images from WordPress REST API (team headshots, partner logos, facility photos, event images, Disaster AI screenshots)
- Fixed "Disaster Science Operations Center" name (removed erroneous "&")
- Removed Home button from nav (logo serves as home link)
- Enlarged navbar logo for better text readability
- Full mobile responsiveness pass: scaled text, padding, grids, and layouts across all 24 component files

# AI Portfolio — React

A minimal, dark-themed React portfolio for a Software Developer & AI Engineer. Built with Vite, React Router, Tailwind CSS, and Framer Motion.

## Stack

- **React** (Vite)
- **React Router DOM** — multi-page routing
- **Tailwind CSS** — styling (v4, PostCSS)
- **Framer Motion** — animations
- **Lucide React** — icons

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Git & GitHub

Initialize and make the first commit:

```bash
git init
git add .
git commit -m "Initial React portfolio setup"
```

Then create a new repository on GitHub and connect it:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Project structure

- `src/components/layout/` — Navbar, Footer, Layout
- `src/components/ui/` — Reusable UI (ProjectCard, SkillBadge, SectionHeader, etc.)
- `src/components/sections/` — (optional) section blocks
- `src/pages/` — Route pages (Home, About, Experience, Projects, Skills, Contact)
- `src/data/` — projects.js, skills.js, experience.js, navigation.js, contact.js
- `src/hooks/` — useScrollReveal, useActiveSection
- `src/routes/` — Router setup
- `src/styles/` — Global CSS

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/experience` | Work experience (timeline) |
| `/projects` | Projects (with category filter) |
| `/projects/:slug` | Project detail |
| `/skills` | Skills by category |
| `/contact` | Contact info + form |

## Customization

- **Profile photo:** Replace `src/assets/profile.jpg` with your own image (same path). The hero uses it in the premium profile card.
- **Hero & about:** Edit `src/data/hero.js` (name, tagline, summary, badges, CTAs, stats, strengths, about story).
- **Content:** Edit `src/data/` (projects, skills, experience, contact, navigation).
- **Theme:** Colors are in `src/index.css` under `@theme` (Tailwind v4). Use `--color-accent-glow` for soft glows.
- **Resume:** Add `public/resume.pdf` and ensure `resumeUrl` in `src/data/navigation.js` (and hero CTAs) points to it.

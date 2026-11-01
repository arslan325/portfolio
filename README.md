# Muhammad Arslan, Portfolio

Personal portfolio of **Muhammad Arslan**, Senior Software Engineer (Flutter and Full Stack) based in Frankfurt am Main, Germany.

**Live site:** https://muhammadarslan-dev.netlify.app/

![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)

## About the project

A single page portfolio that shows my work as a mobile and full stack engineer: the apps I have built, where I have worked, my skills and my education. The hero shows a phone that cycles through screens of real apps I worked on, including Jazz Tamasha (50M+ users).

I built it so that content, theme and images live in their own files, separate from the components. Updating the site means editing data, not JSX.

### Features

- Light and dark mode, following the device setting until the visitor picks one
- Fully responsive, from small phones to 4K screens, with width and spacing set per screen size
- Animations with Framer Motion: page load sequence, hero phone carousel, animated project filters, expandable job details
- Respects "reduce motion" settings on the visitor's device
- Keyboard accessible, with visible focus states, a skip link and ARIA labels
- Active section highlighting in the navigation
- No backend and no tracking

## Tech stack

| Area       | Tools                                         |
| ---------- | --------------------------------------------- |
| Framework  | React 18                                      |
| Build tool | Vite 5                                        |
| Styling    | Tailwind CSS 3, theme driven by CSS variables |
| Animation  | Framer Motion                                 |
| Icons      | Lucide                                        |
| Hosting    | Netlify                                       |

## Run it locally

You need Node.js 18 or newer.

```bash
git clone https://github.com/arslan325/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173.

Other commands:

```bash
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  config/
    theme.js        colors (light and dark), fonts, corner radius
    layout.js       page width, side spacing and text size per screen size
  data/
    profile.js      name, headline, contact details, About text
    experience.js   work history
    projects.js     projects, links and filters
    skills.js       skill groups
    education.js    degrees and languages
    site.js         navigation and section titles
  assets/images/    profile photo and project screenshots (imported in index.js)
  components/       one component per section
  context/          light and dark mode state
  lib/              turns theme.js and layout.js into CSS variables
```

### How the theme works

`src/config/theme.js` holds every color as a hex value. At startup, `src/lib/applyTheme.js` turns them into CSS variables for light and dark mode, and Tailwind reads those variables (see `tailwind.config.js`). Changing one value in `theme.js` updates the whole site, in both modes.

`src/config/layout.js` works the same way for the page width and side spacing at each screen size.

## Deployment

The site is deployed on Netlify. Build settings are in `netlify.toml`, so connecting the repo is enough:

1. In Netlify, choose **Add new site, Import an existing project**, and pick this repo.
2. Netlify reads `netlify.toml` (build command `npm run build`, publish folder `dist`).
3. Every push to `main` deploys automatically.

## Using this as a template

You are welcome to learn from the code or use the structure for your own portfolio. Please do not reuse my personal content: the text, my photo, my project descriptions and my work history.

To make it yours, edit the files in `src/data/`, replace the images in `src/assets/images/`, and adjust the colors in `src/config/theme.js`.

## Contact

- Email: [maherarslan325@gmail.com](mailto:maherarslan325@gmail.com)
- LinkedIn: [linkedin.com/in/arslan325](https://www.linkedin.com/in/arslan325/)
- GitHub: [github.com/arslan325](https://github.com/arslan325)

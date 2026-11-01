# Muhammad Arslan, Portfolio

React 18 + Vite + Tailwind CSS + Framer Motion. Light and dark mode, fully responsive.

## Run it

You need **Node.js 18 or newer** (check with `node -v`; download from https://nodejs.org).

```bash
# 1. go into the project folder
cd arslan-portfolio

# 2. install packages (only the first time)
npm install

# 3. start the dev server
npm run dev
```

Open the address it prints (usually http://localhost:5173). The page reloads by itself when you save a file.

### Build for production

```bash
npm run build     # creates the dist/ folder
npm run preview   # checks the built version locally
```

### Put it online (free)

- **Netlify:** drag the `dist/` folder onto https://app.netlify.com/drop, or connect your GitHub repo with build command `npm run build` and publish folder `dist`.
- **Vercel:** import the GitHub repo at https://vercel.com/new. It detects Vite on its own.

## Where to change things

You never need to edit a component to change content, colors or images.

| What | File |
| --- | --- |
| Colors (light and dark), fonts, corner radius, default mode | `src/config/theme.js` |
| Page width, left and right spacing, text size per screen size | `src/config/layout.js` |
| Name, headline, intro, email, phone, socials, stats, About text, CV button | `src/data/profile.js` |
| Jobs | `src/data/experience.js` |
| Projects, links, filters, which apps show in the hero phone | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Education section and languages | `src/data/education.js` |
| Menu items, section titles, footer | `src/data/site.js` |
| All images | `src/assets/images/` (imports listed in `index.js`) |

### Images

To change an image:

1. Put your file in `src/assets/images/` (photo) or `src/assets/images/projects/` (screenshots).
2. Either give it the same name as the placeholder, or update the import in `src/assets/images/index.js`, for example:
   ```js
   import tamasha from './projects/tamasha.png';
   ```

Screenshots look best in a phone ratio (about 9:19.5, for example 1080 x 2340 px). Your photo should be square.

### CV download button

Put your PDF in the `public/` folder, then set in `src/data/profile.js`:
```js
resumeUrl: '/Muhammad_Arslan_CV.pdf',
```
Leave it as `''` to hide the button.

### Adding a project

Copy one object in `src/data/projects.js`, change the fields, and add its screenshot to `index.js` in the images folder. Set `featured: true` to make it a wide card, and `showInHero: true` to show it in the hero phone.

## Project structure

```
src/
  config/theme.js        colors, fonts, radius
  config/layout.js       page width and side spacing per screen size
  data/                  all text and links
  assets/images/         all images + index.js
  components/            page sections (Hero, About, Experience, Projects, Skills, Contact)
  context/ThemeContext   light/dark mode switch
  lib/applyTheme.js      turns theme.js into CSS variables (no need to edit)
```

Animations turn off automatically for visitors who set "reduce motion" on their device.

import { theme } from '../config/theme';
import { layout } from '../config/layout';

// Turns the theme config into CSS variables. You do not need to edit this file.
const toRgb = (hex) => {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

const kebab = (s) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

const colorVars = (colors) =>
  Object.entries(colors)
    .map(([key, value]) => `--color-${kebab(key)}: ${toRgb(value)};`)
    .join('');

// Turns src/config/layout.js into the page width rules.
function layoutCss() {
  return [...layout]
    .sort((a, b) => a.minWidth - b.minWidth)
    .map((row) => {
      const rules = `
        html { font-size: ${row.fontSize}; }
        .container-page { max-width: ${row.maxWidth}; padding-left: ${row.padding}; padding-right: ${row.padding}; }`;
      return row.minWidth > 0 ? `@media (min-width: ${row.minWidth}px) { ${rules} }` : rules;
    })
    .join('\n');
}

export function applyTheme() {
  const css = `
    :root {
      ${colorVars(theme.colors.light)}
      --font-display: ${theme.fonts.display};
      --font-body: ${theme.fonts.body};
      --radius-card: ${theme.radius.card};
      --radius-button: ${theme.radius.button};
      color-scheme: light;
    }
    .dark {
      ${colorVars(theme.colors.dark)}
      color-scheme: dark;
    }
    ${layoutCss()}`;

  let style = document.getElementById('theme-vars');
  if (!style) {
    style = document.createElement('style');
    style.id = 'theme-vars';
    document.head.appendChild(style);
  }
  style.textContent = css;

  if (theme.fonts.googleFontsUrl && !document.getElementById('theme-fonts')) {
    const link = document.createElement('link');
    link.id = 'theme-fonts';
    link.rel = 'stylesheet';
    link.href = theme.fonts.googleFontsUrl;
    document.head.appendChild(link);
  }
}

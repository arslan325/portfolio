/** @type {import('tailwindcss').Config} */
// Colors, fonts and radius come from CSS variables that are generated
// from src/config/theme.js. Change the theme there, not here.
const color = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2400px',
      },
      colors: {
        bg: color('bg'),
        surface: color('surface'),
        ink: color('ink'),
        muted: color('muted'),
        line: color('line'),
        primary: color('primary'),
        'on-primary': color('on-primary'),
        accent: color('accent'),
        success: color('success'),
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
      },
    },
  },
  plugins: [],
};

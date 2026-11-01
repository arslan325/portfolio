// ─────────────────────────────────────────────────────────────
//  THEME: change colors, fonts and corner radius here.
//  Every component reads from these values, so one edit here
//  changes the whole site. Use hex colors (#RRGGBB).
// ─────────────────────────────────────────────────────────────

export const theme = {
  // "light", "dark" or "system" (follows the visitor's device setting)
  defaultMode: 'system',

  fonts: {
    // Display font is used for headings, body font for everything else.
    display: "'Bricolage Grotesque', system-ui, sans-serif",
    body: "'Figtree', system-ui, sans-serif",
    // If you change the fonts above, update this Google Fonts link too.
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap',
  },

  colors: {
    light: {
      bg: '#F3F6FA', // page background
      surface: '#FFFFFF', // cards and panels
      ink: '#0D1B2E', // main text
      muted: '#56677D', // secondary text
      line: '#DCE3EC', // borders and dividers
      primary: '#0B5CD5', // buttons, links, highlights
      onPrimary: '#FFFFFF', // text on primary color
      accent: '#14B3E6', // second highlight color
      success: '#12A15B', // "available" dot
    },
    dark: {
      bg: '#08111F',
      surface: '#0F1B2E',
      ink: '#E6EDF6',
      muted: '#93A3B8',
      line: '#1F2F47',
      primary: '#5B9DFF',
      onPrimary: '#06101F',
      accent: '#3CCBF4',
      success: '#34D27F',
    },
  },

  radius: {
    card: '1.25rem',
    button: '999px',
  },
};

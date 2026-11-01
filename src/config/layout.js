// ─────────────────────────────────────────────────────────────
//  LAYOUT: page width, side spacing and text size per screen size.
//
//  Each row applies from `minWidth` (in px) upward, until the next row.
//    maxWidth   widest the content can get ('none' = use the full screen)
//    padding    empty space on the left and right of the content
//    fontSize   base text size; everything on the site scales with it
//
//  Less space on the sides  -> lower `padding` or raise `maxWidth`
//  More space on the sides  -> raise `padding` or lower `maxWidth`
// ─────────────────────────────────────────────────────────────

export const layout = [
  {
    name: "phone",
    minWidth: 0,
    maxWidth: "none",
    padding: "1.25rem",
    fontSize: "16px",
  },
  {
    name: "tablet",
    minWidth: 640,
    maxWidth: "none",
    padding: "2rem",
    fontSize: "16px",
  },
  {
    name: "laptop",
    minWidth: 1024,
    maxWidth: "none",
    padding: "3rem",
    fontSize: "16px",
  },
  {
    name: "desktop",
    minWidth: 1800,
    maxWidth: "1700px",
    padding: "3rem",
    fontSize: "16px",
  },
  {
    name: "large screen",
    minWidth: 1920,
    maxWidth: "1760px",
    padding: "3rem",
    fontSize: "17px",
  },
  {
    name: "very large screen",
    minWidth: 2400,
    maxWidth: "2100px",
    padding: "3.5rem",
    fontSize: "19px",
  },
];

import { images } from "../assets/images";

// Filter buttons above the project grid, in this order.
export const projectFilters = [
  "All",
  "Mobile",
  "Web",
  "Streaming",
  "AI",
  "Fintech",
  "Real time",
];

// Projects. Fields:
//  featured:   true makes the card wide (use for one or two projects)
//  showInHero: true shows the screenshot in the hero phone
//  color:      background color behind the screenshot on the card
//  links:      any number of { label, url }
export const projects = [
  {
    id: "tamasha",
    name: "Jazz Tamasha",
    tagline: "Drama, movies and live matches",
    description:
      "OTT streaming app I led the full rebuild of in Flutter. Includes fast loading reels, secure streaming URLs and an Android TV version.",
    highlight: "50M+ users, 500+ APIs, 30 to 40% faster",
    platform: "Mobile and Android TV",
    categories: ["Mobile", "Streaming"],
    tech: ["Flutter", "BLoC", "MVVM", "Kotlin", "Firebase"],
    image: images.projects.tamasha,
    color: "#7A1E2C",
    featured: true,
    showInHero: true,
    links: [
      { label: "Website", url: "https://tamashaweb.com/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.spbtv.mobilinktv",
      },
      {
        label: "Apple Play",
        url: "https://apps.apple.com/pk/app/tamasha-live-tv-movie-drama/id976208250",
      },
    ],
  },
  {
    id: "hoja",
    name: "Hoja AI",
    tagline: "Agentic AI learning platform",
    description:
      "Fully agentic AI app with real time communication, built in Flutter with a Kotlin (Ktor) backend.",
    highlight: "200+ APIs, 30 to 40% performance gain",
    platform: "Mobile and Web",
    categories: ["Mobile", "Web", "AI"],
    tech: ["Flutter", "Kotlin", "Ktor", "AI agents"],
    image: images.projects.hoja,
    color: "#3B2A8F",
    featured: true,
    showInHero: true,
    links: [{ label: "Website", url: "https://hoja.ai/" }],
  },
  {
    id: "anue",
    name: "Anue",
    tagline: "Student success platform",
    description:
      "Study places, study start planning and everything a student needs in one place. Flutter app plus a React website.",
    highlight: "400+ APIs in the Flutter app",
    platform: "Mobile and Web",
    categories: ["Mobile", "Web"],
    tech: ["Flutter", "React.js", "TypeScript", "GitHub Actions"],
    image: images.projects.anue,
    color: "#0E6E62",
    showInHero: true,
    links: [{ label: "Website", url: "https://anue.eu/" }],
  },
  {
    id: "mpay",
    name: "MPay Network",
    tagline: "Payments and wallet",
    description:
      "Fintech app for payments and digital wallets, with secure storage for sensitive data.",
    platform: "Mobile",
    categories: ["Mobile", "Fintech"],
    tech: ["Flutter", "REST APIs", "Secure Storage"],
    image: images.projects.mpay,
    color: "#0B4F8A",
    showInHero: true,
    links: [{ label: "Website", url: "https://mpaynetwork.com/" }],
  },
  {
    id: "winlok",
    name: "Winlok",
    tagline: "Entertainment and gaming",
    description: "Gaming and entertainment app built in Flutter with BLoC.",
    platform: "Mobile",
    categories: ["Mobile"],
    tech: ["Flutter", "BLoC", "REST APIs"],
    image: images.projects.winlok,
    color: "#8A4B0B",
    links: [{ label: "Website", url: "https://www.winlok88.com/" }],
  },
  {
    id: "lonch",
    name: "Lonch",
    tagline: "Social marketplace",
    description:
      "Social marketplace app with Firebase authentication and a GraphQL API.",
    platform: "Mobile",
    categories: ["Mobile"],
    tech: ["Flutter", "Firebase Auth", "GraphQL"],
    image: images.projects.lonch,
    color: "#6A2C70",
    showInHero: true,
    links: [{ label: "Website", url: "https://www.lonch.io/" }],
  },
  {
    id: "quiz",
    name: "Quiz App",
    tagline: "Real time multiplayer quiz",
    description:
      "Real time gameplay with tournaments and matchmaking, powered by a Node.js and Socket.IO backend.",
    platform: "Mobile",
    categories: ["Mobile", "Real time"],
    tech: ["Flutter", "Node.js", "Socket.IO"],
    image: images.projects.quiz,
    color: "#1F6E2E",
    links: [
      {
        label: "Watch demo",
        url: "https://drive.google.com/file/d/1HBOdm6nKsd0LDxBiauLs3kTgn2sXtP3G/view",
      },
    ],
  },
  {
    id: "pakverowall",
    name: "PakVeroWall",
    tagline: "Food ordering",
    description: "Food ordering app for browsing menus and placing orders.",
    platform: "Mobile",
    categories: ["Mobile"],
    tech: ["Flutter", "REST APIs"],
    image: images.projects.pakverowall,
    color: "#A33A12",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.pakverowall",
      },
    ],
  },
];

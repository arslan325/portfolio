// Work history, newest first. The first `visibleHighlights` points are
// always shown; the rest open with the "Show all" button.
export const experience = [
  {
    company: 'Anue',
    role: 'Senior Software Engineer',
    period: 'Feb 2026 to Present',
    location: 'Berlin, Germany (Remote)',
    url: 'https://anue.eu/',
    summary: 'Leading Flutter development for a student success platform, and building its React website.',
    highlights: [
      'Delivered the Flutter app version of the Anue platform with 400+ APIs integrated.',
      'Built a Clean Architecture foundation with dependency injection, repositories and modular layers.',
      'Set up GitHub Actions pipelines for automated builds, tests and deployments.',
      'Implemented encrypted local storage for credentials, tokens and user preferences.',
      'Maintain the Anue website and build new features in React.js and TypeScript.',
    ],
    tech: ['Flutter', 'BLoC', 'Clean Architecture', 'React.js', 'TypeScript', 'GitHub Actions'],
  },
  {
    company: 'Hoja AI',
    role: 'Senior Software Engineer',
    period: 'Dec 2024 to Nov 2025',
    location: 'London, UK (Remote)',
    url: 'https://hoja.ai/',
    summary: 'Built a fully agentic AI app and helped build the AI agents behind it.',
    highlights: [
      'Worked across the app and the backend of a product with 200+ APIs.',
      'Improved performance by 30 to 40% through refactoring and better state management.',
      'Delivered agentic AI features with real time communication.',
      'Built Flutter mobile and web apps with BLoC, Clean Architecture and an OOP focused structure.',
      'Developed backend services in Kotlin (Ktor) with CI/CD, testing and code reviews.',
      'Ran reviews and direction for the team and trained junior developers.',
    ],
    tech: ['Flutter', 'Kotlin', 'Ktor', 'AI agents', 'Firebase', 'CI/CD'],
  },
  {
    company: 'Mercurial Minds',
    role: 'Senior Software Engineer',
    period: 'Jun 2024 to Dec 2024',
    location: 'Islamabad, Pakistan',
    summary: 'Led the full revamp of Jazz Tamasha, an OTT app with 50M+ users.',
    highlights: [
      'Rebuilt the app in Flutter (BLoC and MVVM) and implemented 500+ APIs.',
      'Made the app 30 to 40% faster than the old version and added fast loading reels.',
      'Handled streaming URLs securely for paid content and live matches.',
      'Worked on solution architecture with a large backend team.',
      'Optimized Android TV playback in native Kotlin for Tamasha TV.',
      'Set up CI/CD, deep linking and automated tests, and mentored junior developers.',
    ],
    tech: ['Flutter', 'BLoC', 'MVVM', 'Kotlin', 'Android TV', 'Firebase'],
  },
  {
    company: 'NextTier',
    role: 'Full Stack Flutter Developer',
    period: 'Aug 2020 to May 2024',
    location: 'Islamabad, Pakistan',
    summary: 'Built cross platform apps and the Node.js backends behind them.',
    highlights: [
      'Built multiple cross platform apps in Flutter with Provider, MVC, MVVM and BLoC.',
      'Developed Node.js REST APIs and real time sockets, deployed with Docker and CI/CD.',
      'Reduced crashes and load times to make apps faster and more reliable.',
      'Integrated Firebase, Maps, payments and third party APIs.',
      'Led sprints, code reviews and architecture decisions.',
      'Trained and mentored interns and junior developers.',
    ],
    tech: ['Flutter', 'Node.js', 'Socket.IO', 'Docker', 'Firebase'],
  },
];

// How many highlights to show before "Show all".
export const visibleHighlights = 3;

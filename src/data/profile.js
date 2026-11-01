import { images } from '../assets/images';

// Personal details, hero text and contact links.
export const profile = {
  name: 'Muhammad Arslan',
  initials: 'MA',
  role: 'Senior Software Engineer',
  focus: 'Flutter and Full Stack',

  headline: 'I build mobile apps that keep working when millions of people open them.',
  intro:
    'Senior Software Engineer with 5+ years in Flutter, React, Node.js and Kotlin. I led the rebuild of Jazz Tamasha, a streaming app with 50M+ users, and I am now studying High Integrity Systems in Frankfurt.',

  available: true,
  availability: 'Open to roles in Germany',

  location: 'Frankfurt am Main, Germany',
  email: 'maherarslan325@gmail.com',
  phone: '+49 163 4739928',
  photo: images.profile,

  // To show a "Download CV" button: put your PDF in the /public folder
  // and write its name here, e.g. '/Muhammad_Arslan_CV.pdf'.
  // Leave it empty ('') to hide the button.
  resumeUrl: '',

  socials: [
    { label: 'GitHub', url: 'https://github.com/arslan325', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arslan325/', icon: 'linkedin' },
  ],

  // Short numbers shown under the hero text.
  stats: [
    { value: '5+', label: 'years shipping apps' },
    { value: '50M+', label: 'users on Jazz Tamasha' },
    { value: '500+', label: 'APIs in one app' },
  ],

  // Paragraphs for the About section.
  about: [
    'I started in 2020 building Flutter apps for clients at NextTier, and picked up the backend along the way: Node.js APIs, sockets, Docker and CI/CD. Since then I have worked on almost every kind of app, from wallets and marketplaces to a real time quiz game.',
    'The project that shaped me most was Jazz Tamasha. It streams drama, movies and live matches to more than 50 million users, and live matches cannot go down. I led its rebuild in Flutter, wired up 500+ APIs and made it 30 to 40% faster than the old app.',
    'After that I built an agentic AI product at Hoja AI, and today I lead Flutter development at Anue while also building their React and TypeScript website. Next to work I am doing an M.S. in High Integrity Systems at Frankfurt University of Applied Sciences.',
  ],
};

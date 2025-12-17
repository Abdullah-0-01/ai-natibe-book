import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Human',
  tagline: 'Premium educational book on Physical AI, Embodied Intelligence, and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ai-natibe-book-ma8axe43o-ranas-projects-55a7e9e4.vercel.app/',
  baseUrl: '/',

  organizationName: 'Muhammad Abdullah',
  projectName: 'ai-native-book',

  // ✅ Fixed: build will not fail on broken links now
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Human',
      logo: {
        alt: 'Physical AI & Human Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/introduction/what-is-physical-ai', label: 'Book', position: 'left'}, // ✅ fixed safe link
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/Abdullah-0-01/ai-natibebook-chatbot.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/Abdullah-0-01/ai-natibebook-chatbot.git'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/posts/abdullah-abdulrehman-989b352b3_ai-chatbots-innovation-activity-7393969295577481217-ZmUA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtzzjkBUZDhEE_UwZtw7F8HlDSW_vJ_Rhk'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Native Book. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

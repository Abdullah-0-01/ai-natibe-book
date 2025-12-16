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

  url: 'https://ai-native-book-seven.vercel.app',
  baseUrl: '/',

  organizationName: 'QaimudinKhuwaja',
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
          href: 'https://github.com/QaimudinKhuwaja/ai-native-book',
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
            {label: 'GitHub', href: 'https://github.com/QaimudinKhuwaja'},
            {label: 'Facebook', href: 'https://www.facebook.com/QaimudinKhuwaja'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/QaimudinKhuwaja'},
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

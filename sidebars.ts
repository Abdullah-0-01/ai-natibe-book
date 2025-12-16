import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Physical AI & Human Book Sidebar - use actual doc ids (folders without numeric prefix in ids)
  bookSidebar: [
    {
      type: 'category',
      label: 'Introduction to Physical AI',
      collapsible: true,
      collapsed: false,
      items: [
        'introduction/what-is-physical-ai',
        'introduction/why-physical-ai-matters',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsible: true,
      collapsed: false,
      items: [
        'core-concepts/embodied-intelligence',
        'core-concepts/perception-and-action',
      ],
    },
    {
      type: 'category',
      label: 'Architecture & Design',
      collapsible: true,
      collapsed: false,
      items: [
        'architecture/robot-architecture',
        'architecture/sensor-integration',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      collapsible: true,
      collapsed: false,
      items: [
        'implementation/building-systems',
        'implementation/deploying-ai-robots',
      ],
    },
    {
      type: 'category',
      label: 'Future & Challenges',
      collapsible: true,
      collapsed: false,
      items: [
        'conclusion/future-of-embodied-ai',
        'conclusion/ethical-considerations',
      ],
    },
  ],
};

export default sidebars;

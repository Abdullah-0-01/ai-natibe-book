<!--
---
sync_impact_report:
  version_change: "1.0.1 → 2.0.0"
  modified_principles:
    - old: "I. Zero External UI Libraries Except Tailwind"
      new: "I. Core Vision"
    - old: "II. Mobile-First, Glassmorphism + Gradient Design"
      new: "II. Core Philosophy"
    - old: "III. MDX for All Book Content"
      new: "III. UI Principles"
    - old: "IV. Dark/Light Mode Toggle"
      new: "IV. Technology Standards"
    - old: "V. Lightning Fast Performance"
      new: "V. Structure"
    - old: "VI. 100% Accessible (ARIA + Keyboard Nav)"
      new: "VI. Navigation"
    - old: "VII. TypeScript Strict Mode & Reusable Components"
      new: "VII. Performance"
  added_sections:
    - "Accessibility"
    - "Deployment"
  removed_sections:
    - "Technology Stack"
    - "Constraints"
  updated_templates:
    - path: ".specify/templates/plan-template.md"
      status: "pending"
    - path: ".specify/templates/spec-template.md"
      status: "pending"
    - path: ".specify/templates/tasks-template.md"
      status: "pending"
  todos: []
---
-->
# Physical AI & Humanoid Robotics AI-Native Book Platform Constitution

## Core Principles

### I. Core Vision
To create a premium, mobile-first educational book focused on Physical AI, Embodied Intelligence, and Humanoid Robotics, providing a smooth, distraction-free reading experience.

### II. Core Philosophy
AI is to be represented as intelligence inside a physical body, grounded in real-world movement, perception, and interaction.

### III. UI Principles
The user interface will adhere to mobile-first layouts, utilizing glassmorphism with soft gradients. It will feature a sticky mobile bottom navigation, smooth chapter transitions, dark/light modes, large readable typography, and soft blur code backgrounds.

### IV. Technology Standards
The project will be built on a Docusaurus base, with Tailwind CSS for all styling. Book chapters will be MDX-driven, composed of reusable UI blocks, and located in `docs/`.

### V. Structure
The website will consist of only four pages: Home, Book, About, and Contact. The book itself will be composed of five chapters, with each chapter containing two topics.

### VI. Navigation
Navigation will be handled by a bottom sticky navbar on mobile devices and a sidebar for chapter navigation on desktop. The entire structure must be keyboard-accessible.

### VII. Performance
The application must ensure a fast initial load by lazy-loading chapters and minimizing the use of scripts.

### VIII. Accessibility
The platform must adhere to the highest accessibility standards, including semantic HTML, full screen reader support, visible focus indicators, and a reduced-motion mode.

### IX. Deployment
The project will be deployed as a static site on Vercel's free tier.

## Governance
All pull requests and code reviews must verify compliance with this constitution. Any deviation requires an explicit exemption documented in an Architectural Decision Record (ADR).

**Version**: 2.0.0 | **Ratified**: 2025-12-10 | **Last Amended**: 2025-12-10
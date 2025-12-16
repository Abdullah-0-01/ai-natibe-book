# Specification: AI-Native Book Platform

## 1. Overview

Build a complete AI-Native Book Platform based on Physical AI & Humanoid Robotics. The platform will follow the project Constitution and this Specification as the source of truth. The immediate focus is entirely on the frontend UI and content planning.

## 2. Core Principles

- **Premium Experience:** Polished, professional look and feel.
- **Mobile-First:** Design and functionality must prioritize mobile devices.
- **Distraction-Free:** Minimalist UI to focus on the content.
- **Fast & Performant:** Optimized for quick loading and smooth interaction.
- **Accessible:** Adherence to WCAG standards.
- **Optimized for Learning:** Structure and navigation designed to enhance the educational experience.

## 3. Pages and Content

- **Home:** Landing page with a hero section, book preview, and call-to-action.
- **Book:** The main content, organized into 5 chapters, each with 2 topics.
  - Content will be written in MDX.
  - Source files will be located in a `/content/chapters/` directory (relative to the final content root, e.g., `/docs/` or `/blog/` in Docusaurus).
- **About:** A static page containing author information and an overview of the book's mission.
- **Contact:** A static page with social links:
  - GitHub
  - Medium
  - LinkedIn
  - WhatsApp
  - Facebook

## 4. UI/UX and Technology

- **Frontend Framework:** Docusaurus.
- **Styling:** Tailwind CSS for reusable, utility-first components. No other external UI libraries (e.g., ShadCN, Material-UI) are permitted.
- **Programming Language:** TypeScript (strict mode).
- **Navigation:**
  - **Mobile:** Sticky bottom navbar for primary navigation.
  - **Desktop:** Collapsible sidebar for book chapter/topic navigation.
  - **Interaction:** Smooth scrolling between chapters/topics.
- **Visual Design:**
  - **Theme:** Dark and Light mode support.
  - **Effects:** Use of glassmorphism, soft gradients, and blurred backgrounds for code blocks.
  - **Typography:** Large, readable fonts.
- **Componentization:** All UI elements should be built as reusable components.

## 5. Performance & Accessibility

- **Loading:** Fast initial page load (First Contentful Paint). Lazy-loading for book chapters to reduce initial bundle size.
- **JavaScript:** Keep the client-side JavaScript footprint minimal.
- **HTML:** Use semantic HTML5 markup.
- **Accessibility (a11y):**
  - Screen-reader friendly (ARIA attributes where necessary).
  - Full keyboard navigation support.
  - Clearly visible focus indicators.
  - Respect for `prefers-reduced-motion`.

## 6. Content Structure: Course Modules & Weekly Plan

### Modules

1.  **Module 1: The Robotic Nervous System:** ROS 2, DDS, and the AI-Native framework.
2.  **Module 2: The Digital Twin:** Gazebo, Unity, and synthetic data generation.
3.  **Module 3: The AI-Robot Brain:** Integrating LLMs with robotic systems.
4.  **Module 4: Vision-Language-Action Models:** NVIDIA Isaac, perception, and manipulation.
5.  **Module 5: Capstone Project:** Building a complete humanoid robotics application.

### Weekly Schedule

- **Weeks 1-2:** Module 1
- **Weeks 3-4:** Module 2
- **Weeks 5-7:** Module 3
- **Weeks 8-10:** Module 4
- **Weeks 11-13:** Module 5 (Capstone)

## 7. Learning Outcomes

- Mastery of Physical AI principles.
- Proficiency in ROS 2 development.
- Expertise in Gazebo and Unity for simulation.
- Application of NVIDIA Isaac for AI tasks.
- Design and integration for humanoid robots.
- Integration of GPT/LLMs into robotic control loops.

## 8. Assessment & Constraints

- **Projects:**
  1.  A ROS 2 package for a core robotic function.
  2.  A Gazebo simulation environment for a custom robot.
  3.  An Isaac perception pipeline.
  4.  A final capstone project combining all learned concepts.
- **Constraints:**
  - No additional pages beyond Home, Book, About, Contact.
  - No external UI libraries other than Tailwind CSS.
  - The deliverable is a static frontend application. No backend or database development is in scope.

## 9. Deliverables

- **Folder Structure:** A clear and scalable folder structure for the Docusaurus project.
- **MDX Templates:** Templates for chapter and topic pages.
- **UI Components:** A library of reusable React/TSX components built with Tailwind CSS.
- **Navigation:** Implementation of the specified mobile and desktop navigation.
- **Static Pages:** Content for the "About" and "Contact" pages.
- The final output should be a project skeleton fully ready for the frontend implementation and content writing phase.

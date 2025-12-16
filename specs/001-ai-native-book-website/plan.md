# Implementation Plan: AI-Native Book Website

**Branch**: `001-ai-native-book-website` | **Date**: 2025-12-06 | **Spec**: [specs/001-ai-native-book-website/spec.md]
**Input**: Feature specification from `specs/001-ai-native-book-website/spec.md`

## Summary
This plan outlines the technical implementation for the AI-Native Book Website using Docusaurus 3 and Tailwind CSS. The project will leverage Docusaurus's powerful documentation framework, MDX support, and theme customization capabilities. The focus remains on creating a high-performance, accessible, and visually appealing user experience with a modern, mobile-first design, preserving the core principles and success criteria, **without relying on shadcn/ui**.

## Technical Context

**Language/Version**: TypeScript (strict mode)
**Primary Dependencies**: Docusaurus 3, React 19, Tailwind CSS, MDX
**Storage**: localStorage for waitlist form
**Testing**: Jest / React Testing Library (for custom components)
**Target Platform**: Modern Web Browsers
**Project Type**: Static Site Generator (Docusaurus)
**Performance Goals**: FCP < 1.5s, Total JS bundle < 150KB (excluding images)
**Constraints**: Mobile-first responsive design, Dark/Light themes, 100% accessibility
**Scale/Scope**: Premium Book Website

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [X] **UI Libraries**: Only `Tailwind CSS` is used for styling. No external UI component libraries like shadcn/ui are permitted.
- [X] **Design**: Is the UI mobile-first? Does it incorporate glassmorphism and gradients?
- [X] **Content**: Is all book content authored in MDX and located in `/docs/` (Docusaurus docs structure)?
- [X] **Theme**: Does the application support both dark and light modes with a toggle?
- [X] **Performance**: Is the FCP under 1.5s? Is the bundle size (sans images) under 150KB?
- [X] **Accessibility**: Is the application 100% accessible (ARIA, keyboard navigation)?
- [X] **Code Quality**: Is TypeScript `strict` mode enabled? Are components reusable?
- [X] **Tech Stack**: Does the implementation use Docusaurus 3, Tailwind, and MDX? (shadcn/ui explicitly excluded per user request)

## Project Structure

### Documentation (this feature)
```text
specs/001-ai-native-book-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)
```text
/
├── blog/ (optional, for future blog posts)
├── docs/
│   ├── 01-introduction/
│   │   ├── 01-topic-a.mdx
│   │   └── 02-topic-b.mdx
│   ├── 02-core-concepts/
│   │   ├── 01-topic-a.mdx
│   │   └── 02-topic-b.mdx
│   ├── ... (up to 5 chapters, each with 2 topics)
│   └── _category_.json (for sidebar organization)
├── src/
│   ├── components/
│   │   ├── custom/
│   │   │   ├── HomeHero.tsx
│   │   │   ├── BookPreview.tsx
│   │   │   └── WaitlistForm.tsx
│   │   └── theme/ (Docusaurus theme overrides)
│   │       ├── Navbar/
│   │       │   └── index.tsx (for theme toggle, if custom)
│   │       └── DocItem/
│   │           └── Layout/index.tsx (for progress bar, chapter nav within doc items)
│   ├── pages/
│   │   ├── index.tsx (Home page)
│   │   ├── about.tsx
│   │   └── contact.tsx
│   └── css/
│       └── custom.css (for Tailwind integration)
├── static/ (for images and static assets)
├── docusaurus.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```
**Structure Decision**: A standard Docusaurus 3 project structure will be used. Book content will reside in the `docs/` directory, organized by chapters and topics using MDX. Custom React components will be in `src/components/custom/`, and Docusaurus theme overrides in `src/components/theme/`.

## Complexity Tracking
No violations to the constitution have been identified.
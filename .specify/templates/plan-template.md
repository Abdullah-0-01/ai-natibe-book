# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

**Language/Version**: TypeScript (strict mode)
**Primary Dependencies**: Docusaurus 3, React 19, Tailwind CSS, MDX
**Storage**: localStorage for waitlist form
**Testing**: Jest / React Testing Library (for custom components)
**Target Platform**: Modern Web Browsers
**Project Type**: Static Site Generator (Docusaurus)
**Performance Goals**: FCP < 1.5s, Total JS bundle < 150KB (excluding images)
**Constraints**: 4 pages (Home, Book, About, Contact), 5 chapters x 2 topics, Mobile-first responsive design, Dark/Light themes, 100% accessibility, Vercel deployment
**Scale/Scope**: Premium Book Website

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [ ] **Core Vision**: Does the feature align with the vision of a premium, mobile-first educational book on Physical AI?
- [ ] **Core Philosophy**: Does the feature represent AI as embodied intelligence?
- [ ] **UI Principles**: Is the UI mobile-first? Does it use glassmorphism, soft gradients, and a sticky mobile bottom nav?
- [ ] **Technology Standards**: Is the feature built with Docusaurus, Tailwind CSS, and MDX?
- [ ] **Structure**: Does the feature adhere to the 4-page site structure and the 5x2 chapter/topic model?
- [ ] **Navigation**: Is the navigation keyboard-accessible and implemented with a sticky bottom navbar (mobile) and sidebar (desktop)?
- [ ] **Performance**: Is the feature optimized for a fast initial load, lazy-loading, and minimal scripts?
- [ ] **Accessibility**: Does the feature meet accessibility standards (semantic HTML, screen reader support, focus indicators)?
- [ ] **Deployment**: Is the feature compatible with a static site deployment on Vercel?

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

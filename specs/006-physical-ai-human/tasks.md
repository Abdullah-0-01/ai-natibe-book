---

description: "Task list template for feature implementation"
---

# Tasks: Physical AI & Human

**Input**: Design documents from `/specs/006-physical-ai-human/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
Assuming a Docusaurus 3 structure:
- Pages: `src/pages/`
- Custom Components: `src/components/custom/`
- Docusaurus Theme Overrides: `src/theme/`
- Docs/Content: `docs/`
- Config: `docusaurus.config.ts`, `tailwind.config.js`, `postcss.config.js`

## Phase 1: Setup

**Purpose**: Project initialization and configuration of core tooling.

- [ ] T001 Configure Docusaurus for the book project in `docusaurus.config.ts`.
- [ ] T002 Integrate Tailwind CSS into the Docusaurus project in `tailwind.config.js`, `postcss.config.js`, `src/css/custom.css`.
- [ ] T003 Define initial sidebar structure for desktop navigation in `sidebars.ts`.

## Phase 2: Foundational

**Purpose**: Core infrastructure that blocks all user stories. (No specific foundational tasks identified beyond initial setup that blocks all stories)

## Phase 3: User Story 1 (P1: Content Consumption & Navigation)

**Goal**: Readers can browse book content organized into chapters/topics with appropriate navigation.
**Independent Test Criteria**: User can navigate through 5 chapters and 2 topics per chapter on both desktop and mobile, with correct UI elements displayed.

- [ ] T004 [P] [US1] Create Chapter 1 MDX files (Introduction, Concepts) in `docs/01-introduction/01-what-is-ai-native.mdx`, `docs/01-introduction/02-why-ai-native.mdx`.
- [ ] T005 [P] [US1] Create Chapter 2 MDX files (Core Concepts, Data) in `docs/02-core-concepts/01-ai-native-architecture.mdx`, `docs/02-core-concepts/02-data-as-first-class-citizen.mdx`.
- [ ] T006 [P] [US1] Create Chapter 3 MDX files (Architecture, Event-Driven) in `docs/03-architecture/01-microservices-and-ai.mdx`, `docs/03-architecture/02-event-driven-ai.mdx`.
- [ ] T007 [P] [US1] Create Chapter 4 MDX files (MLOps, DevOps) in `docs/04-implementation/01-mlops-for-ai-native.mdx`, `docs/04-implementation/02-devops-for-ai-native.mdx`.
- [ ] T008 [P] [US1] Create Chapter 5 MDX files (Challenges, Getting Started) in `docs/05-conclusion/01-challenges-and-future.mdx`, `docs/05-conclusion/02-getting-started.mdx`.
- [ ] T009 [US1] Implement desktop sidebar navigation override in `src/theme/DocSidebar/index.tsx` (if needed, otherwise rely on Docusaurus default and `sidebars.ts`).
- [ ] T010 [US1] Implement sticky bottom mobile navigation bar component in `src/components/custom/MobileNavbar.tsx`.
- [ ] T011 [US1] Integrate MobileNavbar into Docusaurus theme layout in `src/theme/Layout/index.tsx`.

## Phase 4: User Story 2 (P1: Engaging Reading Experience)

**Goal**: Provide an immersive and visually appealing reading experience with modern UI.
**Independent Test Criteria**: Website exhibits glassmorphism, soft gradients, smooth transitions, and a functional dark/light mode toggle.

- [ ] T012 [P] [US2] Create `GlassmorphismCard` component in `src/components/custom/GlassmorphismCard.tsx`.
- [ ] T013 [P] [US2] Create `BookChapterPreview` component in `src/components/custom/BookChapterPreview.tsx`.
- [ ] T014 [P] [US2] Create `HeroSection` component in `src/components/custom/HeroSection.tsx`.
- [ ] T015 [US2] Implement global styles for glassmorphism and soft gradients in `src/css/custom.css`.
- [ ] T016 [US2] Configure Docusaurus for smooth page transitions in `docusaurus.config.ts`.
- [ ] T017 [US2] Implement dark mode by default with light mode toggle in `docusaurus.config.ts` and `src/theme/Navbar/index.tsx` (if overriding).

## Phase 5: User Story 3 (P2: Highlight Text & Add Notes)

**Goal**: Enable users to highlight text and add notes that persist.
**Independent Test Criteria**: User can highlight text, add notes, and both persist after page refresh, stored in local storage.

- [ ] T018 [US3] Implement text highlighting logic in `src/utils/textHighlighter.ts`.
- [ ] T019 [US3] Implement local storage utility for saving/loading highlights and notes in `src/utils/localStorage.ts`.
- [ ] T020 [US3] Integrate highlighting functionality into MDX content rendering, potentially via a custom Docusaurus component or theme override in `src/theme/MDXContent/index.tsx`.
- [ ] T021 [US3] Develop a UI for adding notes to highlights in `src/components/custom/NoteInput.tsx`.

## Phase 6: User Story 4 (P2: View Highlights & Notes)

**Goal**: Provide a centralized view for all user annotations.
**Independent Test Criteria**: A dedicated page displays all saved highlights and notes, and clicking an item navigates to its original context.

- [ ] T022 [US4] Create "My Notes" page component in `src/pages/my-notes.tsx`.
- [ ] T023 [US4] Develop a component to display individual highlights and notes on the "My Notes" page in `src/components/custom/AnnotationList.tsx`.
- [ ] T024 [US4] Implement navigation logic from "My Notes" to original book context in `src/pages/my-notes.tsx`.

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Final review and improvements that affect multiple user stories, ensuring constitutional alignment.

- [ ] T025 Ensure WCAG 2.1 AA accessibility compliance across the site.
- [ ] T026 Optimize assets and code for performance (LCP < 2.5s on mobile).
- [ ] T027 Review and document codebase for maintainability.
- [ ] T028 [P] **Core Vision Alignment**: Review the implemented features to ensure they align with the project's core vision.
- [ ] T029 [P] **Core Philosophy Alignment**: Ensure the implementation reflects the core philosophy of embodied AI.
- [ ] T030 [P] **UI Principles Audit**: Manually test all new UI components for mobile-first responsiveness, glassmorphism, and gradient usage.
- [ ] T031 [P] **Technology Standards Audit**: Verify that the implementation adheres to the technology standards (Docusaurus, Tailwind, MDX).
- [ ] T032 [P] **Structure Audit**: Check that the 4-page structure and 5x2 chapter/topic model are correctly implemented.
- [ ] T033 [P] **Navigation Audit**: Test navigation for keyboard accessibility and correct implementation of the sticky bottom navbar (mobile) and sidebar (desktop).
- [ ] T034 [P] **Performance Audit**: Profile the application using Lighthouse/PageSpeed Insights to ensure fast initial load and minimal scripts.
- [ ] T035 [P] **Accessibility Audit**: Manually test all new UI components for keyboard navigation, screen reader compatibility, and ARIA compliance.
- [ ] T036 [P] **Deployment Audit**: Ensure the Docusaurus site is correctly built and deployed to Vercel (free tier).


## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1 - Content Consumption & Navigation)**: Can start after Foundational (Phase 2) - No dependencies on other stories.
- **User Story 2 (P1 - Engaging Reading Experience)**: Can start after Foundational (Phase 2) - Depends on US1 content structure for component integration.
- **User Story 3 (P2 - Highlight Text & Add Notes)**: Can start after Foundational (Phase 2) - Depends on US1 for content to highlight.
- **User Story 4 (P2 - View Highlights & Notes)**: Can start after Foundational (Phase 2) - Depends on US3 for highlights/notes data.

### Within Each User Story

- Implementation tasks are generally sequential within a story.
- Docusaurus theme overrides and custom components should be created before integrating into pages/docs.
- MDX content (`docs/`) should be created as needed by User Story 1.

### Parallel Opportunities

- All Setup tasks in Phase 1 can run in parallel where possible (e.g., installing dependencies, configuring Tailwind).
- Foundational tasks in Phase 2 can be worked on in parallel (e.g., navigation, theme provider, page creation).
- Once Foundational phase completes, User Story 1, 3, and 4 can theoretically be worked on in parallel by different team members. User Story 2 has a dependency on MDX content creation which can be parallelized.
- Within User Story phases, tasks marked with [P] can be parallelized.

---

## Parallel Example: User Story 1

```bash
# Launch all MDX content creation for User Story 1 together:
Task: "Create Chapter 1 MDX files (Introduction, Concepts) in docs/01-introduction/01-what-is-ai-native.mdx, docs/01-introduction/02-why-ai-native.mdx"
Task: "Create Chapter 2 MDX files (Core Concepts, Data) in docs/02-core-concepts/01-ai-native-architecture.mdx, docs/02-core-concepts/02-data-as-first-class-citizen.mdx"
# ...and so on for other chapters.
```

---

## Implementation Strategy

### MVP First (User Story 1 and 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. Complete Phase 4: User Story 2
5. **STOP and VALIDATE**: Test User Stories 1 and 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Content Creation + Navigation)
   - Developer B: User Story 2 (UI Components + Styling)
   - Developer C: User Story 3 (Highlighting + Notes)
   - Developer D: User Story 4 (Annotations Page)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

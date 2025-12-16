# Tasks: AI-Native Book Website

**Input**: Design documents from `specs/001-ai-native-book-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
Assuming a Docusaurus 3 structure:

## Phase 1: Setup (Docusaurus Initialization, Tailwind)

**Purpose**: Initialize the Docusaurus project and configure core styling library.

- [X] T001 Initialize Docusaurus 3 project with `npx create-docusaurus@latest . classic --typescript` in `/`
- [X] T002 Configure `docusaurus.config.ts` for project name, tagline, URLs, etc.
- [X] T003 Install and configure Tailwind CSS into Docusaurus. Create `tailwind.config.js` and `postcss.config.js`. Import `custom.css` into Docusaurus.
- [X] T004 Install necessary packages for custom components.
- [X] T005 Create `src/components/ui` directory for custom UI components (replacing shadcn/ui).

## Phase 2: Foundational (Layout, Navigation, Theme Provider)

**Purpose**: Establish global layout, navigation, and theme toggling functionality using Docusaurus theme overrides.

- [X] T006 Configure `docusaurus.config.ts` for Navbar (global navigation links: Home, Book, About, Contact).
- [X] T007 [P] Override Docusaurus Navbar component for custom theme toggle (Dark/Light mode) in `src/theme/Navbar/index.tsx` (NFR-003, US5).
- [X] T008 [P] Configure Docusaurus Footer in `docusaurus.config.ts`.
- [X] T009 Create `src/pages/index.tsx` for the Home page.
- [X] T010 Create `src/pages/about.tsx` for the About page.
- [X] T011 Create `src/pages/contact.tsx` for the Contact page.

## Phase 3: User Story 1 - View Home Page (Priority: P1) 🎯 MVP

**Goal**: Display a compelling home page with a hero section, book preview, and CTA.

**Independent Test**: Verify the home page renders correctly with mock data.

### Implementation for User Story 1

- [X] T012 [US1] Implement Home Hero component in `src/components/custom/HomeHero.tsx` using Tailwind CSS.
- [X] T013 [P] [US1] Implement Book Preview component (e.g., featuring chapter cards) in `src/components/custom/BookPreview.tsx` using Tailwind CSS.
- [X] T014 [US1] Integrate `HomeHero` and `BookPreview` into `src/pages/index.tsx`.
- [X] T015 [US1] Add a clear Call-to-Action (CTA) to the Home page, linking to the Book docs.

## Phase 4: User Story 2 - Read the Book (Priority: P1)

**Goal**: Enable seamless reading of the book with navigation and progress tracking within Docusaurus docs.

**Independent Test**: Verify book content loads, scrolls smoothly, and progress bar/TOC function.

### Implementation for User Story 2

- [X] T016 [US2] Create placeholder MDX files for 5 chapters, each with 2 topics in `docs/` structure (e.g., `docs/01-introduction/01-topic-a.mdx`).
- [X] T017 [US2] Configure Docusaurus sidebar in `docusaurus.config.ts` or `_category_.json` files to reflect the 5 chapters.
- [X] T018 [P] [US2] Override Docusaurus `DocItem` layout to integrate a custom progress bar component in `src/theme/DocItem/Layout/index.tsx`.
- [X] T019 [P] [US2] Implement custom progress bar logic for scroll tracking within doc items.
- [X] T020 [US2] Ensure smooth scrolling to chapter anchors via Docusaurus's default behavior or custom scroll logic if needed.

## Phase 5: User Story 3 - Learn About the Author (Priority: P2)

**Goal**: Provide an "About" page with author information.

**Independent Test**: Verify the "About" page displays author bio and vision.

### Implementation for User Story 3

- [X] T021 [US3] Add author's biography and vision content to `src/pages/about.tsx`.

## Phase 6: User Story 4 - Join the Waitlist (Priority: P2)

**Goal**: Implement a "Contact" page with a waitlist form that saves data locally.

**Independent Test**: Verify the contact form saves data to local storage.

### Implementation for User Story 4

- [X] T022 [US4] Implement Waitlist Form component in `src/components/custom/WaitlistForm.tsx` using Tailwind CSS.
- [X] T023 [US4] Integrate `WaitlistForm` into `src/pages/contact.tsx`.
- [X] T024 [US4] Implement client-side logic in `WaitlistForm.tsx` to save form submissions to `localStorage`.
- [X] T025 [US4] Add user feedback for form submission (e.g., success message).

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final review and improvements that affect multiple user stories, ensuring constitutional alignment.

- [X] T026 [P] Accessibility Audit: Manually test all new UI components for keyboard navigation, screen reader compatibility, and ARIA compliance.
- [X] T027 [P] Performance Audit: Profile the application using Lighthouse/PageSpeed Insights. Ensure FCP is < 1.5s and bundle size is within the 150KB limit.
- [X] T028 [P] Responsive UI/UX Review: Test the application on various devices (mobile, tablet, desktop) to confirm mobile-first design and consistent UX.
- [X] T029 [P] Theming Review: Verify that all new components work correctly in both dark and light modes.
- [X] T030 [P] Code Refactoring & Reusability: Review new components for potential refactoring into more reusable parts. Ensure TypeScript strict mode is enforced.
- [X] T031 [P] Documentation: Update `README.md` or any relevant developer documentation for new components or features.
- [X] T032 Security Hardening: Review for common web vulnerabilities (XSS, CSRF, etc.).
- [X] T033 Run `quickstart.md` validation: Ensure the project's quickstart guide is up-to-date and works as expected.
- [ ] T034 [P] Deployment: Deploy the static site to Vercel (constitution.md IX, spec.md SC-005).
- [ ] T035 [P] Implement Missing MDX Handling: Display "Content Not Available" message for missing/empty chapter MDX files (spec.md EC-001).
- [ ] T036 [P] Implement Fast Scrolling Progress Bar Behavior: Ensure smooth progress bar updates with debouncing during fast scrolling (spec.md EC-002).
- [ ] T037 [P] Implement Waitlist Form Feedback: Provide "Thank You!" on success and clear error messages on failure for waitlist form submission (spec.md EC-003).

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1 - View Home Page)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1 - Read the Book)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P2 - Learn About the Author)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 4 (P2 - Join the Waitlist)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 5 (P1 - Mobile and Dark Mode Experience)**: Cross-cutting, tasks integrated throughout, especially in Foundational and Polish phases.

### Within Each User Story

- Implementation tasks are generally sequential within a story.
- Docusaurus theme overrides and custom components should be created before integrating into pages/docs.
- MDX content (`docs/`) should be created as needed by User Story 2.

### Parallel Opportunities

- All Setup tasks in Phase 1 can run in parallel where possible (e.g., installing dependencies, configuring Tailwind/shadcn).
- Foundational tasks in Phase 2 can be worked on in parallel (e.g., navigation, theme provider, page creation).
- Once Foundational phase completes, User Stories 1, 3, and 4 can theoretically be worked on in parallel by different team members. User Story 2 has a dependency on MDX content creation which can be parallelized.
- Within User Story phases, tasks marked with [P] can be parallelized.

## Implementation Strategy

### MVP First (User Story 1 + Key Foundational)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Home Page)
4. **STOP and VALIDATE**: Test Home Page independently with foundational elements.
5. Deploy/demo if ready (minimal viable product).

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together.
2. Once Foundational is done:
   - Developer A: User Story 1 (Home Page)
   - Developer B: User Story 2 (Book Page)
   - Developer C: User Story 3 (About Page) and User Story 4 (Contact Page)
3. Stories complete and integrate independently.

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

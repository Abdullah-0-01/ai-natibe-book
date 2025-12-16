---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

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

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final review and improvements that affect multiple user stories, ensuring constitutional alignment.

- [ ] TXXX [P] **Core Vision Alignment**: Review the implemented features to ensure they align with the project's core vision.
- [ ] TXXX [P] **Core Philosophy Alignment**: Ensure the implementation reflects the core philosophy of embodied AI.
- [ ] TXXX [P] **UI Principles Audit**: Manually test all new UI components for mobile-first responsiveness, glassmorphism, and gradient usage.
- [ ] TXXX [P] **Technology Standards Audit**: Verify that the implementation adheres to the technology standards (Docusaurus, Tailwind, MDX).
- [ ] TXXX [P] **Structure Audit**: Check that the 4-page structure and 5x2 chapter/topic model are correctly implemented.
- [ ] TXXX [P] **Navigation Audit**: Test navigation for keyboard accessibility and correct implementation of the sticky bottom navbar (mobile) and sidebar (desktop).
- [ ] TXXX [P] **Performance Audit**: Profile the application using Lighthouse/PageSpeed Insights to ensure fast initial load and minimal scripts.
- [ ] TXXX [P] **Accessibility Audit**: Manually test all new UI components for keyboard navigation, screen reader compatibility, and ARIA compliance.
- [ ] TXXX [P] **Deployment Audit**: Ensure the Docusaurus site is correctly built and deployed to Vercel (free tier).

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
- **User Story 2 (P1 - Read the Book)**: Can start after Foundational (Phase 2) - Requires MDX content in `docs/`
- **User Story 3 (P2 - Learn About the Author)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 4 (P2 - Join the Waitlist)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 5 (P1 - Mobile and Dark Mode Experience)**: Cross-cutting, tasks integrated throughout, especially in Foundational and Polish phases.

### Within Each User Story

- Implementation tasks are generally sequential within a story.
- Docusaurus theme overrides and custom components should be created before integrating into pages/docs.
- MDX content (`docs/`) should be created as needed by User Story 2.

### Parallel Opportunities

- All Setup tasks in Phase 1 can run in parallel where possible (e.g., installing dependencies, configuring Tailwind).
- Foundational tasks in Phase 2 can be worked on in parallel (e.g., navigation, theme provider, page creation).
- Once Foundational phase completes, User Stories 1, 3, and 4 can theoretically be worked on in parallel by different team members. User Story 2 has a dependency on MDX content creation which can be parallelized.
- Within User Story phases, tasks marked with [P] can be parallelized.

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Contract test for [endpoint] in tests/contract/test_[name].py"
Task: "Integration test for [user journey] in tests/integration/test_[name].py"

# Launch all models for User Story 1 together:
Task: "Create [Entity1] model in src/models/[entity1].py"
Task: "Create [Entity2] model in src/models/[entity2].py"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
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

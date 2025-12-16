# Gemini CLI Task Generation Prompt for Physical AI & Human Book

## Copy-paste this entire prompt into `/sp.tasks` command in Gemini CLI

```
/sp.tasks 006-physical-ai-human Generate tasks for the Physical AI & Human book project based on the specification and plan documents. The project includes: (1) Content organization: 5 chapters × 2 topics per chapter in MDX format with frontmatter; (2) Mobile navigation: sticky bottom navbar with key section links; (3) Desktop navigation: persistent sidebar with chapter/topic hierarchy; (4) UI components: reusable Tailwind-based components (BookChapter.tsx, GlassmorphismCard.tsx, HeroSection.tsx) with glassmorphism and soft gradients; (5) Reading experience: smooth transitions, dark/light mode, large readable typography; (6) Performance: fast load times, lazy-loaded chapters. Priority order: P1 (Content Consumption, Responsive Navigation on Mobile) → P1 (Desktop Navigation) → P2 (Enhanced Readability with smooth transitions). Ensure tasks are organized by user story with clear dependencies, file paths, and independent test criteria for each story. Include setup tasks for MDX content structure, foundational tasks for navigation components, and user-story-specific implementation tasks. All tasks must follow strict checklist format with [ID] [P?] [Story] Description and exact file paths.
```

---

## Alternative: Simpler Version (if above is too long)

```
/sp.tasks 006-physical-ai-human Create tasks for Physical AI book: 5 chapters × 2 topics in MDX, mobile sticky bottom navbar, desktop sidebar, reusable Tailwind components (BookChapter, GlassmorphismCard, HeroSection), smooth transitions, dark/light mode. Priority: P1 content consumption & mobile nav, then desktop nav, then P2 enhanced readability. Include setup, foundational components, user story implementation, and polish phases with independent tests per story.
```

---

## What This Prompt Will Generate

After running the above command, Gemini CLI will create:
- ✅ **tasks.md** file at `specs/006-physical-ai-human/tasks.md`
- ✅ Phase 1: Setup (MDX structure, Docusaurus config)
- ✅ Phase 2: Foundational (Navigation components, global styles)
- ✅ Phase 3: User Story 1 (Content Consumption)
- ✅ Phase 4: User Story 2 (Mobile Navigation)
- ✅ Phase 5: User Story 3 (Desktop Navigation)
- ✅ Phase 6: User Story 4 (Enhanced Readability)
- ✅ Phase 7: Polish & Cross-cutting concerns
- ✅ Dependencies section with execution order
- ✅ Parallel opportunities marked with [P]
- ✅ Independent test criteria per story

---

## How to Use

### Step 1: Copy the Prompt
Copy either the full prompt or the simpler version above.

### Step 2: Open Gemini CLI
In your PowerShell terminal, type:
```powershell
# Make sure you're in the repo root
cd C:\Users\Faraz\Desktop\ai-native-book

# Type the command (paste the prompt after /sp.tasks)
/sp.tasks 006-physical-ai-human <paste-prompt-here>
```

### Step 3: Review Generated Tasks
The command will:
1. Generate `specs/006-physical-ai-human/tasks.md`
2. Display a summary of all tasks with counts per user story
3. Show parallel opportunities

### Step 4: Implement Tasks
After tasks are created, use:
```powershell
/sp.implement 006-physical-ai-human
```
This will let you pick tasks and implement them one by one.

---

## Example Full Command (Copy-Paste Ready)

```powershell
cd C:\Users\Faraz\Desktop\ai-native-book

# Run this in your terminal
/sp.tasks 006-physical-ai-human Generate tasks for the Physical AI & Human book project based on the specification and plan documents. The project includes: (1) Content organization: 5 chapters × 2 topics per chapter in MDX format with frontmatter; (2) Mobile navigation: sticky bottom navbar with key section links; (3) Desktop navigation: persistent sidebar with chapter/topic hierarchy; (4) UI components: reusable Tailwind-based components (BookChapter.tsx, GlassmorphismCard.tsx, HeroSection.tsx) with glassmorphism and soft gradients; (5) Reading experience: smooth transitions, dark/light mode, large readable typography; (6) Performance: fast load times, lazy-loaded chapters. Priority order: P1 (Content Consumption, Responsive Navigation on Mobile) → P1 (Desktop Navigation) → P2 (Enhanced Readability with smooth transitions). Ensure tasks are organized by user story with clear dependencies, file paths, and independent test criteria for each story. Include setup tasks for MDX content structure, foundational tasks for navigation components, and user-story-specific implementation tasks. All tasks must follow strict checklist format with [ID] [P?] [Story] Description and exact file paths.
```

---

## After Tasks Are Generated

Once tasks are created, you can:

### View the generated tasks.md
```powershell
cat specs/006-physical-ai-human/tasks.md
```

### Start implementing (interactive selection of tasks)
```powershell
/sp.implement 006-physical-ai-human
```

### Create PHR (Prompt History Record) for documentation
```powershell
/sp.phr "Generated tasks for Physical AI book" --feature 006-physical-ai-human
```

---

## Key Points

- **No manual task creation needed** — Gemini CLI will auto-generate all tasks based on your spec & plan
- **Organized by user story** — Each story has its own phase with clear dependencies
- **Independent tests** — Each story can be tested separately
- **Parallel opportunities** — Tasks marked with [P] can be done simultaneously
- **Ready to implement** — After generation, use `/sp.implement` to start coding

---

## Troubleshooting

If `/sp.tasks` command doesn't work:

1. **Check prerequisites:**
   ```powershell
   .\.specify\scripts\powershell\check-prerequisites.ps1 -Json
   ```

2. **Verify Gemini CLI is installed:**
   ```powershell
   where gemini  # or 'which gemini' depending on your shell
   ```

3. **Check if feature directory exists:**
   ```powershell
   ls specs/006-physical-ai-human/
   ```
   Should show: `plan.md`, `spec.md`

4. **If still stuck**, copy the prompt text and run manually in Gemini Chat interface, then save output as `specs/006-physical-ai-human/tasks.md`

---

**Ready to generate tasks? Copy one of the prompts above and paste into Gemini CLI!** 🚀

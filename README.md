# Algo.Observer

Algo.Observer is a React + TypeScript learning platform for data structures and algorithms. It combines written lessons, pseudocode, step-by-step explanations, and interactive visualizations so learners can see how each algorithm evolves over time while tracking variables and steps in context. The app ships with a curated catalog of topics and supports dark mode by default.

## Product Tour

### Learning flow
1. **Pick a topic in the left sidebar.** Categories and algorithms are defined in `LeftSidebar.tsx`, with “ready” and “soon” status tags.
2. **Read the lesson.** Each lesson includes a header, complexity badges, pseudocode, overview, and “how it works”/use cases panels.
3. **Step through the visualization.** Controls include play/pause, step, reset, timeline scrubbing, speed control, and variable inspection.
4. **Jump between sections.** The right sidebar provides quick anchors for the active lesson when a topic is selected.

### What ships today
- **Hero/home experience** with quick start guidance, featured topics, and curriculum cards.
- **Algorithm lessons** powered by structured lesson data containing pseudocode, steps, visual data, variable state, and highlighted pseudocode lines.
- **Responsive layout** with a mobile toggle to switch between documentation and visualization, plus resizable panels on desktop.
- **Visualizations** for arrays (bars/cells with highlight and sorted states) and placeholder graph visuals for search/graph algorithms.
- **Dark mode** via `next-themes` with class-based theming.

## Tech Stack
- **Frontend:** React 19, TypeScript, Vite.
- **Styling:** Tailwind CSS + custom theme layers, `next-themes` for dark mode.
- **UI:** Radix UI primitives, Lucide icons.
- **Testing:** Vitest + Testing Library.

## Project Structure

```
src/
  app/
    App.tsx                # Root layout with top nav + sidebars
    components/            # UI + lesson components
      lesson/              # Lesson-specific panels, layout, and hooks
  styles/                  # Tailwind + theme CSS layers
  main.tsx                 # App entry point
```

Key files:
- `src/app/App.tsx`: layout, sidebar toggles, routing between home and lesson views.
- `src/app/components/LeftSidebar.tsx`: category and algorithm catalog definitions.
- `src/app/components/HomePage.tsx`: marketing/overview landing page.
- `src/app/components/AlgorithmLesson.tsx`: lesson data store and page layout (documentation + visualization).
- `src/app/components/lesson/DocumentationPanel.tsx`: pseudocode + explanation content layout.
- `src/app/components/lesson/VisualizationSection.tsx`: visualization canvas, controls, timeline, and variable inspector.
- `src/app/components/lesson/VisualizationCanvas.tsx`: array rendering and graph placeholder.

## Lesson Data Model
Lessons live inside `AlgorithmLesson.tsx` in a `LessonsById` map. Each lesson bundles:
- Metadata (title, category, description, complexity).
- Pseudocode lines and highlighted line indices for the current step.
- Overview and step-by-step explanation lists.
- Use cases.
- `steps[]` with per-step descriptions, highlighted variables, and visualization data.

To add or update a lesson, edit the `getLessonData` function and extend the `LessonsById` map with your algorithm’s metadata and steps.

## Development

### Requirements
- Node.js 18+ (recommended).
- npm (lockfile included).

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

### Tests
```bash
npm run test
```

## UI Behavior Notes
- **Home vs. lesson view:** When no algorithm is selected, the home page renders with a footer. Selecting an algorithm switches to the lesson experience.
- **Mobile layout:** Documentation and visualization are mutually exclusive via a toggle button. Desktop uses resizable panels.
- **Right sidebar:** Appears only when an algorithm is selected, providing anchor links and lesson metadata.

## Scripts Reference
| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server. |
| `npm run build` | Type-check and build the production bundle. |
| `npm run preview` | Preview the production build. |
| `npm run lint` | Run ESLint. |
| `npm run test` | Run Vitest in watch mode. |
| `npm run test:ui` | Launch the Vitest UI. |

## Contributing
1. Add new lesson data in `AlgorithmLesson.tsx`.
2. If you add new visualization types, extend `VisualizationCanvas`.
3. Keep lesson steps descriptive; they drive both the timeline and pseudocode highlights.

---

If you’re experimenting with new lesson structures or visualization types, consider breaking the lesson data into separate files once the catalog grows beyond the current inline map.

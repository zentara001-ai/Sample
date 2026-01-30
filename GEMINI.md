# Project Overview

This is a **React** web application utilizing **Vite** for build tooling and **TypeScript** for type safety. The project emphasizes a modern, responsive user interface styled with **Tailwind CSS** and animated using **Framer Motion**.

The core user experience revolves around a unique navigation pattern:
1.  **Single Page Scroll:** The home page (`/`) renders all sections (`Hero`, `Services`, `About`, `Contact`) in a long scrolling format.
2.  **Zoom-to-Route Transition:** Clicking a navigation link triggers a sequence: scroll to the section -> expand/zoom element -> navigate to the dedicated route (e.g., `/work`). This is managed by a custom `NavigationContext`.

## Key Technologies

-   **Frontend Framework:** React 19
-   **Build Tool:** Vite 7
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS 4, `clsx`, `tailwind-merge`
-   **Animations:** Framer Motion (used for page transitions, scroll reveals, and the custom cursor)
-   **Routing:** React Router DOM
-   **Icons:** Lucide React
-   **UI Registry:** Sera UI (configured via `seraui.config.json`)

## Project Structure

-   `src/`
    -   `App.tsx`: Main application component. It handles the `NavigationProvider` and top-level routing.
    -   `main.tsx`: Entry point rendering the React application.
    -   `components/`
        -   `layout/`: Global layout components (`Navbar`, `Footer`). `Navbar` integrates with `NavigationContext` for the scroll-to-zoom effect.
        -   `sections/`: Page sections (`Hero`, `Services`, `About`, `Contact`). These act as both scroll targets on the home page and standalone pages.
        -   `ui/`: Reusable UI components (`Button`, `Card`, `Input`, etc.), built with `cva` (implied) or standard utility classes.
    -   `lib/`:
        -   `NavigationContext.tsx`: **Critical Logic.** Manages the `isExpanding` state and the `handleNavigation` sequence (Scroll -> Wait -> Expand -> Navigate).
        -   `utils.ts`: Standard `cn` utility for class merging.
-   `seraui.config.json`: Configuration for the Sera UI component registry.
-   `vite.config.ts`: Vite configuration, including React plugin and TS path resolution.
-   `tailwind.config.js`: Tailwind CSS configuration, extending the theme with CSS variables for colors (hsl) and animations.

## Building and Running

### Prerequisites
-   Node.js (Ensure a compatible version for the dependencies)
-   npm

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Compiles the application for production (runs `tsc` first). |
| `npm run preview` | Previews the production build locally. |

## Development Conventions

-   **Component Architecture:** The UI is modularized into reusable `ui` components (atomic) and larger `sections` (molecular/organism).
-   **Styling:** 
    -   Uses utility classes via Tailwind CSS. 
    -   The `cn` utility is used for conditionally merging class names.
    -   Global styles and CSS variables (for theming) are defined in `src/index.css`.
-   **Navigation Logic:**
    -   **Home Page:** Acts as a landing page with all sections.
    -   **Sub-pages:** `/work`, `/about`, `/contact` wrap the respective section components in a `PageWrapper` that handles scroll restoration and exit animations.
-   **Animations:** 
    -   `AnimatePresence` wraps the Routes to allow for exit animations.
    -   `CustomCursor.tsx` provides a global custom cursor with hover states for interactive elements.
    -   Sections use `whileInView` for scroll-triggered reveal animations.
-   **Type Safety:** Strict TypeScript configuration is encouraged.

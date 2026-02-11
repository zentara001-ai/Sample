# Project Overview

This is a **React** web application utilizing **Vite** for build tooling and **TypeScript** for type safety. The project emphasizes a modern, responsive user interface styled with **Tailwind CSS** and animated using **Framer Motion**.

The core user experience consists of:
1.  **Public Marketing Site:** A "single page scroll" home experience that transitions into dedicated sub-pages (`/work`, `/about`, etc.) using a custom zoom-animation pattern.
2.  **Client Portal (`/portal`):** A protected dashboard area for clients to view project status, invoices, and files.

## Key Technologies

-   **Frontend Framework:** React 19
-   **Build Tool:** Vite 7
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS 4, `clsx`, `tailwind-merge`
-   **Animations:** Framer Motion (page transitions, scroll reveals, layout animations)
-   **Routing:** React Router DOM v7
-   **Icons:** Lucide React
-   **UI Registry:** Sera UI (configured via `seraui.config.json`)

## Project Structure

-   `src/`
    -   `App.tsx`: Main application component defining routes and layout wrappers.
    -   `main.tsx`: Entry point. Wraps the app in `BrowserRouter` and `ThemeProvider`.
    -   `components/`
        -   `layout/`: Global layout components (`Navbar`, `Footer`).
        -   `portal/`: Client Portal features.
            -   `Dashboard.tsx`: Main authenticated view with tabs for Overview, Kanban, Invoices, and Files.
            -   `Login.tsx`: Entry point for the portal (uses mock `localStorage` auth).
        -   `sections/`: Page sections used on the home page and as standalone pages (e.g., `Hero`, `Services`, `About`).
        -   `ui/`: Reusable atomic components (`Button`, `Card`, `Input`, etc.).
        -   `command-menu.tsx`: Global command palette.
        -   `mode-toggle.tsx` & `theme-provider.tsx`: Dark/Light mode logic.
    -   `lib/`:
        -   `NavigationContext.tsx`: **Critical Logic.** Manages the custom "Scroll -> Zoom -> Navigate" transition sequence.
        -   `utils.ts`: Standard `cn` utility for class merging.
    -   `data/`: Static data files (e.g., `projects.ts`).

## Building and Running

### Prerequisites
-   Node.js
-   npm

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server using Vite. |
| `npm run build` | Compiles the application for production (runs `tsc` first). |
| `npm run preview` | Previews the production build locally. |

## Development Conventions

-   **Component Architecture:**
    -   **UI:** Atomic, reusable components in `components/ui`.
    -   **Sections:** Larger, feature-specific components in `components/sections`.
    -   **Portal:** Dashboard-specific views in `components/portal`.
-   **Styling:**
    -   Utility-first with Tailwind CSS.
    -   Global styles and variables in `src/index.css` (using CSS variables for theming).
-   **Navigation & Transitions:**
    -   **Home Page (`/`):** Renders all sections. Uses `id` attributes for scroll targeting.
    -   **Sub-pages:** Wrapped in `PageWrapper` to handle scroll restoration (top of page) and exit animations.
    -   **Portal:** Protected by a simple check for `localStorage.getItem('isAuthenticated')`.
-   **Theme:**
    -   Managed by `next-themes` (via `theme-provider.tsx`).
    -   Supports Dark/Light modes.

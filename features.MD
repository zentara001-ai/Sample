# Akruti Studio - UI & UX Feature Manifest

This document outlines the high-end UI implementations and architectural choices that define the Akruti Studio web experience.

## 1. Core Visual Experience
- **Fluid Layout Transitions:** Uses `AnimatePresence` and `framer-motion` for seamless page swaps and "Zoom-to-Content" navigation patterns.
- **Glassmorphic UI:** Extensive use of `backdrop-blur` and translucent secondary backgrounds (`bg-secondary/30`) to create depth and modern "matte" finishes.
- **Dynamic Gradients:** Each studio (Design, App, Interior) features a custom-tuned CSS gradient background that sets the atmospheric tone for its specific discipline.
- **High-Contrast Typography:** Optimized font scaling using `text-5xl` through `text-[10rem]` with responsive line-heights to prevent text truncation on extreme viewports.

## 2. Interactive Systems
- **3D Metallic Custom Cursor:** A hardware-accelerated SVG cursor with 3D rotation (`perspective`, `rotateX`, `rotateY`) that responds to mouse velocity.
- **Global Command Palette (Cmd+K):** A quick-access search and navigation interface built with `cmdk` for professional-grade keyboard shortcuts.
- **Multi-Level Theming:** Context-aware theme support via `next-themes` with a custom `ModeToggle` integration.
- **Context-Aware Navigation:** The global Navbar dynamically recalculates its links based on the current "Studio Context" (Design, App, or Interior), allowing for sub-page exploration within a specific pillar.

## 3. Advanced Scroll Logic
- **Repeatable Reveal Animations:** All section entrance animations use `whileInView` with `once: false`, ensuring the website remains dynamic and visually engaging during both downward and upward scrolling.
- **Scroll Restoration & Anchoring:** Custom `useLayoutEffect` implementation within `PageWrapper` to ensure zero-latency scroll reset on route changes.
- **ID-Based Smooth Scrolling:** Integrated link handling that differentiates between local hash anchors and cross-page navigation.

## 4. Architectural Data Management
- **Studio-Specific Data Injection:** A centralized `studioData.ts` architected to serve context-specific projects and services based on URL route params, significantly reducing component redundancy.
- **Mock Authentication Flow:** A functional `localStorage` based secure portal entry point, simulating real-world client dashboard access.

## 5. Mobile & Performance
- **Optimized Rendering:** Minimal re-renders through efficient use of `useMemo` and `useCallback` in high-interaction components like the `CommandMenu`.
- **Responsive Overflow Control:** Usage of `overflow-x-hidden` on main layouts to prevent layout shift during complex motion animations.

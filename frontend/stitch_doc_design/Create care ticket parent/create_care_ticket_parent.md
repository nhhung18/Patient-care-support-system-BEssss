---
name: Clinical Clarity
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8dae2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fc'
  surface-container: '#ecedf6'
  surface-container-high: '#e6e8f0'
  surface-container-highest: '#e0e2ea'
  on-surface: '#181c21'
  on-surface-variant: '#414752'
  inverse-surface: '#2d3037'
  inverse-on-surface: '#eff0f9'
  outline: '#717783'
  outline-variant: '#c1c6d4'
  surface-tint: '#005faf'
  primary: '#005dac'
  on-primary: '#ffffff'
  primary-container: '#1976d2'
  on-primary-container: '#fffdff'
  inverse-primary: '#a5c8ff'
  secondary: '#526069'
  on-secondary: '#ffffff'
  secondary-container: '#d3e2ed'
  on-secondary-container: '#56656e'
  tertiary: '#944700'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba5b00'
  on-tertiary-container: '#fffeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a5c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#004786'
  secondary-fixed: '#d6e5ef'
  secondary-fixed-dim: '#bac9d3'
  on-secondary-fixed: '#0f1d25'
  on-secondary-fixed-variant: '#3b4951'
  tertiary-fixed: '#ffdbc7'
  tertiary-fixed-dim: '#ffb688'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#733600'
  background: '#f9f9ff'
  on-background: '#181c21'
  surface-variant: '#e0e2ea'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style

This design system is built on the philosophy of "Empathetic Precision." It targets healthcare professionals and patients who require immediate clarity and a sense of calm during high-stakes interactions. The brand personality is clinical yet accessible, prioritizing cognitive ease over decorative flourishes. 

The aesthetic follows a **Corporate Modern** style, leaning into heavy whitespace and a "Soft Minimalist" approach. By utilizing a bright, airy palette and gentle geometry, the UI reduces the "white coat hypertension" often triggered by medical software, replacing it with an atmosphere of reliability and organized care.

## Colors

The palette is anchored by a high-contrast Primary Blue for actions and a Soft Medical Blue for large surface areas and background grouping. 

- **Primary Blue (#1976D2):** Used for primary buttons, active states, and branding. It conveys authority and trust.
- **Surface Blue (#E3F2FD):** Used for subtle backgrounds and light tints to differentiate sections without using harsh greys.
- **Functional Semantics:** Green (#2E7D32) is reserved strictly for "Stable" or "Completed" statuses. Red (#D32F2F) is reserved for "Critical" alerts or "Emergency" data points.
- **Neutral/White:** The background is a clean, absolute white (#FFFFFF) to maintain a sterile, professional look, with a very light cool-grey (#F8FAFC) for secondary containers.

## Typography

This design system utilizes **Inter** for its exceptional legibility in data-heavy environments. The typeface is systematic and utilitarian, ensuring that patient vitals and dosages are unmistakable. 

Hierarchy is established through weight rather than dramatic size shifts. Use `SemiBold` (600) for section headers and `Medium` (500) for form labels. Body text remains at `Regular` (400) with generous line heights (1.5x) to prevent eye fatigue during long shifts.

## Layout & Spacing

The design system employs a **Fluid Grid** model with a base-4 vertical rhythm. 

- **Web (Desktop):** A 12-column grid with a fixed **Sidebar** (280px). The sidebar remains persistent for rapid navigation between patient lists, schedules, and analytics.
- **Mobile:** A single-column layout with a fixed **Bottom Bar** navigation. 
- **Margins:** Consistent 24px outer margins ensure content does not feel cramped against the screen edges.
- **Adaptive Header:** On top-level screens, the logo is left-aligned. On sub-pages, the header transforms to show a prominent Page Title centered or left-aligned with a dedicated back-arrow icon to the left.

## Elevation & Depth

To maintain a "soft" feel while distinguishing information layers, the system uses **Ambient Shadows** and **Tonal Layers**.

- **Cards:** Patient info cards use a low-opacity, wide-blur shadow (0px 4px 20px rgba(25, 118, 210, 0.08)) to appear slightly "lifted" off the surface.
- **Surfaces:** Use the Soft Medical Blue (#E3F2FD) for background containers to create a "recessed" look for the page body, allowing white cards to pop.
- **Modals:** High-elevation shadows with a subtle backdrop blur (10px) to focus user attention on critical inputs.

## Shapes

The shape language is defined by a **Rounded** philosophy. Standard components (buttons, input fields) use a 0.5rem (8px) radius. Larger containers, such as patient profile cards or dashboard widgets, utilize the `rounded-lg` (16px) or `rounded-xl` (24px) settings. This prevents the UI from appearing overly "sharp" or intimidating, reinforcing the supportive brand personality.

## Components

- **Elevated Cards:** The primary vessel for patient information. Must include a clear title, a "Status Chip" in the top-right corner, and 16px internal padding.
- **Buttons:** Primary buttons are solid Blue (#1976D2) with white text. Secondary buttons use a "Soft Blue" fill with Blue text. All buttons have 8px rounded corners.
- **Status Chips:** Small, rounded indicators. Stable = Green background (10% opacity) with Green text. Critical = Red background (10% opacity) with Red text.
- **Structured Forms:** Input fields must have a clear 1px border (#E2E8F0) and a label positioned above the field. Active fields use a 2px Primary Blue border.
- **Navigation:** 
    - **Bottom Bar (Mobile):** 4-5 icons with labels. High-active contrast.
    - **Sidebar (Web):** Icons paired with Medium weight text. The active state is indicated by a vertical bar on the left edge and a Soft Blue background tint.
- **Icons:** Use "Outline" style icons with a 2px stroke weight for clarity. Icons should be monochrome unless indicating a specific status.
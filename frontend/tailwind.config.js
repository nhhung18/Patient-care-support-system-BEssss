/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#ffb688",
        "surface-container-low": "#f2f3fc",
        "on-surface-variant": "#414752",
        "error-container": "#ffdad6",
        "surface-container": "#ecedf6",
        "surface-container-highest": "#e0e2ea",
        "on-tertiary-fixed": "#311300",
        "outline": "#717783",
        "on-tertiary": "#ffffff",
        "on-error-container": "#93000a",
        "secondary-fixed": "#d6e5ef",
        "secondary-container": "#d3e2ed",
        "primary-fixed-dim": "#a5c8ff",
        "on-secondary-fixed-variant": "#3b4951",
        "on-secondary-container": "#56656e",
        "on-primary-container": "#fffdff",
        "primary-fixed": "#d4e3ff",
        "inverse-primary": "#a5c8ff",
        "error": "#ba1a1a",
        "primary-container": "#1976d2",
        "secondary": "#526069",
        "surface-dim": "#d8dae2",
        "surface-tint": "#005faf",
        "tertiary-fixed": "#ffdbc7",
        "outline-variant": "#c1c6d4",
        "tertiary-container": "#ba5b00",
        "on-tertiary-fixed-variant": "#733600",
        "primary": "#005dac",
        "on-primary-fixed": "#001c3a",
        "on-primary-fixed-variant": "#004786",
        "on-secondary": "#ffffff",
        "on-background": "#181c21",
        "surface-variant": "#e0e2ea",
        "surface-container-lowest": "#ffffff",
        "tertiary": "#944700",
        "inverse-surface": "#2d3037",
        "on-tertiary-container": "#fffeff",
        "surface-container-high": "#e6e8f0",
        "inverse-on-surface": "#eff0f9",
        "background": "#f9f9ff",
        "on-surface": "#181c21",
        "on-primary": "#ffffff",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#bac9d3",
        "surface": "#f9f9ff",
        "on-secondary-fixed": "#0f1d25",
        "surface-bright": "#f9f9ff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xl": "40px",
        "container-margin": "24px",
        "lg": "24px",
        "xs": "4px",
        "gutter": "16px",
        "md": "16px",
        "unit": "4px",
        "sm": "8px"
      },
      fontFamily: {
        "headline-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "title-sm": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "700" }],
        "title-sm": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "display-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  }
}

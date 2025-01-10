/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121827',      // Dark background
        darkSurface: '#1E293B', // Slightly lighter surface color
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        darkCustom: {
          ...require("daisyui/src/theming/themes")["corporate"],
          "primary": "#3B82F6",          // Bright blue
          "primary-content": "#FFFFFF",   // White text on primary
          "secondary": "#EAB308",         // Yellow
          "secondary-content": "#121827", // Dark text on secondary
          "accent": "#60A5FA",           // Light blue
          "accent-content": "#FFFFFF",    // White text on accent
          "neutral": "#1E293B",          // Dark neutral
          "neutral-content": "#E2E8F0",   // Light gray text
          "base-100": "#121827",          // Main background
          "base-200": "#1E293B",          // Slightly lighter background
          "base-300": "#2D3B54",          // Even lighter background
          "base-content": "#F8FAFC",      // Main text color
          "info": "#60A5FA",              // Information blue
          "success": "#22C55E",           // Success green
          "warning": "#F59E0B",           // Warning yellow
          "error": "#EF4444",             // Error red
        },
      },
    ],
  },
};
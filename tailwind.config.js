/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["corporate"], // Extend the original corporate theme
          primary: "#2d4fa6",//"#13285d", // Custom primary color
          "primary-content": "#FFFFFF", // Custom primary content color
        },
      },
    ],
  },
};

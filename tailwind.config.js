/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "white",
      },
      width: {
        sidebarwidth: "calc(100vw - 75px)",
      },
    },
    screens: {
      md: "700px",
      lg: "800px",
    },
  },
  plugins: [],
  darkMode: "class",
};

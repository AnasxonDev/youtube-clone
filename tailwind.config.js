/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "white",
      },
      width: {
        closesidebarwidth: "calc(100vw - 75px)",
        opensidebarwidth: "calc(100vw - 240px)",
      },
    },
    screens: {
      "2xsm": "650px",
      xsm: "700px",
      sm: "800px",
      md: "1100px",
      xl: "1300px",
    },
  },
  plugins: [],
  darkMode: "class",
};

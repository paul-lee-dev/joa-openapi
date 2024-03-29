const baseColors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Menlo", "monospace"],
    },
    colors: {
      primary: "#ff49db",
      secondary: "#7e5bef",
      ...baseColors,
    },
  },
  plugins: [require("flowbite/plugin")],
};

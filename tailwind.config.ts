import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        "blue-gradient-start": "#48BDFF",
        "blue-gradient-stop": "#2260FE",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  
  theme: {
    extend: {
      colors: {
        "blue-gradient-start": "#48BDFF",
        "blue-gradient-stop": "#2260FE",
      },
      fontFamily: {
        // mono: ["var(--font-roboto-mono)"],
        "aeonik-bold": ["Aeonik-Bold", "sans-serif"],
        "aeonik-regular": ["Aeonik-Regular", "sans-serif"],
        "aeonik-thin": ["Aeonik-Thin", "sans-serif"],
        "mono-regular": ["Graebenbach-Mono-Regular", "sans-serif"],
        "voyager-thin": ["Voyager-Thin", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#1a4d2e",
          mid: "#2d6a4f",
          light: "#52b788",
        },
        amber: {
          DEFAULT: "#d4a017",
          dark: "#a07800",
        },
        cream: {
          DEFAULT: "#fdf8ee",
          dark: "#f0e8d5",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        marathi: ["Tiro Devanagari Marathi", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

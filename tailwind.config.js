/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./templates.html",
    "./pricing.html",
    "./athlete-recruiting.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#1F2937",
        accent: "#6366F1",
        highlight: "#818CF8",
        muted: "#9CA3AF",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "bg-main": "var(--bg-main)",
        "bg-card": "var(--bg-card)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

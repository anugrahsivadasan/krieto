/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        navy: "#0D1B2A",
        primary: "#00B4D8",
        secondary: "#0077B6",
        card: "#1E1E1E",
        text: "#F9FAFB",
        muted: "#6B7280",
      },

      fontFamily: {
        heading: ["Space Grotesk"],
        body: ["Inter"],
      },

      maxWidth: {
        content: "1280px",
      },

      boxShadow: {
        glow: "0 12px 40px rgba(0,180,216,0.15)",
      },
    },
  },
  plugins: [],
};
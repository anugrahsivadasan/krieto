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
        // Loader-specific tokens
        "krieto-bg": "#050505",
        "krieto-white": "#F9FAFB",
        "krieto-primary": "#00B4D8",
        "krieto-secondary": "#90E0EF",
      },

      fontFamily: {
        heading: ["Space Grotesk"],
        body: ["Inter"],
      },

      letterSpacing: {
        loader: "0.25em",
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
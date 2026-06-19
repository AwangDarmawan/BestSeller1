/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],

        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        allura: ["Allura", "cursive"],
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
            color: "#ffffff",
          },
          "15%": {
            transform: "scale(1.25)",
            color: "#ef4444", // merah
          },
          "30%": {
            transform: "scale(1)",
            color: "#ffffff",
          },
          "45%": {
            transform: "scale(1.25)",
            color: "#ef4444",
          },
          "60%": {
            transform: "scale(1)",
            color: "#ffffff",
          },
        },
        // grow
        growLine: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },

      animation: {
        heartbeat: "heartbeat 2s ease-in-out infinite",
        // 👇 Tambahkan ini
        "grow-line": "growLine 1s ease-out forwards",
      },
    },
  },

  plugins: [],
};

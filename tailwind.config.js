/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
        slideUp: "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  extend: {
  keyframes: {
    slideDown: {
      from: { opacity: "0", transform: "translateY(-8px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
  },
  animation: {
    slideDown: "slideDown 0.25s ease-out",
  },
},
  plugins: [],
};

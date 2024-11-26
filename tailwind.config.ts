/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        textGradientFlow: "textGradientFlow 5s ease infinite",
      },
      keyframes: {
        textGradientFlow: {
          "0%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: ["selector"],
};

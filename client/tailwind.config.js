/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5385D",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbars": {
          overflow: "auto",
        },
        ".hide-scrollbars::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbars": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#9031D0",
        secondary: {
          100: "#F3EBFA",
          200: "#A456D8",
        },
      },
      fontFamily: {
        body: ["Chewy"],
        tutorial: ["Nunito Sans"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

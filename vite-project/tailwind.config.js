/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      height: {
        800: "800px",
        100: "100px",
      },

      translate: {
        50: "-50%",
      },
      fontSize: {
        36: "36px",
      },
      margin: {
        50: "50px",
        140: "140px",
      },
      width: {
        80: "80%",
      },
      colors: {
        main: "#0066c1",
      },
      backgroundColor: {
        main: "#0066c1",
      },
    },
  },
  plugins: [],
};

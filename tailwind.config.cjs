/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        league: ["League Spartan"],
      },
      screens: {
        sm: "530px",
        lg: "970px",
      },
    },
  },
  plugins: [],
};

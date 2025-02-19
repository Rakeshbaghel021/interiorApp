/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ethereal: [
          '"Ethereal"',
          '"Baskerville Old Face"',
          '"Baskerville"',
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

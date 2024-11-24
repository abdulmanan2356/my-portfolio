/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.tsx",
  // i want it to include all the files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

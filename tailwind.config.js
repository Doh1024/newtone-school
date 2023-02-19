/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'light-blue':'#F7FCFE',
        'dark-cyan' : '#003B49',
        'light-purple': '#B7AAE2',
        'light-green': '#B8ECD6'
      }
    },
  },
  plugins: [],
}

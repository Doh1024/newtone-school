/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
        'light-blue':'#F7FCFE',
        'dark-cyan' : '#003B49',
        'light-purple': '#B7AAE2',
        'light-green': '#B8ECD6',
      },
      brightness:{
        25: '.25'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [
  ],
}

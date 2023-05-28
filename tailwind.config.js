/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          '0%': {
            Transform: 'backgroundColor: hsl(200,20%, 70%)',
        },
        '100%': {
          Transform: 'backgroundColor: hsl(200,20%, 95%)',
      }
        }
      },
      colors:{
        backgroundColor:  "#f7eef9",
        primaryColor: "#f0e8f6",
        magnifyingGlass: "#b39dc7",
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}


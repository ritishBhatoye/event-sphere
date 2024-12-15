/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
 theme: {
  extend: {
    colors: {
      light: {
        primary: '#333333',
        background: '#FFFFFF',
      },
      dark: {
        primary: '#FFFFFF',
        background: '#121212',
      },
      primary: {
        100: '#EDE2F7',
        200: '#D2BCEE',
        300: '#B898E4',
        400: '#9F73DA',
        500: '#8550CF',
        600: '#6D3FB4',
        700: '#652E99',
      },
      secondary: {
        100: '#E3F3FD',
        200: '#B8E2FB',
        300: '#8DD0F8',
        400: '#62BEF5',
        500: '#379DF2',
        600: '#007ACC',
        700: '#005A9E',
      },
      highlight: {
        100: '#FFF4DC',
        200: '#FFE3A8',
        300: '#FFD274',
        400: '#FFC24B',
        500: '#FFB11A',
        600: '#E6A000',
        700: '#CC9000',
      },
      success: {
        100: '#E3F9ED',
        200: '#C1EED6',
        300: '#9FE3BF',
        400: '#7DD8A8',
        500: '#5ACD91',
        600: '#38A169',
        700: '#2C8153',
      },
      error: {
        100: '#FEE6E6',
        200: '#F9B8B8',
        300: '#F48A8A',
        400: '#EF5B5B',
        500: '#EA2D2D',
        600: '#E53E3E',
        700: '#C32E2E',
      },
    },
    },
  
},

  plugins: [],
}


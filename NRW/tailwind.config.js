/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {

      fontFamily: {
        integral: ["Integral CF", "sans-serif"], 
        neue: ["NeueMontreal", "sans-serif"],
      },

      colors: {
        customYellow: '#E8C17E',
        customLight: '#EED1A1',
        customRed: '#4B1306',
      },
    },
  },
  plugins:  [
    require('daisyui'),
  ],
}


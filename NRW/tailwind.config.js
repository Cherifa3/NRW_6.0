/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#E8C17E',
        customRed: '#4B1306',
      },
    },
  },
  plugins:  [
    require('daisyui'),
  ],
}


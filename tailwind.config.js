const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': colors.slate[900],
        'text-secondary': colors.slate[600],
      },
    },
  },
  plugins: [],
};

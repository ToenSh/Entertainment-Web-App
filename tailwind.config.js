/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#fc4747',
        'dark-blue': '#10141e',
        'greyish-blue': '#5a698f',
        'semi-dark-blue': '#161d2f',
      },
      fontFamily: {
        outfit: 'Outfit',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0F0F0F',
          dark: '#1C1C1C',
        },
        primary: {
          DEFAULT: '#044263',
          blue1: '#007BFF',
          blue2: '#1E90FF',
        },
        secondary: {
          DEFAULT: '#FA5814',
        },
        text: {
          light: '#F5F5F5',
          gray: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
};

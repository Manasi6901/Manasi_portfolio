/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0a0a23',
        'neon-cyan': '#00ffe7',
        'neon-magenta': '#ff00c8',
        'neon-green': '#00ff85',
        'neon-violet': '#a259ff',
        'glass-bg': 'rgba(20,20,40,0.4)',
      },
      boxShadow: {
        'neon-cyan': '0 0 16px 2px #00ffe7',
        'neon-magenta': '0 0 16px 2px #ff00c8',
        'neon-green': '0 0 16px 2px #00ff85',
        'neon-violet': '0 0 16px 2px #a259ff',
        'glass': '0 4px 32px 0 rgba(0,255,255,0.2)',
      },
      backdropBlur: {
        glass: '8px',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

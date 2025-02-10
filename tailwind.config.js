/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: '#35a2a4',
        blu: '#0b3c78',
      },
      fontFamily: {
        literaturnaya: ['Literaturnaya', 'serif'],
        baskerville: ['Baskerville Old Face', 'serif'],
      },
    },
  },
  plugins: [],
};
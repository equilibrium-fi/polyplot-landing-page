/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },
        bg: {
          base: '#0B0B12',
          card: '#12121A',
          elevated: '#1A1A24',
        },
        long: '#22C55E',
        short: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

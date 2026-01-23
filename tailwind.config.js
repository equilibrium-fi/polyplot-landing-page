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
          amber: '#FE9508',
          purple: '#8B5CF6',
        },
        accent: {
          amber: '#FE9508',
          purple: '#8B5CF6',
        },
        bg: {
          base: '#0B0B12',
          card: '#12121A',
          elevated: '#1A1A24',
        },
        long: '#FE9508',
        short: '#8B5CF6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

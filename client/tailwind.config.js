/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6f3ff',
          100: '#cce6ff',
          200: '#99ccff',
          300: '#66b3ff',
          400: '#3399ff',
          500: '#007bff',
          600: '#0066cc',
          700: '#0052a3',
          800: '#003d7a',
          900: '#002952',
          950: '#001526',
        }
      }
    },
  },
  plugins: [],
}


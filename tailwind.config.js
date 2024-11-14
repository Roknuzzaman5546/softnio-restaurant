/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-range': { 'min': '1025px', 'max': '1335px' },
        'custom-md': { 'min': '768px', 'max': '1024px' },
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita suporte a tema escuro via classe
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
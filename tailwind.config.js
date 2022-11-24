/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      gray: '#cccccc',
      primary: '#c32a44',
      primaryHover: '#D84861',
      secondary: '#FBC970',
      secondaryHover: '#f7d28d',
      light: '#F4F5F7',
      lightHover: '#ffffff',
      dark: '#111418',
      darkHover: '#1a1e24',
      transparent: 'transparent'
    }
  },
  plugins: []
};

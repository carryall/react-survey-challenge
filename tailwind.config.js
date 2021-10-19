module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f9fbfd',
          200: '#eef2f5',
          300: '#e6e9ed',
          400: '#c3c6ce',
          500: '#9ea1ac',
          600: '#747784',
          700: '#4d505b',
          800: '#3b3d47',
          900: '#292a33'
        },
        blue: '#0041e2',
        red: '#e20041',
        black: '#15151a'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

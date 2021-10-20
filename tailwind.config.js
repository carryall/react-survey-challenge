module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: ['11px', '13px'],
      xs: ['13px', '18px'],
      sm: ['15px', '20px'],
      base: ['17px', '22px'],
      md: ['20px', '25px'],
      lg: ['34px', '41px'],
      headline: ['22px', '28px'],
      display1: ['28px', '34px'],
      display2: ['40px', '48px']
    },
    fontWeight: {
      normal: 400,
      bold: 800
    },
    extend: {
      colors: {
        black: '#15151a',
        blue: '#0041e2',
        red: '#e20041',
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
        }
      },
      borderRadius: {
        DEFAULT: '12px',
        btn: '10px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

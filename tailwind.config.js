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
          900: '#292a33',
          darkest: '#15151a'
        },
        input: 'rgba(255, 255, 255, 0.18)',
        notification: 'rgba(37, 37, 37, 0.6)'
      },
      spacing: {
        4.5: '1.125rem', // 18px
        7.5: '1.875rem', // 30px
        8.5: '2.125rem', // 34px
        15.5: '3.875rem' // 62px
      },
      borderRadius: {
        DEFAULT: '12px',
        md: '10px'
      },
      backdropBlur: {
        DEFAULT: '100px'
      }
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms')]
};

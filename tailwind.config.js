// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: colors.white,
      indigo: colors.indigo,
      blue: colors.blue,
      custom: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,vue}',
    './src/components/**/*.styles.json',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, "sans-serif"',
      },
      fontSize: {
        tiny: '.9375em',
      },
      leading: {
        button: '1.1875em',
      },
      colors: {
        teal: {
          50: '#E6F8F7',
          100: '#8BBAB8',
          200: '#5E8D8B',
          300: '#1E847F',
          400: '#004241',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, "sans-serif"',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

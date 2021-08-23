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
      colors: {
        primary: '#1E847F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

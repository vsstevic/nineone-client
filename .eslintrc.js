module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/__mocks__/**'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'no-unused-vars': 'error',
  },
}

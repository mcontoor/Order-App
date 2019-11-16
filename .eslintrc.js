module.exports = {
  root: true,
  plugins: [
    'detox',
    'jest',
  ],
  env: {
    'browser': true,
    'detox/detox': true,
    'es6': true,
    'jest/globals': true,
    'node': true,
  };

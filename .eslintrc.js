module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb'],
  rules: {
    'max-len': [1, 70, 2, { ignoreComments: true }],
  },
  env: {
    browser: true,
    node: true,
  },
};

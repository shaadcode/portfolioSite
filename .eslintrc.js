module.exports = {
  extends: ['next', 'prettier', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-warning-comments': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      {
        terms: ['DEBUG'],
        location: 'anywhere',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'no-console': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      { allow: ['warn', 'error'] },
    ],
    'no-alert': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    // Remove these OFF flags
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // 'no-async-promise-executor': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    /////////////////////////
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y', 'import', 'flowtype', '@typescript-eslint', 'prettier'],
  root: true,
};
module.exports = {
  extends: ['next', 'prettier', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-warning-comments': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      {
        terms: ['DEBUG'],
        location: 'anywhere',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'no-console': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      { allow: ['warn', 'error'] },
    ],
    'no-alert': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    // Remove these OFF flags
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // 'no-async-promise-executor': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    /////////////////////////
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y', 'import', 'flowtype', '@typescript-eslint', 'prettier'],
  root: true,
};

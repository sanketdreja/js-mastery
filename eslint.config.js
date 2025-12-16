// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
    },
  },
  {
    // Prettier as ESLint rule
    plugins: { prettier: (await import('eslint-plugin-prettier')).default },
    rules: { 'prettier/prettier': 'error' },
  },
  // Disable formatting rules that conflict with prettier
  (await import('eslint-config-prettier')).default,
];

import baseConfig from '../eslint.config.mjs';
import js from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  ...baseConfig, 
  js.configs.recommended,
  {
    files: ['backend/**/*.ts', 'backend/**/*.tsx'],
    plugins: {
      prettier: eslintPluginPrettier,
      import: importPlugin,
      unicorn: unicorn
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'arrow-parens': ['error', 'as-needed'],
      'space-in-parens': ['error', 'never'],
      'no-promise-executor-return': 'error',
      'object-curly-spacing': ['error', 'always'],
      'computed-property-spacing': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'space-unary-ops': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'space-infix-ops': ['error', { int32Hint: false }],
      'keyword-spacing': ['error', { before: true }],
      'prefer-arrow-callback': 'error',
      'no-sequences': 'error',
      'quote-props': ['error', 'as-needed'],
      'jsx-quotes': ['error', 'prefer-double'],
      'no-console': 'error',
      'no-multi-spaces': 'error',
      'padded-blocks': ['error', 'never'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'no-await-in-loop': 'error',
      'no-spaced-func': 'error',
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'indent': ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'unicorn/filename-case': ['error', { case: 'camelCase' }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
  {
    ignores: ['backend/dist/**']
  }
];
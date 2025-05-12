import pluginTypescript from '@typescript-eslint/eslint-plugin';
import parserTypescript from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTypescript,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': pluginTypescript,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginTypescript.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];

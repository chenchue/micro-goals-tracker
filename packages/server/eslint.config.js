import parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTypeScript,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      prettier: pluginPrettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'error',
    },
  },
];

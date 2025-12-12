import { globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginQuery from '@tanstack/eslint-plugin-query';
import importPlugin from 'eslint-plugin-import';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
    },
  },
  {
    plugins: {
      importPlugin,
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // External modules (npm packages)
            'internal', // Internal modules
            ['parent', 'sibling'], // Parent and sibling files
            'index', // Index file imports
            'object', // Imports that look like `import foo = require('foo')`
            'type', // Type imports (useful in TypeScript)
            'unknown', // For unknown types of imports
          ],
          'newlines-between': 'always', // Enforce new lines between groups
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
        node: true,
      },
    },
  },
  eslintPluginPrettierRecommended,
  ...pluginQuery.configs['flat/recommended'],
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'src/app/(payload)/',
    'src/cms/migrations/',
  ]),
];

export default eslintConfig;

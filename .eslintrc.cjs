module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2019,
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  ignorePatterns: ['*.cjs', '.gitignore', 'svelte.config.js', 'vite.config.js'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    }
  ],
  settings: {
    svelte: {
      kit: {
        files: {
          routes: 'src/routes',
        },
      },
    },
    'import/resolver': {
      typescript: {}
    },
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '$app/**',
            group: 'internal',
          },
          {
            pattern: '$lib/!(types)**/**',
            group: 'parent',
          },
          {
            pattern: '$lib/types',
            group: 'type',
          },
          {
            pattern: '$lib/types/**',
            group: 'type',
          }
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
    'import/no-unresolved': [2, { ignore: ['^\\$[env|app]'] }]
  },
};

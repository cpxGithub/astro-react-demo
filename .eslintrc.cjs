module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: ['ali/typescript/react', 'plugin:prettier/recommended'],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // quotes: ["error", "double"],
    // prettier与eslint规则冲突，使用prettier作为覆盖规则
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.js', '.tsx', '.ts', '.astro'] },
    ],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      extends: [
        // 'plugin:import/recommended',
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-strict',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            parser: 'astro',
          },
        ],
        'astro/no-set-text-directive': 'error',
        'astro/no-unused-css-selector': 'error',
        'astro/prefer-class-list-directive': 'error',
      },
    },
  ],
};

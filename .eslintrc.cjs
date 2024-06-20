module.exports = {
  extends: ['ali/typescript/react', 'plugin:prettier/recommended'],
  // plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
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
    'prettier/prettier': [
      'error',
      {
        // singleQuote: false,
      },
    ],
  },
};

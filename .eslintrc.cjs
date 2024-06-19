module.exports = {
  extends: ["ali/typescript/react", "plugin:prettier/recommended"],
  // plugins: ['prettier'],
  rules: {
    // quotes: ["error", "double"],
    // prettier与eslint规则冲突，使用prettier作为覆盖规则
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
  },
};

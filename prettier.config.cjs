/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-config-ali'), require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  semi: true,
  // singleQuote: true,
  // printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  // plugins: ['prettier-config-ali'],
  // singleQuote: true,
};

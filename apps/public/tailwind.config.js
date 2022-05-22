// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwind = require('../../tailwind.config');

module.exports = {
  ...tailwind,
  purge: {
    content: [
      'apps/public/src/**/*.ts',
      'apps/public/src/**/*.tsx',
      'apps/public/src/**/*.js',
      'apps/public/src/**/*.jsx',
      'apps/public/src/**/*.html',
    ],
  },
};

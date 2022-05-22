// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwind = require('../../tailwind.config');

module.exports = {
  ...tailwind,
  purge: {
    content: [
      'apps/hotel/src/**/*.ts',
      'apps/hotel/src/**/*.tsx',
      'apps/hotel/src/**/*.js',
      'apps/hotel/src/**/*.jsx',
      'apps/hotel/src/**/*.html',
    ],
  },
};

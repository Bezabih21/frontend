// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwind = require('../../tailwind.config');

module.exports = {
  ...tailwind,
  purge: {
    content: [
      'apps/admin/src/**/*.ts',
      'apps/admin/src/**/*.tsx',
      'apps/admin/src/**/*.js',
      'apps/admin/src/**/*.jsx',
      'apps/admin/src/**/*.html',
      'libs/shared/**/*.ts',
      'libs/shared/**/*.tsx',
      'libs/shared/**/*.js',
      'libs/shared/**/*.jsx',
      'libs/shared/**/*.html',
    ],
  },
};

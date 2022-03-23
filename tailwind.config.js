const baseConfig = require('./client/tailwind.config');

/**
 * Tailwind config file for Wagtail itself.
 */
module.exports = {
  presets: [baseConfig],
  content: [
    './wagtail/**/*.{py,html,ts,tsx}',
    './wagtail/**/static_src/**/*.js',
    './client/**/*.{js,ts,tsx}',
    './docs/**/*.{md,rst}',
  ],
  corePlugins: {
    // Risk of clashing with existing styles.
    preflight: false,
    textTransform: false,
  },
};

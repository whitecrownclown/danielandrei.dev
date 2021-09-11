const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('postcss-nested'),
    postcssPresetEnv({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
    }),
    require('cssnano'),
  ],
};

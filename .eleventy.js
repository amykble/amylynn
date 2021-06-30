const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // Passthrough Copy
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('src/assets/fonts');

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Date Formats
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('DDDD');
  });
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('D');
  });

  // Eleventy Defaults
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};

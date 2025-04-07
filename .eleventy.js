module.exports = function(eleventyConfig) {
  // Copy these folders directly to output
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/callback.html");

  return {
    dir: {
      input: "src",       // Source files
      output: "docs",     // GitHub Pages compatible folder
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk"
  };
};
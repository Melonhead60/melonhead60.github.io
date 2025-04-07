module.exports = function(eleventyConfig) {
  // Copy the entire 'admin' folder to the output
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Optional: Watch the admin folder for changes during --serve
  eleventyConfig.addWatchTarget("src/admin");
  
  return {
    dir: {
      input: "src",    // Your source files are in 'src/'
      output: "_site", // Output goes to '_site/'
      includes: "_includes" // Optional: if you have templates/layouts
    },
    // Critical for path resolution in GitHub Pages/subfolders
    pathPrefix: "/"
  };
};
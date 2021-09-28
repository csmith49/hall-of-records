module.exports = function(eleventyConfig) {

    // Static passthrough
    eleventyConfig.addPassthroughCopy("static");

    // Custom collections
    eleventyConfig.addCollection("records", api => api
        .getFilteredByTag("record")
        .reverse()
    );

    // IO configuration
    return {
        dir : {
            input : "source",
            output : "docs"
        }
    }
}
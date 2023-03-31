module.exports = (options, context) => ({
  chainMarkdown(config) {
    config.options
      .linkify(true) // Autoconvert URL-like text to links
      .breaks(true) // Convert '\n' in paragraphs into <br>
  },
  extendMarkdown(md) {
    md.set({ html: true });
    md.use(require("markdown-it-katex"));
  },
})

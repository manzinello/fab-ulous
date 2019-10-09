const path = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/github-fabulous.min.js",
  output: {
    filename: "github-fabulous.js",
    path: path.resolve(__dirname),
    library: "github-fabulous",
    libraryTarget: "umd"
  }
};

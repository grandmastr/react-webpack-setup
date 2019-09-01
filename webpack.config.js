const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)/, use: "babel-loader" }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./app/index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};

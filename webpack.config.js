const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./js/index.js",
    output: {
      path: path.resolve(__dirname, 'src/'),
      filename: "bundle.js"
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }]
      }
  }
  
  module.exports = config;
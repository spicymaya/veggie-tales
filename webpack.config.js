const webpack = require("webpack");
const path = require("path");
// const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      API_URL:
        process.env.NODE_ENV === "production"
          ? JSON.stringify("https://shrouded-meadow-36658.herokuapp.com")
          : JSON.stringify("http://localhost:3000") // necessary so that webpack injects the value including the "" quotes, as a string.
    })
  ],
  // set to development to read .env.local variables
  mode: "development"
};

const serverConfig = Object.assign({}, config, {
  entry: ["@babel/polyfill", __dirname + "/src/index.js"],
  output: {
    path: path.resolve("./build"),
    filename: "scripts.js"
  }
});
module.exports = [serverConfig];

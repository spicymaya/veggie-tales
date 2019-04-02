const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundle_sizer.html",
      openAnalyzer: false
    })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
});

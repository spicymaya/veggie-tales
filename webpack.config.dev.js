const merge = require("webpack-merge");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(
  merge(baseConfig, {
    mode: "development",
    devtool: "source-map"
  })
);

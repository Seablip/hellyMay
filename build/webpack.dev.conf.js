const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
const WebConfig = require("../config/index");

module.exports = merge(baseConfig, {
  mode: "development",
  // web环境运行
  target: "web",
  devtool: "eval-cheap-module-source-map",
  //服务代理
  devServer: {
    // open: true,
    port: WebConfig.port,
    host: WebConfig.getIP(),
    proxy: WebConfig.getAgent()
  }
});

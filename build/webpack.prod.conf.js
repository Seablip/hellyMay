const isAnalyze = process.env.ANALYZE;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      // 定义输出文件名和目录
      filename: "static/css/main.css"
    }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : [])
  ],
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename]
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          },
          toplevel: true
        }
      }),
      "..."
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "all",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
});

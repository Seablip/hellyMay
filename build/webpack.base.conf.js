const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    // publicPath: isProd ? "./" : "/",
    filename: "js/[name][chunkhash:8].js",
    chunkFilename: "js/[name][chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff2?|mp4|mp3|avi)$/,
        type: "asset/resource",
        parser: {
          dataUrlCondition: { maxSize: 1024 * 5 }
        },
        generator: {
          filename: "static/media/[hash:8][ext][query]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: { maxSize: 1024 * 5 }
        },
        generator: {
          filename: "static/images/[name][hash:8][ext]"
        }
      },

      /* {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/
        // loader: "babel-loader"
      }, */
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        include: path.resolve(__dirname, "../src"), // 也可以用包含
        use: [
          /*  {
            loader: "thread-loader", // 开启多进程
            options: {
              workers: threads // 数量
            }
          }, */
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true, // 开启babel编译缓存
              cacheCompression: false // 缓存文件不要压缩
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
        include: path.resolve(__dirname, "../src")
        // loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : "vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        // include: srcPath,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(__dirname, "../src/style/variable.scss")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "vue2-happyfirl",
      template: path.resolve(__dirname, "../public/index.html")
      // production生产环境的时候
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public/favicon.ico"),
          to: "./static/ico/",
          globOptions: {
            ignore: [
              //不想被复制的文件，
              //比如：**/index.html
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new DefinePlugin({
      BASE_URL: "'./static/imgs/'" // 两层引号
    })
  ],
  resolve: {
    extensions: [".js", ".vue", ".scss", ".css", ".json"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      src: path.resolve(__dirname, "../src"),
      assets: path.resolve(__dirname, "../src/assets"),
      components: path.resolve(__dirname, "../src/components")
      /* views: path.resolve(__dirname, "../src/views"),
      src: path.resolve(__dirname, "../src"),
      components: path.resolve(__dirname, "../src/components"),
      vue$: "vue/dist/vue.esm.js"
      directives: path.resolve(__dirname, "../src/directives"),
      filters: path.resolve(__dirname, "../src/filters"),
      images: path.resolve(__dirname, "../src/images"),
      modules: path.resolve(__dirname, "../src/modules"),
      style: path.resolve(__dirname, "../src/style"),
      utils: path.resolve(__dirname, "../src/utils"), */
    }
  }
};

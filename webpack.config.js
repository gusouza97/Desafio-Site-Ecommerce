const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const miniCssWebpackPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const purgeCss = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = {
  // Ajuda na debugacao do codigo em modo de desenvolvimento
  devtool: "source-map",

  entry: "./src/index.js", // string | object | array // defaults to ./src // Here the application starts executing // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "public"), // string (default) // the target directory for all output files // must be an absolute path (use the Node.js path module)

    filename: "[contenthash].bundle.js", // string (default) // the filename template for entry chunks
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: miniCssWebpackPlugin.loader },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",

            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  performance: {
    hints: false,

    maxEntrypointSize: 512000,

    maxAssetSize: 512000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",

      filename: "./index.html",
    }),
    new miniCssWebpackPlugin({
      filename: "css/styles[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new purgeCss({
      paths: glob.sync("./**/*.html", { nodir: true }),
    }),
  ],
};

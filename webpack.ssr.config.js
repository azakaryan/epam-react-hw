const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const browserConfig = {
  devServer: {
    historyApiFallback: true
  },
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

const serverConfig = {
  entry: "./src/ssr_index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader?modules'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `public/[name].css`
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = [browserConfig, serverConfig];
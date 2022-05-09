const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 


module.exports = {
  entry: {main: './src/pages/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },

  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        // exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
      },
      { // here doing the swiper loader and declaring no sideEffects
        test: /swiper\.esm\.js/,
        sideEffects: false
      },
      {
        test: /\.(png|svg|jpg|gif|webp|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, {
      //     loader: 'css-loader',
      //     options: { importLoaders: 1 }
      //   }, 'postcss-loader']
      // }
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}
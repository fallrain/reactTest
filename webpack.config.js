'use strict';
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'app/index.html'),
  filename: 'index.html',
  inject: 'body',
  hash: true,
  showErrors: true
});
module.exports = {
  mode: 'development',
  // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
  entry: [
    './app/index.js',
  ],
  // output 是放入产生出来的结果的相关参数
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    publicPath: ''
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    compress: true,
    //historyApiFallback : true,//不跳转\
    port: 8089,
    //hot: true,
    host: '0.0.0.0',
    publicPath: ''
  },
  module: {
    rules: [
      /*{
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style-loader!css-loader'
      },*/
      {
        test: /\.(scss|sass|css)$/,
        include: path.resolve(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'app/assets/css/a.css'),
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader",// 将 CSS 转化成 CommonJS 模块
            options: {
              modules: true,//css modules
              //localIdentName:'[path][name]-[local]-[hash:base64:5]'
              localIdentName: '[name]-[local]-[hash:base64:5]'// 重置编译后的类名
            }
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        //exclude: [/node_modules/, path.resolve(__dirname,'app/assets/js/a.js')],
        exclude: [/node_modules/],
        options: {
          /*presets: [
            "env", "react"
          ],*/
          plugins: ["react-hot-loader/babel"],
        }
      }
    ]
  },
  /*resolve: {
    extensions: ['.js', '.jsx', 'json'],
    alias: {}
  },*/
  /* externals: {
     aaaa: ''
   },*/
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin()
    /*new webpack.optimize.AggressiveSplittingPlugin({
      minSize : 1024 * 10, // 字节，分割点。默认：30720
      maxSize : 1024 * 15, // 字节，每个文件最大字节。默认：51200
      chunkOverhead : 0, // 默认：0
      entryChunkMultiplicator : 2, // 默认：1
    }),*/
  ]
};
/*if (1) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}*/

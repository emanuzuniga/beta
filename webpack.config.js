var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : '',
  entry: {
    pos: "./sales/pos/app.js",
    posStyles: "./sales/pos/styles/main.sass",
  },

  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
    },
    {
        test:/\.sass$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }


    ],
  },
  output: {
    path: __dirname+ "/backend/static/public/",
    filename: "./js/[name].js"
  },

  plugins: debug ?
                [new ExtractTextPlugin({filename:"./css/[name].css", allChunks: true}),
                new LiveReloadPlugin(),]

                :
                [
                new webpack.DefinePlugin({
                  'process.env':{
                    'NODE_ENV': JSON.stringify('production')
                  }
                }),
                new ExtractTextPlugin({filename:"./css/[name].css", allChunks: true}),
                new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false, warnings: true }),
                new CompressionPlugin({
                  asset: "[path].gz[query]",
                  algorithm: "gzip",
                  test: /\.js$|\.css$|\.html$/,
                  threshold: 10240,
                  minRatio: 0.8}),
              ],

};

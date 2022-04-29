const path = require('path')
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    module: {
        rules: [
            {
           test:/\.(s*)css$/,
           use: [
              miniCss.loader,
              'css-loader',
              'sass-loader',
           ]
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader'
          },
          
        ]
     },
     plugins: [
        new miniCss({
           filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
            }),
     ]
  };


  
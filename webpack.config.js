const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const mode = argv && argv.mode || 'development'

  const stats = {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  }

  return {
    mode,
    stats,
    devServer: { stats },
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].[id].js',
    },
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?/,
          use: 'eslint-loader',
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        'sw.js',
        'manifest.json',
      ]),
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new FriendlyErrorsWebpackPlugin(),
    ],
  }
}

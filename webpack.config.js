const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
// const { GenerateSW } = require('workbox-webpack-plugin');
dotenv.config();

const dependencies = require('./package.json').dependencies;
const isDevelopment = process.env.NODE_ENV !== 'production';
const remotes = require(`./remotes.hosts.${isDevelopment ? 'development' : 'production'}.json`);

module.exports = {
  entry: './src/index',
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: process.env.HOST_PORT,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  output: {
    publicPath: process.env.HOST_URL,
    path: path.resolve(process.cwd(), 'dist'),
    chunkFilename: '[id].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
            '@babel/plugin-transform-runtime',
            isDevelopment && require.resolve('react-refresh/babel'),
            [
              'babel-plugin-styled-components',
              {
                namespace: process.env.NAME_APPLICATION,
                displayName: true,
                fileName: false,
              },
            ],
          ].filter(Boolean),
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    isDevelopment && new HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      exclude: 'node_modules',
      files: ['./src'],
      emitError: true,
      emitWarning: true,
      outputReport: true,
    }),
    new ModuleFederationPlugin({
      name: process.env.NAME_APPLICATION,
      filename: 'remoteEntry.js',
      remotes,
      exposes: {},
      shared: [
        {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    // new GenerateSW(), TODO: Config PWA
  ].filter(Boolean),
};

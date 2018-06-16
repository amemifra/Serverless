const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    vendor: './vendor.js',
    'core.elements': ['./src/components/sidenav/sidenav.element.js'],
    pages: ['./src/pages/homepage.page.js'],
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: [/\.scss$/, /\.css$/],
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader' // compiles Sass to CSS
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: './src/img',
      to: 'img'
    }])
  ],
  mode: 'development'
};

module.exports = config;

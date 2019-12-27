const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolved = dir => path.resolve(__dirname, dir);
module.exports = {
  entry: {
    main: './src/main',
    vendors: './src/vendors'
  },
  output: {
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: {
          loaders: {
            less: ExtractTextPlugin.extract({
              use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            }),
            css: ExtractTextPlugin.extract({
              use: ['css-loader', 'autoprefixer-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            }),
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'].join('!')
          }
        }
      },
      {
        loader: 'iview-loader',
        options: {
          prefix: false
        }
      }
      ]
    },
    {
      test: /iview\/.*?js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'autoprefixer-loader'],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
      test: /\.less/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=1024'
    },
    {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolved('src')

    }
  }
};
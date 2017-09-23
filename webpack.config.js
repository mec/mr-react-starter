const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // We need both the js and sass entry points
	entry: ['./src/index.js', './src/sass/index.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/app.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use:
        {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
          }
        }
      },
			{ test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            	loader: 'css-loader'
	          },
	          {
	            loader:
	              'sass-loader'
          }]
        })
      }
    ]
	},
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
	plugins: [
        new ExtractTextPlugin({
            filename: 'css/styles.css',
        }),
        new htmlWebpackPlugin({
          template: './src/index.html'
        }),
        new CleanWebpackPlugin(
          ['dist']
        ),
    ]
}
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader']}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [ new htmlWebpackPlugin({
		template: './src/index.html'
	})]
}
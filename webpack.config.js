const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = {
	entry: {
		app: "./src/index.js",
		print: './src/print.js'
	},
	output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist'
	},
	// 插件
	plugins: [
		// 清理生成目录
		new CleanWebpackPlugin(['dist']),
		// html自生成依赖
		new HtmlWebpackPlugin({
			title: "Output Management"
		})
	],
	// 定位报错问题件（开发环境使用）
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test:  /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}

module.exports = config;
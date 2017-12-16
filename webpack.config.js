const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

const config = {
	entry: {
		app: "./src/index.js"
	},
	output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist'),
	    publicPath: '/'
	},
	devServer: {
		// 告诉开发服务器(dev server)，在哪里查找文件
		contentBase: './dist',
		// 热替换（局部刷新）
		hot: true
	},
	// 插件
	plugins: [
		// 清理生成目录
		new CleanWebpackPlugin(['dist']),
		// html自生成依赖
		new HtmlWebpackPlugin({
			title: "Output Management"
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	//  source map 功能,更容易地追踪错误和警告（开发环境使用）
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
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin= require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(base, {
    mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: '../'
    },
    devtool: 'cheap-module-eval-source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
        }),
        new TerserWebpackPlugin({}),
        new OptimizeCssAssetsWebpackPlugin({})
	]
})
const path = require('path')
const merge = require("webpack-merge")
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
    mode: 'development',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].js'
	},
	devServer: {
		contentBase: path.join(__dirname, '..', '/dist'),
		publicPath: '/',
		port: '9090',
		overlay: true,
        proxy: {
            '/mock': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '/mock': ''
                }
            }
        }
    }
})
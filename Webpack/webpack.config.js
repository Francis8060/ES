const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8081,
        progress: true,
        contentBase: './dist',
        compress: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            // css-loader解析css文件中@import这种语法 style-loader把css文件插入到head标签中
            // use: ['style-loader', 'css-loader']
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: {
                // 当mode：production的时候可以加上
                removeAttributeQuotes: true, // 移除html上的所有双引号
                collapseWhitespace: true     // 使html折叠成一行
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            // 当只有一个入口的时候
            filename: 'index.css'
            // 当有多个入口的时候
            // filename: '[name].css'
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}
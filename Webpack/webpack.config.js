const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './dist',
        compress: true
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
        })
    ]
}
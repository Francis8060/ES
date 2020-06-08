const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebapckPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        // 当执行npx webpack，publicPath: './'; 当执行npx webpack-dev-server,publicPath: '/'
        // publicPath: './'
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
    },
    devServer: {
        port: 8081,
        progress: true,
        contentBase: './dist',
        compress: true,
        proxy: {
            '/mock': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '/mock': ''
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-withimg-loader'
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 20 * 1024,
                    esModule: false,
                    outputPath: 'imgs/'
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            // css-loader解析css文件中@import这种语法 style-loader把css文件插入到head标签中
            // use: ['style-loader', 'css-loader']
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader', 'postcss-loader', 'sass-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: false
            // minify: {
            //     // 当mode：production的时候可以加上
            //     removeAttributeQuotes: true, // 移除html上的所有双引号
            //     collapseWhitespace: true     // 使html折叠成一行
            // },
            // hash: true
        }),
        new MiniCssExtractPlugin({
            // 当只有一个入口的时候
            filename: 'styles/index.css'
            // 当有多个入口的时候
            // filename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        // 不用传参数，默认删除的就是output.path
        new CleanWebpackPlugin(),
        new CopyWebapckPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'public/doc'),
                to: path.resolve(__dirname, 'dist/doc')
            }]
        }),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/)
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // })
        // new webpack.BannerPlugin( `${new Date().toLocaleString()} author: Francis`)
    ],
    optimization: {
        minimizer: [
            // new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'boot': 'bootstrap/dist/css/bootstrap.css'
        },
        // extensions: ['.js', '.css', '.json'],
        // 默认去node_modules下找package.json中找main对应的，当更改成这就会先去找style对应的
        mainFields: ['style', 'main']
    },
    watch: true
}
const path = require('path')
const webpack = require("webpack")
const glob = require("glob")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 获取多页面入口
function getEntry () {
    let entry = {}
    glob.sync('./src/pages/**/*.js').forEach(pageName => {
        const entryKey = pageName.slice(12, pageName.length - 9)
        entry[entryKey] = [pageName]
    })
    return entry
}

function getHtmlConfig(pageConfigItem) {
    const {html: pageUrl, title, chunks} = pageConfigItem
    return {
        template: `./src/pages/${pageUrl}/index.html`, 
        filename: process.env.NODE_ENV === "development"? 
            `${pageUrl.slice(pageUrl.lastIndexOf('/') + 1)}.html` : 
            `html/${pageUrl.slice(pageUrl.lastIndexOf('/') + 1)}.html`,
        inject: true,
        hash: false,                        //开启hash  ?[hash]
        chunks: chunks,
        title,
        minify: process.env.NODE_ENV === "development" ? false : {
            removeComments: true,           //移除HTML中的注释
            collapseWhitespace: true,       //折叠空白区域 也就是压缩代码
            removeAttributeQuotes: true,    //去除属性引用
        }
    }
}

module.exports = {
    entry: getEntry(),
    module: {
        rules: [{
            test: /\.(css|scss|sass)$/,
            use: process.env.NODE_ENV === "development" ? 
                ["style-loader", "css-loader", "sass-loader", "postcss-loader"] : 
                [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"
                    }
                }, "css-loader", "sass-loader", "postcss-loader"]
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/,
            include: path.join(__dirname, '..', 'src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 20 * 1024,
                    publicPath: '../images',
                    outputPath: 'images',
                    esModule: false
                }
            }]
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-withimg-loader'
            }
        }]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src')
        }
    },
    // 提取公共代码
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {                   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',         // 打包后的文件名，任意命名    
                    priority: 10            // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                },
                common: {                   // 抽离自己写的公共代码，common这个名字可以随意起
                    chunks: 'initial',
                    name: 'common',         // 任意命名
                    minSize: 0,             // 只要超出0字节就生成一个新包
                    minChunks: 2
                }
            }
        }
    },
    plugins: []
}

// 获取多页面html模板
const entryObj = getEntry();
const htmlWebpackArr = [];
Object.keys(entryObj).forEach(pageUrl => {
    htmlWebpackArr.push({
        html: pageUrl,
        title: pageUrl,
        chunks: ['vendor', 'common', pageUrl]
    })
})

// 自动生成html模板
htmlWebpackArr.forEach(htmlWebpack => {
    module.exports.plugins.push( new htmlWebpackPlugin(getHtmlConfig(htmlWebpack)) )
})
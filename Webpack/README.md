- npm初始化 `npm init`
- 安装webpack webpack-cli `npm i webpack webpack-cli -D` 就是安装开发依赖
- 不用任何配置 `npx webpack` 就会打包出一个简单的js文件
- 配置一个简单的webpack.config.js并修改文件的名字
``` js
// webpack.config.js
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

// 在package.json中增加命令
'build': 'webpack'
// 要是想修改webpack配置文件的名称(webpack.config.main.js)
'build': 'webpack --config webpack.config.main.js'
```

- 本地启动一个server `npm i webpack-dev-server -D` 在package.json中增加配置`dev: webpack-dev-server`
``` js
devServer: {
    poet: 3000,
    progress: true,
    contentBase: './dist',
    compress: true
}
```

- 配置`html-webpack-plugin`插件，使用一个html模板
``` js
const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [
     new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
    })
]
```

- 解析css，使用`style-loader css-loader` 需要先安装`npm i style-loader css-loader -D`
- 解析scss，使用`style-loader css-loader sass-loader` 需要先安装`npm i node-sass sass-loader -D`
``` js
module: {
    rules: [{
        test: /\.css$/,
        // css-loader解析css文件中@import这种语法 style-loader把css文件插入到head标签中
        // use: ['style-loader', 'css-loader']
        use: [{
            loader: 'style-loader',
            options: {
                // 将css插入到head内部的上面，这个有待商榷
                insertAt: 'top'
            }
        }, 'css-loader']
    }, {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
        }, 'css-loader', 'sass-loader']
    }]
},
```

- 抽离css，使用抽离css插件，`mini-css-extract-plugin`，自动添加css前缀，使用`postcss-loader autoprefixer`, `npm i postcss-loader autoprefixer -D`
``` js
plugins: [
    new MiniCssExtractPlugin({
        // 当只有一个入口的时候
        filename: 'index.css'
        // 当有多个入口的时候
        // filename: '[name].css'
    })
]

module: {
    rules: [{
        test: /\.css$/,
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
}

// 为了css自动添加前缀
// 根路径下新增一个postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
// 根路径新增一个.browserslistrc
> 1%
last 2 versions
```

- 压缩css,使用`mini-css-extract-plugin`提供的优化项, 压缩js`terser-webpack-plugin`,压缩css`optimize-css-assets-webpack-plugin`, 
`npm i terser-webpack-plugin optimize-css-assets-webpack-plugin -D`
``` js
optimization: {
    minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({})
    ]
}
```




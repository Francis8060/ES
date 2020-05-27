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

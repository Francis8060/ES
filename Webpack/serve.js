const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const webpack = require('webpack')

const app = express()
const compiler = webpack(webpackConfig)
app.use(webpackMiddleware(compiler))


app.get('/api/user', (req, res) => {
    res.json({ name: 'Francis1' })
})
app.listen(4000)
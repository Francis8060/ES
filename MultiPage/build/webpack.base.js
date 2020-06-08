const path = require('path')
const fs = require('fs')
const pageDir = path.resolve(__dirname, '../src/pages')
const webapckConfig = {}
let pagesArr = []

const readDir = (dirPath) => {
    fs.readdirSync(dirPath, (err, files) => {
        if (err) {
            console.log(err)
            return
        }
        pagesArr = files
    })
}

readDir(pageDir)
console.log(pagesArr, 18)



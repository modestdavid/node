const path = require('path')

console.log(path.sep)

const pathJoin = path.join('/content', 'subfolder', 'test.txt') 

console.log(pathJoin)

const base = path.basename(pathJoin)

console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(absolutePath)
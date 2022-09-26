
const { readFile, writeFile } = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')

// const secont = readFileSync('./content/secont.txt', 'utf8')

// console.log(first, secont)

// const newFile = writeFileSync('./content/newfile.txt', `the is the value in the file ${2 + 2}`)

// console.log( newFile
// )

const file = readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return null;
    }
    const first = result

    readFile('./content/secont.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return null;
        }const second = result
        
        writeFile('./content/newtest.txt', `This is the result of the file ${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return null
            }console.log(result)
        }) 
    })

   
})

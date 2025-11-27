const fs = require("fs")

console.log('start reading....')

const data = fs.readFile('./data/diary.txt', "utf-8", (error, data) => {
    if(error){
        console.log(error.message)
    }
    console.log("file content", data)
})


console.log("this runs immediately")




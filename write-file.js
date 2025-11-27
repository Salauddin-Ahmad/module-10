const { error } = require("console");
const fs = require("fs");

const content = "This is a content \n node is awesome !!!!"

try {
    fs.writeFileSync("./output/test-sync.txt", content)
    console.log('files written syncronously')
}
catch (err) {
    console.log(err.message)
}



const content2 = "This is content too \n asynchronous !!!";

fs.writeFile("./output/test-async.txt", content2, (error) => {
    if(error){
        console.log(error.message)
    }
    else {
        console.log("File written asynchronously")
    }
})





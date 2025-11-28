const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("Temp file created")

if(fs.existsSync("./output/temp.txt")){
    console.log("file exists !!")

    fs.unlinkSync("./output/temp.txt")
    console.log("file deleted")
}


try {
     fs.unlinkSync("./output/temp.txt")
} catch (error) {
    console.log("ERROR:", error.message)
}

fs.writeFile("./output/temp2.txt", "another temp file", (error) =>  {
    if(error) return console.log(error.message);
        console.log("another temp file created")

        fs.unlink("./output/temp2.txt", (err) => {
            if(err){
                console.log("Error", err.message)
            }else {
                console.log("temp 2 deleted")
            }
        })
})
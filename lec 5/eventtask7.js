fs=require('fs')
e = require("events")
ee = new e()
function makedirectory(){
    fs.mkdirSync("Test")
    ee.emit("filecreate")
}
function createfiles(){
    fs.writeFileSync("Test/abc.txt","Some Data Entered")
    ee.emit("Appended","Test/abc.txt")
}
function appendfiles(path){
    fs.appendFileSync(path,"Data Appended Successfully")
    ee.emit("Read",path)
}
function readfiles(path){
    var data=fs.readFileSync(path,"UTF-8")
    var data1=JSON.stringify(data)
    console.log(data1)
    ee.emit("Copy",path)
}
function copyfiles(path){
    fs.copyFileSync(path,"Test/pqr.txt")
    ee.emit("DeleteoldFiles",path)
}
function deletefile(path){
    fs.unlinkSync(path)
    console.log("All operations performed successfully")
}
ee.on("Task9",makedirectory)
ee.on("filecreate",createfiles)
ee.on("Appended",appendfiles)
ee.on("Read",readfiles)
ee.on("Copy",copyfiles)
ee.on("DeleteoldFiles",deletefile)
ee.emit("Task9")
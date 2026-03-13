fs = require("fs")
fs.writeFile("lec11.txt","Json",(err)=>
{
    if (err) throw err
    console.log("write operation done")
})
fs.appendFile("lec11.txt","\n We are student of 4th sem",(err)=>
{
    if (err) throw err
    console.log("Append")
})
 fs.readFile("lec11.txt","utf - 8",(err,data)=>
{
    if (err) throw err
    console.log(data)
})

console.log("process End")


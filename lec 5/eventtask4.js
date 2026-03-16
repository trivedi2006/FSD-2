fs = require("fs")
e = require("events")
ee = new e()
ee.on("create",()=>
{
    fs.writeFile("new.txt","This is data",()=>
    {
        console.log("write done")
        ee.emit("update")
    })
});
ee.on("update",()=>
{
    fs.appendFile("new.txt","That is data",()=>
    {
        console.log("append done")
        ee.emit("read")
    })
});
ee.on("read",()=>
{
    fs.readFile("new.txt","utf-8",(err, data)=>
    {
        if (err) throw err
        console.log(data)
        ee.emit("finish")

    })
});
ee.on("finish",()=>
{
    console.log("finished")
});
ee.emit("create")

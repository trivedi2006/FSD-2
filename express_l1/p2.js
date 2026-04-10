var express = require("express")
var app = express()
data = {name:"xyz",age:24}
app.get("/",(req,res)=>
{
    // res.set("Content-Type","text/html")
    // res.write(JSON.stringify(data))
    // res.send(data)
    res.json(data)
})
app.listen(5007,"0.0.0.0",()=>
{
    console.log("server is live")
})
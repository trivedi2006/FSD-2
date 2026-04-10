var express = require("express")
var app = express()

data = [{name:"Daksh",age:19},{name:"Nishi",age:22},{name:"sandip",age:50}]
app.get("/",(req,res)=>
{
    res.set("Content-Type","text/html")
    res.send(JSON.stringify(data))
})
app.get("/sorted",(req,res)=>
{
    res.set("Content-Type","text/html")
    res.send(JSON.stringify(data.sort((a,b)=>b.age-a.age)))
})
app.listen(1234,()=>
{
    console.log("Server is live")
})
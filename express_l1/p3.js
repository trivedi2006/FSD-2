var express = require("express")
var app = express()

app.get("/",(req,res)=>
{
    res.set("Content-Type","text/html")
    res.send("<h1>hello<h1>")
})
app.get("/about",(req,res)=>
{
    res.send("About Page")
})
app.listen(5678,"0.0.0.0",()=>
{
    console.log("server is live")
})
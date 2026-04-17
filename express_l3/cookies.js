var express = require("express")
var app = express()

cp = require("cookie-parser")
app.use(cp())
app.get("/data",(req,res)=>
{
    res.cookie("name","express")
    res.cookie("age",28)
    res.cookie("email","exp@gmail.com",{maxAge:2000})
    res.send(req.cookies)
})

app.listen(2525)
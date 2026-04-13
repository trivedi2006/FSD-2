var express = require("express")
var app = express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>
{
    res.send('<form action="/data" method="get">username:<input type="text" name=uname>age:<input type="text" name="age"><button type="submit">submit<button><form>')
})
app.get("/data",(req,res)=>
{
    name=req.query.uname
    age = req.query.age
    res.send("Welcome"+name+"age"+age)
})
app.listen(5555)

//post lakis to query na jagyar .body lakhvanu
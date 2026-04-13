var express = require("express")
app = express()

const cb = (req,res,next)=>
{
    console.log("I am CB")

    next()
}
const cb1 = (req,res,next)=>
{
    console.log("I am CB1")
    next()
}
app.use("/ee",cb,cb1)
app.get("/ee",(req,res)=>
{
    res.write("<h1> Do not copy <h1>")
    res.send()
})
app.listen(5001)
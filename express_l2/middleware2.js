var express = require('express')
app = express()

name = (req,res,next)=>
{
    req.name = "Daksh"
    console.log("Name added")
    next()
}
const subject  = (req,res,next)=>
{
    req.subject = "FSD-2"
    console.log("subject added")
    next()
}
const marks = (req,res,next)=>
{
    req.marks = 2+2
    console.log("marks updated")
    next()

}
app.get("/data",name,subject,marks,(req,res)=>
{
    res.send("Name of Student : "+req.name+"Subject "+req.subject+"Marks"+req.marks)
})
app.listen(5112)
var express = require("express")
app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("../public",{index:"/ljform.html"}))
app.get("/login",(req,res)=>
{
    uname = req.query.uname
    if(uname==="admin")
    {
        res.write("Welcome login")
    }
    else{
        res.write("login as admin only")
    }
    res.send()
})
app.listen(2000)
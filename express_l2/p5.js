var express = require("express")
app = express()

app.get("/user/:uid",(req,res)=>
{
    uid = req.params.uid
    name = req.query.name
    age = req.query.age
    res.json({uid,name,age})

})
app.listen(5777)
fs = require('fs')
http = require("http")
let server1 = http.createServer((req,res)=>
{
    if(req.url==="/")
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> Hello <h1>")
        res.end()
    }
    else if(req.url==="/about")
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> About us <h1>")
        res.end()

    }
    else{ res.writeHead(400,{"content-type":"text/html"})
        res.end("page not found") }
})
server1.listen(5006,()=>
{
    console.log("Server connected ")
})
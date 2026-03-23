fs = require('fs')
http = require("http")
let server1 = http.createServer((req,res)=>
{
    if(req.url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write('<h1> Hello </h1><img src="a.png"/>')
        res.end()
    }
    else if(req.url==="/a.png")
    {
        data = fs.readFileSync("a.png")
        res.writeHead(200,{"Content-Type":"image/png"})
        
        res.end(data)

    }
    else{ res.writeHead(404,{"Content-Type":"text/html"})
        res.end("page not found") }
})
server1.listen(5007,()=>
{
    console.log("Server connected ")
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
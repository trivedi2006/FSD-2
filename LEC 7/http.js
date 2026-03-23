const http = require("http")
let server = http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("hiii")
    res.write("<h1> Hello Server<h1>")
    res.end()
})
server.listen(6008,()=>
{
    console.log("Server connected http://localhost:6008/")
})
const http = require("http")
let server1 = http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<br> Hello <br><img src=Screenshot(5).png>")
    res.end()
   
})
server1.listen(5008,()=>
{
    console.log("Server connected ")
})
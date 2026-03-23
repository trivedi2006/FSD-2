const http = require("http")
let server1 = http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"application/json"})
    let data = {"name":"rohit","runs":50}
    res.end(JSON.stringify(data))
   
})
server1.listen(5006,()=>
{
    console.log("Server connected ")
})
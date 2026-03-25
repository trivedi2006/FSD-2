http = require("http")
http.createServer((req,res)=>
{
    setTimeout(()=>
    {
        res.write("welcome student")
        res.end()

},5000)
}).listen(5000)
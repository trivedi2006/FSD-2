fs = require("fs")
http = require("http")
url = require("url")
process.noDeprecation=true

const url1 = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=WelcometoLJU#AllTheBest"
const q = url.parse(url1,true)
console.log(q.pathname)

const c1 = q.query.c1
const c2 = q.query.c2
const c3 = q.query.c3

const hash = q.hash
const fname = "."+q.pathname

const fcon = c1+"!\n"+c3+" "+c2+"\n"+hash

fs.writeFileSync(fname,fcon)

const server = http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1 style= 'color:red'><pre>"+fcon+"</pre></h1>")
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("page not found")

    }
})
server.listen(6008)
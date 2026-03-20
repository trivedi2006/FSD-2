u = require("url")
fs = require("fs")
addr = "http://localhost:8000/default.html?year=2026&month=March#warupdate"
let data = u.parse(addr)
fs.writeFileSync("hello.txt",data.query)
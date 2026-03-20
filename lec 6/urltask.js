var u = require("url")
let addr = "http://localhost:8000/default.html?year=2026&month=March#warupdate"
process.NoDeprection = true
var q = u.parse(addr,true) // true lakhvati query string ne object ma convert karse
console.log(q)
console.log(q.port)
console.log(q.query)
console.log(q.search)
let data = q.query
console.log(data) // query ? ke sath ata hai
console.log(data.year)

if((data.year%400==0 || data.year%4==0) & data.year%100!=0)
{
    console.log("this is leap year")
}
else{
    console.log("this is not leap year")
}
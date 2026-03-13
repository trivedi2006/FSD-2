var pm = require("path")
var a = pm.basename("D:/LJ/lec2/hello.txt")
console.log(a)
var b = pm.extname("D:/LJ/lec2/hello.txt")
console.log(b)
var c = pm.dirname("D:/LJ/lec2/hello.txt")
console.log(c)
d = pm.parse("D:/LJ/lec2/hello.txt")
console.log(d)

if(d.ext==".txt")
{
    console.log("file is text based")
}
else{
    console.log("not a text file")
}
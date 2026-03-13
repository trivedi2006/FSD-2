fs=require("fs")
var obj=[{"Name":"Preet",age:20},{"Name":"Sarinah",age:200},{"Name":"Diya",age:27}]
for (const e of obj) {
    na=e.Name 
    a=e.age
    fs.appendFileSync("student.txt",na+" "+a+"\n")
}
var ob=fs.readFileSync("student.txt","UTF-8")
console.log(JSON.stringify(ob))
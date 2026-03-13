fs=require('fs')
shap={data:{a:15,b:20,c:[40,30]}}
fs.writeFileSync("S.txt",JSON.stringify(shap))
var data=fs.readFileSync("s.txt","utf-8")
data1=JSON.parse(data)
add=data1.data.a+data1.data.b
sub=Math.abs(data1.data.c[1]-data1.data.b)
mul=data1.data.c[1]*data1.data.c[0]
console.log(add,sub,mul)
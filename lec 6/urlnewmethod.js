u=require("url");
let addr="https://localhost:8080/test?T1=25&T2=24&T3=25&#test";
fs=require("fs");
process.noDeprecation = true;
let data=u.parse(addr);

console.log(data);
console.log(data.searchParams.get('T1'));
console.log(data.searchParams.get('T2'));
console.log(data.searchParams.get('T3'));
const { json } = require('stream/consumers')

fs=require('fs')
score_list=[{name:"Rohit",marks:52},{name:"Kohli ",marks:96},{name:"Gill",marks:20},{name:"Rahul ",marks:33},{name:"Tilak ",marks:30}]
fs.writeFileSync("score.txt",JSON.stringify(score_list))
var data=fs.readFileSync("score.txt","UTF-8")
var data1=JSON.parse(data)
console.log(data1)

data1.push({name: "Hardik", "marks": 52})
console.log(data1)
s=0
c=0
for (const e of data1) {
    s+=parseInt(e.marks)
    c+=1
}
var rr=s/20
console.log("Total Runs=",s)
console.log(`Total Run Rate=${rr}`)
console.log("Players scored more than 50:")
var ar=[]
data1.forEach(e => {
    if (e.marks>50){
        console.log(e.name)
        ar.push(e.name)
    }
});
fs.writeFileSync("score.txt",JSON.stringify(data1))
fs.appendFileSync("score.txt",`\nTotal Runs=${s} \n Run Rate=${rr} \n Player above 50 runs=${ar}`)
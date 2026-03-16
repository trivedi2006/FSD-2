e = require("events")
ee = new e()
ee.on("calculate",(s1,s2,s3,s4,s5)=>
{
    var total = s1+s2+s3+s4+s5
    console.log(total)
    ee.emit("per",total)
})  
ee.on("per",(total)=>
{
    var per  = (total/125)*100
    console.log(per)
})
ee.emit("calculate",20,18,19,22,18)   


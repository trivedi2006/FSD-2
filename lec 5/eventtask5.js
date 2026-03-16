e = require("events")
ee = new e()
ee.on("negr",()=>
{
    console.log("radius must +ve")
})
ee.on("negs",()=>
{
    console.log("Side must +ve")
})
ee.on("final",(r,s)=>
{
    if(r<0)
    {
        ee.emit("negr")
    }
    else{
        var cons1 = 2*3.14*r
        console.log(cons1)
    }
    if(s<0)
    {
        ee.emit("negs")
    }
    else{
        var cons2 = 4*s
        console.log(cons2)
    }
})
ee.emit("final",4,9)
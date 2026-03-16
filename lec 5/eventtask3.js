e = require("events")
ee = new e()

let l1 = function listener1()
{
    console.log("I am listener 1")
}
let l2 = function listener2()
{
    console.log("I am listener 2")
}
ee.addListener("conn",l1)
ee.on("conn",l2)
//ee.emit("conn")
let d = ee.listenerCount("conn")
console.log(d)
ee.emit("conn")

ee.removeListener("conn",l1)
let d1 = ee.listenerCount("conn")
console.log(d1)
ee.emit("conn")


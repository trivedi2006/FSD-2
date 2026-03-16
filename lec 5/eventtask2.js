var EventEmitter = require("events")
var ee = new EventEmitter()
var a = function()
{
    console.log("Connection Succesfully")
}
var b = function()
{
    console.log("Data - received succesfully")
}

ee.on("mrgfunction",a) 
ee.on("mrgfunction",b) 
ee.emit("mrgfunction")
console.log("Thank you")
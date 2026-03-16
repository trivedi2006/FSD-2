var EventEmitter = require("events")
var ee = new EventEmitter()
var d = function()
{
    console.log("Decorator")
}
var c = function()
{
    console.log("Catering")
}
var p = function()
{
    console.log("photographer")
}
var b = function()
{
    console.log("Dhula aur Dhulan sath mai stage pe")
}
ee.on("mrgfunction",d) 
ee.on("mrgfunction",c) 
ee.on("mrgfunction",p) 
ee.on("mrgfunction",b) 
console.log("check your postion")
ee.emit("mrgfunction")
console.log("Thank you")
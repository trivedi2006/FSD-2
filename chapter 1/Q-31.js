fs = require("fs")
var division1 = {
    name: ["daksh", "dhruv", "diya"]
}
var division2 = {
    name: ["divya", "aditya", "sandip"]
}
division1.name.sort()
division2.name.sort()

var combined = {
    division1: division1,
    division2: division2
}
console.log("Combined and Sorted Names:")
console.log(combined)
var string = JSON.stringify(combined)
fs.writeFileSync("combined_names.json", string)

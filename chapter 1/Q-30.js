var data = [
    {
        name:"Daksh",
        height:177
    },
    {
        name:"Dhruv",
        height:180
    },
    {
        name:"Diya",
        height:165

    }
]
var max = 0
var name1 = ""
for(var h in data)
{
    if(data[h].height > max)
    {
        max = data[h].height
        name1 =data[h].name
    }
    
}
console.log("Max Height: "+max)
console.log("Tallest Person: "+name1)
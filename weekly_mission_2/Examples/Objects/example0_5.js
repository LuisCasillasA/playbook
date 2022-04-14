//Create object that recives parameters
const copper = {
    name: "Cuprum",
    number: 29,
    symbol: "Cu",
    electricCurrent: function(volts){
        if(volts > 12){
            console.log("¡Puuum! ¡Electric Explotion!")
        }else{
            console.log("The light is on")
        }
    }
}
console.log("This is an object that recives parameters")
console.log(copper)
copper.electricCurrent(10)
copper.electricCurrent(15)
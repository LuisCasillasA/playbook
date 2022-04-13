//Create empty object
const stone = {}
console.log("This is an empty object")
console.log(stone)

//Create object with properties
const argentum = {
    name: "Argentum",
    number: 47,
    symbol: "Ag"
}
console.log("This is an object with properties")
console.log(argentum);

//Create Object with differents properties
const gold = {
    name: "Aurum",
    number: 79,
    symbol: "Au",
    oxidationStates: [3, 1],
    radio: {
        atomic: 165,
        covalent: 153,
        vanWaals: 172
    }
}
console.log("This is an object with differents properties")
console.log(gold)
console.log(`Gold Properties
------------------------
Gold name: ${gold.name}
Gold symbol: ${gold.symbol}
Gold atomic radio: ${gold.radio.atomic}`)

//Create Object with methods
const helium = {
    name: "Helios",
    number: 2,
    symbol: "He",
    sayHello: function(){
        console.log('Hello World (Helium voice)')
    }
}
console.log("This is an object with methods")
console.log(helium)
helium.sayHello()

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
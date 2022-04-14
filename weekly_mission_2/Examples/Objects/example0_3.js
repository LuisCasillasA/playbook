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
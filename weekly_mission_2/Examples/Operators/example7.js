// Example 7: Using Filter in a list
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Example 7: Using Filter in a list (counties that include land)")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Example 7: Using Filter in a list (Countries ending with ia)")
console.log(countriesEndsByia)
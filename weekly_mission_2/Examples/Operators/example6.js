// Example 6: Using Map to change the three first letters to uppercase
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Example 6: Using Map to change the three first letters to uppercase")
console.log(countriesFirstThreeLetters)
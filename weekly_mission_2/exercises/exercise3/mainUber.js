//Instance User Uber class
import UserUber from './userUber.js'

const userPassanger = new UserUber('Luis', 'Casillas', 25, 'photo.png', '1996, 12, 04', 4.8)

//Instance car class
import Car from './car.js'

const car = new Car('BMW M Sport', 'black', 'AZM9590')

//Create User Driver
const userDriver = new UserUber('Daniel', 'Ibarra', 28, 'photo.png', '1992, 01, 18', 4.5)
userDriver.setCar(car)

console.log('Passanger\n')
console.log(userPassanger.getGeneralInfo())
console.log('\nDriver')
console.log(userDriver.getGeneralInfo() + userDriver.car.getCarInfo())
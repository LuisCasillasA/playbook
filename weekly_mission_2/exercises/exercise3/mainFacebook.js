//Instance class User
import User from './user.js'

const user = new User('Luis', 'Casillas', 25, 'Photo.jpg', '1996, 12, 04')

console.log(user.getGeneralInfo())

//Instance User Facebook
import UserFacebook from './userFacebook.js'

const userFacebook = new UserFacebook('Luis', 'Casillas', 25, 'Photo.jpg', '1996, 12, 04', 'Launch X', 'Zacatecas', 'Single',  '2013, 09, 03')

console.log(userFacebook.getGeneralInfo())
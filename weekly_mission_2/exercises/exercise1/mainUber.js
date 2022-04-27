const user ={
    name: 'Luis',
    lastName: 'Casiilas',
    username: 'LuisCasillas',
    age: 25,
    profilePic: 'foto.png',
    rate: 4.2,
    getGeneralInfo: function(){
        return `${this.profilePic}\n${this.name} ${this.lastName}\n${this.rate}`
    }
}
const car = {
    model: 'BMW M Sport',
    color: 'black',
    licensePlate: 'AZM9590',
    getCarInfo: function(){
        return `\nModel: ${this.model}, ${this.color}\nLicense: ${this.licensePlate}`
    }
}

const userDrive ={
    name: 'Daniel',
    lastName: 'Ibarra',
    username: 'DanIbarra',
    age: 28,
    profilePic: 'foto.png',
    rate: 4.5,
    getGeneralInfo: function(){
        return `${this.profilePic}\n${this.name} ${this.lastName}\n${this.rate}`
    }
}

userDrive.car = car
console.log('Passanger\n')
console.log(user.getGeneralInfo())
console.log('\nDriver')
console.log(userDrive.getGeneralInfo() + userDrive.car.getCarInfo())

const travel ={
    destination: 'Zocalo Capitalino',
    origin:  'Calle San Luis #25 Jerez, Zacatecas',
    price: 4680,
    passanger: user,
    driver: userDrive,
    getTravelInfo: function(){
        return `${this.destination} to ${this.origin}\n$${this.price}\nDriver\n${this.driver.getGeneralInfo()}\nCar${this.driver.car.getCarInfo()}\nPassanger\n${this.passanger.getGeneralInfo()}`
    }
}

console.log('\nTravel\n')
console.log(travel.getTravelInfo())
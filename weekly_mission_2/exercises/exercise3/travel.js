export default class Travel{
    constructor(destination, origin, price, passanger, driver){
        this.destination = destination
        this.origin = origin
        this.price = price
        this.passanger = passanger
        this.driver = driver
    }
    getTravelInfo(){
        return `${this.destination} to ${this.origin}\n$${this.price}\nDriver\n${this.driver.getGeneralInfo()}\nCar${this.driver.car.getCarInfo()}\nPassanger\n${this.passanger.getGeneralInfo()}`
    }
}
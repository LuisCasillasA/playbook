export default class Car{
    constructor(model, color, licensePlate){
        this.model = model
        this.color = color
        this.licensePlate = licensePlate
    }
    getCarInfo(){
        return `\nModel: ${this.model}, ${this.color}\nLicense: ${this.licensePlate}`
    }
}
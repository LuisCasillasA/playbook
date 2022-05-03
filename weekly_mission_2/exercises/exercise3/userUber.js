import User from "./user.js";

export default class UserUber extends User{
    constructor(name, lastName, age, profilePic, birthDate, rate){
        super(name, lastName, age, profilePic, birthDate)
        this.rate = rate
    }
    getGeneralInfo(){
        return `${this.profilePic}\n${this.name} ${this.lastName}\n${this.rate}`
    }
}
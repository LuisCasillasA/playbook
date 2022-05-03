import User from './user.js'

export default class UserFacebook extends User{
    constructor(name, lastName, age, profilePic, birthDate, work, from, maritalStatus, joinedDate){
        super(name, lastName, age, profilePic, birthDate)
        this.work = work
        this.from = from
        this.maritalStatus = maritalStatus
        this.joinedDate = new Date(joinedDate)
    }
    getGeneralInfo(){
        return `${this.name} ${this.lastName}\n\nDetails\nWork At: ${this.work}\nFrom: ${this.from}\nMarital status: ${this.maritalStatus}\nBirthday: ${this.birthDate.toDateString("en-US")}\nJoined in ${this.joinedDate.toLocaleDateString("en-US", { month: "long" })} ${this.joinedDate.getFullYear()}`
    }
}
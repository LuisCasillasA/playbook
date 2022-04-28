export default class User{
    constructor(name, lastName, age, profilePic, birthDate){
        this.name = name
        this.lastName = lastName
        this.age = age
        this.profilePic = profilePic
        this.birthDate = birthDate
    }

    getGeneralInfo(){
        return `Name: ${this.name} ${this.lastName}\nAge: ${this.age}`
    }
}
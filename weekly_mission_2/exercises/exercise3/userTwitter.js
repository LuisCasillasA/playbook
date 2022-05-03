
import User from "./user.js";

export default class UserTwitter extends User{
    constructor(name, lastName, age, profilePic, birthDate, following, followers, bio, username){
        super(name, lastName, age, profilePic, birthDate)
        this.following = following
        this.followers = followers
        this.bio = bio
        this.username = username
    }
    getGeneralInfo(){
        return `${this.name} ${this.lastName}   @${this.username} \nFollowing: ${this.following}\nFollowers: ${this.followers}\nBirth Date: ${this.birthDate}`
    }
}
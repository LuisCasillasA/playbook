const user ={
    name: 'Luis',
    lastName: 'Casiilas',
    username: 'LuisCasillas',
    age: 25,
    profilePic: 'foto.png',
    following: 10,
    followers: 12,
    bio: 'Mis gutos e intereses',
    birthDate: new Date(1996, 12, 04),
    getGeneralInfo: function(){
        return `${this.name} ${this.lastName}   @${this.username} \nFollowing: ${this.following}\nFollowers: ${this.followers}\nBirth Date: ${this.birthDate}`
    }
}

console.log(user.getGeneralInfo())
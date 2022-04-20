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

console.log('User Information')
console.log(user.getGeneralInfo())

const trendingTopic = {
    number: 1,
    topic: 'Movies',
    tag: 'Spiderman',
    tweets: 12000,
    descripcion: 'Superman',
    getGeneralInfo: function(){
        return `${this.number}. ${this.topic} - Trending\n${this.tag}\n${this.descripcion}\n${this.tweets} Tweets`
    }
}

console.log('\nTrending Topic')
console.log(trendingTopic.getGeneralInfo())
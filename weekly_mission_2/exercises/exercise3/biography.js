export default class Biography{
    constructor(user, posts, information, friends, photos, pages){
        this.user = user
        this.posts = posts
        this.information = information
        this.friends = friends
        this.photos = photos
        this.pages = pages

    }
    getInformation(){
        return `${this.user.getGeneralInfo()}\nInformation\nPhone: ${this.information.phone}\nEmail: ${this.information.email}\nSchool: ${this.information.school}`
    }
    getFriends(){
        let friendList = `Friends: (${this.friends.length})\n`
        for (let i in this.friends){
            friendList = friendList + this.friends[i] + ' '
        }
        return friendList
    }
}
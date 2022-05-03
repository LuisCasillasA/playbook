export default class Hashtag{
    constructor(user, tag, datePublished, retweets, description){
        this.user = user
        this.tag = tag
        this.datePublished = new Date(datePublished)
        this.retweets = retweets
        this.description = description
    }
    getGeneralInfo(){
        return `@${this.user.username}\n${this.description} #${this.tag}\n${this.datePublished.toDateString()}`
    }
}
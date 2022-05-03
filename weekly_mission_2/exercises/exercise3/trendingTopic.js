export default class TrendingTopic{
    constructor(number, topic, tag, tweets, descripcion){
        this.number = number
        this.topic = topic
        this.tag = tag
        this.tweets = tweets
        this.descripcion = descripcion 
    }
    getGeneralInfo(){
        return `${this.number}. ${this.topic} - Trending\n${this.tag}\n${this.descripcion}\n${this.tweets} Tweets`
    }
}
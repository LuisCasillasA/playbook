export default class Comment{
    constructor(user, dateComment, reactions){
        this.user = user
        this.dateComment = dateComment
        this.reactions = reactions
    }
    getReactions(){
        return `Like: ${this.reactions.like} Love: ${this.reactions.love}`
    }
}
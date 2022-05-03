export default class Comment{
    constructor(user,comment, dateComment, reactions){
        this.user = user
        this.comment = comment
        this.dateComment = new Date(dateComment)
        this.reactions = reactions
    }
    getReactions(){
        return `Like: ${this.reactions.like} Love: ${this.reactions.love}`
    }
}
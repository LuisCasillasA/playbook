export default class Post{
    constructor(user, post, tag, photo, reactions, comments){
        this.user = user
        this.post = post
        this.datePost = new Date()
        this.tag = tag
        this.photo = photo
        this.reactions = reactions
        this.comments = comments
    }
    getPostInfo(){
        return `${this.user.name} ${this.user.lastName}\n${this.datePost.toDateString("en-US")}\n${this.post}\n${this.photo}`
    }
    getReactions(){
        return `Likes: ${this.reactions.like} love: ${this.reactions.love}`  
    }
    getComments(){
        for (let n in this.comments){
            let comment = this.comments[n]
            console.log(`\n${comment.user.name}\n${comment.comment}\n${comment.getReactions()}`)
        }
    }
    setComment(comment){
        this.comments.push(comment)
    }
}
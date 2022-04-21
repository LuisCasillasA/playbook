const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const user ={
    name: 'Luis',
    lastName: 'Casiilas',
    username: 'LuisCasillas',
    age: 25,
    profilePic: 'foto.png',
    birthDate: new Date(1996, 11, 04),
    work: 'LaunchX',
    from: 'Zacatecas',
    maritalStatus: 'Solo solín solito',
    joinedDate: new Date(2013, 08, 03),

    getGeneralInfo: function(){
        return `${this.name} ${this.lastName}\n\nDetails\nWork At: ${this.work}\nFrom: ${this.from}\nMarital status: ${this.maritalStatus}\nBirthday: ${this.birthDate.toDateString("en-US")}\nJoined in ${this.joinedDate.toLocaleDateString("en-US", { month: "long" })} ${this.joinedDate.getFullYear()}`
    }
}

console.log(user.getGeneralInfo())

const post ={
    user: user,
    datePost: new Date(),
    post: 'Este es un nuevo post',
    tag: ['posteando'],
    photo: 'photo.png',
    reactions: {
        like: 10,
        love: 100,
        care: 0,
        fun: 10,
        amaze:0,
        sad: 0,
        angry: 8
    },
    comments: [
        {
            user: user,
            comment: 'Este es un comentario',
            dateComment: new Date(),
            reactions:{
                like: 2,
                love: 1
            },
            getReactions: function(){
                return `Like: ${this.reactions.like} Love: ${this.reactions.love}`
            }
        },
        {
            user: user,
            comment: 'Este es otro comentario',
            dateComment: new Date(),
            reactions:{
                like: 5,
                fun: 9
            },
            getReactions: function(){
                return `Like: ${this.reactions.like} Fun: ${this.reactions.fun}`
            }
        }
    ],
    getPostInfo: function(){
        return `${this.user.name} ${this.user.lastName}\n${this.datePost.toDateString("en-US")}\n${this.post}\n${this.photo}`
    },
    getReactions: function(){
        return `Likes: ${this.reactions.like} love: ${this.reactions.love}`  
    },
    getComments: function(){
        for (n in this.comments){
            let comment = this.comments[n]
            console.log(`\n${comment.user.name}\n${comment.comment}\n${comment.getReactions()}`)
        }
    }
}
console.log("\nPost")
console.log(post.getPostInfo())
console.log(post.getReactions())
post.getComments()
//Instance class User
import User from './user.js'

const user = new User('Luis', 'Casillas', 25, 'Photo.jpg', '1996, 12, 04')

console.log(user.getGeneralInfo())

//Instance User Facebook
import UserFacebook from './userFacebook.js'

const userFacebook = new UserFacebook('Luis', 'Casillas', 25, 'Photo.jpg', '1996, 12, 04', 'Launch X', 'Zacatecas', 'Single',  '2013, 09, 03')

console.log(userFacebook.getGeneralInfo())

//Instance Post and create comments
import Post from './post.js'
const reactionsPost = {
    like: 10,
    love: 100,
    care: 0,
    fun: 10,
    amaze:0,
    sad: 0,
    angry: 8
}

const post = new Post(userFacebook, 'This is a new post', ['Tags', 'MasTags'], 'meme.jpg', reactionsPost, [])

import Comment from './comment.js'

const reactions1 = {
    like: 2,
    love: 1
}
const comment = new Comment(user, 'This is a comment', '2022, 05, 12', reactions1)

post.setComment(comment)

console.log("\nPost")
console.log(post.getPostInfo())
console.log(post.getReactions())
post.getComments()

//Instance Biography class
import Biography from './biography.js'

const biography = new Biography(userFacebook, [post], {phone: 1234567890, school: 'UAZ', email: 'launchx10359@innovaccion.mx'}, ['Username1', 'Username2'], ['meme.jpg', 'foto2.jpg'], ['Juliana postres', 'Los memes'])

console.log('\nBiography')
console.log(biography.getInformation())
console.log('\n')
console.log(biography.getFriends())
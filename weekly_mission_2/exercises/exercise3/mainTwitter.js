//Instance Use Twitter class
import UserTwitter from "./userTwitter.js"

const userTwitter = new UserTwitter('Luis', 'Casillas', 25, 'photo.png', '1996, 12, 04', 10, 12, 'my hobbies', 'LuisCasillas')

console.log('User Information')
console.log(userTwitter.getGeneralInfo())

//Instance Trending Topic class
import TrendingTopic from "./trendingTopic.js"

const trendingTopic = new TrendingTopic(1, 'Movies', 'Spiderman', 12000, 'Best movie')

console.log('\nTrending Topic')
console.log(trendingTopic.getGeneralInfo())
// Example 4: Methods on objects
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // Is a function that will execute any object instantiated of this class
      return `Repository ${this.name} has ${this.stars} stars`
    }
  }
  console.log("Example 4: Methods on objects")
  const myRepo = new Repository("LaunchX", "luiscasillas", "js", 100)
  console.log(myRepo.getInfo())
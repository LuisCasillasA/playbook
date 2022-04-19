// Example 5: attributes with default values
class PullRequest {
    constructor(repo, title, lines_changed){
      this.repo = repo
      this.title = title
      this.lines_changed = lines_changed
      this.status = "OPEN"
      this.dateCreated = new Date() // Actual date
      }
  
    getInfo(){
      return `${this.title} in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
  }
  
  console.log("Ejemplo 5: Atributos con valores por default")
  const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
  console.log(myPR1.getInfo())
  
  // Other object from class
  const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
  console.log(myPR2.getInfo())
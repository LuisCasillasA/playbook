// Example 7: Setters to modify object attributes
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
  
    get getStudents(){
     return this.students
    }
  
    get getLives(){
     return this.lives
    }
  
    set setStudents(students){
      this.students = students
    }
  
    set setLives(lives){
      this.lives = lives
    }
}
  
console.log("Example 7: Setters to modify object attributes.")
const missionCommanderNode = new MissionCommander("Luis", "NodeJS")

console.log(missionCommanderNode.getStudents) // 0 by default
console.log(missionCommanderNode.getLives)// 0 by default

// Update object attributes with Setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3
console.log("Example 7: attributes modified")
console.log(missionCommanderNode.getStudents) // 0 by default
console.log(missionCommanderNode.getLives)// 0 by default  
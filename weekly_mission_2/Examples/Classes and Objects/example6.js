// Example 6 Getters to access object attributes

class Ajolonauta {
    constructor(name, age, stack){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = 0
     this.exercises_todo = 99
    }
  
    // We can access class atributes
    get getExercisesCompleted() {
          return this.exercises_completed
    }
  }
  
  console.log("Example 6: Getters to access object attributes")
  const woopa = new Ajolonauta("Woopa", 1, [])
  console.log(woopa.getExercisesCompleted)
  
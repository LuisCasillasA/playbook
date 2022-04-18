// Example 3: instantiate an object with attributes
class Student {
    // The constructor allows us to instantiate an object and assign attributes, this help us
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }
  
  // Create an object from class Student
  const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"])
  console.log("Example 3: instantiate an object with attributes")
  console.log(carloStudent)
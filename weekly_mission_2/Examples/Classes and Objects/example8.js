// Example 8: Static Methods help us to write methods in a class without instantiating an object.
class Toolbox {
    static getMostUsefulTools(){
      return ["Command line", "git", "Text Editor"]
    }
  }
  
  console.log("Ejemplo 8: Métodos static")
  // We can call the static method directly with the class name.
  console.log(Toolbox.getMostUsefulTools())
  // Si intentamos instanciar un objeto, no podremos llamar este método static
  //const toolbox = new Toolbox()
  //console.log(toolbox.getMostUsefulTools()) // is not a function
  
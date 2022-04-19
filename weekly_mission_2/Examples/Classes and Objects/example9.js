// Example  9: Inheritance between two classes
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Example  9: Inheritance between two classes")
  const luisDev = new Developer("Luis", "js", ["elixir", "groovy", "lisp"])
  console.log(luisDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const luisLaunchXDev = new LaunchXStudent("Luis", "js", ["elixir", "groovy", "lisp"])
  console.log(luisLaunchXDev)
  console.log(luisLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
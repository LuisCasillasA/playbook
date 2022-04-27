const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

//print name
explorers.forEach(n => {
    console.log(n.name)    
});

//print stack
explorers.forEach(explorer => {
    console.log(explorer.name)
    explorer.stack.forEach(stack => {
        console.log(stack)
    });
});

//create list stacks
const stacks = explorers.map((explorer) => {return explorer.stack} )
console.log(stacks)

//Explorer list with stack "JS"
const explorerJS = explorers.filter((jsStack) => jsStack.stack.includes('js'))

console.log(explorerJS)

//Look for the first explorer that is from CDMX
const firstExplorerCDMX = explorers.find((explorer) => explorer.city == 'CDMX')
console.log(`Primer explorer de la CDMX: ${firstExplorerCDMX.name}`)

//Sum all excercises completed
const sumExcercises = explorers.reduce((sum, explorer) => sum + explorer.exercises_completed, 0)
console.log(`The sum is: ${sumExcercises}`)
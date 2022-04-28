//Instance class Repo
import Repo from './repo.js'

const repository = new Repo('MyRepo', 'LuisCasillasA', 'JavaScript', 90, 200, 2, 3, 2)

console.log("Nombre del repo:" + repository.getGeneralInfo())
console.log("Issues totales: " + repository.getTotalIssues())

//Instance class issue
import Issue from './issue.js'

const issue = new Issue('Exercise 1 week2', 'Playbook', 'Finish', 215, ['week2', 'NodeJS', 'exercise'], '@LuisCasillasA', '2022-04-13', '2022, 04, 13')

console.log('\nTitle and Author: ' + issue.getTitleAndAuthor())
console.log('General information: ' + issue.getGeneralInfo())
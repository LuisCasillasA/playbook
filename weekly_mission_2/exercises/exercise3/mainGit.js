//Instance class Repo
import Repo from './repo.js'

const repository = new Repo('MyRepo', 'LuisCasillasA', 'JavaScript', 90, 200, 2, 3, 2)

console.log("Nombre del repo:" + repository.getGeneralInfo())
console.log("Issues totales: " + repository.getTotalIssues())
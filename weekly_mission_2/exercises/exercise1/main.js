const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
    return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
    return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: "Excercise 1-week 2",
    repositoryNameAssociated: "Playbook",
    status: "Finish",
    numberOfComents: 215,
    labels: ["Week2", "NodeJS", "excercise"],
    author: "@LuisCasillasA",
    dateCreate: new Date(2022, 04, 13),
    lastUpdate: new Date(2022, 04, 13),
    getTitleAndAuthor: function(){
        return `${this.title} ${this.author}`
    },
    getGeneralInfo: function(){
        return `${this.title} create by ${this.author}
        ${this.dateCreate}`
    }
}

console.log('\nTitle and Author: ' + issue.getTitleAndAuthor())
console.log('General information: ' + issue.getGeneralInfo())

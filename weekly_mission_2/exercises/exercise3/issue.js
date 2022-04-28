export default class Issue{
    constructor(title, repositoryNameAssociated, status, numberOfComents, labels, author, dateCreate, lastUpdate){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComents = numberOfComents
        this.labels = labels
        this.author = author
        this.dateCreate = dateCreate
        this.lastUpdate = lastUpdate
    }
    getTitleAndAuthor(){
        return `${this.title} ${this.author}`
    }
    getGeneralInfo(){
        return `${this.title} create by ${this.author} (${this.dateCreate})`
    }
}
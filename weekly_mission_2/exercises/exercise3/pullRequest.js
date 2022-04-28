export default class PullRequest{
    constructor(title, author, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return this.status
    }
    getTitleAndAuthor(){
        return this.title + ' by @' + this.author
    }
}
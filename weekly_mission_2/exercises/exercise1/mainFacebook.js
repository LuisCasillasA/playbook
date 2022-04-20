const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const user ={
    name: 'Luis',
    lastName: 'Casiilas',
    username: 'LuisCasillas',
    age: 25,
    profilePic: 'foto.png',
    birthDate: new Date(1996, 11, 04),
    work: 'LaunchX',
    from: 'Zacatecas',
    maritalStatus: 'Solo solin solito',
    joinedDate: new Date(2013, 08, 03),

    getGeneralInfo: function(){
        return `${this.name} ${this.lastName}\n\nDetails\nWork At: ${this.work}\nFrom: ${this.from}\nMarital status: ${this.maritalStatus}\nBirthday: ${this.birthDate.toDateString("en-US")}\nJoined in ${this.joinedDate.toLocaleDateString("en-US", { month: "long" })} ${this.joinedDate.getFullYear()}`
    }
}

console.log(user.getGeneralInfo())
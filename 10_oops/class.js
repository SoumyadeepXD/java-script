class User{
    constructor(username, email, pass){
        this.username = username;
        this.email= email;
        this.password = pass;

    }

    printMe(){
            return `username: ${this.username.toUppercase()}`
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}


const me = new User("soumyadeep", "soumya@dolui.com","134346455222234")



console.log(me.encryptPassword())
const user= {
    username: 'soumyadeep',
    pass: 'amijanina',
    login: 8,

    userdetails:function(){
        // console.log(this)
    }
}

// console.log(user.pass)
// console.log(user.userdetails())

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("soumyadeep", 12, true)
const userTwo = new User("xdxdxd", 11, false)
console.log(userOne.constructor());
//console.log(userTwo);
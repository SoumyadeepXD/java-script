const user ={
    username: "soumyadeep",
    age:18,

    WelcomeMessage: function(){
        console.log(`${this.username} , Its your personal assistant`);
        // console.log(this);
    }

}
// user.WelcomeMessage()
// user.username= "Bittu"
// user.WelcomeMessage()

// console.log(this)

// function god(){
//     console.log(this)
// }
// god()

const god = ()=>{
    let username = "bittu"
    console.log(this.username);
}


// god()

const addition=(num1,num2)=> {
    return num1 + num2
}
console.log(addition(68, 1))

// implicit 
const add=(num1, num2)=>num1 + num2

console.log(add(2, 3))

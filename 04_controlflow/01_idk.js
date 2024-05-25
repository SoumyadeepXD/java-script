//we can use various operators to check if it is true or not
/*
< checks if its less or not
>checks if its greater than or not
<= checks either it less or equal
>= checks either it is greater or equal
== checks if both values are equal or not
===(strict equal) it checks if both the values are same as well as the data types of those values.


*/
// let temp = 32
// if(temp ==42){
//     console.log("temperature is plesent 41 degree celsius")
    
// } else{
//     console.log(`temperature is greater than ${temp}`)
// }
// const score = 32
// if(score < 40){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`)

// *********************SHORT HAND NOTATION***************************
let balance = 500
if (balance ==500) console.log("test");
if (balance ==500) console.log("test"),console.log("test2"); // this is a bad appoach 

// i know about if else statement
//{I will write the code later}

// and or statement

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard==true){
    console.log("allow to buy courses")
}

const loginViaGmail = true
const LoginVisEmail = true
if(LoginVisEmail||loginViaGmail){
    console.log(`user is logged in`)
}





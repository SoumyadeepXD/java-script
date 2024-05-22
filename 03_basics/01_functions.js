//  function myname(){
//     console.log("S")
//     console.log("o")
//     console.log("u")
//     console.log("m")
//     console.log("y")
//     console.log("a")
//     console.log("d")
//     console.log("e")
//     console.log("e")
//     console.log("p")
//  }
//  //myname()

//  function addition(number1, number2){

//     let result = number1 + number2
//     return result
    
// }

// const result = addition(3, 5)

// //console.log("Result: ", result);

// function logInmessage(username){
//    return `${username} just logged in `
// }
// console.log(logInmessage("Soumyadeep"))


function calculateCartPrice(...num1){
   console.log(num1)
}
console.log("total cart ammount:", calculateCartPrice(69, 70, 80, 90))

const arr = [200, 400, 500, 600 ,699]
function returnSecondValue(getArr){
   return getArr[2]
}
console.log(returnSecondValue(arr));
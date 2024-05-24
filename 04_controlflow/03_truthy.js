const userEmail = []

if(userEmail){
    console.log("got user Email")
}else{console.log("user dont have Email")}

//falsy values [false, 0 , -0, "", NaN,bigint]
// Thuthy value ["0", 'false', " ", [], {}]

if (userEmail.length===0){
    console.log("array is empty")
}
const Obj={}
if (Object.keys(Obj).length=== 0) {
    console.log("object is enpty")
}


//Nulish coalescing Operator(??)
let num1;
// num1 = 3??5
num1 = null ??5
console.log(num1)

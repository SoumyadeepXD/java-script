// const tinderuser = new Object()
const tinderuser = {}

tinderuser.Id ="69169"
tinderuser.name = "Soumyadeep"
tinderuser.email = "soumyadeep.google.com"
tinderuser.isLoggedin = false

//console.log(tinderuser)
const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3)



console.log(tinderuser.hasOwnProperty("isLoggedin"))



const course = {
    coursename: "Mathematics",
    price: "$6.9",
    courseinstructor: "soumyadeep"
}

const {coursename} = course
console.log(coursename)
//console.log(oggg)


const mySym = Symbol("key1")


const jsuser = {name: "Soumyadeep",
                age: 18,
                [mySym]: "mykey1",
                location: "Kolkata",
                email: "Soumyadeep@google.com",
                isloggedin: false,
}
console.log(jsuser.name)
console.log(jsuser["email"])
console.log(jsuser[mySym])
console.log(typeof mySym)

jsuser.greeting = function(){
    console.log("hello Js user")
}
console.log(jsuser.greeting())
jsuser.greeting2 = function(){
    console.log(`hello Js user, ${this.name}`)
}
console.log(jsuser.greeting2())



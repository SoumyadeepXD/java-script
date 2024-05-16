//dates
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate)

let otherDate = new Date(2023,0,12,19,24)
console.log(otherDate.toLocaleString())
let anotherDate = new Date("2024-02-31")
console.log(anotherDate.toLocaleDateString())
let timeStamp = Date.now
console.log(timeStamp())
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))
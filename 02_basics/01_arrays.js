//array
const myArray = new Array(1,2,3,4,5)
console.log(myArray[2])

myArray.push(69)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)


console.log(myArray.includes(69))
console.log(myArray.indexOf(2))

const newArr = myArray.join()
console.log(myArray)
console.log(newArr)
console.log(typeof newArr)

//slics and splice

console.log("A ", myArray)
const myn = myArray.slice(1,3)

console.log (myn)
console.log("B ", myArray)

const myn1 = myArray.splice(1,3)
console.log("C", myArray)
console.log(myn1)
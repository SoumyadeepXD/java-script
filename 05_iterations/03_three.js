// for of 
//["","",""]  array of strings
//[{},{},{}]  array of objects

// const arr=[1,2,3,4,5,6]

// for (const i of arr) {
//     console.log(i)
// }
const greet= "Welcome"
for (const i of greet) {
    console.log(i)
}

//maps
const nMap= new Map()

nMap.set('b',99);
nMap.set('a',69);
nMap.set('c', "chai")

console.log(nMap.get('a'));
console.log(nMap.get('b'));
console.log(nMap.get('c'));


//console.log(nMap)

for (const [key, value] of nMap) {
console.log(key, "=" , value)
}



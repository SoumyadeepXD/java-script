const marvel=["spiderman","thor","hulk","captain","vision"]
const dc =["superman","batman","flash"]

//marvel.push(dc)
console.log(marvel)
const allHeroes = marvel.concat(dc)
console.log(allHeroes)

const allHeros = [...marvel, ...dc]
console.log(allHeros)

const anArr = [1,2,3,[4,5,6,],[7,8,[9]]]
console.log("A",anArr)
const flat = anArr.flat(Infinity)
console.log(flat) 
console.log(Array.isArray("Soumyadeep"))
console.log(Array.from("Soumyadeep"))
console.log(Array.from({name: "Soumyadeep"}))//interesting questions for interview;
let age1 = 12
let age2 = 13
let age3 = 14
console.log(Array.of(age1,age2,age3))

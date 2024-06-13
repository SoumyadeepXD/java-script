function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createuser(username, score){
    this.username=username
    this.score=score
}

createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printme = function(){
    console.log(`score: ${this.score}`)
}

const chai =new createuser("Soumyadeep", 69)
const ami =new createuser("bittu", 90)

chai.printme()
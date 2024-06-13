// let Myname = "soumyadeep     "
// console.log(Myname.trim().length)


let myheros=['spiderman',"hawkeye"]

let heropower={
    spiderman: "spidersence",
    hawkeye: "bow and arrow",
    getpower:function(){
        console.log(`spiderman has ${this.spiderman}`)
    }
}

Object.prototype.soumya=function () {
    console.log("amar mathay kichu dhukche na")    
}
heropower.soumya()
myheros.soumya()
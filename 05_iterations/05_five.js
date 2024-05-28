const prr=["js","rb","cpp","py","java"]

prr.forEach( function (item) {
    console.log(item);
})

function print(item){
    console.log(item)
}

prr.forEach(print)

prr.forEach((item, index, arr)=>{
    console.log(item, index,arr)
})

const myCD =[
    {
        languagename: "javascript",
        languageFname:"js"
    },
    {
        languagename: "c++",
        languageFname:"cpp"
    },
    {
        languagename: "python",
        languageFname:"py"
    }
]

myCD.forEach((item)=>{
    console.log(item.languagename)
})
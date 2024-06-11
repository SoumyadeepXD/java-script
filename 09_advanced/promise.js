const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 100)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("wrok 2")
        resolve()
    },100)
}).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "soumyadeep", mail:"sd@sd.com"});
    },100)
})
promise3.then(function(user){
    console.log(user);
})
const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"soumyadeep", pass: "ami janina"})
        }else{
            reject("Something went wrong")
        }
    }, 100);
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("finally ")
})



const promise5=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"soumyadeep", pass: "amisottijanina"})
        }else{
            reject("Something went wrong")
        }
    }, 100)
})

async function consumed(){
    try {
        const responce = await promise5;
    console.log(responce);
    } catch (error) {
     console.log(error);   
    }
}
consumed()

// async function alluser(){
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = responce.json()
//     console.log(data)
// } 

// alluser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((Response)=>{
    return Response.json()
}).then(
    (data)=>{
        console.log(data)
    }
)
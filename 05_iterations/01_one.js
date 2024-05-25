//Lor Loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if ((element/2) % 1 ) {
//         console.log(`${element}, This is a Odds number`)
//     }else{console.log(`${element}, this is a Even Number`)}
//     console.log(element)
    
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer Loop Value: ${i}`)
//     for (let j = 0; j <=5; j++) {
//         //console.log(`This is inner loop ${j}`);
//         console.log(i + '*' + j + " = " + i*j)
//     }
    
// }

// const Arr = [1,2,3,4,5,6,7,8,9]
// for (let i = 0; i < Arr.length; i++) {
//     const element = Arr[i];
//     console.log(element)
    
// }

// for (let i = 0; i <= 20 ; i++) {
//     console.log(`value of i is ${i}`);
//     if (i===10) {
//         console.log("detected 10");
//         break
        
//     }
// }
for (let i = 0; i <= 20 ; i++) {
    console.log(`value of i is ${i}`);
    if (i==10) {
        console.log("detected 10");
        continue
        
    }
}
// function even(n) {
//     return n%2==0;
// }

console.log(evenNum(num));
let num = [1,2,3,4,5,6,7,8,9,10]
let num1 = 10
function evenNum(n){
    const newn = [];
    for(let i=0; i<=n.length; i++){
       if(n[i]%2==0){
        newn.push(n[i])
       }
    }
    return newn;
}

for (let i=0; i<=num1; i++){
    if(i%2==0) console.log(i);
    
}

num.forEach((numbers)=>{
    if(numbers%2==0){
        console.log(numbers);
        
    }
})



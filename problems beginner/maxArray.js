function macArray(arr){
    
    let max=arr[0];
     for(let i=0; i<=arr.length; i++){
   
        if(max < arr[i]){
            max = arr[i]
        }
       
}
     return max;

     
}

let arr1 =[1,45,67,45,23,67,89,90,55,66];
let arr2 = [-5, 6,7,-9,-66,45,34,56];
let arr3  = [0.45,56,34,-43,0.5666]

console.log(macArray(arr1));
console.log(macArray(arr2));
console.log(macArray(arr3));




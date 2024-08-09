function sortArray(arr){
    return arr.sort((a,b) => a-b)
}

let arr1 =[1,45,67,45,23,67,89,90,55,66];
let arr2 = [-5, 6,7,-9,-66,45,34,56];
let arr3  = [0.45,56,34,-43,0.5666]

console.log(sortArray(arr1));
console.log(sortArray(arr2));
console.log(sortArray(arr3));

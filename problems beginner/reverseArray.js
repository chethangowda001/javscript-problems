function reverse(arr){
    return arr.toReversed();
}

const arr = [1,2,3,4,5,6,7];

console.log(reverse(arr));


function loopReverse(arr){
let reversedArr = [];
for(let i=arr.length-1; i>=0; i--  ){
    reversedArr.push(arr[i])
}
return reversedArr
}

console.log(loopReverse(arr));

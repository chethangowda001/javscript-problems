// function vowel(str){
//     if(str.includes(a,e,i,o,u)){
//         return count++;
//     }
// }
// let str = "Create a functions thatll return an integer of the number of vowels found in a string";
// console.log(vowel(str));

function vowel(str){
    const srt1 = str.toLowerCase().split("");
    let count = 0;
    let charCount=0;
    for(let char of srt1){
         if(char==="a" || char==="e" || char==="i" || char=== "o" || char === "u" ){
            count++
         }
         if (char){
            charCount++;
         }
    }
    return charCount + " " +count;
}

let str = "Create a functions thatll return an integer of the number of vowels found in a string";
console.log(vowel(str));


// let n = 10;
// for (let i=1; i<=10;i++){
//     let tables = n*i                     // 8 mins to solve 
//     console.log(n+"x"+i+"="+tables);
    
// } 


function tablesofmultiple(n){
    for(let i=0;i<=n; i++){
        let row = ""
         for(let j =0; j<=10;j++){
             row += (i*j).toString().padStart(6,` `);
         }
         console.log(row);
     } 
}
tablesofmultiple(12);
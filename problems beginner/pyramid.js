function pyramid(n){
    for(let i=n; i>=1; i--){
        let row=" ".repeat(n-i);
        for(let j=1; j<=2*i-1; j++){
            row +="*";
        }
        console.log(row);
        
    }
    }
    
    
    pyramid(5)
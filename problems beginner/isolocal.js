function isoslasTri(n){
    for(let i=5; i<=n; i--){
        let row =""
        for(let j=0; j<=i; j++){
            let star = "*"
            row+= star
        }
        console.log(row);
        
    }
}

isoslasTri(5)
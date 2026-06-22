let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j=1; j<=n-i; j++) {
        row += " ";
    }
    for(let k=1;k<=i;k++){
        if(k===1 || k===i){
            row+="* ";
        }
        else{
            row+="  ";
        }
    }    
    
    console.log(row);
}
//diamond
for(let i=n-1;i>=1;i--){
    let row="";
    for(let j=1;j<=n-i;j++){
        row+=" ";
    }
    for(let k=1;k<=i;k++){
        if(k===1 || k===i){
            row+="* ";
        }
        else{
            row+="  ";
        }
    } 
    console.log(row);
}

let n=5;
let ch=65;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=n-i;j++){
        row+=" ";
    }
    for(let k=1;k<=i;k++){
        row+=String.fromCharCode(ch)+" ";
        ch++;
    }
    console.log(row);
}

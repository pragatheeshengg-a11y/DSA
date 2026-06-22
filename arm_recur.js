function sumcube(n){
    if(n===0) return 0;
    let digit=n%10;
    return digit**3+sumcube(Math.floor(n/10));
}
function check(num,end){
    if(num>end) return;
    if(sumcube(num)==num){
        console.log(num);
    }
    return check(num+1,end);
}
console.log(check(1,501));
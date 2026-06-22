function sum_of(num){
    if(num==0){
        return 0;
    }
    else{
        return num%10 +sum_of(Math.floor(num/10))
    }
}
console.log(sum_of(128));
function rev_num(num,rev=0){
    if(num==0){
        return rev;
    }
    else{
        digit=num%10;
        rev=rev*10+digit;
        return rev_num(Math.floor(num/10),rev);
    }   
}
console.log(rev_num(12345));
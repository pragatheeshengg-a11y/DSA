let arr=[1,4,3,6,2,8,10];
l=0;
sl=0;
for(let num of arr){
    if(num>l){    
        sl=l;
        l=num;
    }
    else{
        sl=num;
    }
}
console.log(sl);
for(let num=1;num<501;num++){
    let sum_of_cubes=0;
    let temp=num;
    while(temp>0){
        digit=temp%10;
        sum_of_cubes+=digit**3;
        temp=Math.floor(temp/10);
    }
    if(sum_of_cubes==num){
        console.log(num)
    }
}
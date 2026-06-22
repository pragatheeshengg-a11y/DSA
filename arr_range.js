function arr_range(arr,tar){
    let res=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]===tar){
                res.push(arr[i],arr[j]);
            }
        }
    }
    return res;
}
let a1=[1,3,2,7,5,0];
let tar=5;
console.log(arr_range(a1,tar));

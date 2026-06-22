function arr_sum(arr1,arr2){
    let res=[];
    let maxlen=Math.max(arr1.length,arr2.length);
    for(let i=0;i<maxlen;i++){
        let val1=arr1[i] || 0;
        let val2=arr2[i] || 0;
        adds=val1+val2;
        res.push(adds);
    }
    return res;
}
let a1=[1,2,3,4]
let a2=[5,6,7,8,9]
console.log(arr_sum(a1,a2));
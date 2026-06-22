function arrtarget(arr,tar){
    let map={};
    let res=[];
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        let diff=tar-num;
        if(map[diff]!== undefined){
            res.push([diff,num]);
        }
        map[num]=i;
    }
    return res;
}
let arr=[1,2,0,3,1];
console.log(arrtarget(arr,3));
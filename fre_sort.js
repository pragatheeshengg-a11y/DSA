function fre(arr){
    let fre={};
    for(let num of arr){
        fre[num]=(fre[num] ||0 )+1;
    }
    console.log(fre);
    arr.sort((a,b)=>{
        if(fre[a]!==fre[b]){
            return fre[a]-fre[b];
        }
        return b-a;
    });
    return arr;
}
let arr=[1,3,2,3,2]
console.log(fre(arr));
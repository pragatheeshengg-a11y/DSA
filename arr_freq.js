function arr_freq(arr){
    let feq={};
    for(let val of arr){
        feq[val]=(feq[val] || 0)+1;
    }
    return feq
}
let arr=[1,2,3,4,3,3,2]
console.log(arr_freq(arr));
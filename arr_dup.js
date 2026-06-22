function arr_sort(arr){
    let n =arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];

            }
        }
    }
    let res=[];
    res.push(arr[0]);
    for (let i=1;i<n;i++){
        if(arr[i]!==arr[i-1]){
            res.push(arr[i]);
        }
    }
    return res;
}
let arrays=[9,5,3,7,2,9,3,7];
console.log(arr_sort(arrays));


//use map for simpler way
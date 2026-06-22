function arr_sort(arr){
    let n =arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
let arrays=[9,5,3,7,2];
console.log(arr_sort(arrays));
function sub_arrsum(arr){
    let max_arr=arr[0];
    let cur_arr=arr[0];
    for(let i=1;i<arr.length;i++){
        cur_arr=Math.max(arr[i],cur_arr+arr[i]);
        max_arr=Math.max(cur_arr,max_arr);
    }
    return max_arr;
}
let nums=[1,3,5,3,2,0];
console.log(sub_arrsum(nums));
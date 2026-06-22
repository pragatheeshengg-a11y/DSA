function binary_search(arr,tar,left,right){
    while(left<=right){
        let mid=Math.floor(left+right)/2;
        if(arr[mid]===tar){
            return mid;
        }
        else if(arr[mid]<tar){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return -1;
}
let arr=[2,4,6,8,9,10,11];
console.log(binary_search(arr,9,0,arr.length-1));
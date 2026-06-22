function arr_reverse(arr){
    left=0;
    right=arr.length-1;
    while(left<right){ //here the index only compared not values after that only swapping values done here
        temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    return arr;
}
let num=[1,9,3,6,5,4,7];
console.log(arr_reverse(num));
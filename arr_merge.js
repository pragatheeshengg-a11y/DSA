function mergeAndSort(arr1, arr2){
    let res = [];

    // Step 1: add all elements
    for(let i = 0; i < arr1.length; i++){
        res.push(arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++){
        res.push(arr2[i]);
    }

    // Step 2: sort (Bubble Sort)
    for(let i = 0; i < res.length; i++){
        for(let j = 0; j < res.length - i - 1; j++){
            if(res[j] > res[j+1]){
                [res[j],res[j+1]]=[res[j+1],res[j]];         
            }
        }
    }
    return res;
}
let a1 = [1,2,3,4,5];
let a2 = [2,3,1];
console.log(mergeAndSort(a1, a2));
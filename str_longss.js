function longest_string(str){
    let seen =new Set();
    let left=0;
    let max=0;
    for(let right=0;right<str.length;right++){
        while(seen.has(str[right])){
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right]);
        max=Math.max(max,right-left+1);
        //console.log(seen);
    }
    return max;

}
console.log(longest_string("abcabcbb"));
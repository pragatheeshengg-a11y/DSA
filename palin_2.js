function ispalin(str){
    return str===str.split('').reverse().join("");
}
function subpalin(str){
    let res=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+2;j<=str.length;j++){
            let sub=str.slice(i,j);
            if(ispalin(sub)){
                res.push(sub);
            }
        }
    }
    return res;
}
console.log(subpalin("abaab"));

/*function subPalin(str) {
    let res = [];

    function expand(left, right) {
        while (
            left >= 0 &&
            right < str.length &&
            str[left] === str[right]
        ) {
            if (right - left + 1 >= 2) {
                res.push(str.slice(left, right + 1));
            }

            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expand(i, i);       // Odd-length palindrome
        expand(i, i + 1);   // Even-length palindrome
    }

    return res;
}

console.log(subPalin("abaab")); */
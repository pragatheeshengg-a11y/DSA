function ispalin(str){
    if(str.length<=1) return true;
    if(str[0]!==str[str.length-1]){
        return false;
    }
    let newstr=str.slice(1,-1);
    return ispalin(newstr);
}
console.log(ispalin("rccar"));
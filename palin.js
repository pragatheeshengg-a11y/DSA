function is_palin(str){
    let rev="";
    for(let ch of str){
        rev=ch+rev;
    }
    if(str==rev){
        console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }
    return rev;
}
let s="madam";
console.log(is_palin(s));
function vowels(str){
    if(str.length===0){
        return "";
    }
    let firstchar=str[0];
    let rest=str.slice(1);
    if("aeiouAEIOU".includes(firstchar)){
        return vowels(rest);
    }
    else{
        return firstchar + vowels(rest);
    }
}
console.log(vowels("praga"));
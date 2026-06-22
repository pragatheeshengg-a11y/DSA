let str="ppraga";
let count={}; //this part is hash map 
for (let ch of str){
    count[ch]=(count[ch]||0)+1;
}
for(let ch of str){
    if(count[ch]==1){
        console.log("first non repeating char",ch);
        break;
    }
    else{
        console.log("no repeating char");
    }
}
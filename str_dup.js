let str="programming";
let seen=new Set();
let res="";
for(let ch of str){
    if(! seen.has(ch)){
        seen.add(ch);
        res+=ch;
        
    }
}
console.log(res);
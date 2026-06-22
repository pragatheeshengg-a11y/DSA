let obj1 = { a: 1, b: 4 };
let obj2 = { b: 3, c: 4 };

let merge={};
for(let key in obj1){
    merge[key]=obj1[key];
}
for(let key in obj2){
    merge[key]=(merge[key] || 0)+ obj2[key];
}
console.log(merge);


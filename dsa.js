function targetfind(arr,tar){
    let map=new Map();
    for(let val of arr){
        cal=tar-val;
        if(map.has(cal)){
            console.log([cal,val]);
        }
        map.set(val);
    }
    return null;
}
targetfind([2,3,4,0,5,1],5);
function movezero(num){
    let index = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] !== 0) {
            num[index] = num[i];
            index++;
        }
    }

    while (index < num.length) {
        num[index] = 0;
        index++;
    }
    return num; // ✅ important
}

let n = [0, 4, 5, 6, 0, 7, 0];
console.log(movezero(n));
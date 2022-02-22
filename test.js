function makeOne(num) {
    let array = new Array(30001).fill(0);
    
    let x = 2;
    while(x<num+1) {
        array[x] = array[x-1] + 1;

        if(x%2 == 0) {
            array[x] = Math.min(array[x], array[parseInt(x/2)]+1);
        }

        if(x%5 == 0) {
            array[x] = Math.min(array[x], array[parseInt(x/5)]+1);
        }

        if(x%3 == 0) {
            array[x] = Math.min(array[x], array[parseInt(x/3)]+1);
        }

        x = x+1;
    }

    console.log(array[num])
}

let array = new Array(num+1).fill(0);
let count = 0
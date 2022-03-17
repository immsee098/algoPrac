//작은 수부터 계산하고 올라가서 중간에 빠진 부분이 없음. 그래서 기존 어레이 재탕이 가능. 모든 ~입력값 이하 수에 대해 최단 구함

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
let count = 0;

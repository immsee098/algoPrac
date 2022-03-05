function tripGuild(n, array) {
    array.sort();

    let count = 0;

    // 1. 앞에서부터 
    while(array.length > 0) {
        let now = array[0];

        let flag = true;
        while(flag) {
            if(array[now-1] <= now) {
                array = array.slice(now, );
                count ++;
                flag = false;
                // console.log(array);
            } else {
                now = array[now-1];
            }

        }

        if(array.length <= now) {
            break;
        }
        
    }

    console.log(count)
}


function tripGuild2(params) {
    
}

'use strict';
function fib(n){
    if (n === 0){
        return 0;
    } else if (n === 1) {
        return 1;
    }
    
    //return (n-2) + (n - 1); //これだじゃめか。。。
    return fib(n-1) + fib(n-2);
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(i.toString() + ":" + fib(i));
}
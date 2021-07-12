// function fib(){
// let fibo = [0,1];
// for(let i=1; i<10; i++){
// fibo.push(fibo[i-1] + fibo[i]);
// }
// return fibo;
// }

// console.log(fib());

function fib(n, fibo){
    if(fibo[n])
    return fibo[n];
    if(n<2){
        fibo[n] = n;
         return fibo[n]};
    let x = fib(n-1, fibo) + fib(n-2, fibo);
    fibo.push(x);
    return x;
}
let fibo = []
fib(10,fibo);
console.log(fibo)
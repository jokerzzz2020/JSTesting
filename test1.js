console.log(fibonacci(5));//5

function fibonacci(index) {
    var i;
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= index; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }

    return fib[index];
}
function fibonacci() {
    let numA = 0;
    let numB = 1;

    return function fib() {
        const result = numA + numB;
        numA = numB;
        numB = result;
        return numA;
    };
};
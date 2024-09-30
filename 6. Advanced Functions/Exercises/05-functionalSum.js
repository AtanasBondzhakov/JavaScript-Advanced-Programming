function functionalSum(num) {
    let state = 0;
    state += num;

    function sum(num1) {
        state += num1
        return sum;
    };
    
    sum.toString = () => state;
    return sum;
};
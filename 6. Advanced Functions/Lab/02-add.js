function solution(val) {
    return function(num) {
        num += val;
        return num;
    }
}
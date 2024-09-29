function extractIncreasingSubsequenceFromArray(arr) {
    let biggestNum = arr[0];
    const result = [];

    arr.forEach(el => {
        if (el >= biggestNum) {
            biggestNum = el;
            result.push(el);
        }
    })
    return result;
}
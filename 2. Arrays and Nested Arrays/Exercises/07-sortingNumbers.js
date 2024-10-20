function sortingNumbers(arr) {
    const result = [];
    const sortedArr = arr.sort((a, b) => a - b);

    while (sortedArr.length > 0) {
        const first = sortedArr.shift();
        const last = sortedArr.pop();
        result.push(first, last);
    }

    return result;
}
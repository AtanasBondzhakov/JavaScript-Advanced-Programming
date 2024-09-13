function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    const result = arr.slice(middle);

    return result;
}
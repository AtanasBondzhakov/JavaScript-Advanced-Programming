function smallestTwoNumbers(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const result = sorted.slice(0, 2);
    console.log(result.join(' '));
}
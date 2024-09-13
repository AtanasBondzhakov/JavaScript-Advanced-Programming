function processOddPositions(arr) {
    const filtered = arr.filter((x, i) => i % 2 !== 0)
    const doubled = filtered.map(x => x * 2);
    const reversed = doubled.reverse();
    const joined = reversed.join(' ');

    return joined;

    // return arr.filter((x, i) => i % 2 !== 0)
    //     .map(x => x * 2)
    //     .reverse()
    //     .join(' ');
}
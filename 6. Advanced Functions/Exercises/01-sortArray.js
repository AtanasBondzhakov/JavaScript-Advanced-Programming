function sortArray(arr, order) {
    const sort = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return arr.sort(sort[order]);
};
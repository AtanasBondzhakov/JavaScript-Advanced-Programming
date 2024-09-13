function pieceOfPie(arr, first, last) {
    const startIndex = arr.indexOf(first);
    const endIndex = arr.indexOf(last);
    const result = arr.slice(startIndex, endIndex + 1);

    return result;
}
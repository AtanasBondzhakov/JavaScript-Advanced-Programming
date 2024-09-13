function biggestElement(arr) {
    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];

        for (let j = 0; j < row.length; j++) {
            let col = row[j];

            if (col > result) {
                result = col;
            }
        }
    }
    return result;
}
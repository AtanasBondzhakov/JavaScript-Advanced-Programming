function equalNeighbors(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];

        for (let j = 0; j < row.length; j++) {
            let col = row[j];

            if (i !== arr.length - 1) {
                if (col === arr[i + 1][j]) {
                    result++;
                }
            }
            if (col === row[j + 1]) {
                result++;
            }
        }
    }
    console.log(result);
}
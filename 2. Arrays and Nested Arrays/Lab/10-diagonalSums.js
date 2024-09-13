function diagonalSums(arr) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        mainDiagonalSum += row[i];
        secondaryDiagonalSum += row[row.length - 1 - i];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}
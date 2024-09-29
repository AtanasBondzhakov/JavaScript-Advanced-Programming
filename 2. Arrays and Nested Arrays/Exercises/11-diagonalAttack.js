function diagonalAttack(data) {
    let matrix = data.map(el => el.split(' ').map(Number));
    let length = matrix.length;

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][length - i - 1];
    }

    if (firstDiagonalSum === secondDiagonalSum) {

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {

                if (i !== j && i !== length - j - 1) {
                    matrix[i][j] = firstDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')))
}
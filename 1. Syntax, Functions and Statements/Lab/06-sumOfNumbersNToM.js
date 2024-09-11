function sumOfNumbersNToM(...numbers) {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
}
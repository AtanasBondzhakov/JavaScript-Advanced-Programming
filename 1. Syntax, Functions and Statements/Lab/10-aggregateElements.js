function aggregateElements(numArr) {
    const operations = {
        sumAll: (arr) => arr.reduce((acc, val) => acc + val, 0),
        sumInverse: (arr) => {
            let sum = 0;
            arr.forEach(el => sum += 1 / el);
            return sum;
        },
        concat: (arr) => {
            let result = '';
            arr.map(String)
                .forEach(el => result += el);
            return result;
        }
    }

    console.log(operations.sumAll(numArr));
    console.log(operations.sumInverse(numArr));
    console.log(operations.concat(numArr));
}
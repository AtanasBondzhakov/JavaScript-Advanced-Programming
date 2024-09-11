function squareOfStars(param) {
    if (typeof (param) != 'number') {
        printStars(5);
    } else {
        printStars(param);
    }

    function printStars(param) {
        for (let i = 0; i < param; i++) {
            console.log('* '.repeat(param).trim());
        }
    }
}
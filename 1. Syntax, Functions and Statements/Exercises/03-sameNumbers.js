function sameNumbers(num) {
    let sum = 0;
    let isSame = true;

    num = num.toString().split('');
    num.forEach(el => {
        sum += Number(el);
        if (el !== num[0]) {
            isSame = false;
        }
    })
    console.log(isSame);
    console.log(sum);
}
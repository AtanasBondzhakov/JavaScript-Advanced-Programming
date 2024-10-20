function cookingByNumbers(num, ...args) {
    const operations = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => num += 1,
        'bake': (num) => num * 3,
        'fillet': (num) => num * 0.8
    }

    args.forEach(x => {
        num = operations[x](num);
        console.log(num);
    })
}
function solution() {
    let result = '';

    return {
        append: (str) => result += str,
        removeStart: (num) => result = result.slice(num),
        removeEnd: (num) => result = result.slice(0, -num),
        print: () => console.log(result)
    };
};
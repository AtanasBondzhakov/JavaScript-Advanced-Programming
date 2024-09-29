function listOfNames(arr) {
    const sorted = arr.sort((a, b) => a.localeCompare(b));
    const result = [];

    sorted.forEach((el, i) => {
        console.log(`${i + 1}.${el}`);
    });
}
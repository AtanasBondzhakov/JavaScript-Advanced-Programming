function calorieObject(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i += 2) {
        const product = arr[i];
        const quantity = Number(arr[i + 1]);
        result[product] = quantity;
    }

    console.log(result);
}
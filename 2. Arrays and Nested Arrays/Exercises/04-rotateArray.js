function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}
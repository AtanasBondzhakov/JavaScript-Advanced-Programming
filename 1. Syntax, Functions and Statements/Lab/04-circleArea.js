function circleArea(arg) {
    let type = typeof arg;

    if (type !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
        return;
    }

    const radius = arg;
    const area = Math.PI * radius ** 2;

    console.log(area.toFixed(2));
}
function stringLength(...args) {
    let totalLength = 0;

    for (let arg of args) {
        totalLength += arg.length;
    }

    let avgLength = Math.floor(totalLength / args.length);

    console.log(totalLength);
    console.log(avgLength);
}
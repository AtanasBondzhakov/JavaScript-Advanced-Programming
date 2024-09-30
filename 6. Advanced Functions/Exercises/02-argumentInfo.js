function argumentInfo(...args) {
    const types = {};

    args.forEach(arg => {
        const type = typeof arg;
        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }
        types[type]++;
        console.log(`${type}: ${arg}`);
    });

   const sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
   sorted.forEach(([key, value]) => console.log(`${key} = ${value}`));
};
function listProcessor(arr) {
    let collection = [];

    const commands = {
        add: (str) => collection.push(str),
        remove: (str) => collection = collection.filter(x => x !== str),
        print: () => console.log(collection.join(','))
    };

    arr.forEach(el => {
        let [command, string] = el.split(' ');
        commands[command](string);
    });
};
function townPopulation(data) {
    const cityRecords = {};

    data.forEach(t => {
        const [ name, population ] = t.split(' <-> ');

        if (!cityRecords.hasOwnProperty(name)) {
            cityRecords[name] = 0;
        }
        cityRecords[name] += Number(population);
    })

    for (let city in cityRecords) {
        console.log(`${city} : ${cityRecords[city]}`);
    }
}
function lowestPricesInCities(data) {
    const result = {};

    for (let line of data) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price };
        }
        if (result[product].price > price) {
            result[product].town = town;
            result[product].price = price;
        }
    }

    for (let product in result) {
        console.log(`${product} -> ${result[product].price} (${result[product].town})`);
    }
}
function storeCatalogue(data) {
    const catalog = {};

    data.forEach(el => {
        let [product, price] = el.split(' : ');
        if (!catalog.hasOwnProperty(product)) {
            catalog[product] = price;
        }
    })

    const sortedCatalog = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));
    let leadLetter = '';

    for (let [product, price] of sortedCatalog) {
        if (product[0] !== leadLetter) {
            leadLetter = product[0];
            console.log(leadLetter);
        }
        console.log(`  ${product}: ${[price]}`);
    }
}
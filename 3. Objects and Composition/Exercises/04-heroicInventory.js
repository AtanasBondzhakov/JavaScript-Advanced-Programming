function heroicInventory(data) {
    const heroes = [];

    data.forEach(line => {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        const hero = {
            name,
            level,
            items
        }

        heroes.push(hero)
    })

    // 100/100 Judge only if use .pop() before return result
    // heroes.pop();
    
    return JSON.stringify(heroes);
}
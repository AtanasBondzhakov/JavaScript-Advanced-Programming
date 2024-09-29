function factory(library, orders) {
    const result = [];
    for (let order of orders) {
        const currentObj = Object.assign({}, order.template);
        
        for (let part of order.parts) {
            currentObj[part] = library[part];
        }
        result.push(currentObj);
    }
    return result;
}
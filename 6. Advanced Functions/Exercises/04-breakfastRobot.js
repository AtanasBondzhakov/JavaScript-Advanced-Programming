function breakfastRobot() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        protein: 0,
        fat: 0
    };

    const functions = {
        restock,
        prepare,
        report,
    };

    return manager;
    
    function manager(data) {
        let [command, param, quantity] = data.split(' ');
        quantity = Number(quantity);

        return functions[command](param, quantity);   
    };

    function restock(ingredient, qty) {
       storage[ingredient] += qty;
       return 'Success';
    };

    function prepare(currRecipe, qty) {
        let recipe = Object.entries(recipes[currRecipe]);
        
        recipe.forEach(el => el[1] *= qty);

        for (let [ingredient, qty] of recipe) {
            if (qty > storage[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
        };

        recipe.forEach(el => storage[el[0]] -= el[1]);
        return 'Success';
    };

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    };
};
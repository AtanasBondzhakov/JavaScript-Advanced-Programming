function autoEngineeringCompany(data) {
    const register = {};

    data.forEach(car => {
        const [brand, model, qty] = car.split(' | ');

        if (!register.hasOwnProperty(brand)) {
            register[brand] = {};
        }
        if (!register[brand].hasOwnProperty(model)) {
            register[brand][model] = 0;
        }
        register[brand][model] += Number(qty);
    });

    const entries = Object.entries(register);

    for (let [brand, models] of entries) {
        console.log(brand);
        const carsInfo = Object.entries(models);
        for (let [model, qty] of carsInfo) {
            console.log(`###${model} -> ${qty}`);
        }
    }
}
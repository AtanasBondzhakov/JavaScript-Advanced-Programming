function carFactory(order) {
    const newCar = {
        model: order.model,
        engine: null,
        carriage: null,
        wheels: null
    };

    const engines = {
        Small: { power: 90, volume: 1800 },
        Normal: { power: 120, volume: 2400 },
        Monster: { power: 200, volume: 3500 }
    }
    const carriages = {
        Hatchback: { type: 'hatchback', color: order.color },
        Coupe: { type: 'coupe', color: order.color }
    }

    if (order.power <= 90) {
        newCar.engine = engines.Small;
    } else if (order.power <= 120) {
        newCar.engine = engines.Normal;
    } else {
        newCar.engine = engines.Monster;
    }

    if (order.carriage === 'hatchback') {
        newCar.carriage = carriages.Hatchback
    } else {
        newCar.carriage = carriages.Coupe;
    }

    const wheels = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    newCar.wheels = [wheels, wheels, wheels, wheels];

    return newCar;
}
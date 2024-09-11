function fruit(type, weightGr, priceKg) {
    let weightKg = weightGr / 1000;
    let cost = priceKg * weightKg;
    console.log(`I need $${cost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${type}.`);
}
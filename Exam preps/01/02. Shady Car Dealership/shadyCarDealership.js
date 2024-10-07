class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (!model) {
            throw new Error('Invalid car!')
        }
        if (year < 1950) {
            throw new Error('Invalid car!')
        }
        if (mileage < 0) {
            throw new Error('Invalid car!')
        }
        if (price < 0) {
            throw new Error('Invalid car!')
        }

        const newCar = {
            model,
            year,
            mileage,
            price,
        };

        this.availableCars.push(newCar);
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    };

    sellCar(model, desiredYear) {
        const targetCar = this.availableCars.find(car => car.model === model);

        if (!targetCar) {
            return `${model} was not found!`;
        }

        const yearsDifference = desiredYear - targetCar.year;

        if (yearsDifference > 0 && yearsDifference <= 5) {
            targetCar.price *= 0.9;
        } else if (yearsDifference > 5) {
            targetCar.price *= 0.8;
        }

        this.availableCars = this.availableCars.filter(car => car.model !== model);
        this.soldCars.push(targetCar);

        this.revenue += targetCar.price;
        return `${targetCar.model} (${targetCar.year}) was sold for ${targetCar.price.toFixed(2)}$`;
    };

    prepareCarForSale(model) {
        const targetCar = this.availableCars.find(car => car.model === model);

        if (!targetCar) {
            return `${model} was not found for preparation!`;
        }

        targetCar.mileage *= 0.5;
        targetCar.price *= 1.3;

        return `${targetCar.model} (${targetCar.year}) is prepared for sale with ${targetCar.mileage} km. - ${targetCar.price.toFixed(2)}$`;
    };

    salesJournal(criteria) {
        if (criteria !== 'model' && criteria !== 'year') {
            throw new Error('Invalid criteria!');
        }

        let sortedCars;

        if (criteria === 'model') {
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            debugger
        } else {
            sortedCars = this.soldCars.sort((a, b) => b.year - a.year);
        }


        let carsResult = [];

        sortedCars.forEach(car => {
            carsResult.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.price.toFixed(2)}$`);
        })

        let printResult = `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$
${this.soldCars.length} cars sold:
${carsResult.join('\n')}`;

        return printResult;
    };
}
class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        bikes.forEach(bike => {
            let [brand, qty, price] = bike.split('-');
            qty = Number(qty);
            price = Number(price);

            const targetBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);
            const targetBike = this.availableBikes[targetBikeIndex];

            if (targetBike) {
                targetBike.qty += qty;
                if (targetBike.price < price) {
                    targetBike.price = price;
                }
            } else {
                this.availableBikes.push({ brand, qty, price });
            }

        });
        const brandList = this.availableBikes.map(bike => bike.brand);
        return `Successfully added ${brandList.join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let isAvailable = true;

        for (let bike of selectedBikes) {
            let [brand, qty] = bike.split('-');
            qty = Number(qty);

            const targetBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);
            const targetBike = this.availableBikes[targetBikeIndex];

            if (targetBikeIndex === -1 || targetBike.qty < qty) {
                isAvailable = false;
                break;
            }

            totalPrice += targetBike.price * qty;
            this.availableBikes[targetBikeIndex].qty -= qty;
        }

        return isAvailable ? `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.` : 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
    }

    returnBikes(returnedBikes) {
        let isAvailable = true

        for (let bike of returnedBikes) {
            let [brand, qty] = bike.split('-');
            qty = Number(qty);

            const targetBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);
            const targetBike = this.availableBikes[targetBikeIndex];

            if (!targetBike) {
                isAvailable = false;
                break;
            }

            this.availableBikes[targetBikeIndex].qty += qty;
        }

        return isAvailable ? 'Thank you for returning!' : 'Some of the returned bikes are not from our selection.'
    }

    revision() {
        let result = [];
        result.push(`Available bikes:`);

        const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

        for (let bike of sortedBikes) {
            result.push(`${bike.brand} quantity:${bike.qty} price:$${bike.price}`);
        }
        result.push(
            `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        );
        return result.join(`\n`);
    }
}
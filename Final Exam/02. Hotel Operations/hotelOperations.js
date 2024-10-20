class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let finalMessage = [];

        supplies.forEach(supply => {
            let [name, qty, price] = supply.split(' ');
            qty = Number(qty);
            price = Number(price);

            if (price <= this.initialBudget) {
                if (!this.supplyStock.hasOwnProperty(name)) {
                    this.supplyStock[name] = 0;
                }

                this.supplyStock[name] += qty;
                this.initialBudget -= price;
                finalMessage.push(`Successfully stocked ${qty} ${name}`);
            } else {
                finalMessage.push(`There was not enough money to restock ${qty} ${name}`);
            }
        })

        return finalMessage.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        let roomsQty;

        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            this.roomAvailability[roomType] = {
                neededSupplies: neededSupplies.map(supply => {
                    let [name, qty] = supply.split(' ');
                    return { name, qty };
                }),
                pricePerNight
            }
        } else {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        roomsQty = Object.keys(this.roomAvailability).length
        return `Great idea! Now with the ${roomType}, we have ${roomsQty} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        const allRooms = [];

        Object.entries(this.roomAvailability).forEach(room => {
            const [roomType, roomInfo] = room;

            allRooms.push(`${roomType} - $ ${roomInfo.pricePerNight}`);
        })

        return allRooms.length > 0 ? allRooms.join('\n') : 'Our rooms are not ready yet, please come back later...';
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        let { neededSupplies, pricePerNight } = this.roomAvailability[roomType];

        for (const { name, qty } of neededSupplies) {
            if (!this.supplyStock[name] || this.supplyStock[name] < qty) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }
}

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));

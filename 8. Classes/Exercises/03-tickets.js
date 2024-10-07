function tickets(arr, criteria) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const result = [];

    arr.forEach(ticket => {
        const [destination, price, status] = ticket.split('|');
        const newTicket = new Ticket(destination, price, status);
        result.push(newTicket);
    })

    if (criteria === 'price') {
        return result.sort((a, b) => a.criteria - b.criteria);
    }

    return result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
}
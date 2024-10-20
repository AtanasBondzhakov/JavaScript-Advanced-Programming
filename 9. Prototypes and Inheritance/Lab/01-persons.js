function persons(firstName, lastName) {
    const result = {
        firstName,
        lastName,
    }

    Object.defineProperty(result, 'fullName', {
        configurable: true,
        enumerable: true,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            const [firstName, lastName] = value.split(' ');

            if (firstName && lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
    });

    return result;
}
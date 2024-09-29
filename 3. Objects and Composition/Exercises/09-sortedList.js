function createSortedList() {
    return {
        numbers: [],
        add(element) {
            if(typeof element !== 'number') {
                return;
            }
            this.numbers.push(element);
            this.size = this.numbers.length;
            this.numbers.sort(this.sort);
        },
        remove(index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            this.numbers.splice(index, 1);
            this.size = this.numbers.length;
            this.numbers.sort(this.sort); 
        },
        get(index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            return this.numbers[index];
        },
        size: 0,
        sort: (a, b) => a - b
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const distA = Math.abs(p1.x - p2.x);
        const distB = Math.abs(p1.y - p2.y);
        const result = Math.sqrt((distA ** 2) + (distB ** 2))
        return result;
    }
}
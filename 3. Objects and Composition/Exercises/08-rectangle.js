function rectangle(width, height, color) {
    let firstLetter = color[0].toUpperCase();
    let substring = color.substring(1);
    color = firstLetter + substring;

    return {
        width: Number(width),
        height: Number(height),
        color,
        calcArea() {
            return this.width * this.height;
        }
    }
}
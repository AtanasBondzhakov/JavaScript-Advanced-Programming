function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            this.unitsConversion = {
                m: 0.01,
                cm: 1,
                mm: 10
            };
        }
    
        changeUnits(newUnits) {
            this.units = newUnits;
        }
    
        toString() {
            return `Figures units: ${this.units}`;
        }
    
        convertUnits(value) {
            return value * this.unitsConversion[this.units];
        }
    }
    
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
    
        get radius() {
            return this.convertUnits(this._radius);
        }
    
        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
    
        get width() {
            return this.convertUnits(this._width);
        }
    
        get height() {
            return this.convertUnits(this._height);
        }
    
        get area() {
            return this.width * this.height;
        }
    
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    }
}

const {
    Figure,
    Circle,
    Rectangle,
} = classHierarchy();

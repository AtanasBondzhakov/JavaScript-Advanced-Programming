class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex;
        this._elements = document.querySelectorAll(selector);
        this._value = '';

        Array.from(this._elements).forEach(element => {
            element.addEventListener('input', () => {
                this.value = element.value;
            });
        });
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;

        Array.from(this._elements).forEach(element => element.value = newValue);
    }

    isValid() {
        return !this._invalidSymbols.test(this._value);
    }
}

let textBox = new Textbox(".text-box", /[^a-zA-Z0-9]/);
let inputs = document.querySelector('.text-box');

inputs.addEventListener('click', () => console.log(textBox.value));
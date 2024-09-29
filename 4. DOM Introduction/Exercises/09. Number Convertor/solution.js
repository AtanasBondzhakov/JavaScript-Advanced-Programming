function solve() {
    const menuToRef = document.querySelector('#selectMenuTo');
    const convertBtn = document.querySelector('button');
    const resultRef = document.querySelector('#result');

    const binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    menuToRef.appendChild(binaryOption);
    menuToRef.appendChild(hexadecimalOption);

    const selectMap = {
        'binary': (num) => num.toString(2),
        'hexadecimal': (num) => num.toString(16).toUpperCase()
    }

    convertBtn.addEventListener('click', convert);

    function convert() {
        const input = Number(document.querySelector('#input').value);
        const result = selectMap[menuToRef.value](input);
        resultRef.value = result;
    }
}
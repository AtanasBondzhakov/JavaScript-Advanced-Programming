function sumTable() {
    const sumRef = document.querySelector('#sum');
    const prices = Array.from(document.querySelectorAll('table tbody td:nth-of-type(even)'))
        .map(price => Number(price.textContent))
        .reduce((a, b) => a + b, 0);

    sumRef.textContent = prices;    
}
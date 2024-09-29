function generateReport() {
    const checkboxArr = Array.from(document.querySelectorAll('thead tr th input'));
    const rowsArr = Array.from(document.querySelectorAll('tbody tr'));
    const outputRef = document.querySelector('#output');

    const result = [];

    for (let i = 0; i < rowsArr.length; i++) {
        const collection = {};
        const dataFields = Array.from(rowsArr[i].querySelectorAll('td')).map(el => el.textContent);

        for (let j = 0; j < checkboxArr.length; j++) {
            if (checkboxArr[j].checked) {
                collection[checkboxArr[j].name] = dataFields[j];
            }
        }
        result.push(collection);
    }
    outputRef.textContent = JSON.stringify(result);
}
function deleteByEmail() {
    const inputRef = document.querySelector('input[name="email"]');
    const resultRef = document.querySelector('#result');
    const rowsRef = document.querySelectorAll('tbody tr');

    if (!inputRef.value) {
        return;
    }

    rowsRef.forEach(row => {
        if (row.textContent.includes(inputRef.value)) {
            row.remove();
            resultRef.textContent = 'Deleted.'
        } else {
            resultRef.textContent = 'Not found.'

        }
    })
    
    inputRef.value = '';
}
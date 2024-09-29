function addItem() {
    const itemsRef = document.querySelector('#items');
    const inputRef = document.querySelector('#newItemText');

    const liEl = document.createElement('li');
    liEl.textContent = inputRef.value;
    itemsRef.appendChild(liEl);

    inputRef.value = '';
}
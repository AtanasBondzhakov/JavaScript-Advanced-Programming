function addItem() {
    const itemsRef = document.querySelector('#items');
    const inputRef = document.querySelector('#newItemText');

    const liEl = document.createElement('li');
    liEl.textContent = inputRef.value;
    aEl = document.createElement('a');
    aEl.textContent = '[Delete]';
    aEl.href = '#';

    liEl.appendChild(aEl);
    itemsRef.appendChild(liEl);

    aEl.addEventListener('click', (e) => {
        const row = e.target.parentElement;
        row.remove();
    });

    inputRef.value = '';
}
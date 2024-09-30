function addItem() {
    const newItemTextRef = document.querySelector('#newItemText');
    const newItemValueRef = document.querySelector('#newItemValue');
    const selectRef = document.querySelector('#menu');

    const optionEl = document.createElement('option');
    optionEl.value = newItemValueRef.value;
    optionEl.textContent = newItemTextRef.value;

    selectRef.appendChild(optionEl);

    newItemTextRef.value = '';
    newItemValueRef.value = '';
}
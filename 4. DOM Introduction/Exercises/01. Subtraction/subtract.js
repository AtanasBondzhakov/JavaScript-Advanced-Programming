function subtract() {
    const [firstNum, secondNum] = document.querySelectorAll('#wrapper input[type="text"]');
    const result = document.querySelector('#result');
    result.textContent = Number(firstNum.value) - Number(secondNum.value);
}
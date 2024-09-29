function toggle() {
    const button = document.querySelector('.button');
    const extraText = document.querySelector('#extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extraText.style.display = 'block';
    } else {
        button.textContent = 'More';
        extraText.style.display = 'none';
    }
}
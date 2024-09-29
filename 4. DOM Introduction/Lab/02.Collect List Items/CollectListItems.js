function extractText() {
    const textArea = document.querySelector('#result');
    let items = Array.from(document.querySelectorAll('#items li'));

    items = items.map(el => el.textContent);
    textArea.textContent = items.join('\n');
}
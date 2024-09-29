function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
    const inputRef = document.querySelector('#email');

    inputRef.addEventListener('change', () => {
        const result = inputRef.value.match(pattern);
        if(!result) {
            inputRef.classList.add('error');
            return;
        }
        inputRef.classList.remove('error')
    })
}
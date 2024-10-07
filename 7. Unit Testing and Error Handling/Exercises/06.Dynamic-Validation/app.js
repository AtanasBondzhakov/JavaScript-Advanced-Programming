function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
    const inputRef = document.querySelector('#email');

    inputRef.addEventListener('change', () => {
        const result = pattern.test(inputRef.value);
        if (!result) {
            inputRef.classList.add('error');
        } else {
            inputRef.classList.remove('error')
        };
    });
};
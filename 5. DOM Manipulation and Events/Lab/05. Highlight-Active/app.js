function focused() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(el => {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    });

    function onFocus(e) {
        const section = e.target.parentElement;
        section.classList.add('focused');
    }

    function onBlur(e) {
        const section = e.target.parentElement;
        section.classList.remove('focused')
    }
}
function lockedProfile() {
    document.querySelector('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        const hiddenInfo = e.target.parentElement.querySelector('div');
        const lockEl = e.target.parentElement.querySelector('input[value="lock"]');
        const btn = e.target;

        if (!lockEl.checked && btn.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (!lockEl.checked && btn.textContent === 'Hide it') {
            hiddenInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }
    });
};
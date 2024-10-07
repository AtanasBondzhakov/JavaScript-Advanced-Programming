window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const fromDateInput = document.querySelector('#from-date');
    const toDateInput = document.querySelector('#to-date');
    const nextBtn = document.querySelector('#next-btn');
    const infoListUl = document.querySelector('.info-list');
    const confirmListUl = document.querySelector('.confirm-list');
    const statusEl = document.querySelector('#status');

    nextBtn.addEventListener('click', nextBtnClickHandler);

    function nextBtnClickHandler(e) {
        e.preventDefault();

        const inputs = [
            firstNameInput,
            lastNameInput,
            fromDateInput,
            toDateInput
        ];

        if (inputs.some(element => element.value === '') || fromDateInput.value > toDateInput.value) {
            return;
        }

        const liInfoEl = createInfoEl(
            firstNameInput.value,
            lastNameInput.value,
            fromDateInput.value,
            toDateInput.value
        );

        infoListUl.appendChild(liInfoEl);

        function createInfoEl(firstName, lastName, fromDate, toDate) {
            const h3El = document.createElement('h3');
            h3El.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

            const paragraphFromEl = document.createElement('p');
            paragraphFromEl.textContent = `From date: ${fromDateInput.value}`;

            const paragraphToEl = document.createElement('p');
            paragraphToEl.textContent = `To date: ${toDateInput.value}`;

            const articleEl = document.createElement('article');
            articleEl.appendChild(h3El);
            articleEl.appendChild(paragraphFromEl);
            articleEl.appendChild(paragraphToEl);

            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', (e) => {
                firstNameInput.value = firstName;
                lastNameInput.value = lastName;
                fromDateInput.value = fromDate;
                toDateInput.value = toDate;

                e.currentTarget.parentElement.remove();
                nextBtn.removeAttribute('disabled');
            })

            const continueBtn = document.createElement('button');
            continueBtn.classList.add('continue-btn');
            continueBtn.textContent = 'Continue';
            continueBtn.addEventListener('click', (e) => {
                const liInfoEl = e.target.parentElement;
                liInfoEl.remove();

                Array.from(liInfoEl.querySelectorAll('button')).forEach(btn => btn.remove());

                const confirmBtn = document.createElement('button');
                confirmBtn.classList.add('confirm-btn');
                confirmBtn.textContent = 'Confirm';
                confirmBtn.addEventListener('click', (e) => {
                    const liConfirmEl = e.target.parentElement;
                    liConfirmEl.remove();

                    statusEl.classList.add('vacation-confirmed');
                    statusEl.textContent = 'Vacation Requested';
                    nextBtn.removeAttribute('disabled');
                });

                const cancelBtn = document.createElement('button');
                cancelBtn.classList.add('cancel-btn');
                cancelBtn.textContent = 'Cancel';
                cancelBtn.addEventListener('click', (e) => {
                    const liConfirmEl = e.target.parentElement;
                    liConfirmEl.remove();

                    statusEl.classList.add('vacation-cancelled');
                    statusEl.textContent = 'Cancelled Vacation';

                    nextBtn.removeAttribute('disabled');
                })

                liInfoEl.appendChild(confirmBtn);
                liInfoEl.appendChild(cancelBtn);

                confirmListUl.appendChild(liInfoEl);
            });

            const liEl = document.createElement('li');
            liEl.classList.add('vacation-content');
            liEl.appendChild(articleEl);
            liEl.appendChild(editBtn);
            liEl.appendChild(continueBtn);

            return liEl;
        }

        inputs.forEach(element => element.value = '');

        e.currentTarget.setAttribute('disabled', 'disabled');
    }

    statusEl.addEventListener('click', () => {
        window.location.reload();
    });
}
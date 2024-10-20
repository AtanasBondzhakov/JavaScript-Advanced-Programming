window.addEventListener("load", solve);

function solve() {
    const ticketsRef = document.querySelector('#num-tickets');
    const seatsRef = document.querySelector('#seating-preference');
    const fullNameRef = document.querySelector('#full-name');
    const emailRef = document.querySelector('#email');
    const phoneRef = document.querySelector('#phone-number');
    const purchaseBtn = document.querySelector('#purchase-btn');
    const previewUlRef = document.querySelector('#ticket-preview');
    const purchaseUlRef = document.querySelector('#ticket-purchase');
    const bottomContentRef = document.querySelector('.bottom-content');

    purchaseBtn.addEventListener('click', purchaseClickHandler);

    function purchaseClickHandler(e) {
        e.preventDefault();

        const tickets = ticketsRef.value;
        const seats = seatsRef.value;
        const fullName = fullNameRef.value;
        const email = emailRef.value;
        const phone = phoneRef.value;

        if (!tickets || !seats || !fullName || !email || !phone) {
            return;
        }

        const liEl = createElement('li', 'ticket-purchase');
        const articleEl = createElement('article');
        articleEl.appendChild(createElement('p', null, `Count: ${tickets}`));
        articleEl.appendChild(createElement('p', null, `Preference: ${seats}`));
        articleEl.appendChild(createElement('p', null, `To: ${fullName}`));
        articleEl.appendChild(createElement('p', null, `Email: ${email}`));
        articleEl.appendChild(createElement('p', null, `Phone Number: ${phone}`));

        const divEl = createElement('div', 'btn-container');
        const editBtn = createElement('button', 'edit-btn', 'Edit');
        editBtn.addEventListener('click', editClickHandler);

        const nextBtn = createElement('button', 'next-btn', 'Next');
        nextBtn.addEventListener('click', nextClickHandler);

        divEl.appendChild(editBtn);
        divEl.appendChild(nextBtn);

        liEl.appendChild(articleEl);
        liEl.appendChild(divEl);

        previewUlRef.appendChild(liEl);

        purchaseBtn.setAttribute('disabled', 'disabled');
        clearInput();

        function editClickHandler() {
            ticketsRef.value = tickets;
            seatsRef.value = seats;
            fullNameRef.value = fullName;
            emailRef.value = email;
            phoneRef.value = phone;

            liEl.remove();
            purchaseBtn.removeAttribute('disabled');
        }

        function nextClickHandler() {
            liEl.querySelector('div').remove();

            const buyBtn = createElement('button', 'buy-btn', 'Buy');
            buyBtn.addEventListener('click', buyClickHandler);

            liEl.querySelector('article').appendChild(buyBtn);

            liEl.remove();
            purchaseUlRef.appendChild(liEl);
        }

        function buyClickHandler() {
            const backBtn = createElement('button', 'back-btn', 'Back');
            backBtn.addEventListener('click', () => window.location.reload());
            
            bottomContentRef.appendChild(createElement('h2', null, 'Thank you for your purchase!'));
            bottomContentRef.appendChild(backBtn);

            liEl.remove();
        }
    }

    function createElement(type, className, content) {
        const element = document.createElement(type);
        if (className) {
            element.classList.add(className);
        }
        element.textContent = content;
        return element;
    }

    function clearInput() {
        ticketsRef.value = '';
        seatsRef.value = '';
        fullNameRef.value = '';
        emailRef.value = '';
        phoneRef.value = '';
    }
}

function solve() {
    const onScreenButton = document.querySelector('form div button');
    const [name, hall, ticketPrice] = Array.from(document.querySelectorAll('input'));
    const [screenSection, archiveSection] = Array.from(document.querySelectorAll('section')).map(i => i.children[1]);
    const clearButton = document.querySelector('#archive > button');

    onScreenButton.addEventListener('click', addMovieHandler);
    clearButton.addEventListener('click', clearArchiveHandler)

    function addMovieHandler(e) {
        e.preventDefault();

        if (!name.value || !hall.value || !ticketPrice.value || isNaN(ticketPrice.value)) {
            return;
        }

        const liElement = document.createElement('li');

        liElement.appendChild(createNewElement('span', name.value));
        liElement.appendChild(createNewElement('strong', `Hall: ${hall.value}`));

        const divElement = document.createElement('div');
        const pricePerOnce = createNewElement('strong', Number(ticketPrice.value).toFixed(2));
        divElement.appendChild(pricePerOnce);
        const inputElement = document.createElement('input');
        inputElement.placeholder = 'Tickets Sold';
        divElement.appendChild(inputElement);
        const archiveButton = createNewElement('button', 'Archive');
        divElement.appendChild(archiveButton);

        liElement.appendChild(divElement);
        screenSection.appendChild(liElement);

        Array.from(document.querySelectorAll('input')).forEach(i => i.value = '');

        archiveButton.addEventListener('click', archiveHandler);

        function createNewElement(type, content) {
            const element = document.createElement(type);
            element.textContent = content;
            return element;
        }

        function archiveHandler(e) {
            const movieName = e.target.parentElement.parentElement.querySelector(':first-child').textContent;
            const parentLi = e.currentTarget.parentElement.parentElement;

            if (isNaN(inputElement.value) || !inputElement.value) {
                return;
            }

            parentLi.remove();

            let totalAmount = Number(inputElement.value) * Number(pricePerOnce.textContent);
            let liEl = document.createElement('li');
            liEl.appendChild(createNewElement('span', movieName));
            liEl.appendChild(createNewElement('strong', `Total amount: ${totalAmount.toFixed(2)}`));
            const deleteButton = createNewElement('button', 'Delete');
            liEl.appendChild(deleteButton);
            archiveSection.appendChild(liEl);

            deleteButton.addEventListener('click', deleteHandler)
        }

        function deleteHandler(e) {
            e.target.parentElement.remove();
        }

    }
    function clearArchiveHandler(e) {      
        const list = archiveSection.querySelectorAll('ul li');
        list.forEach(l => l.remove());
    }
}
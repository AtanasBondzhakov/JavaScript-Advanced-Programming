window.addEventListener("load", solve);

function solve() {
    const typeRef = document.querySelector('#type');
    const intensityRef = document.querySelector('#intensity');
    const caloriesRef = document.querySelector('#calories');
    const durationRef = document.querySelector('#duration');
    const dateRef = document.querySelector('#date');
    const addBtn = document.querySelector('#add-activity');
    const previewUlRef = document.querySelector('#preview-activity');
    const activitiesTableUlRef = document.querySelector('#activities-table');

    addBtn.addEventListener('click', addClickHandler);

    function addClickHandler(e) {
        e.preventDefault();

        const type = typeRef.value;
        const intensity = intensityRef.value;
        const calories = caloriesRef.value;
        const duration = durationRef.value;
        const date = dateRef.value;

        if (!type || !intensity || !calories || !duration || !date) {
            return;
        }

        const liEl = createElement('li');
        const articleEl = createElement('article');

        articleEl.appendChild(createElement('p', null, `Activity: ${type}`));
        articleEl.appendChild(createElement('p', null, `Intensity: ${intensity}`));
        articleEl.appendChild(createElement('p', null, `Duration: ${duration} min.`));
        articleEl.appendChild(createElement('p', null, `Date: ${date}`));
        articleEl.appendChild(createElement('p', null, `Calories: ${calories}`));

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

        addBtn.setAttribute('disabled', 'disabled');
        clearInput();

        function editClickHandler() {
            liEl.remove();

            typeRef.value = type;
            intensityRef.value = intensity;
            caloriesRef.value = calories;
            durationRef.value = duration;
            dateRef.value = date;

            addBtn.removeAttribute('disabled');
        }

        function nextClickHandler() {
            liEl.remove();

            const trEl = createElement('tr');
            trEl.appendChild(createElement('td', 'type-cell', `${type}`));
            trEl.appendChild(createElement('td', 'duration-cell', `${duration}`));
            trEl.appendChild(createElement('td', 'calories-cell', `${calories}`));
            trEl.appendChild(createElement('td', 'date-cell', `${date}`));
            trEl.appendChild(createElement('td', 'intensity-cell', `${intensity}`));

            const tdBtnEl = createElement('td', 'btn-cell');
            const deleteBtn = createElement('button', 'delete-btn', 'Delete');
            deleteBtn.addEventListener('click', () => trEl.remove());

            tdBtnEl.appendChild(deleteBtn);
            trEl.appendChild(tdBtnEl);

            activitiesTableUlRef.appendChild(trEl);

            addBtn.removeAttribute('disabled');  
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
        typeRef.value = '';
        intensityRef.value = '';
        caloriesRef.value = '';
        durationRef.value = '';
        dateRef.value = '';
    }
}

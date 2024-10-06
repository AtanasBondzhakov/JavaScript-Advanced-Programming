function solve() {
    const taskRef = document.querySelector('#task');
    const descriptionRef = document.querySelector('#description');
    const dateRef = document.querySelector('#date');
    const addBtn = document.querySelector('#add');

    const [addSection, openSection, inProgressSection, completeSection] = [...document.querySelectorAll('section')].map(el => el.querySelector('div:nth-of-type(2)'));

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();

        if (!taskRef.value || !descriptionRef.value || !dateRef.value) {
            return;
        }

        const articleEl = document.createElement('article');
        const h3El = document.createElement('h3');
        h3El.textContent = taskRef.value;

        const pDescriptionEl = document.createElement('p');
        pDescriptionEl.textContent = `Description: ${descriptionRef.value}`;

        const pDateEl = document.createElement('p');
        pDateEl.textContent = `Due Date: ${dateRef.value}`;

        const divEl = document.createElement('div');
        divEl.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');
        startBtn.addEventListener('click', onStart);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');
        deleteBtn.addEventListener(('click'), onDelete);

        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.classList.add('orange');
        finishBtn.addEventListener('click', onFinish);

        divEl.appendChild(startBtn);
        divEl.appendChild(deleteBtn);

        articleEl.appendChild(h3El);
        articleEl.appendChild(pDescriptionEl);
        articleEl.appendChild(pDateEl);
        articleEl.appendChild(divEl);

        openSection.appendChild(articleEl);

        function onStart(e) {
            const currentArticle = e.target.parentElement.parentElement;
            startBtn.remove();
            divEl.appendChild(finishBtn);
            currentArticle.remove();
            inProgressSection.appendChild(currentArticle);
        };

        function onDelete() {
            articleEl.remove();
        };

        function onFinish() {
            completeSection.appendChild(articleEl);
            divEl.remove();
        };
    };
}
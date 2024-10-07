window.addEventListener("load", solve);

function solve() {
  const colorInput = document.querySelector('#colors');
  const modelInput = document.querySelector('#motorcycles');
  const dateInput = document.querySelector('#datetime');
  const fullNameInput = document.querySelector('#full-name');
  const emailInput = document.querySelector('#email');
  const testRideBtn = document.querySelector('#test-ride-btn');

  const previewUlEl = document.querySelector('#preview-list');
  const completeUlEl = document.querySelector('#complete-list');
  const dataViewDivEl = document.querySelector('.data-view');

  testRideBtn.addEventListener('click', testRideClickHandler);

  function testRideClickHandler(e) {
      e.preventDefault();

      const color = colorInput.value;
      const model = modelInput.value;
      const date = dateInput.value;
      const fullName = fullNameInput.value;
      const email = emailInput.value;

      if (!color || !model || !date || !fullName || !email) {
          return;
      }

      const preview = createPreview(color, model, date, fullName, email);

      previewUlEl.appendChild(preview);

      testRideBtn.setAttribute('disabled', 'disabled');

      clearInput();
  }

  function createPreview(color, model, date, fullName, email) {
      const colorParagraphEl = createElement('p', null, `Color: ${color}`);
      const modelParagraphEl = createElement('p', null, `Model: ${model}`);
      const forParagraphEl = createElement('p', null, `For: ${fullName}`);
      const contactParagraphEl = createElement('p', null, `Contact: ${email}`);
      const dateParagraphEl = createElement('p', null, `Test Ride On: ${date}`);

      const articleEl = createElement('article');
      articleEl.appendChild(colorParagraphEl);
      articleEl.appendChild(modelParagraphEl);
      articleEl.appendChild(forParagraphEl);
      articleEl.appendChild(contactParagraphEl);
      articleEl.appendChild(dateParagraphEl);

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', editClickHandler);

      const nextBtn = document.createElement('button');
      nextBtn.classList.add('next-btn');
      nextBtn.textContent = 'Next';
      nextBtn.addEventListener('click', nextClickHandler);

      const divEl = createElement('div', 'btn-container',);
      divEl.appendChild(editBtn);
      divEl.appendChild(nextBtn);

      const liPreviewEl = createElement('li');
      liPreviewEl.appendChild(articleEl);
      liPreviewEl.appendChild(divEl);

      return liPreviewEl;

      function editClickHandler(e) {
          const currentLiEl = e.currentTarget.parentElement.parentElement;

          colorInput.value = color;
          modelInput.value = model;
          dateInput.value = date;
          fullNameInput.value = fullName;
          emailInput.value = email;

          testRideBtn.removeAttribute('disabled');
          currentLiEl.remove();
      };

      function nextClickHandler(e) {
          const currentLiEl = e.currentTarget.parentElement.parentElement;
          currentLiEl.remove();
          Array.from(currentLiEl.querySelectorAll('button')).forEach(btn => btn.remove());

          const completeBtn = document.createElement('button');
          completeBtn.classList.add('complete-btn');
          completeBtn.textContent = 'Complete';
          completeBtn.addEventListener('click', completeClickHandler);

          currentLiEl.querySelector(':first-child').appendChild(completeBtn);

          completeUlEl.appendChild(currentLiEl);
      };

      function completeClickHandler(e) {
          const confirmBtn = document.createElement('button');
          confirmBtn.classList.add('confirm-btn');
          confirmBtn.textContent = 'Your Test Ride is Confirmed';
          confirmBtn.addEventListener('click', () => window.location.reload())

          dataViewDivEl.appendChild(confirmBtn);
      }
  };

  function createElement(type, className, content) {
      const element = document.createElement(type);
      if (className) {
          element.classList.add(className);
      }
      element.textContent = content;

      return element;
  }

  function clearInput() {
      colorInput.value = '';
      modelInput.value = '';
      dateInput.value = '';
      fullNameInput.value = '';
      emailInput.value = '';
  }
}

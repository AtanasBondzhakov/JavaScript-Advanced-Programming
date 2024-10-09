window.addEventListener("load", solve);

function solve() {
	const nameRef = document.querySelector('#snowman-name');
	const heightRef = document.querySelector('#snowman-height');
	const locationRef = document.querySelector('#location');
	const creatorRef = document.querySelector('#creator-name');
	const attributeRef = document.querySelector('#special-attribute');
	const addBtn = document.querySelector('.add-btn');
	const previewUlRef = document.querySelector('.snowman-preview');
	const snowListUlRef = document.querySelector('.snow-list');
	const mainRef = document.querySelector('#hero');
	const imageRef = document.querySelector('#back-img');

	addBtn.addEventListener('click', addClickHandler);

	function addClickHandler(e) {
		e.preventDefault();

		const name = nameRef.value;
		const height = heightRef.value;
		const location = locationRef.value;
		const creator = creatorRef.value;
		const attribute = attributeRef.value;

		if (!name || !height || !location || !creator || !attribute) {
			return;
		}

		const liSnowmanInfoEl = createInfoLiElement(name, height, location, creator, attribute);
		previewUlRef.appendChild(liSnowmanInfoEl);

		e.target.setAttribute('disabled', 'disabled');
		clearInput();

		function createInfoLiElement(name, height, location, creator, attribute) {
			const articleEl = createElement('article');
			articleEl.appendChild(createElement('p', null, `Name: ${name}`));
			articleEl.appendChild(createElement('p', null, `Height: ${height}`));
			articleEl.appendChild(createElement('p', null, `Location: ${location}`));
			articleEl.appendChild(createElement('p', null, `Creator: ${creator}`));
			articleEl.appendChild(createElement('p', null, `Attribute: ${attribute}`));

			const divContainerEl = createElement('div', 'btn-container');
			const editBtn = createElement('button', 'edit-btn', 'Edit');
			const nextBtn = createElement('button', 'next-btn', 'Next');

			editBtn.addEventListener('click', editClickHandler);
			nextBtn.addEventListener('click', nextClickHandler);

			divContainerEl.appendChild(editBtn);
			divContainerEl.appendChild(nextBtn);

			const liEl = createElement('li', 'snowman-info');
			liEl.appendChild(articleEl);
			liEl.appendChild(divContainerEl);

			return liEl;
		}

		function editClickHandler() {
			nameRef.value = name;
			heightRef.value = height;
			locationRef.value = location;
			creatorRef.value = creator;
			attributeRef.value = attribute;

			addBtn.removeAttribute('disabled');
			previewUlRef.querySelector('li').remove();
		}

		function nextClickHandler() {
			const liEl = previewUlRef.querySelector('li');
			liEl.classList.remove('snowman-info');
			liEl.classList.add('snowman-content');
			liEl.querySelector('div').remove();

			const sendBtn = createElement('button', 'send-btn', 'Send');
			sendBtn.addEventListener('click', sendClickHandler);

			liEl.querySelector('article').appendChild(sendBtn);
			liEl.remove();

			snowListUlRef.appendChild(liEl);
		}

		function sendClickHandler(e) {
			mainRef.remove();

			const backBtn = createElement('button', 'back-btn', 'Back');
			backBtn.addEventListener('click', () => window.location.reload());
			
			document.querySelector('body').appendChild(backBtn);

			imageRef.removeAttribute('hidden');
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
		nameRef.value = '';
		heightRef.value = '';
		locationRef.value = '';
		creatorRef.value = '';
		attributeRef.value = '';
	}
}

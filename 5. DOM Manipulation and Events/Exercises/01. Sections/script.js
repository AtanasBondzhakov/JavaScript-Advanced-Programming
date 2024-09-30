function create(words) {
   const container = document.querySelector('#content');
   container.addEventListener('click', reveal);

   words.forEach(el => {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = el;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);
      container.appendChild(divEl);
   });

   function reveal(e) {
      const element = e.target.firstChild;
      element.style.display = 'block';
   };
}
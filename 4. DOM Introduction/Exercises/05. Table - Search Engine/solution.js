function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.querySelector('#searchField');
      const rows = document.querySelectorAll('tbody tr');

      rows.forEach(row => {
         row.classList.remove('select');
         if (row.textContent.includes(searchField.value)) {
            row.classList.add('select');
         }
      })

      searchField.value = ''
   }
}
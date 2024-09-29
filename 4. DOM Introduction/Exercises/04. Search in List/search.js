function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   const searchField = document.querySelector('#searchText');
   const result = document.querySelector('#result');

   let matches = 0;

   towns.forEach(town => {
      town.style.fontWeight = 'normal';
      if (town.textContent.includes(searchField.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';   
         matches++
      }
   })
   result.textContent = `${matches} matches found`
}
function solve() {
  const text = document.querySelector('#text').value.toLowerCase().split(' ');
  const convention = document.querySelector('#naming-convention').value;
  const result = document.querySelector('#result');
  
  if (convention === 'Pascal Case') {
      result.textContent = convertToPascalCase(text);
  } else if (convention === 'Camel Case') {
      result.textContent = convertToCamelCase(text);
  } else {
      result.textContent = 'Error!'
  }

  function convertToPascalCase(arr) {
      return arr.map(word => word[0].toUpperCase() + word.slice(1)).join('');
  }
  
  function convertToCamelCase(arr) {
      return arr[0] + arr.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join(''); 
  }
}
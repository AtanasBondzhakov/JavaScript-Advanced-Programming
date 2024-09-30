function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const [inputTextRef, outputTextRef] = Array.from(document.querySelectorAll('textarea'));
  const tableRef = document.querySelector('tbody');

  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  function onGenerate() {
      const input = inputTextRef.value;
      const items = JSON.parse(input);
      console.log(items);

      items.forEach(item => {
          const trEl = document.createElement('tr');

          const tdImgEl = document.createElement('td');
          const imgEl = document.createElement('img');
          imgEl.src = item.img;
          tdImgEl.appendChild(imgEl);

          const tdNameEl = document.createElement('td');
          const pNameEl = document.createElement('p');
          pNameEl.textContent = item.name;
          tdNameEl.appendChild(pNameEl);

          const tdPriceEl = document.createElement('td');
          const pPriceEl = document.createElement('p');
          pPriceEl.textContent = item.price;
          tdPriceEl.appendChild(pPriceEl);

          const tdFactorEl = document.createElement('td');
          const pFactorEl = document.createElement('p');
          pFactorEl.textContent = item.decFactor;
          tdFactorEl.appendChild(pFactorEl);

          const tdCheckEl = document.createElement('td');
          const checkEl = document.createElement('input');
          checkEl.type = 'checkbox';
          tdCheckEl.appendChild(checkEl);

          trEl.appendChild(tdImgEl);
          trEl.appendChild(tdNameEl);
          trEl.appendChild(tdPriceEl);
          trEl.appendChild(tdFactorEl);
          trEl.appendChild(tdCheckEl);

          tableRef.appendChild(trEl);
      })

  };

  function onBuy() {
      const resultItems = [];
      let totalPrice = 0;
      let totalDecFactor = 0;

      const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
          .filter(item => item.checked)
          .map(item => item.parentElement.parentElement)
          .map(row => ({
              name: row.children[1].textContent,
              price: Number(row.children[2].textContent),
              decFactor: Number(row.children[3].textContent)
          }));

      checkboxes.forEach(el => {
          resultItems.push(el.name);
          totalPrice += el.price;
          totalDecFactor += el.decFactor;
      });

      const avgDecFactor = totalDecFactor / resultItems.length;

      if (resultItems.length > 0) {
          outputTextRef.value = `Bought furniture: ${resultItems.join(', ')}\n`;
          outputTextRef.value += `Total price: ${totalPrice.toFixed(2)}\n`;
          outputTextRef.value += `Average decoration factor: ${avgDecFactor}`;
      };
  };
};
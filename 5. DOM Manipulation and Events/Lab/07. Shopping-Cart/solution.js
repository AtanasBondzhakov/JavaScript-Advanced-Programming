function solve() {
   const resultRef = document.querySelector('textarea');

   const checkoutButton = document.querySelector('button.checkout');
   checkoutButton.addEventListener('click', onCheckout);

   const addButtons = Array.from(document.querySelectorAll('button.add-product'));
   addButtons.forEach(button => button.addEventListener('click', onAddProduct));

   let totalPrice = 0;
   const products = [];

   function onAddProduct(e) {
      const parent = e.target.parentElement.parentElement;
      const productTitle = parent.querySelector('.product-title').textContent;
      const productPrice = parent.querySelector('.product-line-price').textContent;

      totalPrice += Number(productPrice);
      if (!products.includes(productTitle)) {
         products.push(productTitle);
      }

      resultRef.textContent += `Added ${productTitle} for ${productPrice} to the cart.\n`
   }

   function onCheckout(e) {
      resultRef.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
      addButtons.forEach(btn => {
         btn.setAttribute('disabled', 'disabled')
      });
      checkoutButton.setAttribute('disabled', 'disabled');
   }
}
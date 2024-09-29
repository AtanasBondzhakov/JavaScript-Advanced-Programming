function calc() {
    const num1Ref = document.querySelector('#num1');
    const num2Ref = document.querySelector('#num2');
    const sumRef = document.querySelector('#sum');
    
    sumRef.value = Number(num1Ref.value) + Number(num2Ref.value);
}
const currencyElementOne = document.getElementById('currency-one');
const amountElementOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementTwo = document.getElementById('amount-two');
const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch Exchange rates and update the dom
function calculate() {
   const currencyOne = currencyElementOne.value;
   const currencyTwo = currencyElementTwo.value;
   fetch("https://open.exchangerate-api.com/v6/latest")
     .then(res => res.json())
     .then(data => {
       //  console.log(data);
       const rate = data.rates[currencyTwo] / data.rates[currencyOne];
       rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
       amountElementTwo.value = (amountElementOne.value * (rate)).toFixed(2);
     });
 }

// Event Listener
currencyElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
  calculate();
});

calculate();
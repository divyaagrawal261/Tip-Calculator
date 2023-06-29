const billInput = document.getElementById("billAmount");
const tip = document.getElementById("tipPercentage");
const numPeople = document.getElementById("people");
const amountPerHead = document.getElementById("amount");

let Numb = Number(numPeople.innerText);

const calculateBill = () => {
  let bill =Number(billInput.value)+ (Number(tip.value) / 100) * Number(billInput.value);
  amountPerHead.innerText = (bill / Numb).toFixed(2);
};

const increment = () => {
  Numb = Numb + 1;
  numPeople.innerText = Numb;
  calculateBill();
};

const decrement = () => {
  if (Numb > 1) Numb = Numb - 1;
  numPeople.innerText = Numb;
  calculateBill();
};

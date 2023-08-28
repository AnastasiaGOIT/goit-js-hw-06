const counter = document.querySelector("#counter");
const decrementBtn = counter.firstElementChild;
const incrementBtn = counter.lastElementChild;
const value = counter.querySelector("#value");
let counterValue = 0;

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

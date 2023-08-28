const input = document.querySelector("#font-size-control");
console.log(input);
const span = document.querySelector("#text");
console.log(span);

input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  let currentValue = input.value;
  console.log(currentValue);
  if (currentValue >= 16 && currentValue <= 96) {
    span.style.fontSize = `${currentValue}px`;
  }
}
console.log(changeFontSize);

const input = document.querySelector("#name-input");
console.log(input);
const span = document.querySelector("#name-output");
console.log(span);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
}
console.log(onInputChange);

const input = document.querySelector("#validation-input");
console.log(input);
const inputLength = input.getAttribute("data-length");
console.log(inputLength);

input.addEventListener("blur", checkInputLength);

function checkInputLength(event) {
  input.classList.remove("invalid", "valid");
  if (input.value.length === Number(inputLength)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}

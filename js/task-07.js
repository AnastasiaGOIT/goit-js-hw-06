const input = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  let currentValue = input.value;

  if (currentValue >= 16 && currentValue <= 96) {
    span.style.fontSize = `${currentValue}px`;
  }
}

const divMain = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");
const input = divMain.children[0];
const createBtn = divMain.children[1];
const destroyBtn = divMain.children[2];

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let step = 0;
function createBoxes(event) {
  event.preventDefault();
  const amount = Number(input.value);

  for (let acc = 0; acc < amount; acc += 1) {
    let newEl = document.createElement("div");
    divBoxes.appendChild(newEl);
    newEl.style.width = "30px";
    newEl.style.height = "30px";
    let color = getRandomHexColor();
    newEl.style.backgroundColor = color;
    step += 10;
    newEl.style.width = `${step}px`;
    newEl.style.height = `${step}px`;
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

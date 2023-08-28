const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
console.dir(listEl);

ingredients.forEach((item) => {
  const newEl = document.createElement("li");
  newEl.textContent = item;
  newEl.classList.add("item");
  listEl.appendChild(newEl);
});

console.log(listEl);

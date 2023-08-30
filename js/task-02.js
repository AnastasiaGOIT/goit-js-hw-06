const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const listArray = [];
ingredients.forEach((item) => {
  const newEl = document.createElement("li");
  newEl.textContent = item;
  newEl.classList.add("item");
  listArray.push(newEl);
});
listEl.append(...listArray);


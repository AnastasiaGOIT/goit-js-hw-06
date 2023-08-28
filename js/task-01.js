const list = document.querySelector("#categories");

const categoriesNumber = list.children.length;
console.dir(`Number of categories: ${categoriesNumber}`);

// Number of categories: 3

[...list.children].forEach((item) => {
  const category = item.firstElementChild.textContent;
  console.log(`Category: ${category}`);
  const elements = item.lastElementChild;
  console.log(`Elements: ${elements.children.length}`);
});
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

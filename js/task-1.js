const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');
const numberOfCategories = categoryItems.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach(item => {

    const titleElement = item.querySelector('h2');
    const categoryName = titleElement.textContent;

    const innerList = item.querySelector('ul');

    const numberOfElements = innerList.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfElements}`);
  });

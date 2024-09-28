const sumList = document.querySelector('#categories');
const items = sumList.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const list = item.querySelectorAll('li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${list.length}`);
});

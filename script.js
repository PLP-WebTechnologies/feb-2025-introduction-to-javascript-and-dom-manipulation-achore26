function changeText() {
  document.getElementById('main-title').textContent = 'Text has been changed!';
}

function toggleHighlight() {
  const text = document.getElementById('info-text');
  text.classList.toggle('highlight');
}

function addElement() {
  const ul = document.getElementById('item-list');
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
}

function removeElement() {
  const ul = document.getElementById('item-list');
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  } else {
    alert('No more items to remove!');
  }
}

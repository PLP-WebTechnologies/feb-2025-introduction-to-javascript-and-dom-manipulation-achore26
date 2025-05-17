document.addEventListener('DOMContentLoaded', () => {
  const mainTitle = document.getElementById('main-title');
  const infoText = document.getElementById('info-text');
  const itemList = document.getElementById('item-list');

  // Change text content dynamically
  document.getElementById('changeTextBtn').addEventListener('click', () => {
    mainTitle.textContent = 'Text has been changed!';
    infoText.textContent = 'You just changed the main title text.';
  });

  // Modify CSS styles dynamically (toggle highlight class)
  document.getElementById('toggleHighlightBtn').addEventListener('click', () => {
    infoText.classList.toggle('highlight');
  });

  // Add element dynamically
  document.getElementById('addElementBtn').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
  });

  // Remove element dynamically
  document.getElementById('removeElementBtn').addEventListener('click', () => {
    if (itemList.lastElementChild) {
      itemList.removeChild(itemList.lastElementChild);
    } else {
      alert('No more items to remove!');
    }
  });
});

const buttons = document.querySelectorAll('.swatch-collection');
const collections = document.querySelectorAll('.dtc-products-container');
const views = document.querySelectorAll('.dtc-view-all');

document.addEventListener("DOMContentLoaded", function() {
  collections[0].style.display = 'grid';
  views[0].style.display = 'flex';

  buttons[0].click();
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const collectionIndex = parseInt(button.dataset.collectionIndex);
    const viewIndex = parseInt(button.dataset.viewIndex);
    
    buttons.forEach(btn => {
      btn.style.backgroundColor = '#FFFFFF';
      btn.style.color = '#000000';
    });
    button.style.backgroundColor = '#000000';
    button.style.color = '#FFFFFF';

    collections.forEach(collection => {
      collection.style.display = 'none';
    });
    collections[collectionIndex].style.display = 'grid';

    views.forEach(view => {
      view.style.display = 'none';
    });
    views[viewIndex].style.display = 'flex';
  });
});

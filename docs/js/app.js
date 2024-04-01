const menuWrapper = document.querySelector('.desktop-menu-wrapper');

if (menuWrapper) {
  const checkboxes = menuWrapper.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });
} else {
  console.warn("Element with class 'desktop-menu-wrapper' not found. Script disabled.");
}

// const list = document.getElementById('list');
// list.addEventListener('click', (event) => {
//   if (event.target.tagName === 'LI') {
//     const items = list.querySelectorAll('li');
//     items.forEach(item => item.classList.remove('active'));
//     event.target.classList.add('active');
//   }
// });

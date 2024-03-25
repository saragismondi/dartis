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
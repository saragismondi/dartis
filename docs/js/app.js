function menuWrapper() {
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
}

menuWrapper();

function toggleIcons() {
  document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('span[class^="material-icons"]');
 
    spans.forEach(span => {
      span.addEventListener('click', function() {
        spans.forEach(otherSpan => {
          if (otherSpan !== this) {
            otherSpan.classList.add('material-icons-outlined');
          }
        });
        if (this.classList.contains('material-icons-outlined')) {
          this.classList.remove('material-icons-outlined');
          this.classList.add('material-icons');
        } else {
          this.classList.add('material-icons-outlined');
        }
      });
    });
  });
}

toggleIcons();
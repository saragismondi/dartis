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


function dropdownCompanySuc() {
  const selectH = document.getElementById('select-h');
  const listaH = document.getElementById('lista-h');
  const selectedH = document.getElementById('selected-h');

  const opcionesH = [
      { texto: ' Afriflower P.L.C', valor: 'Suc - 001' },
      { texto: 'Ambrosia Holdings Inc.', valor: 'Suc - 101' },
      { texto: 'Evergreen Enterprises LLC', valor: 'Suc - 102' },
      { texto: 'Horizon Retail Group', valor: 'Suc - 103' },
      { texto: 'Solaris Technologies Corp.', valor: 'Suc - 104' },
      { texto: 'Magnolia Financial Services', valor: 'Suc - 105' },
      { texto: 'Cypress Manufacturing Co.', valor: 'Suc - 106' },
      { texto: 'Oceanview Industries Inc.', valor: 'Suc - 107' },
      { texto: 'Emerald Logistics Solutions', valor: 'Suc - 108' },
      { texto: 'Maple Enterprises Group', valor: 'Suc - 109' },
      { texto: 'Sycamore Software Systems', valor: 'Suc - 110' }
  ];

  opcionesH.forEach(opcion => {
      const li = document.createElement('li');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
      h2.textContent = opcion.texto;
      h3.textContent = opcion.valor;
      li.appendChild(h2);
      li.appendChild(h3);
      li.dataset.valor = opcion.valor;
      listaH.appendChild(li);

      li.addEventListener('click', () => {
          const container = document.createElement('div');
          container.appendChild(h2.cloneNode(true));
          container.appendChild(h3.cloneNode(true));
          selectedH.innerHTML = '';
          selectedH.appendChild(container);

          selectH.classList.remove('open');
          listaH.style.display = 'none';
      });
  });

  selectH.addEventListener('click', () => {
      selectH.classList.toggle('open');
      listaH.style.display = selectH.classList.contains('open') ? 'block' : 'none';
  });

  document.addEventListener('click', (event) => {
      if (!selectH.contains(event.target) && !listaH.contains(event.target)) {
          selectH.classList.remove('open');
          listaH.style.display = 'none';
      }
  });
}

dropdownCompanySuc();

// function openMenu() {
// // Seleccionar el elemento con el primer ID
// const firstElement = document.getElementById('list');

// // Seleccionar el elemento con el segundo ID
// const secondElement = document.getElementById('sub-category');

// // Agregar evento de clic al primer elemento
// firstElement.addEventListener('click', () => {
//   // Agregar la clase 'show' al segundo elemento
//   secondElement.classList.add('show');
// });
// }

// openMenu();

function openMenu() {
const firstElement = document.getElementById('list');
const secondElement = document.getElementById('sub-category');
firstElement.addEventListener('click', function() {
  if (secondElement.style.display === 'none') {
    secondElement.style.display = 'block';
  } else {
    secondElement.style.display = 'none';
  }
});
}
openMenu();



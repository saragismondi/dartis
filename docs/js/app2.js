document.addEventListener('DOMContentLoaded', () => {
    function dropdownButton() {
      const selectH = document.getElementById('select-b');
      const listaH = document.getElementById('lista-b');
      const selectedH = document.getElementById('selected-b');
  
      console.log("selectH:", selectH);
      console.log("listaH:", listaH);
      console.log("selectedH:", selectedH);
  
      const opcionesH = [
        'Rojo',
        'Azul',
        'Verde',
        'Amarillo',
        'Naranja',
        'Rosa',
        'Morado',
        'Cian',
        'Magenta',
        'Gris',
        'Blanco'
      ];
  
      opcionesH.forEach(texto => {
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        h2.textContent = texto;
        li.appendChild(h2);
        listaH.appendChild(li);
  
        li.addEventListener('click', () => {
          console.log("Item clicked:", texto);
          const container = document.createElement('div');
          const h2Clone = h2.cloneNode(true);
          container.appendChild(h2Clone);
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
  
    dropdownButton();
  });
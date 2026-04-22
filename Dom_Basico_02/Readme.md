Esta aplicación web permite gestionar una lista de tareas de forma dinámica utilizando JavaScript.

El sistema implementa:

Visualización de información del estudiante
Renderizado dinámico de tarjetas
Filtrado por categorías (Trabajo, Personal, Estudio)
Eliminación de elementos
Visualización de estadísticas (total y activos)
Estilos personalizados con CSS

Se aplican conceptos de manipulación del DOM, eventos y estructuras de datos en JavaScript.

### Renderizado de la lista

```js
function renderizarLista(datos) {
  const contenedor = document.getElementById('contenedor-lista');
  contenedor.innerHTML = '';

  datos.forEach(el => {
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3');
    titulo.textContent = el.titulo;

    card.appendChild(titulo);
    contenedor.appendChild(card);
  });
}

```
### Eliminacion de los elementos
```js
function eliminarElemento(id) {
  const index = elementos.findIndex(el => el.id === id);
  if (index !== -1) {
    elementos.splice(index, 1);
    renderizarLista(elementos);
  }
}
```

### Filtrado de elementos
```js
function inicializarFiltros() {
  const botones = document.querySelectorAll('.btn-filtro');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {

      const categoria = btn.dataset.categoria;

      document.querySelectorAll('.btn-filtro')
        .forEach(b => b.classList.remove('btn-filtro-activo'));

      btn.classList.add('btn-filtro-activo');

      if (categoria === 'todas') {
        renderizarLista(elementos);
      } else {
        const filtrados = elementos.filter(e => e.categoria === categoria);
        renderizarLista(filtrados);
      }
    });
  });
}
```

### Estilos

```css
.card {
  background: #e2e8f0;
  border-radius: 12px;
  padding: 15px;
  margin-top: 15px;
}

.badge {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
}

.btn-eliminar {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-filtro-activo {
  background: #1e3a8a;
  color: white;
}
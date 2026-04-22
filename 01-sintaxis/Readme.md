Descripción de la solución

Esta práctica tiene como objetivo aplicar conceptos básicos de JavaScript, incluyendo:

Declaración de variables
Uso de funciones flecha (arrow functions)
Uso de objetos
Manipulación del DOM
Uso de métodos como console.log y console.table

Se muestra información del estudiante en la página web y se realizan operaciones básicas como validación de edad y generación de saludos.

## Declaración de variables
```js
const nombre = 'Jorge';
const apellido = 'Pizarro';
let ciclo = 5;
const activo = true;

const direccion = {
  ciudad: 'Cuenca',
  provincia: 'Azuay'
};
```
## Declaración de variables
```js
const getSaludo = (nombre, hora) => {
  if (hora < 12)
    return `Buenos dias, ${nombre}`;
  if (hora < 18) 
    return `Buenas tardes, ${nombre}`;
  return `Buenas noches, ${nombre}`;
};
```
## Uso de console.table
```js
console.table({nombre, apellido, ciclo, activo, direccion});
```

## Estructura
```
01-sintaxis/
│── index.html
│
├── assets/
│   └── P1-1.png
│
├── JS/
│   └── app.js
│
└── README.md
```
'use strict';

const nombre = 'Jorge';
const apellido = 'Pizarro';
let ciclo = 5;
const activo = true;

const direccion = {

    ciudad: 'Cuenca',
    provincia: 'Azuay'

}

// imprimir todas las variables

console.table({nombre, apellido, ciclo, activo, direccion});

const esMayorEdad = (edad) => edad >= 18;

const getSaludo = (nombre, hora) => {

    if (hora < 12)
        return `Buenos dias, ${nombre}`;
    if (hora < 18) 
        return `Buenas Tardes, ${nombre}`;
    return `Buenas noches, ${nombre}`;

}

const getSaludo2 = (nombre, hora) => hora < 12
    ? `Buenos dias, ${nombre}`
    : hora < 18
        ? `Buenas Tardes, ${nombre}`
        : `Buenas Noches, ${nombre}`;

// Mostrar Html

document.getElementById('nombre').textContent = `${nombre}`;
document.getElementById('apellido').textContent = `${apellido}`;
document.getElementById('ciclo').textContent = `${ciclo}`;
document.getElementById('saludo').textContent = getSaludo(nombre, 10);

//Crear repositorio subirlo


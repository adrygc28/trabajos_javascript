const prompt = require('prompt-sync')();

// LISTA VACIA - Nombres de personas

let nombres = [];

console.log("Favor de ingresar 5 nombres para la lista:");

for (let i = 0; i < 5; i++) {
    nombres[i] = prompt("Ingrese el nombre " + (i + 1) + ": ").toLowerCase();
}

let nombreBuscado = prompt("Ingrese un nombre para buscar en la lista: ").toLowerCase();

let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("El nombre '" + nombreBuscado + "' fue encontrado en la lista.");
} else {
    console.log("El nombre '" + nombreBuscado + "' no fue encontrado en la lista.");
}
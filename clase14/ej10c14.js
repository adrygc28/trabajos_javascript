const prompt = require('prompt-sync')();

let floresFavoritas = [];

floresFavoritas[0] = prompt("Ingresa tu flor favorita 1: "); 
floresFavoritas[1] = prompt("Ingresa tu flor favorita 2: "); 
floresFavoritas[2] = prompt("Ingresa tu flor favorita 3: "); 

let florBusqueda = prompt("Ingresa una flor para buscar: ");

let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {

    if (floresFavoritas[i] === florBusqueda) {

        contador++;
    }
}

console.log("La flor " + florBusqueda + " aparece " + contador + " veces en la lista.");
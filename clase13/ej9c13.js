const prompt = require('prompt-sync')();

function contarHasta(numeroLimite) {

    console.log("Contando hasta " + numeroLimite + " --");

    for (let i = 1; i <= numeroLimite; i++) {
        console.log(i);
    }
    console.log("¡Listo! Fin del conteo");

}

console.log("EJERCICIO 9 : Contar hasta un número");

let limite = parseInt(prompt("Ingresa un número hasta el que quieres contar "));

contarHasta(limite);

